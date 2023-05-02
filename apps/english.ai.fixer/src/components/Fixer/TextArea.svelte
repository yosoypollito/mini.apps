<script lang="ts">
  export let value: string | undefined = "";
  export let handleInput: (e: Event) => void = () => {};
</script>

<textarea
  {...$$props}
  class="flex flex-col w-full h-full overflow-y-auto p-2 bg-gray-100 text-black font-semibold outline-none resize-none appearance-none shadow-2xl border-2 border-gray-600"
  bind:value
  on:input={handleInput}
/>

<style>
  textarea::-webkit-scrollbar {
    display: flex;
    width: 10px;
  }

  textarea::-webkit-scrollbar-track {
    @apply bg-zinc-400;
  }

  textarea::-webkit-scrollbar-thumb {
    @apply bg-gray-800;
  }
</style>
