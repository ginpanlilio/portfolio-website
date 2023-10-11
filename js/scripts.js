console.log("Welcome to my website. Learn more about what I do.");

var name = "Gin";
var age = 41;
var hobbies = "jogging, rowing, yoga, journaling, wine and coffee chats";
var infoAbout = {
    name: name,
    age: age,
    hobbies: hobbies,
}

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
      }
    }