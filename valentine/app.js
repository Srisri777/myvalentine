document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.getElementById("heart-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 1 + "s";
        heart.innerText = "❤️";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    setInterval(createHeart, 2000);
});
