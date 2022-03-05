window.addEventListener('scroll', function(){
  let animate = this.document.getElementById('animar');
  let posicionStart = animate.getBoundingClientRect().top;
  let screenSize = this.window.innerHeight/2;

  if(posicionStart < screenSize){
    animate.style.animation = 'slide-top 0.5s ease-out'
  }
})

window.addEventListener('scroll', function(){
  let animate = this.document.getElementById('animar2');
  let posicionStart = animate.getBoundingClientRect().top;
  let screenSize = this.window.innerHeight/2;

  if(posicionStart < screenSize){
    animate.style.animation = 'scale-up-ver-bottom 0.5s ease-out'
  }
})

window.addEventListener('scroll', function(){
  let animate = this.document.getElementById('animar3');
  let posicionStart = animate.getBoundingClientRect().top;
  let screenSize = this.window.innerHeight;

  if(posicionStart < screenSize){
    animate.style.animation = 'rotate-center 0.5s ease-out'
  }
})