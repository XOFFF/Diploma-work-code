var addTextButton = document.getElementById('text');
var textField = document.getElementById('someText');
var textRangePosition = document.getElementById('textRange');
var textSize = document.getElementById('textSize');

///     Add text field
var addtextField = function(){
    textField.style.visibility = 'visible';       
    textField.style.top = '20%';
    textField.style.left = '10%';
    moveTextSize();
}

var moveTextSize = function(){
    textField.style.fontSize = textRangePosition.value.toString() + 'px';
    textSize.value = textRangePosition.value.toString();
}

/// press "Enter" in size input
var enterToSetTextSize = function(){
    textSize.addEventListener('keydown', function(e) {
        if(e.keyCode == 13 && document.hasFocus(textSize)){
            // change text size
            textRangePosition.value = textSize.value;
            moveTextSize();
        }
    });
}

var convertToCanvas = function(){
    context.font = textField.style.fontSize + ' sans-serif';
    context.textBaseline = 'bottom';
    context.fillText(textField.innerHTML, textField.getBoundingClientRect().left, textField.getBoundingClientRect().bottom - 1);
    textField.style.visibility = 'hidden';
    textField.innerHTML = 'Add text';
}

/// press "Enter" in text are   
textField.addEventListener('keydown', function(e) {
    if(e.keyCode == 13 && document.hasFocus(textField) == true){
        convertToCanvas();
    }
});

/////////////////////////////////////////////////////////////// moves

var moveText = function(e) { // 1. track press
    var shiftX = e.clientX - textField.getBoundingClientRect().left;
    var shiftY = e.clientY - textField.getBoundingClientRect().top;
    
    textField.style.zIndex = 1000; // put the input upper than another items
    
    // change input position to position of the cursor
    function moveAt(e) {
        textField.style.left = e.pageX - shiftX + 'px';
        textField.style.top = e.pageY - shiftY + 'px';
    }
    // dragging on
    document.onmousemove = function(e) {
        moveAt(e);
    }
    // end of dragging
    textField.onmouseup = function() {
        document.onmousemove = null;
        textField.onmouseup = null;
    }
}

addTextButton.addEventListener('mouseup', addtextField);
textRangePosition.addEventListener('input', moveTextSize);
textSize.addEventListener('input', enterToSetTextSize);
textField.addEventListener('mousedown', moveText);