var radiusSize = document.getElementById('radval');
var radiusRangeSize = document.getElementById('radiusRange');
var startWebsite = true;

var moveRadSize = function(){
    radiusSize.value = radiusRangeSize.value;
    radius = radiusSize.value;
    context.lineWidth = radius * 2;
}

var enterToSetRadSize = function(){
    document.addEventListener('keydown', function(e) {
        if(e.keyCode == 13 && document.hasFocus(radiusSize) == true){
            // change text size
            radiusRangeSize.value = radiusSize.value;
            moveRadSize();
        }
    });
}

if(startWebsite == true){
    moveRadSize();
    startWebsite = false;
}

radiusRangeSize.addEventListener('input', moveRadSize);
radiusSize.addEventListener('focus', enterToSetRadSize);