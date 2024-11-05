
// menu js 
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("translate-x-0");
    menuBtn.classList.toggle('active');
    document.body.classList.toggle("overflow-hidden");

    if (isOpen) {
        mobileMenu.classList.replace("translate-x-0", "translate-x-full");
        closeIcon.classList.add("hidden");
        hamburgerIcon.classList.remove("hidden");
    } else {
        mobileMenu.classList.replace("translate-x-full", "translate-x-0");
        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    }
});


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

// back-to-top-button
const mybutton = document.querySelector(".top-btn");
const heroSection = document.getElementById("hero");
mybutton.classList.add("hidden");

window.addEventListener("scroll", function () {
    const heroHeight = heroSection.offsetHeight;
    if (window.scrollY > heroHeight) {
        mybutton.classList.remove("hidden");
        mybutton.classList.add("active");
    } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("active");
    }
});

mybutton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



