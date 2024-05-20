document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.toggle('active', i === index);
        });
        updateButtons();
    }

    function updateButtons() {
        sections.forEach((section, i) => {
            const prevButton = section.querySelector('.prev');
            const nextButton = section.querySelector('.next');
            if (prevButton) prevButton.style.display = (i === 0) ? 'none' : 'inline-block';
            if (nextButton) nextButton.style.display = (i === sections.length - 1) ? 'none' : 'inline-block';
        });
    }

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', () => {
            if (currentIndex < sections.length - 1) {
                currentIndex++;
                showSection(currentIndex);
            }
        });
    });

    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                showSection(currentIndex);
            }
        });
    });

    showSection(currentIndex);

    window.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.scrolling-text');
        const headerWidth = header.offsetWidth;
        const bodyWidth = document.body.offsetWidth;
        const animationDuration = (headerWidth + bodyWidth) / 100; // Ajusta la velocidad según el ancho del texto y del body

        header.style.animationDuration = `${animationDuration}s`;
    });
});
