import ShuffleColorfulChars from "./index";

document.addEventListener("DOMContentLoaded", () => {
  let isAnimatingSample1 = false;
  const sample1 = document.getElementById("sample-1");
  const sample1Button = document.getElementById("sample-1-button");
  const scc = new ShuffleColorfulChars(sample1);

  sample1Button.addEventListener("click", () => {
    if (isAnimatingSample1) { return; }
    isAnimatingSample1 = true;
    scc.run(() => isAnimatingSample1 = false);
  });

  let isAnimatingSample2 = false;
  const sample2 = document.getElementById("sample-2");
  const sample2Button = document.getElementById("sample-2-button");
  const scc2 = new ShuffleColorfulChars(sample2, { lang: "ja" });

  sample2Button.addEventListener("click", () => {
    if (isAnimatingSample2) { return; }
    isAnimatingSample2 = true;
    scc2.run(() => {
      isAnimatingSample2 = false;
    });
  });
});
