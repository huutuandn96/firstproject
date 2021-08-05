$('.product-wrapper').owlCarousel({
    loop:true,
    margin:10,
    stagePadding: 50,
    responsive:{
        600:{
            items:3
        },
        1300:{
            items:4
        }
    }
})

$('.related-pd').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:2
        },
        760:{
            items:3
        },
        1300:{
            items:5
        }
    }
})

$('.same-brand').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:2
        },
        760:{
            items:3
        },
        1300:{
            items:5
        }
    }
})
$(document).ready(function() {
    $('.wrapper-img').click(function() {
        $('.img-card').attr('src', $(this).attr('src'));
    });
});