



$('.owl-carousel').owlCarousel({
    items:1,
    loop:false,
    dots:true,
    center:true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsiveClass:true,
    dotsContainer:'#demos-linkk',
    
});

$('.owl-carousel').on('changed.owl.carousel', function(event) {
    var current = event.item.index;
    var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
    $('.'+hash).addClass('blue');
    console.log(current);
   console.log(hash)
  });



  $('.owl-carousel').on('change.owl.carousel', function(event) {
    var current = event.item.index;
    var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
    $('.'+hash).removeClass('blue');
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

 /*$(function() {
    $('.button-color').on('click', function(){
        $('.button-color').removeClass('blue');
        $(this).addClass('blue');
    });
});*/