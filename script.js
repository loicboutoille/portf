let nbLikes = 0;

const boutonLike = document.getElementById("mon-bouton-like");

if (boutonLike) {
    boutonLike.addEventListener("click", () => {
        nbLikes++;
        boutonLike.textContent = "❤ J'aime (" + nbLikes + ")";
    });
}