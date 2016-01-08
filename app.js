window.onload = function(){

  var output = document.getElementById('output');

  window.addEventListener('devicemotion', function(e){
    gravity = e.accelerationIncludingGravity;

    output.innerHTML
    = 'x方向: '+gravity.x
    + '<br>y方向: '+gravity.y
    + '<br>z方向: '+gravity.z;

  },true);

};
