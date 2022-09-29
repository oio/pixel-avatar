<script>
  import { activeColor } from "../stores.js";
  import Color from "./Color.svelte";
  const handleChange = (e) => {
    const newCol = e.target.value;
    activeColor.update((c) => (c = newCol));
  };
</script>

<div class="w-full flex justify-between">
  <Color lg col="#FFC700" />
  <Color lg col="#51FFBC" />
  <Color lg col="#FF6E4F" />
  <Color lg col="#5551FF" />
</div>
<div class="w-full flex justify-between mt-4">
  <Color col="#CCCCCC" />
  <Color col="#FFA44A" />
  <Color col="#DB3080" />
  <Color col="#9F86FB" />
  <Color col="#00CCDD" />
  <Color col="#03B361" />
  <Color col="#3C4043" />
</div>
<!-- <input on:change={handleChange} type="color" name="gianni" value="#e66465" /> -->
