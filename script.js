 // Background images array
const backgrounds = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1504386106331-3e4e71712b38",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786"
];

let index = 0;
const header = document.querySelector("header");

setInterval(() => {
  index = (index + 1) % backgrounds.length;
  header.style.backgroundImage = `
    linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('${backgrounds[index]}')
  `;
}, 5000); // change every 5 seconds

// Optional scroll fade
window.addEventListener("scroll", () => {
  header.style.opacity = 1 - window.scrollY / 700;
});
