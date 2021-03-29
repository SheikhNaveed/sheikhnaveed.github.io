
    $(document).ready(function () {
            var imgList = ["images/micwhite.png", "images/micred.png"];

    var myButton = $(".myButton");
            myButton.click(function (e) {
                var elem = e.target,
        imageIndex = parseInt(elem.dataset.img, 10);
                if (imageIndex <= (imgList.length - 1)) {
        elem.src = imgList[imageIndex++];
    elem.dataset.img = imageIndex;
                } else {
        elem.src = imgList[0];
    elem.dataset.img = 1;
}
});

            $('body').click(function (e) {
                var target = $(e.target);
                if (target.is(".room-btn") || target.is(".room-img") || target.is(".room-white-img")) {
        $('.room-bar').animate({ width: 'toggle' }, 0);
    $('.contact-bar').hide();
    $('.chats-bar').hide();
    $('.chat-sect-ul').find('li').removeClass('active');
    $('.room-link').addClass('active');
}
                else if (target.is(".contact-btn") || target.is(".contact-img") || target.is(".contact-white-img")) {
        $('.contact-bar').animate({ width: 'toggle' }, 0);
    $('.room-bar').hide();
    $('.chats-bar').hide();
    $('.chat-sect-ul').find('li').removeClass('active');
    $('.contact-link').addClass('active');
}
                else if (target.is(".chats-btn") || target.is(".chats-img") || target.is(".chats-white-img")) {
        $('.chats-bar').animate({ width: 'toggle' }, 0);
    $('.room-bar').hide();
    $('.contact-bar').hide();
    $('.chat-sect-ul').find('li').removeClass('active');
    $('.chats-link').addClass('active');
}
                else {
                    if ($(e.target).closest(".chats-bar").length === 0
        && $(e.target).closest(".contact-bar").length === 0
                        && $(e.target).closest(".room-bar").length === 0) {
        $('.chats-bar').hide();
    $('.contact-bar').hide();
    $('.room-bar').hide();
}
}
});

// Video hide/show //
       // $(".video-wrapper").click(function () {
       //     $(".video-wrapper").hide(0);
        //    $(".carousel-container").show(0);

       // });

// Scatchpad pad //
        $(".pad-link").click(function () {
            $(".video-wrapper").hide();
            $(".carousel-container").hide();
            $(".scatchpad-wrapper").toggle(400);
        });

        setInterval(setGridClass, 3000);


  });
 