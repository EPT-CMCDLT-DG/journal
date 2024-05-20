document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.rotating-text > *');
    let currentIndex = 0;

    function rotateText() {
        sections[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % sections.length;
        sections[currentIndex].style.display = 'block';
    }

    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

    setInterval(rotateText, 7000);
});
