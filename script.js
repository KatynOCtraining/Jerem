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




document.addEventListener("DOMContentLoaded", function() {
    // Définir un délai de 2500ms (2,5 secondes)
    setTimeout(function() {
      // Sélectionner l'élément avec la classe "loader"
      var loader = document.querySelector('.loader');
      // Appliquer une transition pour une disparition en douceur
      loader.style.transition = 'opacity 0.5s ease';
      // Définir l'opacité à 0 pour commencer la transition de disparition
      loader.style.opacity = '0';
      // Attendre que la transition se termine avant de retirer l'élément du DOM
      setTimeout(function() {
        loader.style.display = 'none';
      }, 500); // 500ms correspond à la durée de la transition CSS
    }, 2500); // 2500ms correspond au délai avant de commencer la disparition
  });