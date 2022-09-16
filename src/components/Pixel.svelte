<script>
  import { activeSquares } from "../stores.js";
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
  <div on:click={handleClick} {key} class="pixel bg-black" />
{:else}
  <div on:click={handleClick} {key} class="pixel bg-gray-100" />
{/if}

<style>
  .pixel {
    @apply w-8 h-8;
  }
</style>
