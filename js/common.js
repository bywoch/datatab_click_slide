$(document).ready(function () {
    /*-- ※ guide_map Area Strat ※ --*/
    // 클릭 이벤트 핸들러 함수를 하나로 통합
    $('.guide_map .gm_wrap .gm_btn_bx ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        // 배경 이미지 초기화
        $('.guide_map .gm_wrap .gm_btn_bx ul.tabs li').css('background', 'url(images/nvz_off-001.png) 0 0 no-repeat');
        $(this).css('background', 'url(images/nvz_on-001.png) 0 0 no-repeat');

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

    // bxSlider 초기화를 함수로 통합
    function initializeBxSlider(selector, pagerCustom) {
        $(selector).bxSlider({
            auto: false,
            controls: true,
            hideControlOnEnd: true,
            moveSlides: 1,
            pagerCustom: pagerCustom
        });
    }

    // bxSlider 초기화 함수 호출
    initializeBxSlider('.gs_01', '#gm_slt_01');
    initializeBxSlider('.gs_02', '#gm_slt_02');
    initializeBxSlider('.gs_03', '#gm_slt_03');
});