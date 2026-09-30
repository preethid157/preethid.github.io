const videoContainer = document.getElementById("videoContainer");

if (videoContainer) {

  // Cursor effect for desktop
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    videoContainer.addEventListener("mousemove", (event) => {

      const rect = videoContainer.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 5;
      const rotateX = ((centerY - y) / centerY) * 5;

      videoContainer.style.transform =
        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    videoContainer.addEventListener("mouseleave", () => {

      videoContainer.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

    });
  }
}


// Make sure the video attempts to autoplay
const video = document.querySelector("video");

if (video) {
  video.muted = true;

  const playVideo = () => {
    video.play().catch(() => {
      // Browser may require user interaction before playback.
    });
  };

  playVideo();

  document.addEventListener("click", playVideo, {
    once: true
  });
}
