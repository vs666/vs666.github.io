var i = 0;
var txt = 'Hello World! I am Varul Srivastava'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        console.log("printing ",txt.charAt(i),i);
        if(i<=11)
        document.getElementById("intro1").innerHTML += txt.charAt(i);
        else
        document.getElementById("intro2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
