/* --- VIDEO CONTROLLER --- */
// Agar future mein video badalni ho, bas ye neeche wala link change kar dena
var videoSource = "https://assets.mixkit.co/videos/preview/mixkit-network-connection-background-3420-large.mp4";

// Ye function automatic video bana kar html mein laga dega
window.onload = function() {
    var container = document.getElementById('video-box');
    
    container.innerHTML = `
        <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: -1; opacity: 0.6;">
            <source src="${videoSource}" type="video/mp4">
        </video>
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: -1;"></div>
    `;
    
    console.log("Video Loaded Successfully via Media Folder!");
};