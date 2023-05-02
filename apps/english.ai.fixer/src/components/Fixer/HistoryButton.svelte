<script lang="ts">
  export let handleClick: () => void = () => {};
</script>

<button
  class="text-xs uppercase px-4 py-1 border-2 rounded-md border-gray-500 font-semibold"
  on:click={handleClick}
>
  <slot />
</button>
