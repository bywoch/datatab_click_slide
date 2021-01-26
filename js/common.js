$(document).ready(function () {
    <<<<<<< HEAD
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
            $('.gm_slider').css({
                'position': 'relative',
                'transition-duration': '0.2s',
                'transform': 'translate3d(-660px, 0px, 0px)'
            });
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
            pagerCustom: '#gm_slt_02'
            
        });
        $('.gs_03').bxSlider({
            auto: false,
            controls: true,
            hideControlOnEnd: true,
            moveSlides: 1,
            pagerCustom: '#gm_slt_03'
        });
    =======
    >>>>>>> ecb1f87 (upload files)
    
    });
    