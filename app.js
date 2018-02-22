



 var leftMenu=document.getElementById('left-menu');

 var midMenu=document.getElementById('mid-menu');

 var main=document.getElementById('main');

  function show(){

 if( midMenu.style.animation.play.state=paused){

   midMenu.style.animation.play.state=runing;

   main.style.animation.play.state=runing;
 }

 else{if(midMenu.style.animation.play.state=runing){

  midMenu.style.animation.play.state=paused;

 main.style.animation.play.state=paused;

 }

}
}
