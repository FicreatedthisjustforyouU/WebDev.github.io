let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 250;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show");
    } else {
      sec.classList.remove("show");
    }
  });
};
// Select all images
const images = document.querySelectorAll(".logo img");

// Add click event listener to each image
images.forEach((img) => {
  img.addEventListener("click", () => {
    if (img.requestFullscreen) {
      img.requestFullscreen(); // Open the image in full screen
    } else if (img.webkitRequestFullscreen) {
      img.webkitRequestFullscreen(); // For Safari
    } else if (img.msRequestFullscreen) {
      img.msRequestFullscreen(); // For older Microsoft Edge
    }
  });
});
