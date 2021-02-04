$(document).ready(function () {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c81318d (update js)
    /*-- ※ guide_map Area Strat ※ --*/
    $('.gbt-01').click(function () {
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-01').css('background', 'url(images/nvz_on-001.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-02').css('background', 'url(images/nvz_off-002.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-03').css('background', 'url(images/nvz_off-003.png) 0 0 no-repeat');
    });
    $('.gbt-02').click(function () {
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-02').css('background', 'url(images/nvz_on-002.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-01').css('background', 'url(images/nvz_off-001.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-03').css('background', 'url(images/nvz_off-003.png) 0 0 no-repeat');
    });
    $('.gbt-03').click(function () {
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-03').css('background', 'url(images/nvz_on-003.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-01').css('background', 'url(images/nvz_off-001.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-02').css('background', 'url(images/nvz_off-002.png) 0 0 no-repeat');
    });
    $('.guide_map .gm_wrap .gm_btn_bx ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.gm_bx').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 811f7ac (update js)
        $('.gm_slider').css({
            'position': 'relative',
            'transition-duration': '0.2s',
            'transform': 'translate3d(-660px, 0px, 0px)'
        });
<<<<<<< HEAD
=======

        $('.gm_slider li:eq(1)').attr('aria-hidden', 'false');
>>>>>>> c81318d (update js)
=======
>>>>>>> 811f7ac (update js)
    });
    $('.gs_01').bxSlider({
        auto: false,
        controls: true,
        hideControlOnEnd: true,
        moveSlides: 1,
        pagerCustom: '#gm_slt_01'
    });
    $('.gs_02').bxSlider({
        auto: false,
        controls: true,
        hideControlOnEnd: true,
        moveSlides: 1,
<<<<<<< HEAD
<<<<<<< HEAD
        pagerCustom: '#gm_slt_02'
=======
        pagerCustom: '#gm_slt_02',
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
        // newIndex 값이 1인 경우 (두 번째 li 요소) aria-hidden 속성 값을 "false"로 설정
        if (newIndex === 1) {
            $slideElement.next().attr('aria-hidden', 'false');
        }
    }
>>>>>>> c81318d (update js)
=======
        pagerCustom: '#gm_slt_02'
>>>>>>> 811f7ac (update js)
        
    });
    $('.gs_03').bxSlider({
        auto: false,
        controls: true,
        hideControlOnEnd: true,
        moveSlides: 1,
<<<<<<< HEAD
<<<<<<< HEAD
        pagerCustom: '#gm_slt_03'
    });
=======
>>>>>>> 7353dfa (upload files)
=======
        pagerCustom: '#gm_slt_03',
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
        // newIndex 값이 1인 경우 (두 번째 li 요소) aria-hidden 속성 값을 "false"로 설정
        if (newIndex === 1) {
            $slideElement.next().attr('aria-hidden', 'false');
        }
    }
=======
        pagerCustom: '#gm_slt_03'
>>>>>>> 811f7ac (update js)
    });
>>>>>>> c81318d (update js)

});
