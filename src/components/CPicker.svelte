<script>
  import { activeColor } from "../stores.js";
  const handleChange = (e) => {
    const newCol = e.target.value;
    activeColor.update((c) => (c = newCol));
  };
</script>

<input on:change={handleChange} type="color" name="gianni" value="#e66465" />
