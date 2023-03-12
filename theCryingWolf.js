let textContent = document.querySelector("#summary");
let textEntries = [];

fetch(
  "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/entries/4jzM8GakCN7nQRM2Uhjs0z?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let entries = data.fields.folder;
    console.log(entries);
    let promise = Promise.resolve(); // create an initial promise
    for (let i = 0; i < entries.length; i++) {
      let entryID = entries[i].sys.id;
      promise = promise // chain each promise to the previous one
        .then(function () {
          return fetch(
            "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/entries/" +
              `${entryID}` +
              "?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
          );
        })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let textRetrieve = data.fields.summary;
          textEntries.push(`${textRetrieve}`);
        });
    }
    console.log(textEntries);
    return promise; // return the final promise
  })
  .then(function () {
    debugger;
    addText(textEntries, textContent);
  })
  .catch(function (error) {
    // handle any error
    console.error(error);
  });

function addText(textEntries, textContent) {
  for (let i = 0; i < textEntries.length; i++) {
    let paragraph = document.createElement("p");
    console.log(textEntries[i]);
    paragraph.innerText = `${textEntries[i]}`;
    textContent.appendChild(paragraph);
  }
}
