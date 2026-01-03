// --- script.js (FIXED AUTO-BG & NEWS) ---

// 1. AUTO-CHANGING BACKGROUND LOGIC
const bgImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920", // Earth/Space
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920", // Cyber Tech
    "https://images.unsplash.com/photo-1510511459-1b41feff8829?q=80&w=1920"  // Matrix/Code
];
let currentBgIndex = 0;
const bgElement = document.getElementById("global-bg");

function changeBackground() {
    if (bgElement) {
        bgElement.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('${bgImages[currentBgIndex]}')`;
        currentBgIndex = (currentBgIndex + 1) % bgImages.length;
    }
}
// Har 8 seconds mein background badlega
setInterval(changeBackground, 8000);
changeBackground(); // Pehli baar turant chalane ke liye

// 2. PARTICLES ANIMATION
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
class Particle {
    constructor() { this.x = Math.random()*canvas.width; this.y = Math.random()*canvas.height; this.size = Math.random()*1.5; this.speedX = Math.random()*0.3 - 0.15; this.speedY = Math.random()*0.3 - 0.15; }
    update() { this.x += this.speedX; this.y += this.speedY; }
    draw() { ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
}
for(let i=0; i<45; i++) particles.push(new Particle());
function animate() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
animate();

// 3. LIVE ENGLISH NEWS TICKER
function updateLiveNews() {
    const newsBox = document.getElementById('newsFeed');
    const headlines = [
        "Global Tech Trends 2026: The Rise of Sustainable AI.",
        "New Cyber Security Frameworks for Global Enterprises.",
        "Python 4.0 Preview: Enhanced Performance for Data Science.",
        "Asif Teach Global: Empowering Students with MBA & Tech Skills.",
        "Cloud Computing: Future of Digital Infrastructure.",
        "Machine Learning Algorithms transforming Business Strategy."
    ];
    newsBox.innerHTML = headlines.map(h => `<span>🔴 ${h}</span>`).join(' &nbsp;&nbsp;&nbsp; ');
}
updateLiveNews();
