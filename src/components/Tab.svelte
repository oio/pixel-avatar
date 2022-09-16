<script>
  import Pixel from "./Pixel.svelte";
</script>

<div class="flex w-48 flex-wrap">
  {#each new Array(36) as item, i}
    <Pixel key={i} />
  {/each}
</div>
