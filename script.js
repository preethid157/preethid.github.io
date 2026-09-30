const video = document.getElementById("heroVideo");
const fallback = document.querySelector(".video-fallback");


// ==========================
// VIDEO
// ==========================

video.addEventListener("loadeddata", () => {
    video.play().catch(() => {
        // Browser prevented autoplay.
        // Video remains available because it is muted.
    });
});


video.addEventListener("error", () => {

    console.log("Video could not be loaded.");

    video.style.display = "none";

    if (fallback) {
        fallback.style.display = "flex";
    }

});


// ==========================
// CURSOR MOVEMENT
// ==========================

const character = document.querySelector(".character");

document.addEventListener("mousemove", (event) => {

    if (!character) return;

    const x = (event.clientX / window.innerWidth - 0.5);
    const y = (event.clientY / window.innerHeight - 0.5);

    const moveX = x * 8;
    const moveY = y * 5;

    character.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});


// ==========================
// RESET POSITION
// ==========================

document.addEventListener("mouseleave", () => {

    if (character) {
        character.style.transform = "translate(0,0)";
    }

});
