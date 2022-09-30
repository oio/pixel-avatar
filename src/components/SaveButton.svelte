<script>
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

<button on:click={handleCapture}>save</button>

<style>
  button {
    @apply px-6 py-2 bg-slate-300 rounded-full font-outfitreg;
  }
</style>
