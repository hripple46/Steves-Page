let textContent = document.querySelector("#summary");

fetch(
  "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/entries/4jzM8GakCN7nQRM2Uhjs0z?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    let entries = response.fields.folder;
    console.log(entries);
    for (let i = 0; i < entries.length; i++) {
      let entryID = entries[i].sys.id;
      console.log(entryID);
      fetch(
        "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/entries/" +
          `${entryID}` +
          "?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          let textRetrieve = response.fields.summary;
          console.log(textRetrieve);
          let paragraph = document.createElement("p");
          paragraph.innerText = `${textRetrieve}`;
          textContent.appendChild(paragraph);
        });
    }
  });
