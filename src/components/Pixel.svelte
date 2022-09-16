<script>
  import { activeSquares, activeColor } from "../stores.js";
  export let key;
  let isActive = false;

  $: {
    if ($activeSquares.includes(key)) isActive = true;
    else isActive = false;
  }

  const handleClick = () => {
    isActive = !isActive;
    if (isActive) activeSquares.update((squares) => [...squares, key]);
    else
      activeSquares.update((squares) =>
        squares.filter((square) => square != key)
      );
  };
</script>

{#if isActive}
  <div on:click={handleClick} {key} class="pixel bg-white" />
{:else}
  <div
    on:click={handleClick}
    {key}
    class="pixel"
    style="background-color: {$activeColor}"
  />
{/if}

<style>
  .pixel {
    @apply w-6 h-6;
  }
</style>
