// menuicon JS
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

// Add event listeners for menu toggle
menuBtn.addEventListener("click", () => {
    const isMenuOpen = !mobileMenu.classList.contains("hidden");
    menuBtn.classList.toggle('active');
    document.body.classList.toggle("overflow-hidden");

    if (isMenuOpen) {
        mobileMenu.classList.add("hidden");
        closeIcon.classList.add("hidden");
        hamburgerIcon.classList.remove("hidden");
    } else {
        mobileMenu.classList.remove("hidden");
        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    }
});

// Function to close the mobile menu
function closeMenu() {
    mobileMenu.classList.add("hidden");
    closeIcon.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    document.body.classList.remove("overflow-hidden");
}
document.querySelectorAll('#home-menu a, #properties-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});
// destination slider
$('.slick-Card').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// testimonials slider 
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
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

