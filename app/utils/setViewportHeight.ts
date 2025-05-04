export function setViewportHeight() {
  function updateVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  updateVh();

  window.addEventListener("resize", updateVh);
}
