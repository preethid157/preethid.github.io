const video = document.getElementById("animeVideo");
const videoContainer = document.getElementById("videoContainer");


// --------------------------------------------------
// VIDEO
// Try the assets folder first.
// If the video is actually in the root folder,
// automatically try anime.mp4 instead.
// --------------------------------------------------

const videoSources = [
  "assets/anime.mp4",
  "anime.mp4"
];

let currentSource = 0;

function loadVideo() {

  if (currentSource >= videoSources.length) {
    return;
  }

  video.src = videoSources[currentSource];

  video.load();

  video.play().catch(() => {});

  currentSource++;
}

video.addEventListener("error", () => {

  loadVideo();

});

loadVideo();


// --------------------------------------------------
// CURSOR MOVEMENT
// --------------------------------------------------

if (
  window.matchMedia("(hover: hover) and (pointer: fine)").matches
) {

  videoContainer.addEventListener("mousemove", (event) => {

    const rect =
      videoContainer.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const moveX =
      (x / rect.width - 0.5) * 12;

    const moveY =
      (y / rect.height - 0.5) * 8;

    videoContainer.style.transform =
      `perspective(1000px)
       rotateY(${moveX * 0.5}deg)
       rotateX(${-moveY * 0.5}deg)
       translate(${moveX}px, ${moveY}px)`;
  });


  videoContainer.addEventListener("mouseleave", () => {

    videoContainer.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) translate(0,0)";

  });

}
