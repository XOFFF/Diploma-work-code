var color = 'black';
var colorInputFrame = document.getElementById('colorRange');
var text = document.getElementById("someText");

var setColor = function(){
    color = colorInputFrame.value;
    context.fillStyle = context.strokeStyle = text.style.color = color;
}

colorInputFrame.addEventListener('input', setColor);