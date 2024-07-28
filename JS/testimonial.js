document.addEventListener('DOMContentLoaded', (event) => {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    function showTestimonial(index) {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (index + testimonials.length) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }

    function showNextTestimonial() {
        showTestimonial(currentTestimonial + 1);
    }

    function showPrevTestimonial() {
        showTestimonial(currentTestimonial - 1);
    }

    nextButton.addEventListener('click', showNextTestimonial);
    prevButton.addEventListener('click', showPrevTestimonial);

    setInterval(showNextTestimonial, 4000);
});
