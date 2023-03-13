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

import {
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

window.onload = () => {
  loadComments();
  loadCommentsSecondEdition();
  loadCommentsFirstEdition();
};
async function loadComments() {
  let q = query(collection(db, "3rdEdition"));
  let querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc._document.data.value.mapValue.fields.text.stringValue);
    let newComment = document.createElement("p");
    newComment.setAttribute("class", "thirdEditionComments");
    newComment.innerText = `${doc._document.data.value.mapValue.fields.text.stringValue}`;
    commentsContainer1.appendChild(newComment);
  });
}

async function getComments() {
  let comments = document.querySelectorAll(".thirdEditionComments");

  console.log(comments);

  for (let i = 0; i < comments.length; i++) {
    await setDoc(doc(db, "3rdEdition", "comment" + `${i}`), {
      text: `${comments[i].innerText}`,
    });
  }
}
let commentsContainer1 = document.querySelector("#commentContainer1");
let post1Submit = document.querySelector("#post1SubmitComment");
let post1Input = document.querySelector("#idForCommentLabel");
let post1ReplyContainer = document.querySelector("#commentContainer");

post1Submit.addEventListener("click", () => {
  let inputValue = post1Input.value;

  let newCommentText = document.createElement("p");
  newCommentText.setAttribute("class", "thirdEditionComments");
  newCommentText.innerText = '"' + inputValue + '"';
  commentsContainer1.appendChild(newCommentText);
  getComments();
});

//
let submitSecondEdition = document.querySelector("#submitCommentSecondEdition");
let inputSecondEdition = document.querySelector(
  "#idForCommentLabelSecondEdition"
);
let commentContainerSecondEdition = document.querySelector(
  "#commentContainerSecondEdition"
);
let commentsContainer2 = document.querySelector("#commentContainer2");
submitSecondEdition.addEventListener("click", () => {
  let inputValue = inputSecondEdition.value;
  let newComment = document.createElement("p");
  newComment.setAttribute("class", "secondEditionComments");
  newComment.innerText = '"' + inputValue + '"';
  commentsContainer2.appendChild(newComment);
  getCommentsSecondEdition();
});
async function getCommentsSecondEdition() {
  let comments = document.querySelectorAll(".secondEditionComments");

  console.log(comments);

  for (let i = 0; i < comments.length; i++) {
    console.log(comments[i].innerHTML);
    await setDoc(doc(db, "2ndEdition", "comment" + `${i}`), {
      text: `${comments[i].innerHTML}`,
    });
  }
}

async function loadCommentsSecondEdition() {
  let q = query(collection(db, "2ndEdition"));
  let querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc._document.data.value.mapValue.fields.text.stringValue);
    let newComment = document.createElement("p");
    newComment.setAttribute("class", "secondEditionComments");
    newComment.innerText = `${doc._document.data.value.mapValue.fields.text.stringValue}`;
    commentContainerSecondEdition.appendChild(newComment);
  });
}

//
let submitFirstEdition = document.querySelector("#submitCommentFirstEdition");
let inputFirstEdition = document.querySelector(
  "#idForCommentLabelFirstEdition"
);
let commentContainerFirstEdition = document.querySelector(
  "#commentContainerFirstEdition"
);
let commentsContainer1Edition = document.querySelector(
  "#commentContainer1Edition"
);

submitFirstEdition.addEventListener("click", () => {
  let inputValue = inputFirstEdition.value;
  let newComment = document.createElement("p");
  newComment.setAttribute("class", "firstEditionComments");
  newComment.innerText = '"' + inputValue + '"';
  commentsContainer1Edition.appendChild(newComment);
  getCommentsFirstEdition();
});
async function getCommentsFirstEdition() {
  let comments = document.querySelectorAll(".firstEditionComments");

  console.log(comments);

  for (let i = 0; i < comments.length; i++) {
    console.log(comments[i].innerHTML);
    await setDoc(doc(db, "1stEdition", "comment" + `${i}`), {
      text: `${comments[i].innerHTML}`,
    });
  }
}

async function loadCommentsFirstEdition() {
  let q = query(collection(db, "1stEdition"));
  let querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc._document.data.value.mapValue.fields.text.stringValue);
    let newComment = document.createElement("p");
    newComment.setAttribute("class", "firstEditionComments");
    newComment.innerText = `${doc._document.data.value.mapValue.fields.text.stringValue}`;
    commentContainerFirstEdition.appendChild(newComment);
  });
}
