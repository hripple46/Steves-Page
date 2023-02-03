let textContent = document.querySelector("#summary");

//this fetches text updates for 'lostandaway'page
fetch(
  "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/entries?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE&content_type=theCryingWolf"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    let textRetrieve = response.items[0].fields.summary;
    return textRetrieve;
  })
  .then(function (textRetrieve) {
    console.log(textRetrieve);
    let paragraph = document.createElement("p");
    paragraph.innerText = `${textRetrieve}`;
    textContent.appendChild(paragraph);
  });
