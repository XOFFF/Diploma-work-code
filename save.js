var saveButton = document.getElementById('save');

function saveImage(){
    var data = canvas.toDataURL();
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            var response = request.responseText;
            document.getElementById('downloadframe').src = 'download.php?file=' + response;
        }
    }
    request.open('POST', 'save.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send('img='+data);
}
    
saveButton.addEventListener('click', saveImage);