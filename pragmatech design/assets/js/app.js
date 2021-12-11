var myswiper = new Swiper(".mySwiper", {
    
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// navbarscroll
var header = document.querySelector("header");
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  
  
      var currentScrollPos = window.pageYOffset;
      
      
     

       if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
      
      header.style.transition = "0.5s";
      if(window.pageYOffset < 130){
        
        header.style.backgroundColor="unset"
        header.style.position="fixed"
       
      }
        
    
    }
    
    
    
    else {
    header.style.top = "-6.625rem";
    header.style.position= "fixed";
    header.style.backgroundColor= "#333";
    if(window.pageYOffset < 130){
      
      header.style.backgroundColor="unset"
      header.style.position="fixed"
     
    }
   
    
    }
     prevScrollpos = currentScrollPos;
    

}






  // search
  $(".btn").click(function () {
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
    $(".menu ul").toggleClass("menu_ul_active")
    $(".btn1").toggleClass("btn1-animate")
    
    
  });

  
  