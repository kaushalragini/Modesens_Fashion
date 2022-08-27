let data = JSON.parse(localStorage.getItem("cart")) || [];
let totalQunatity = data.length;
document.querySelector(".totalproduct").innerText =
  "Total Products: " + totalQunatity;
let totalPrice = 0;
data.forEach(function (val) {
  totalPrice += Number(val.price.split(" - ")[1].substring(1));
});
document.querySelector(".totalprice").innerText = "Total Price: $" + totalPrice;
localStorage.setItem("total_price", totalPrice);
function displayProducts(data) {
  document.querySelector("#main2").innerText = "";
  data.forEach(function (ele, i) {
    //   // create a new div (name=productDiv)
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "cont");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "contimg");
    let productDiv = document.createElement("div");
    productDiv.setAttribute("class", "contdata");

    //   // create a new img tag, set src
    let productImg = document.createElement("img");
    productImg.setAttribute("src", ele.img_url);
    productImg.setAttribute("class", "img_css");
    //   // create a new p/div tag for name
    let productBrand = document.createElement("p");
    productBrand.innerText = ele.brand;
    productBrand.setAttribute("class", "para1");

    let productName = document.createElement("p");
    productName.innerText = ele.name;
    productName.setAttribute("class", "para2");

    let productPrice = document.createElement("p");
    productPrice.innerText = ele.price;

    productPrice.setAttribute("class", "para3");

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove Item";
    removeButton.setAttribute("class", "removebtn");
    removeButton.addEventListener("click", removeFun);
    function removeFun(e) {
      // alert(i, data[i]);
      // let currentData = JSON.parse(localStorage.getItem("cart"));
      // currentData.splice(i, 1);
      data.splice(i, 1);
      e.target.parentNode.parentNode.remove();
      localStorage.setItem("cart", JSON.stringify(data));
      document.querySelector(".totalproduct").innerText =
        "Total Products: " + data.length;
      let tp = localStorage.getItem("total_price");
      tp = tp - Number(ele.price.split(" - ")[1].substring(1));
      localStorage.setItem("total_price", tp);
      document.querySelector(".totalprice").innerText = "Total Price: $" + tp;
      displayProducts(data);
    }
    imgDiv.append(productImg);
    productDiv.append(productBrand, productName, productPrice, removeButton);
    mainDiv.append(imgDiv, productDiv);
    document.querySelector("#main2").append(mainDiv);
  });
}

displayProducts(data);
