document.addEventListener('DOMContentLoaded', (event) => {
    // Modal logic
    var modal = document.getElementById("menuModal");
    var btn = document.getElementById("openMenuBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Carrousel
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    updateCarousel(); // Initial call to display the first image

    // Auto-slide functionality
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

