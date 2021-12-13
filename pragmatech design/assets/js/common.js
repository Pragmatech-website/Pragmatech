// loader

  window.addEventListener('load', () => {
    setTimeout(() => {
    const wrapper = document.querySelector(".loader");
    wrapper.classList.add("wrapper-finish");
    
    
  }, 1500);
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
        
        header.style.backgroundColor="#F5F5F5"
        header.style.position="fixed"
       
      }
        
    
    }
    
    
    
    else {
    header.style.top = "-6.625rem";
    header.style.position= "fixed";
    header.style.backgroundColor= "#F5F5F5";
    if(window.pageYOffset < 130){
      
      header.style.backgroundColor="#F5F5F5"
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



  // tab section
  let double__main__box = document.querySelector(".double__main__box");
  let main__active = document.querySelector(".main__active")
  let wrapper__all =  document.querySelector(".tabs__header__wrapper__all");
  let wrapper__active =  document.querySelector(".tabs__header__wrapper__active");
  let indicator__item = document.querySelector(".tabs__indicator__wrapper__item");
  let firstitem = document.querySelectorAll(".firstitem");
  let lastitem = document.querySelectorAll(".lastitem")
  let firstbox = document.querySelector(".firstbox")

  wrapper__all.addEventListener("click",()=>{
    if(firstbox.style.display=="none"){
      console.log("koko")
      firstitemfunc()
    }
    

    function firstitemfunc(){
      indicator__item.style.transform="translateX(0%)";
    wrapper__active.style.color="rgba(51, 51, 51, 0.5)";
    wrapper__all.style.color="#333333";
    for(i=0;i<lastitem.length;i++){
      lastitem[i].classList.add("tabanimationreduce");
      
    }

    setTimeout(() => {
      main__active.style.display="none";
      double__main__box.style.display="flex";
      
      for(i=0;i<firstitem.length;i++){
        firstitem[i].classList.add("tabanimation");
        

      };
      for(i=0;i<lastitem.length;i++){
        lastitem[i].classList.remove("tabanimationreduce");
        
      }

    },500);
    }
    

  })

  // secondtab
  
  wrapper__active.addEventListener("click",()=>{
    
    if(main__active.style.display=="" || main__active.style.display=="none" ){
      lastitemfunc()
    }
    else{
      
      console.log(main__active.style.display)
    }
    function lastitemfunc(){
     
    indicator__item.style.transform="translateX(322%)"
    wrapper__all.style.color="rgba(51, 51, 51, 0.5)";
    wrapper__active.style.color="#333333";
    
    
    for(i=0;i<firstitem.length;i++){
      firstitem[i].classList.remove("tabanimation")
      firstitem[i].classList.add("tabanimationreduce")
    }

    setTimeout(() => {
      firstbox.style.display="none";
      main__active.style.display="flex";
      for(i=0;i<lastitem.length;i++){
        lastitem[i].classList.add("tabanimation");
        
        

      };
      for(i=0;i<firstitem.length;i++){
        
        firstitem[i].classList.remove("tabanimationreduce");
      }

    },500);

    }
    

   

   
    
    
  })

  


  
  