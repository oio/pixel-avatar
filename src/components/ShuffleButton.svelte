<script>
  import { shufflePixels, activeSquares } from "../stores";

  const handleClick = () => {
    activeSquares.update((squares) => (squares = shufflePixels()));
  };
</script>

<button on:click={handleClick} on:mousedown={handleClick}>shuffle</button>

<style>
  button {
    @apply px-6 py-2 bg-slate-300 rounded-full font-outfitreg;
  }
</style>
