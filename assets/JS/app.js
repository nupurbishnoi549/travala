// Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("translate-x-0");
    document.body.classList.toggle("overflow-hidden");
    hamburgerIcon.classList.toggle("hidden", isOpen);
    closeIcon.classList.toggle("hidden", !isOpen);
});

// Slick Slider Initialization
$('.slick-Card').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next'),
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
});

$('.slick-vertical').slick({
    infinite: true,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow: $('.custom-prev-vertical'),
    nextArrow: $('.custom-next-vertical'),
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    cssEase: 'linear'
});

// Back-to-top Button
const mybutton = document.querySelector(".top-btn");
const heroSection = document.getElementById("hero");

window.addEventListener("scroll", () => {
    mybutton.classList.toggle("hidden", window.scrollY <= heroSection.offsetHeight);
});
mybutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// current year
document.getElementById("year").textContent = new Date().getFullYear();