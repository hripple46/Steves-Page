// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: " AIzaSyAUtRMmxV86C9of855d6fUSywGfoB0VAto",
  authDomain: "stephen-ripple.firebaseapp.com",
  projectId: "stephen-ripple",
  storageBucket: "stephen-ripple.appspot.com",
  messagingSenderId: "1025418447495",
  appId: "1:1025418447495:web:b11b429c91e85fcebbc622",
  measurementId: "G-08NFGRMJNS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const db = getFirestore(app);
getFirestore(app);

async function createDoc() {
  await setDoc(doc(db, "crowdsourcedFirstLines", "comment2"), {
    name: "comment",
    text: "This is great!",
  });
}
createDoc();
setDoc;
let post1Submit = document.querySelector("#post1SubmitComment");
let post1Input = document.querySelector("#idForCommentLabel");
let post1ReplyContainer = document.querySelector("#commentContainer");

post1Submit.addEventListener("click", () => {
  let inputValue = post1Input.value;
  let newComment = document.createElement("div");
  newComment.innerHTML = '"' + inputValue + '"';
  post1ReplyContainer.appendChild(newComment);
});
