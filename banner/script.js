const track = document.querySelector('.banner-track');
const images = track.querySelectorAll('img');

let currentImageIndex = 0;

// Function to animate the slide
function slide() {
    currentImageIndex++;

    // Handle looping (last image -> first image)
    if (currentImageIndex === images.length) {
        currentImageIndex = 0;
        track.style.transition = 'none'; // Reset transition for smooth loop
    }

    track.style.transform = `translateX(-${currentImageIndex * images[0].offsetWidth}px)`;

    // Set transition back after the first slide for smooth animation
    setTimeout(() => {
        track.style.transition = 'transform 10s ease-in-out';
    }, 100); // Adjust delay for animation smoothness
}

// Start the animation on page load
window.addEventListener('load', () => {
    setInterval(slide, 10000); // Change this value to adjust slide interval (milliseconds)
});
