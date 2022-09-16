<script>
  import Tab from "./Tab.svelte";
  import { activeColor } from "../stores.js";
  import html2canvas from "html2canvas";
  const handleCapture = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      saveAs(canvas.toDataURL(), "avatar.png");
    });
  };

  //https://stackoverflow.com/questions/31656689/how-to-save-img-to-users-local-computer-using-html2canvas
  const saveAs = (uri, filename) => {
    const link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      //Firefox requires the link to be in the body
      document.body.appendChild(link);
      //simulate click
      link.click();
      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };
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

<button on:click={handleCapture}>capture</button>
