<script lang="ts">
  export let title = "";
  export let value = "";
  export let wrapValue = false;
</script>

<div
  class="flex flex-col text-left gap-1 text-xs font-semibold max-w-full max-h-[150px] overflow-auto border-b-2 border-blue-300"
>
  <span class="uppercase text-gray-400">{title}</span>
  <p class={`text-gray-900 ${wrapValue ? "break-words" : "truncate"}`}>
    {value}
  </p>
</div>
