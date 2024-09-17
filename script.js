// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('playVideoButton');
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('miniVideo');

    button.addEventListener('click', () => {
        // Afficher la vidéo
        videoContainer.classList.remove('hidden');
        // Activer le son et régler le volume
        video.muted = false;  // Assurez-vous que la vidéo n'est pas en mode muet
        video.volume = 1.0;   // Réglez le volume à 100%
        // Jouer la vidéo
        video.play();
    });
});


