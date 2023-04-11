fetch(
  "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/entries?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
)
  .then((response) => response.json())
  .then((data) => data.items)
  .then((data) => {
    console.log(data);
    getBlogPosts(data);
  });

let getBlogPosts = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].sys.contentType.sys.id == "blogPost") {
      console.log(data[i].fields);
      let textEntry = data[i].fields.entry.content[0].content[0].value;
      console.log("Text:" + textEntry);
      let imageID = data[i].fields.image.sys.id;
      console.log("Image ID:" + imageID);
      getImages(textEntry, imageID);
    }
  }
};
async function getImages(text, id) {
  await fetch(
    "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/assets/" +
      id +
      "?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
  ).then((response) =>
    response.json().then((data) => {
      let image = data.fields.file.url;
      console.log(data.fields.file.url);
      postEntry(text, image);
    })
  );
}
let postEntry = (text, image) => {
  let blogPost = document.createElement("div");
  blogPost.classList.add("blogPost");
  let blogText = document.createElement("p");
  blogText.innerText = text;
  blogPost.appendChild(blogText);
  let blogImage = document.createElement("img");
  blogImage.src = image;
  blogPost.appendChild(blogImage);

  document.querySelector(".container").appendChild(blogPost);
};
