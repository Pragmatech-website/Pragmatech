// loader

window.addEventListener('load', () => {
    
  const wrapper = document.querySelector(".loader");
  wrapper.classList.add("wrapper-animation")
  setTimeout(() => {
    wrapper.classList.add("wrapper-finish");
    wrapper.classList.remove("wrapper-animation")
  }, 1500);
  
  

});



 // search
  $(".btn").click(function () {
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
    $(".menu ul").toggleClass("menu_ul_active")
    $(".btn1").toggleClass("btn1-animate")
    
    
  });



  

  // dropdown
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});


// popup
let popup__all = document.querySelector(".popup__all");
let btn1 = document.querySelector(".btn1");
let form = document.querySelector(".popup")
btn1.addEventListener("click",()=>{
  openpopup()
});
function openpopup(){
  popup__all.style.display="flex"
  popup__all.classList.add("popupanimation");
 
  
  setTimeout(() => {
    popup__all.classList.remove("popupanimation")
    popup__all.style.backgroundColor= "rgba(0, 0, 0, 0.486)";
   
  }, 200);
}


function closepopup(){
  popup__all.style.backgroundColor= "unset";
  popup__all.classList.add("popuphidden");
 
  
  setTimeout(() => {
    popup__all.classList.remove("popuphidden");
    popup__all.style.display="none";
   
  }, 150);
}

document.body.addEventListener("click",(event)=>{
        if(event.target.className=="popup__all"){
          closepopup()
        }
})







  
  