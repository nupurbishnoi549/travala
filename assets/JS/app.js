// DOM Elements
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const topBtn = document.querySelector(".top-btn");
const heroSection = document.getElementById("hero");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
    const isMenuOpen = mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden", !isMenuOpen);
    hamburgerIcon.classList.toggle("hidden", !isMenuOpen);
    closeIcon.classList.toggle("hidden", isMenuOpen);
});

// Close mobile menu on link click
document.querySelectorAll('#home-menu a, #properties-menu a').forEach(link =>
    link.addEventListener('click', () => menuBtn.click())
);

// Slick Slider Initialization
$('.slick-Card').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next'),
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 769, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
});

$('.slick-vertical').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow: $('.custom-prev-vertical'),
    nextArrow: $('.custom-next-vertical'),
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [
        { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
});

// Back-to-top button visibility and scroll to top
window.addEventListener("scroll", () => {
    const isPastHero = window.scrollY > heroSection.offsetHeight;
    topBtn.classList.toggle("hidden", !isPastHero);
    topBtn.classList.toggle("active", isPastHero);
});

topBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
);
