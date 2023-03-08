let post1Submit = document.querySelector("#post1SubmitComment");
let post1Input = document.querySelector("#idForCommentLabel");
let post1ReplyContainer = document.querySelector("#commentContainer");

post1Submit.addEventListener("click", () => {
  let inputValue = post1Input.value;
  let newComment = document.createElement("div");
  newComment.innerHTML = '"' + inputValue + '"';
  post1ReplyContainer.appendChild(newComment);
});
