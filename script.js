// Smooth scrolling to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Tooltip functionality for skills
document.querySelectorAll('#skills ul li').forEach(skill => {
    skill.addEventListener('mouseover', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = this.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        const rect = this.getBoundingClientRect();
        const tooltipHeight = tooltip.offsetHeight;
        const tooltipWidth = tooltip.offsetWidth;

        // Default positioning above the skill item
        let tooltipTop = rect.top + window.scrollY - tooltipHeight - 10;
        let tooltipLeft = rect.left + window.scrollX + (rect.width / 2) - (tooltipWidth / 2);

        // If there's not enough space above, show the tooltip below
        if (tooltipTop < window.scrollY) {
            tooltipTop = rect.bottom + window.scrollY + 10;
        }

        // Adjust if tooltip goes beyond the viewport on the right
        if (tooltipLeft + tooltipWidth > window.innerWidth) {
            tooltipLeft = window.innerWidth - tooltipWidth - 10; // 10px padding from the edge
        }

        // Adjust if tooltip goes beyond the viewport on the left
        if (tooltipLeft < 0) {
            tooltipLeft = 10; // 10px padding from the edge
        }

        tooltip.style.left = `${tooltipLeft}px`;
        tooltip.style.top = `${tooltipTop}px`;

        // Make tooltip visible
        setTimeout(() => tooltip.classList.add('visible'), 0);
    });

    skill.addEventListener('mouseout', function() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove(); // Immediately remove the tooltip when mouse leaves
        }
    });
});




