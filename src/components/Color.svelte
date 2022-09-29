<script>
  import { activeColor } from "../stores.js";

  export let col = "#fff";
  export let lg;

  const handleClick = () => {
    activeColor.update((c) => (c = col));
  };
</script>

<div
  class="cursor-pointer hover:border-2 rounded-full {lg
    ? 'w-16 h-16'
    : 'w-9 h-9'}"
  style="background-color: {col}"
  on:click={handleClick}
/>
