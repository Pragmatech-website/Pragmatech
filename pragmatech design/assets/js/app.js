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


// form
let form__item=document.querySelectorAll(".form__item")
let form__name = document.querySelector(".form__name")
let form__surname = document.querySelector(".form__surname")
let form__email = document.querySelector(".form__email")
let dropdown = document.querySelector(".dropdown")
let bg__border= document.querySelectorAll(".bg__border")
let name__bg__border = document.querySelectorAll(".form__up .form__item:nth-child(1) > .bg__border")
let surname__bg__border = document.querySelectorAll(".form__up .form__item:nth-child(2) > .bg__border")
let email__bg__border = document.querySelectorAll(".form__down .form__item > .bg__border")
let dropdown__menu__li = document.querySelectorAll(".dropdown-menu li")
let help__label = document.querySelector(".dropdown .label")
let help__submit = document.querySelector(".help .submit")

  form__item[0].addEventListener('focusout', function(){
    if (form__name.checkValidity()==true){
      for(let borderindex=0; borderindex<4;borderindex++){
      name__bg__border[borderindex].style.backgroundColor="#41E063";
      name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        name__bg__border[borderindex].style.backgroundColor="red"
        name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}

    form__name.addEventListener("focus",()=>{
 
    
      if(form__name.checkValidity()==true){
        
        for(let borderindex=0; borderindex<4;borderindex++){
          
          name__bg__border[borderindex].style.backgroundColor="#41E063";
          name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
          
        }
        
      }
      else{
        for(let borderindex=0; borderindex<4;borderindex++){
        name__bg__border[borderindex].style.backgroundColor="red";
        name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
      }
})

  
    
  }); 

  form__item[0].addEventListener("input",()=>{
          if(form__name.checkValidity()==true){
            for(let borderindex=0; borderindex<4;borderindex++){
              name__bg__border[borderindex].style.backgroundColor="#41E063"
              name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
              
            }
          }
          else{
            for(let borderindex=0; borderindex<4;borderindex++){
            name__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
           
            
          }}

  })

  // input surname----------------------
  form__item[1].addEventListener('focusout', function(){
    if (form__surname.checkValidity()==true){
      for(let borderindex=0; borderindex<4;borderindex++){
      surname__bg__border[borderindex].style.backgroundColor="#41E063";
      surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        surname__bg__border[borderindex].style.backgroundColor="red"
        surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}

    form__surname.addEventListener("focus",()=>{
 
    
      if(form__surname.checkValidity()==true){
        
        for(let borderindex=0; borderindex<4;borderindex++){
          
          surname__bg__border[borderindex].style.backgroundColor="#41E063";
          surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
          
        }
        
      }
      else{
        for(let borderindex=0; borderindex<4;borderindex++){
        surname__bg__border[borderindex].style.backgroundColor="red";
        surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
      }
})

  
    
  }); 

  form__item[1].addEventListener("input",()=>{
          if(form__surname.checkValidity()==true){
            for(let borderindex=0; borderindex<4;borderindex++){
              surname__bg__border[borderindex].style.backgroundColor="#41E063"
              surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
              
            }
          }
          else{
            for(let borderindex=0; borderindex<4;borderindex++){
            surname__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
           
            
          }}

  })

  // input emailname----------------------
  form__item[2].addEventListener('focusout', function(){
    if (form__email.checkValidity()==true){
      for(let borderindex=0; borderindex<4;borderindex++){
      email__bg__border[borderindex].style.backgroundColor="#41E063";
      email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        email__bg__border[borderindex].style.backgroundColor="red"
        email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}

    form__email.addEventListener("focus",()=>{
 
    
      if(form__email.checkValidity()==true){
        
        for(let borderindex=0; borderindex<4;borderindex++){
          
          email__bg__border[borderindex].style.backgroundColor="#41E063";
          email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
          
        }
        
      }
      else{
        for(let borderindex=0; borderindex<4;borderindex++){
        email__bg__border[borderindex].style.backgroundColor="red";
        email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
      }
})

  
    
  }); 

  form__item[2].addEventListener("input",()=>{
          if(form__email.checkValidity()==true){
            for(let borderindex=0; borderindex<4;borderindex++){
              email__bg__border[borderindex].style.backgroundColor="#41E063"
              email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
              
            }
          }
          else{
            for(let borderindex=0; borderindex<4;borderindex++){
            email__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
           
            
          }}

  })


// //  submit-------------

help__submit.addEventListener("click",(e)=>{
  
        
      
      if(help__label.innerHTML == "Proqramı seçin"){
        
        help__submit.setAttribute("disabled", true);
        document.querySelector(".dropdown").style.backgroundColor="#f2dede";
        help__label.style.color="#af504e";
        removeblock()
      }
      
       
       function removeblock(){if(help__submit.hasAttribute("disabled")){
        setTimeout(() => {
        help__submit.removeAttribute("disabled");
        
    }, 100);}}

   
    
   
   
});
document.querySelector(".dropdown").addEventListener("focus",()=>{
  
    document.querySelector(".dropdown").style.backgroundColor="white";
    help__label.style.color="#C4C4C4";
  
})
 



 

    
      
 
      
    
  
  

   

  

  











 


  
  