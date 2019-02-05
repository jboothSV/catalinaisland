
 $('body').on('click','[data-menuid]', function() {
    $(this).toggleClass('active');
})

// Mobile Nav

$("body").on("click", "[data-toggle-mobilenav]", function(){
    $(".header-section").toggleClass("mobile-open");
});

$("body").on("click", "[data-toggle-menu-parent]", function(){
    $(this).closest("li").toggleClass("active");
});