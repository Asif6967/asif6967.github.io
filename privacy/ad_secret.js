/* --- ASIF TECH GLOBAL: HIDDEN AD SYSTEM --- */
(function() {
    console.log("Initializing Secret Ad System...");

    // 1. Google Verification ID (Meta Tag)
    var meta = document.createElement('meta');
    meta.name = "google-adsense-account";
    meta.content = "ca-pub-9381706139191072";
    document.head.appendChild(meta);

    // 2. Main Ad Script (Jo abhi aapne bheja)
    var adScript = document.createElement('script');
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9381706139191072";
    adScript.async = true;
    adScript.crossOrigin = "anonymous";
    document.head.appendChild(adScript);

    console.log("Google Ads System Loaded Securely.");
})();