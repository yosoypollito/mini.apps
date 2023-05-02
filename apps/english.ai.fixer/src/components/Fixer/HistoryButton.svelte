<script lang="ts">
  export let handleClick: () => void = () => {};
</script>

<button on:click={handleClick}>
  <slot />
</button>
