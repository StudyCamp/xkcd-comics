document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    lightSwitch();
    backgroundSwitch();
});

randomizedComicRoute = () => `/id/${Math.floor(Math.random() * 2473) + 1}`;

function lightSwitch() {
    const lightSwitch = document.querySelector("#light-switch");
    const lightMover = document.querySelector("#light-mover");
    lightSwitch.onclick = function() { 
        if  (lightSwitch.textContent == "flashlight_on") {
            lightSwitch.textContent = "flashlight_off";
            lightMover.style.display = 'none';
        } else {
            lightSwitch.textContent = "flashlight_on";
            lightMover.style.display = 'block';
        } 
    }       
};
function backgroundSwitch() {
    const hasImage = "linear-gradient(130deg, rgba(0, 21, 206, 0.623),rgba(199, 0, 43, 0.514)), url('../img/girl4-crop1.jpg')";
    const noImage =  "url('[INSERT HTTPS IMAGE URL HERE]'), linear-gradient(130deg, rgba(0, 21, 206, 0.623),rgba(199, 0, 43, 0.514))";
    const backgroundSwitch = document.querySelector("#background-switch");
    backgroundSwitch.onclick = function() { 
        if  (backgroundSwitch.textContent == "image") {
            backgroundSwitch.textContent = "hide_image"; 
            document.body.style.backgroundImage = noImage;
        } else {
            backgroundSwitch.textContent = "image";
            document.body.style.backgroundImage = hasImage;
        } 
    }       
};

