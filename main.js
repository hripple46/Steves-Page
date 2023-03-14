//code to make ui better on IOS Safari
document.body.addEventListener("touchstart", function () {});

let cryingWolf = document.querySelector("#cryingWolf");

cryingWolf.addEventListener("click", () => {
  window.location.href = "theCryingWolf.html";
});

//let about = document.querySelector("#")

let downAndAway = document.querySelector("#downAndAway");
downAndAway.addEventListener("click", () => {
  window.location.href = "downAndAway.html";
});

let header_Name = document.querySelector("#name");
header_Name.addEventListener("click", () => {
  window.location.href = "index.html";
});

let other = document.querySelector("#firstLines");
other.addEventListener("click", () => {
  window.location.href = "crowdFirstLines.html";
});

//this fetches text updates for 'lostandaway'page
/*fetch(
  "https://cdn.contentful.com/spaces/qbdplr5aogh4/environments/master/entries?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
  //"https://cdn.contentful.com/spaces/qbdplr5aogh4/entries/2iBUtmIEsNoCOQsvQkyH4W?access_token=cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    for (let keys in response) {
      if (`${keys}` == "items") {
        for (let i in response[keys]) {
          console.log(
            response[keys][i].fields.lostandaway.content[0].content[0].value
          );
        }
      }
    }
  });*/

//cj67-ZjOiTRefmEvkVqPvMFWX3RwPUXVwYWVQTKqCFE
//qbdplr5aogh4
