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

let scaryStories = document.querySelector("#scaryStories");
scaryStories.addEventListener("click", () => {
  window.location.href = "scaryStories.html";
});

let header_Name = document.querySelector("#name");
header_Name.addEventListener("click", () => {
  window.location.href = "index.html";
});

let other = document.querySelector("#firstLines");
other.addEventListener("click", () => {
  window.location.href = "crowdFirstLines.html";
});

let blog = document.querySelector("#blog");
blog.addEventListener("click", () => {
  window.location.href = "blog.html";
});

//the following block of code adds closeable pop up to home screen
// Check if the current URL is the home page
document.addEventListener("DOMContentLoaded", (event) => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    // Show the popup
    document.getElementById("popup-overlay").style.display = "block";

    // Get the close button element
    var closeButton = document.querySelector(".close-btn");

    // When the user clicks on the close button, hide the popup
    closeButton.onclick = function () {
      document.getElementById("popup-overlay").style.display = "none";
    };

    // When the user clicks anywhere outside of the popup content, hide the popup
    window.onclick = function (event) {
      if (event.target == document.getElementById("popup-overlay")) {
        document.getElementById("popup-overlay").style.display = "none";
      }
    };
  }
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
