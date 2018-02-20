<script>

 var leftMenu=document.getElementById('left-menu');
 var midMenu=document.getElementById('mid-menu');
 var main=document.getElementById('main');
  function show(){
 if((midMenu.style.width)+(leftMenu.style.width)>="250"){
   (midMenu.style.width)+(leftMenu.style.width)=="200";
   main.style.width==80%;
   midMenu.style.animation.play.state=paused;
 }
 else{
  midMenu.style.animation.play.state=running;

 }
}
<script/>
