let touch = document.querySelector("#modesensimg");
touch.style.cursor = "pointer";
touch.addEventListener("click", clickfun);

function clickfun(e) {
  window.location = "index.html";
}
let carttouch = document.querySelector("#bag_icon");
carttouch.style.cursor = "pointer";
carttouch.addEventListener("click", cartFun);

function cartFun(e) {
  window.location = "productDetail.html";
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
      window.location = "index.html";
    } else if (e.target.innerText === "WOMEN") {
      womentouch[0].style.textDecoration = "none";
      womentouch[2].style.textDecoration = "none";
      womentouch[3].style.textDecoration = "none";
      womentouch[4].style.textDecoration = "none";
      ele.style.textDecoration = "underline";
      window.location = "women.html";
    } else if (e.target.innerText === "MEN") {
      womentouch[0].style.textDecoration = "none";
      womentouch[1].style.textDecoration = "none";
      womentouch[3].style.textDecoration = "none";
      womentouch[4].style.textDecoration = "none";
      ele.style.textDecoration = "underline";
      window.location = "mens.html";
    } else if (e.target.innerText === "BEAUTY") {
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

var navbar = document.getElementById("container");
var sticky = navbar.offsetTop;

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let username = document.querySelector("#username").value;
let password = document.querySelector("#password").value;
let modal_close = document.querySelector(".btn-close");
modal_close.addEventListener("click", function () {
  username = "";
  password = "";
});

document.querySelector("form").addEventListener("submit", function () {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let modal = document.querySelector(".modal");
  console.log(username, password);
  if (username === "ragini" && password === "abcd") {
    localStorage.setItem("login", JSON.stringify({ username: "ragini" }));
    alert("login successful!!!");
  } else {
    alert("incorrect credentials!!!");
  }
  modal("hide");
});
