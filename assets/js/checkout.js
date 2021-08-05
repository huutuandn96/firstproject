$(document).ready(function() {
    $('.down').click(function() {
        var i = $(this).parent().find('.checkout-quality').val();
        if(i <= 0) {
            return
        } else {
            i--;
            $(this).parent().find('.checkout-quality').val(i);
        }
    });
    $('.up').click(function() {
        var i = $(this).parent().find('.checkout-quality').val();
        i++;
        $(this).parent().find('.checkout-quality').val(i);
    });

    $('input[type="radio"][value="cod"]').change(function() {
        $('.order-address').find('.cod-address').css('display', 'block');
        $('.order-address').find('.shop-address').css('display', 'none');
    });

    $('input[type="radio"][value="shop"]').change(function() {
        $('.order-address').find('.shop-address').css('display', 'block');
        $('.order-address').find('.cod-address').css('display', 'none');
    });

    $('#showroom1').change(function() {
        $('.shop-ad-1').css('display', 'block');
        $('.shop-ad-2').css('display', 'none');
    });
    
    $('#showroom2').change(function() {
        $('.shop-ad-1').css('display', 'none');
        $('.shop-ad-2').css('display', 'block');
    });

    $('#cash-card').change(function() {
        $('.cash-card-pay').css('display', 'block');
        $('.bank-transfer-pay').css('display', 'none');
    });
    
    $('#bank-transfer').change(function() {
        $('.cash-card-pay').css('display', 'none');
        $('.bank-transfer-pay').css('display', 'block');
    });
});