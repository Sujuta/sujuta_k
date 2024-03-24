//showing navbar when click menu on mobile view
const mobile=document.querySelector('.menu-toggle');
const mobilelink=document.querySelector('.sidebar');
   
mobile.addEventListener("click",function(){
mobile.classList.toggle("is-active");
mobilelink.classList.toggle("active");

})
//close menu when click
mobilelink.addEventListener("click",function(){
const menuBars=document.querySelector('is-active');
if(window.innerWidth<=768 && menuBars){
    mobile,classList.toggle("is-active");
    mobilelink.classList.toggle("active");
}
})
// move the menu to right and left when click back and text
var step=100;
var stepFilter=68;
var scrolling=true;
$(".back").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrolleft:"-=" + step + "px"
    });

    
});
$(".next").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrolleft:"+=" + step + "px"
    })
})
 //when click back and next
 $(".back-menus").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrolleft:"-=" + stepFilter + "px"
    })
});
$(".next-menus").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrolleft:"+=" + stepFilter + "px"
    })
})