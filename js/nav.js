//독서 큐레이션 부분 nav

$(document).ready(function () {
    $('.nav01').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
        $('.book-menu1').show().css({
            display: 'flex'
        });
        $('.book-menu2').hide();
        $('.book-menu3').hide();
    })

    $('.nav02').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
        $('.book-menu1').hide();
        $('.book-menu2').show().css({
            display: 'flex'
        });
        $('.book-menu3').hide();
    })

    $('.nav03').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
        $('.book-menu1').hide();
        $('.book-menu2').hide();
        $('.book-menu3').show().css({
            display: 'flex'
        });
    })
})



//fix-nav


$(document).ready(function () {
    $('.fix-nav > div').click(function () {
        $(this).children('.two').show().siblings().hide()
        $(this).siblings().children('.two').hide()
        $(this).siblings().children('.one').show()
    })


    $('.main').click(function () {
        $('html, body').animate({
            scrollTop: $('#main').offset().top - 100
        }, 500);
    })

    $('.passion').click(function () {
        $('html, body').animate({
            scrollTop: $('#passion').offset().top - 100
        }, 500);
    })

    $('.learning').click(function () {
        $('html, body').animate({
            scrollTop: $('#sec03').offset().top
        }, 500);
    })

    $('.volunteer').click(function () {
        $('html, body').animate({
            scrollTop: $('#sec04').offset().top + 240
        }, 500);
    })


    $('.schedule').click(function () {
        $('html, body').animate({
            scrollTop: $('#sec05').offset().top - 20
        }, 500);
    })


})


//스크롤에 따라 자동으로 fix-nav 반응
$(window).scroll(function () {
    var location = $(this).scrollTop()
    if (location >= $('#main').offset().top) {
        $('.fix-nav>.main').children('.one').hide().siblings().show()
        $('.fix-nav>.main').siblings().children('.two').hide().siblings().show()
    }

    if (location >= $('#passion').offset().top - 250) {
        $('.fix-nav>.passion').children('.one').hide().siblings().show()
        $('.fix-nav>.passion').siblings().children('.two').hide().siblings().show()
    }
    if (location >= $('#sec03').offset().top - 300) {
        $('.fix-nav>.learning').children('.one').hide().siblings().show()
        $('.fix-nav>.learning').siblings().children('.two').hide().siblings().show()
    }

    if (location >= $('#sec04').offset().top - 300) {
        $('.fix-nav>.volunteer').children('.one').hide().siblings().show()
        $('.fix-nav>.volunteer').siblings().children('.two').hide().siblings().show()
    }

    if (location >= $('#sec05').offset().top - 500) {
        $('.fix-nav>.schedule').children('.one').hide().siblings().show()
        $('.fix-nav>.schedule').siblings().children('.two').hide().siblings().show()
    }


})