<script>
  import Tab from "./Tab.svelte";
  import { activeColor } from "../stores.js";
</script>

<div
  id="capture"
  class="w-72 h-72 flex items-center justify-center rounded-full"
  style="background-color: {$activeColor}"
>
  <div>
    <div class="flex">
      <div>
        <Tab />
      </div>
      <div class="-scale-x-100 -ml-6">
        <Tab />
      </div>
    </div>
    <div class="flex -scale-y-100 -mt-6">
      <div>
        <Tab />
      </div>
      <div class=" -scale-x-100 -ml-6">
        <Tab />
      </div>
    </div>
  </div>
</div>
