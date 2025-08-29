// Scroll Progress Bar
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});
