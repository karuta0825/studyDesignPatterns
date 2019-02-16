import SafeFrame from "./SafeFrame";
(function Main() {
  const frame = new SafeFrame();

  for (let i = 0; i < 24; i += 1) {
    setTimeout(() => {
      frame.setClock(i);
    }, i * 2000);
  }
})();
