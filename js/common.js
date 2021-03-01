$(document).ready(function () {
    // setActiveButton 함수를 사용하여 중복 코드를 제거
    function setActiveButton(buttonClass, imageFileName) {
        $('.guide_map .gm_wrap .gm_btn_bx ul li').removeClass('active'); // 모든 버튼에서 active 클래스 제거
        $(buttonClass).addClass('active'); // 선택된 버튼에 active 클래스 추가
        $('.gbt-01').css('background', 'url(images/nvz_off-001.png) 0 0 no-repeat'); // .gbt-01의 배경 이미지 변경
        $('.gbt-02').css('background', 'url(images/nvz_off-002.png) 0 0 no-repeat'); // .gbt-02의 배경 이미지 변경
        $('.gbt-03').css('background', 'url(images/nvz_off-003.png) 0 0 no-repeat'); // .gbt-03의 배경 이미지 변경
        $(buttonClass).css('background', 'url(images/' + imageFileName + ') 0 0 no-repeat'); // 선택된 버튼의 배경 이미지 변경
    }

    $('.gbt-01').click(function () {
        setActiveButton('.gbt-01', 'nvz_on-001.png');
    });

    $('.gbt-02').click(function () {
        setActiveButton('.gbt-02', 'nvz_on-002.png');
    });

    $('.gbt-03').click(function () {
        setActiveButton('.gbt-03', 'nvz_on-003.png');
    });

    // 슬라이더 설정 함수
    function setupSlider(sliderClass, pagerCustomID) {
        $(sliderClass).bxSlider({
            auto: false,
            controls: true,
            hideControlOnEnd: true,
            moveSlides: 1,
            pagerCustom: pagerCustomID
        });
    }

    // 각 슬라이더에 대한 설정 적용
    setupSlider('.gs_01', '#gm_slt_01');
    setupSlider('.gs_02', '#gm_slt_02');
    setupSlider('.gs_03', '#gm_slt_03');

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

});
