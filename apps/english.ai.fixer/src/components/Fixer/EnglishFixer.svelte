<script lang="ts">
  import TextArea from "./TextArea.svelte";
  import HistoryItem from "./HistoryItem.svelte";

  import type { IHistory } from "src/store";
  import {
    fixedEnglishText,
    wrongEnglishText,
    EnglishTextHistory,
  } from "src/store";

  import { fixEnglish } from "src/services/ai";
  import Modal from "./Modal.svelte";

  export const addToHistory = ({ wrong, fixed }: IHistory) => {
    EnglishTextHistory.set([
      ...$EnglishTextHistory,
      {
        wrong,
        fixed,
      },
    ]);
  };

  const handleChangeWrongEnglish = (e: Event) => {
    const textarea = e.target as HTMLTextAreaElement;
    const value = textarea.value;
    wrongEnglishText.set(value);
  };

  const getFixedEnglish = async (input: string) => {
    if (input === "") return;

    const fixed = await fixEnglish(input);
    fixedEnglishText.set(fixed);

    addToHistory({ wrong: $wrongEnglishText, fixed });
  };

  /* debounce commented cause trial key only allow 5 request per minute.
 Move this to top -> import debounce from "just-debounce";
  const debouncedFixEnglish = debounce(getFixedEnglish, 2000);

  wrongEnglishText.subscribe((value) => {
    if (value === "") {
      return;
    }
    debouncedFixEnglish(value);
  }) */
</script>

<div
  class="grid grid-cols-[1fr_30%] gap-2 w-full h-full overflow-hidden relative items-center p-2"
>
  <div class="flex flex-col col-span-1 relative h-full w-full text-center">
    <h1 class="text-2xl">Fix your english</h1>
    <TextArea
      placeholder="English text you want to fix..."
      handleInput={handleChangeWrongEnglish}
      value={$fixedEnglishText}
    />

    <button
      class="py-2 px-6 bg-white font-semibold absolute bottom-5 right-5 rounded-lg shadow-md text-black text-sm uppercase border-2 border-gray-500"
      on:click={() => getFixedEnglish($wrongEnglishText)}
    >
      Fix english
    </button>
  </div>

  <div
    class="col-span-1 flex flex-col gap-2 self-start w-full h-full overflow-auto text-center"
  >
    <h2 class="text-2xl">History</h2>
    {#each $EnglishTextHistory.reverse() as historyItem}
      <HistoryItem {...historyItem} />
    {/each}
  </div>

  <Modal />
</div>
