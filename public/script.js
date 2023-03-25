import { database } from "./firebase.js";
import {
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

let contactForm = document.getElementById("form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  writeData(name.value, email.value, message.value);
  alert(
    `Hi ${name.value}! Thanks for sending me the message. I will try to get back to you as soon as I can!`
  );
  name.value = "";
  email.value = "";
  message.value = "";
});

function writeData(sender, email, message) {
  const messagesRef = ref(database, "messages");
  const newMessageRef = push(messagesRef);
  set(newMessageRef, {
    sender: sender,
    email: email,
    message: message,
  });
}
