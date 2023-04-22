fetch(
  "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/entries?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
)
  .then((response) => response.json())
  .then((data) => data.items)
  .then((data) => {
    getBlogPosts(data);
  });

let getBlogPosts = (data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    if (data[i].sys.contentType.sys.id == "blogPost") {
      let textNodes = data[i].fields.entry.content;
      let textEntry = "";
      textNodes.forEach((element) => {
        console.log(element.content[0].value);
        textEntry += element.content[0].value + "\n\n";
      });

      console.log("Image:");
      console.log(data[i].sys.id);
      let imageID = data[i].sys.id;
      getImages(textEntry, imageID);
    }
  }
};
async function getImages(text, id) {
  await fetch(
    "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/assets/" +
      id +
      "?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
  )
    .then((response) =>
      response.json().then((data) => {
        let image = data.fields.file.url;
        console.log(data.fields.file.url);
        postEntry(text, image);
      })
    )
    .catch((error) => {
      console.log(error);
      postEntry(text, "");
    });
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
  let bottomBorder = document.createElement("div");
  bottomBorder.setAttribute("class", "border-bottom");
  let container = document.querySelector(".container");
  container.appendChild(bottomBorder);

  document.querySelector(".container").appendChild(blogPost);
};
