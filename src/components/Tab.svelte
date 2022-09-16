<script>
  import Pixel from "./Pixel.svelte";
</script>

<div class="flex w-24 flex-wrap">
  {#each new Array(16) as item, i}
    <Pixel key={i} />
  {/each}
</div>
