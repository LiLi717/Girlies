document.addEventListener('DOMContentLoaded', () => {
    const accordionBlocks = document.querySelectorAll('.accordion-block');

    accordionBlocks.forEach(block => {
        const row = block.querySelector('.accordion-row');
        row.addEventListener('click', () => {
            accordionBlocks.forEach(b => {
                if (b !== block) b.classList.remove('open');
            });
            block.classList.toggle('open');
        });
    });
});
function toggleFeedback(element) {
const feedback = element.querySelector(".feedback");
feedback.classList.toggle("show");
element.classList.toggle("active");
}

function showMessage() {
alert("Thank you for joining our community! We're excited to help you on your journey to healthy eating.");
}


document.addEventListener('DOMContentLoaded', () => {
    document.body.style.scrollBehavior = 'smooth';
});