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
$('.slick-vertical').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,          // Show only one slide at a time
    slidesToScroll: 1,        // Scroll one slide at a time
    vertical: true,
    verticalSwiping: true,
    prevArrow: $('.custom-prev-vertical'),
    nextArrow: $('.custom-next-vertical'),
    autoplay: false,          // Disable autoplay
    speed: 500,               // Adjust speed of the transition
    cssEase: 'linear',        // Smooth transition effect
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

document.querySelectorAll('.video-icon').forEach((icon) => {
    icon.addEventListener('click', function () {
        const videoPlayer = icon.parentElement.querySelector('.video-player');
        if (videoPlayer.classList.contains('hidden')) {
            // Show and play the video
            videoPlayer.classList.remove('hidden');
            videoPlayer.play();
        } else {
            // Hide and pause the video
            videoPlayer.pause();
            videoPlayer.classList.add('hidden');
        }
    });
});
