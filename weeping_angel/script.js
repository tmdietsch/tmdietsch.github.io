const angelImg = document.getElementById("angel");
const overlay = document.getElementById("overlay");
overlay.src = "overlay2.png";

let index = 1;
document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState === "visible" && index < 6) {
        index++;
        angelImg.src = "frame" + index + ".jpg";
    }
})

playOverlay1()
function playOverlay1() {
    overlay.src = "overlay1.png";
    setTimeout(playOverlay2, 1000);
}

function playOverlay2() {
    overlay.src = "overlay2.png";
    setTimeout(playOverlay1, 1000);
}