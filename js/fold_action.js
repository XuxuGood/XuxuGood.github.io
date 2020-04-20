$(function(){
    $(".fold_hider").on("click", function () {
        $('>.fold', this.parentNode).slideToggle();
        $('>:first', this).toggleClass('open');
    });
    //默认情况下折叠
    $(".fold").css("display", "none");
});
