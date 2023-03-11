//git import { createClient } from "contentful-management";
let post1Submit = document.querySelector("#post1SubmitComment");
let post1Input = document.querySelector("#idForCommentLabel");
let post1ReplyContainer = document.querySelector("#commentContainer");

// let client = createClient({
//   accessToken: "CFPAT-hhV_PyfF0-PVbMBAKXHQ8u6Dt4O1LmWfojMGqz2m97I",
// });

// client
//   .getSpace("qbdplr5aogh4")
//   .then((space) => space.getEnvironment("master-2023-01-30"))
//   .then((environment) =>
//     environment.createEntry("replies", {
//       fields: {
//         title: {
//           "en-US": "Reply",
//         },
//         body: {
//           "en-US": "This is awesome!",
//         },
//       },
//     })
//   )
//   .then((entry) => console.log(entry))
//   .catch(console.error);

post1Submit.addEventListener("click", () => {
  let inputValue = post1Input.value;
  let newComment = document.createElement("div");
  newComment.innerHTML = '"' + inputValue + '"';
  post1ReplyContainer.appendChild(newComment);
});
