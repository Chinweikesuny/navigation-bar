const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelector('.nav-anime');
  
  
  burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active'); 
  });
  
  burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-anime'); 
  });
}
navSlide()
