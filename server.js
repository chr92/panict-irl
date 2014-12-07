var  ledToggle, pressCount;
//provision the gpio pins 22 for the led output and 17 for the button input
var led= require("pi-pins").connect(5),
    button = require("pi-pins").connect(6);
    piezo = require("pi-pins").connect(13);

//set pin modes for button, buzzer and LED.
button.mode('out');
led.mode('out');

//set the initial value of the LED to be off.
ledToggle = false;
pressCount= 0;
led.value(false);

//look for a button press event, keep LED on while button is pressed.
button.on('fall', function () {
    if (ledToggle) {
        led.value(false);
        ledToggle = !ledToggle;
    } else {
        led.value(true);
        ledToggle = !ledToggle;
        console.log("button pressed: "+ (++pressCount) +" time(s)");
    }
});