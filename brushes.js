var circleButton = document.getElementById('circle');
var squareButton = document.getElementById('square');

function switchToSquare(){
    if(squareButton.className != "brushType act"){
        circleButton.className = 'brushType';
        squareButton.className += " act";
    }
}

function switchToCicrle(){
    if(circleButton.className != "brushType act"){
        squareButton.className = 'brushType';
        circleButton.className += " act";
    }
}

circleButton.addEventListener('click', switchToCicrle);
squareButton.addEventListener('click', switchToSquare);