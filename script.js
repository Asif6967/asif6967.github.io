// Particles
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
class Particle {
    constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 2 + 1; this.speedX = Math.random() * 1 - 0.5; this.speedY = Math.random() * 1 - 0.5; }
    update() { this.x += this.speedX; this.y += this.speedY; }
    draw() { ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
}
function init() { for (let i = 0; i < 60; i++) particlesArray.push(new Particle()); }
function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); particlesArray.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
init(); animate();

// News
async function fetchNews() {
    try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews');
        const data = await res.json();
        if(data.status === 'ok') {
            document.getElementById('newsFeed').innerHTML = data.items.map(i => `<span>🔴 ${i.title}</span>`).join('');
        }
    } catch(e) { document.getElementById('newsFeed').innerHTML = "<span>🔴 Asif Teach Global is Live...</span>"; }
}
fetchNews();
