let touch1 = document.querySelectorAll(".imgsocial2");
touch1.forEach(function (ele) {
  ele.style.cursor = "pointer";
  ele.addEventListener("click", clickfun);
});

function clickfun(e) {
  console.log(e.target.className);
  if (e.target.className === "pintrest") {
    window.location = "https://in.pinterest.com/modesens/";
  } else if (e.target.className === "twitter") {
    window.location = "https://twitter.com/modesens";
  } else if (e.target.className === "instragram") {
    window.location = "https://www.instagram.com/modesens/";
  } else if (e.target.className === "facebook")
    window.location = "https://www.facebook.com/modesens/";
  else if (e.target.className === "Modesens")
    window.location = "https://weibo.com/modesens";
  else if (e.target.className === "wechat")
    window.location = "https://weibo.com/modesens";
  else if (e.target.className === "reddit")
    window.location = "https://reddit.com/modesens";
  else if (e.target.className === "discord")
    window.location = "https://www.reddit.com/r/ModeSens/";
}
// let touch2 = document.querySelector(".twitter");
// touch2.style.cursor = "pointer";
// touch2.addEventListener("click", clickfun);

// function clickfun(e) {
//   window.location = "https://twitter.com/modesens";
// }
// let touch3 = document.querySelector(".instragram");
// touch3.style.cursor = "pointer";
// touch3.addEventListener("click", clickfun);

// function clickfun(e) {
//   window.location = "https://www.instagram.com/modesens/";
// }
// let touch4 = document.querySelector(".facebook");
// touch4.style.cursor = "pointer";
// touch4.addEventListener("click", clickfun);

// function clickfun(e) {
//   window.location = "https://www.facebook.com/modesens/";
// }
// let touch5 = document.querySelector(".Modesens");
// touch5.style.cursor = "pointer";
// touch5.addEventListener("click", clickfun);

// function clickfun(e) {
//   window.location = "https://weibo.com/modesens";
// }
// let touch6 = document.querySelector(".wechat");
// touch6.style.cursor = "pointer";
// touch6.addEventListener("click", clickfun);

// function clickfun(e) {
//   window.location = "https://weibo.com/modesens";
// }

// let touch7 = document.querySelector(".reddit");
// touch7.style.cursor = "pointer";
// touch7.addEventListener("click", clickfun);

// function clickfun(e) {
//   window.location = "https://reddit.com/modesens";
// }
// let touch8 = document.querySelector(".discord");
// touch8.style.cursor = "pointer";
// touch8.addEventListener("click", clickfun);

// function clickfun(e) {
//   window.location = "https://www.reddit.com/r/ModeSens/";
// }

// let newDownload = document.querySelector(".btnfooter");
// newDownload.addEventListener("click", function () {
//   window.location = "https://apps.apple.com/app/id976201094";
// });
// let newInstall = document.querySelector(".install");
// newDownload.addEventListener("click", function () {
//   window.location =
//     "https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb/";
// });

let touch2 = document.querySelectorAll(".btnfooter");
touch2.forEach(function (ele) {
  ele.addEventListener("click", newFun);
});

function newFun(e) {
  let className = e.target.className.split(" ");
  console.log(className);
  if (className[1] === "Download") {
    window.location =
      "https://play.google.com/store/apps/details?id=com.modesens.androidapp";
  } else {
    window.location =
      "https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb/";
  }
}
