let touch = document.querySelector("#modesensimg");
touch.style.cursor = "pointer";
touch.addEventListener("click", clickfun);

function clickfun(e) {
  window.location = "../HTML/index.html";
}
let womentouch = document.querySelectorAll("#navbar > a");
womentouch.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.innerText === "HOME") {
      ele.style.textDecoration = "underline";
      womentouch[1].style.textDecoration = "none";
      womentouch[2].style.textDecoration = "none";
      womentouch[3].style.textDecoration = "none";
      womentouch[4].style.textDecoration = "none";
    } else if (e.target.innerText === "WOMEN") {
      womentouch[0].style.textDecoration = "none";
      womentouch[2].style.textDecoration = "none";
      womentouch[3].style.textDecoration = "none";
      womentouch[4].style.textDecoration = "none";
      ele.style.textDecoration = "underline";
    } else if (e.target.innerText === "MEN") {
      womentouch[0].style.textDecoration = "none";
      womentouch[1].style.textDecoration = "none";
      womentouch[3].style.textDecoration = "none";
      womentouch[4].style.textDecoration = "none";
      ele.style.textDecoration = "underline";
    } else if (e.target.innerText === "MEN") {
      womentouch[0].style.textDecoration = "none";
      womentouch[1].style.textDecoration = "none";
      womentouch[2].style.textDecoration = "none";
      womentouch[4].style.textDecoration = "none";
      ele.style.textDecoration = "underline";
    } else {
      womentouch[0].style.textDecoration = "none";
      womentouch[1].style.textDecoration = "none";
      womentouch[2].style.textDecoration = "none";
      womentouch[3].style.textDecoration = "none";
      ele.style.textDecoration = "underline";
    }
  });
});
// womentouch.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e.target.innerText);
//   if (e.target.innerText === "HOME") {
//     womentouch.style.textDecoration = "underline";
//   } else if (e.target.innerText === "WOMEN") {
//     let womentouch = document.querySelector("#navbar > a");
//     womentouch.style.textDecoration = "underline";
//   } else if (e.target.innerText === "MEN") {
//     womentouch.style.textDecoration = "underline";
//   } else if (e.target.innerText === "BEAUTY") {
//     womentouch.style.textDecoration = "underline";
//   } else if (e.target.innerText === "KIDSs") {
//     womentouch.style.textDecoration = "underline";
//   }
// });
