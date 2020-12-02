$('.owl-carousel').owlCarousel({
    items:1,
    loop:false,
    dots:false,
    center:true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
});


 $('.select-peoples .select-peoples__val').click(function(){
        $('.select-peoples__dd').slideToggle(300);
    });

    $(document).mouseup(function (e) {
        if (e.which != 1) return false;
        var div = $(".select-peoples__dd");
        var button = $('.select-peoples .select-peoples__val');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (!button.is(e.target) && button.has(e.target).length === 0) {
             $('.select-peoples__dd').slideUp(300);
         }
     }
 });