document.addEventListener('DOMContentLoaded', () => {
    // Fetch reviews from the server
    fetch('/reviews')
        .then(response => response.json())
        .then(data => {
            const testimonialCarousel = document.getElementById('testimonial-carousel');
            data.forEach((review, index) => {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'testimonial-item bg-light rounded p-4 review-item';
                reviewItem.innerHTML = `
                    <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>${review.review_text}</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src="img/member.png" style="width: 50px; height: 50px;">
                        <div class="ps-3">
                            <h5 class="mb-1">${review.Username}</h5>
                            <small>${review.review_rating}</small>
                        </div>
                    </div>`;
                testimonialCarousel.appendChild(reviewItem);
            });
            initReviewAnimation();
        })
        .catch(error => console.error('Error fetching reviews:', error));

    function initReviewAnimation() {
        const reviewItems = document.querySelectorAll('.review-item');
        let currentIndex = 0;

        function showReview(index) {
            reviewItems.forEach((item, i) => {
                if (i === index) {
                    item.classList.add('fadeIn');
                } else {
                    item.classList.remove('fadeIn');
                }
            });
        }

        function nextReview() {
            showReview(currentIndex);
            currentIndex = (currentIndex + 1) % reviewItems.length;
            setTimeout(nextReview, 5000); // Adjust the delay between reviews as needed
        }

        nextReview();
    }
});
