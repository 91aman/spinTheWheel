var degree = 1800;
var clicks = 0;

//var LIST = ['fa-bell-o', 'fa-comment-o','fa-smile-o',' fa-heart-o','fa-star-o','fa-lightbulb-o'];
var LIST = [{
    label: 'ipod',
    src: "https://retrosonicfidelity.com/wp-content/uploads/2013/07/retroMod-mini-64GB-Blue-RetroSonicFidelity.png"
}, {
    label: 'Headphones',
    src: "http://img.bbystatic.com/BestBuy_US/en_US/images/abn/2015/global/buyingguides/RE_headphones/dj.png"
}, {
    label: 'moto360',
    src: "http://www.techspot.com/images/products/audio-video/org/2015-09-24-product.png"
}, {
    label: 'Try Again',
    src: "http://www.isyourhairmadeofdonuts.com/images/img_try_again.png"
}, {
    label: 'Tab E',
    src: "http://www.bell.ca/Styles/wireless/all_languages/all_regions/catalog_images/Samsung_Tab_E/SamsungTabE_lrg1_en.png"
}, {
    label: 'Mobile',
    src: "https://content.oneplus.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/_/4_2_4.png"
}];

$(document).ready(function () {

    LIST.forEach(function (item) {
        $('#inner-wheel').append('<div class="sec"><img class="image" src=' + item.src + '></div>')
    });

    $('.share-click').click(function () {
        //$.ajax({
        //    type: 'HEAD',
        //    url: 'whatsapp://send?text=text=Hello%20World!',
        //    success: function () {
        //        window.location = 'whatsapp://send?text=text=Hello%20World!';
        //    },
        //    error: function () {
        //        alert("Whatspp not installed");
        //    }
        //});

        var text = 'abcd';
        var url = 'url';
        var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
        window.location.href = "whatsapp://send?text=" + message;
    });

    $('#spin').click(function () {
        clicks++;
        var newDegree = degree * clicks;
        var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
        totalDegree = newDegree + extraDegree;

        var a = 4 - Math.floor((extraDegree - 30) / 60);

        a > 6 && (a -= 6);
        a < 0 && (a += 6);

        console.log(LIST[a]);

        $("#txt").addClass('hide');

        var timeOutIntervalId = setTimeout(function () {
            $("#txt")
                .removeClass('hide')
                .find('.text').html('You won a ' + LIST[a].label)
        }, 6500);

        console.log(timeOutIntervalId);


        $('#wheel .sec').each(function () {
            $('#inner-wheel').css({
                'transform': 'rotate(' + totalDegree + 'deg)'
            });
        });
    });
});


