let btn = document.getElementById("menuBtn");
let sidebar = document.querySelector(".sidebar");
btn.onclick = function(){
    sidebar.classList.toggle("active");
}
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});
const container=document.querySelector(".container");
toggle.addEventListener("change", function () {
  container.classList.toggle("dark", this.checked);
});