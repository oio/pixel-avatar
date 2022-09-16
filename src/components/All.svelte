<script>
  import { activeSquares } from "../stores.js";
  import Tab from "./Tab.svelte";
</script>

<div class="flex">
  <div>
    <Tab />
  </div>
  <div class="-scale-x-100 -ml-8">
    <Tab />
  </div>
</div>
<div class="flex -scale-y-100 -mt-8">
  <div>
    <Tab />
  </div>
  <div class=" -scale-x-100 -ml-8">
    <Tab />
  </div>
</div>
