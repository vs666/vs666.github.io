var i = 0;
var txt = 'Hello World! I am Varul Srivastava'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */
var state = 1
var c_index = 0;
var mode = 'delete';
var other_stuff = [
    "a Computer Science Undergrad",
    "doing research in Blockchains and Game Theory",
    "from Allahabad, India",
]
var other_stuff_2 = [
    "like to play football",
    "like to play cricket",
    "try my hands on guitar and piano",
    "love to connect with new people"
]

function typeWriter() {
    if (i < txt.length && state == 1) {
        // console.log("printing ", txt.charAt(i), i);
        if (i <= 11)
            document.getElementById("intro1").innerHTML += txt.charAt(i);
        else
            document.getElementById("intro2").innerHTML += txt.charAt(i);
        i++;
        if (i == 12) {
            document.getElementById("intro2").innerHTML = '';
        }
        if (i == txt.length) {
            state++;
            speed=200;
        }
        setTimeout(typeWriter, speed);
    } else if (state == 2) {
        speed=60;
        if (document.getElementById("intro2").innerHTML.toString() != "  I am " && mode == 'delete') {
            msg = document.getElementById("intro2").innerHTML.toString()
                // console.log(msg, msg.length)
            document.getElementById("intro2").innerHTML = msg.substr(0, msg.length - 1);
            if (document.getElementById("intro2").innerHTML.toString().length == 6) {
                speed=200;
                mode = 'update'
            }
        } else if (c_index < other_stuff.length) {
            msg = document.getElementById("intro2").innerHTML.toString()
            if (msg.length - 6 != other_stuff[c_index].length) {
                document.getElementById("intro2").innerHTML = msg + other_stuff[c_index][msg.length - 6];
            } else {
                speed=200;
                mode = 'delete';
                c_index++;
            }
        } else {
            state++;
            speed=200;
            c_index = 0;
            mode = 'delete'
        }
        setTimeout(typeWriter, speed);
    } else if (state == 3) {
        speed=60;
        if (document.getElementById("intro2").innerHTML.toString() != "  I " && mode == 'delete') {
            msg = document.getElementById("intro2").innerHTML.toString()
                // console.log(msg, msg.length)
            document.getElementById("intro2").innerHTML = msg.substr(0, msg.length - 1);
            if (document.getElementById("intro2").innerHTML.toString().length == 3) {
                speed=200;
                mode = 'update'
            }
        } else if (c_index < other_stuff_2.length) {
            msg = document.getElementById("intro2").innerHTML.toString()
                // console.log(msg, msg.length - 3, other_stuff_2[c_index], other_stuff_2[c_index].length)
            if (msg.length - 3 < other_stuff_2[c_index].length) {
                document.getElementById("intro2").innerHTML = msg + other_stuff_2[c_index][msg.length - 3];
            } else {
                mode = 'delete';
                speed=200;
                c_index++;
            }
        } else {
            state = 1;
            speed=200;
            mode = 'delete';
            i = 12;
            c_index = 0;
            document.getElementById("intro2").innerHTML = ''
        }
        setTimeout(typeWriter, speed);
    }
}

// Initialize and add the map
function initMap() {
    // The location of lab
    const lab = {lat: 17.445241836765497, lng: 78.34968199009113}
    // The map, centered at lab
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 19,
      center: lab,
    });
    // The marker, positioned at lab
    const marker = new google.maps.Marker({
      position: lab,
      map: map,
    });
  }
  
  window.initMap = initMap;