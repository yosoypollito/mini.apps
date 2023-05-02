<script lang="ts">
  import ApplyHistoryButton from "./ApplyHistoryButton.svelte";
  import HistoryButton from "./HistoryButton.svelte";
  import HistoryContent from "./HistoryContent.svelte";

  import { viewHistory } from "src/store";

  export let wrong = "";
  export let fixed = "";
</script>

<div
  class="flex flex-col bg-white p-4 rounded-lg w-full text-black gap-4 shadow-lg border-2 border-gray-200"
>
  <HistoryContent title="Fixed" value={fixed} />
  <HistoryContent title="Wrong" value={wrong} />

  <div class="flex flex-row justify-between">
    <HistoryButton handleClick={() => viewHistory({ wrong, fixed })}
      >View</HistoryButton
    >
    <ApplyHistoryButton {wrong} {fixed} />
  </div>
</div>
