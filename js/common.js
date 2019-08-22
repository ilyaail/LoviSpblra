(function($) {
$(document).ready(function(){

	// Custom JS
     $('select').niceSelect();	

});
    $(document).ready(function(){
        $('.sertificates_slider').slick({
            arrows: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            adaptiveHeight: true
        });
        $('.certificate_open').on('click', function(){
            $('.sertificates_drop').fadeToggle('2800');
        });
       $(".collapse.show").each(function(){
            $(this).prev(".card-header").find(".material-icons").text('remove');
        });
        
         $(".collapse").on('show.bs.collapse', function(){
            $(this).prev(".card-header").find(".material-icons").text('remove')
        }).on('hide.bs.collapse', function(){
            $(this).prev(".card-header").find(".material-icons").text('add');
        });
    });
    $(function () {
    $('select').on('change', function () {
        $('.current').html(this.value);
    }).change();

    $('.current').on('click', function () {
        $('select').focus();
    });
});
    $( function() {
    var spinner = $( ".spinner" ).spinner();

    $( "button" ).button();
  } );
})(jQuery);


