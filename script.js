function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("swithcImg").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

function sendForm(){
    document.getElementById("contact-form").className = " was-submitted";  
}

function onEmailChange(val){
    const regex= new RegExp("[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if(val && !regex.test(val)){
        document.getElementById("error-not-exist").style.display ="none";
        document.getElementById("error-not-valid").style.display = "initial";
    }
    else{
        if(!document.getElementById("email").value){
            document.getElementById("error-not-exist").style.display= "initial";
        } else{
            document.getElementById("error-not-exist").style.display="none";   
        }      
        document.getElementById("error-not-valid").style.display = "none";     
    }
}

var images = [], x = -1;
images[0] = "images/banner_atar.jpg";
images[1] = "images/250X110571325734.jpg";
images[2] = "images/250X110668568400.jpg";