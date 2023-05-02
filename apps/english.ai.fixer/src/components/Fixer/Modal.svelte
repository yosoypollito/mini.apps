<script lang="ts">
  import { ShowModal, ModalEnglishTexts, closeModal } from "src/store";
  import HistoryContent from "./HistoryContent.svelte";
  import ApplyHistoryButton from "./ApplyHistoryButton.svelte";
</script>

{#if $ShowModal}
  <div
    class="fixed top-0 left-0 w-full h-full justify-center items-center flex p-4"
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="absolute w-full h-full bg-black bg-opacity-50 z-0"
      on:click={closeModal}
    />

    <div
      class="flex flex-col p-4 bg-white rounded-lg shadow-lg border-2 border-gray-300 gap-2 text-black relative z-10 max-w-[768px] w-full"
    >
      <div class="grid grid-cols-2 gap-2 w-full justify-between">
        <HistoryContent
          title="Wrong"
          value={$ModalEnglishTexts.wrong}
          wrapValue={true}
        />
        <HistoryContent
          title="Fixed"
          value={$ModalEnglishTexts.fixed}
          wrapValue={true}
        />
      </div>
      <ApplyHistoryButton
        wrong={$ModalEnglishTexts.wrong}
        fixed={$ModalEnglishTexts.fixed}
      />
    </div>
  </div>
{/if}
