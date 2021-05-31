var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 20;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.fillStyle = 'white';
context.fillRect('-8px', '-8px', canvas.width, canvas.height);
context.fillStyle = 'black';

window.onresize = function(){
    if(canvas.width < window.innerWidth || canvas.height < window.innerHeight){
        var image = context.getImageData(0,0, canvas.width, canvas.height);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.putImageData(image, 0,0);
        context.lineWidth = radius*2;
        setColor();
    }
}

var putPoint = function(e){
    if (dragging && circleButton.className == 'brushType act'){
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }else if(dragging && squareButton.className == 'brushType act'){
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.rect(e.clientX-radius, e.clientY-radius, radius*2, radius*2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
}

var engage = function(e){
    dragging = true;
    putPoint(e);
}

var disengage = function(){
    dragging = false;
    context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mouseout', disengage);