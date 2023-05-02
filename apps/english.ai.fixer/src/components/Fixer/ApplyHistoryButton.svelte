<script lang="ts">
  import HistoryButton from "./HistoryButton.svelte";
  import { applyHistory } from "src/store";

  export let wrong = "";
  export let fixed = "";
</script>

<HistoryButton handleClick={() => applyHistory({ wrong, fixed })}
  >Apply</HistoryButton
>
