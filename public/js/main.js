class Website {
    constructor() {
        this.initSpinner();
        this.initWow();
        this.initStickyNavbar();
        this.initBackToTop();
        this.initHeaderCarousel();
        this.initTestimonialsCarousel();
    }

    initSpinner() {
        setTimeout(() => {
            const spinnerElement = $('#spinner');
            if (spinnerElement.length > 0) {
                spinnerElement.removeClass('show');
            }
        }, 1);
    }

    initWow() {
        new WOW().init();
    }

    initStickyNavbar() {
        $(window).scroll(() => {
            const stickyNavbar = $('.sticky-top');
            if ($(window).scrollTop() > 300) {
                stickyNavbar.css('top', '0px');
            } else {
                stickyNavbar.css('top', '-100px');
            }
        });
    }

    initBackToTop() {
        $(window).scroll(() => {
            const backToTopButton = $('.back-to-top');
            if ($(window).scrollTop() > 300) {
                backToTopButton.fadeIn('slow');
            } else {
                backToTopButton.fadeOut('slow');
            }
        });

        $('.back-to-top').click(() => {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });
    }

    initHeaderCarousel() {
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            items: 1,
            dots: true,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });
    }

    initTestimonialsCarousel() {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    }
}

const myWebsite = new Website();

