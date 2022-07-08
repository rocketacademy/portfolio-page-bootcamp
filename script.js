var i = 0;
var txt = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae atque voluptates blanditiis fuga saepe commodi cupiditate ratione molestias corrupti pariatur dicta quia dignissimos unde, sunt facilis quisquam sit tenetur.`; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("excerpt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
