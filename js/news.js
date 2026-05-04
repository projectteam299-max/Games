const cardLinks = document.querySelectorAll('.card-link');
cardLinks.forEach(card => {
    const video = card.querySelector('video.card-imgs');

    if (video) {
        video.muted = true;
        card.addEventListener('mouseenter', function() {
            video.play();
        });
        card.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = 0; 
        });
    }
});