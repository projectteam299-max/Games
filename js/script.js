let btn = document.getElementById("menuBtn");
let header = document.querySelector("header");
let toggle = document.getElementById("themeToggle");
btn.onclick = function(){
  header.classList.toggle("active");
};
toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});
// يمين
document.querySelectorAll('.arrow.right').forEach(btn => {
  btn.addEventListener('click', () => {
    const container = btn.parentElement.querySelector('.games-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });
});
// شمال
document.querySelectorAll('.arrow.left').forEach(btn => {
  btn.addEventListener('click', () => {
    const container = btn.parentElement.querySelector('.games-container');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });
});
let Theme = localStorage.getItem("theme");
if (Theme === null) {
    Theme = "dark";
    localStorage.setItem("theme", "dark");
}
if (Theme === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
} else {
    document.body.classList.remove("dark");
    toggle.checked = false;
}
toggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});