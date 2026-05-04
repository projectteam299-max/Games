const mainImg = document.getElementById("current-img");
const thumbnails = document.querySelectorAll(".thumbnails img");
const mainVideo = document.getElementById("main-video");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
function showMedia(el) {
    const type = el.dataset.type;
    thumbnails.forEach(img => img.classList.remove("active"));
    el.classList.add("active");
    mainVideo.pause();
    mainVideo.currentTime = 0;
    if (type === "video") {
        mainImg.style.display = "none";
        mainVideo.style.display = "block";
        mainVideo.src = el.dataset.src;
    } else {
        mainVideo.style.display = "none";
        mainImg.style.display = "block";
        mainImg.src = el.src;
    }
};
thumbnails.forEach((img, i) => {
    img.addEventListener("click", () => showMedia(img));
});
let index=0;
next.onclick = () => {
    index = (index + 1) % thumbnails.length;
    showMedia(thumbnails[index]);
};
prev.onclick = () => {
    index = (index - 1 + thumbnails.length) % thumbnails.length;
    showMedia(thumbnails[index]);
};