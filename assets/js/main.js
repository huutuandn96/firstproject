$(document).ready(function(){
    // SLIDE
    $('.slide-section').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        items:1,
        smartSpeed:450
    })

    $('.content-product').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2,
            },
            768:{
                items:3,
            },
            1000: {
                items:4,
            },
            1400:{
                items:5,
            }
        }
    })

    // Đẩy nội dung cho search box
    $('.product-item').on('click', 'li', function(event) {
        event.preventDefault();
        $('#list-product').text($(this).text());
    })

    // ANIMATE CHO ICON PHẦN CONTACT
    $('.social-icon').on('mouseenter', 'li i', function(event) {
        event.preventDefault();
        $(this).addClass('animate__animated animate__wobble')
    })

    $('.social-icon').on('mouseleave', 'li i', function(event) {
        event.preventDefault();
        $(this).removeClass('animate__animated animate__wobble')
    })

    // HIỆU ỨNG TO TOP BUTTON & SIDE BAR
    $('#toTop').click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    function scrollFunction() {
        if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
            $('#toTop').css('display', 'block');
        } else {
            $('#toTop').css('display', 'none');
        }

        // SIDE BAR
        if(document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
            $('#sidebar-nav').css('display', 'block');
        } else {
            $('#sidebar-nav').css('display', 'none');
        }
    }

    // Hiệu ứng scroll cho sidebar
    const sections = document.querySelectorAll('.content-scroll');
    window.onscroll = function() {
        scrollFunction();
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
        for (let s in sections) {
            if(sections.hasOwnProperty(s) && sections[s].offsetTop <= (scrollPosition + 300)) {
                const id = sections[s].id;
                // document.querySelector('.nav-list-item.active').classList.remove('active');
                $('.nav-list-item.active').removeClass('active');
                $(`a[href*=${id}]`).parent().addClass('active');
                // document.querySelector(`a[href*=${id}]`).parentNode.classList.add('active');

            }
        }
    }

    // Bắt click event cho mobile & tablet bar
    $('.bar-icon').click(function() {
        $('.menu-list').css('display', 'block');
        $('.dark-filter').css('display', 'block');
    });

    $('.time-icon').click(function() {
        $('.menu-list').css('display', 'none');
        $('.dark-filter').css('display', 'none');
    });

    $('.dark-filter').click(function() {
        $('.menu-list').css('display', 'none');
        $('.dark-filter').css('display', 'none');
    });
      
});
