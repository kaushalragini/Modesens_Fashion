/*
        1. Get the data from source => mensdata
        2. run a loop on mensdata
        foreach (function(e){
            e = {
            image_url:
                "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
            name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
            price: "1170",
            strikedoffprice: "2599",
            }
            - create a new div <name = product_div>
            - create a new img tag
                set src property of img tag
                set css for img tag
            - create a new p/div tag for name 
            - create a new p/div tag for price
            - create a new button tag with name "Add to cart"
            - append in product_div =>  img, p, p, btn
            - append this product_div into large container, which will hold all the product_div
        });
    */

let brandData = [
  { img_url: "https://cdn.modesens.com/banner/20220708-SSENSE-logo.png" },
  { img_url: "https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png" },
  { img_url: "https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png" },
  { img_url: "https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png" },
  {
    img_url: "https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png",
  },
  { img_url: "https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png" },
  {
    img_url: "https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png",
  },
  {
    img_url: "https://cdn.modesens.com/banner/20220708-ITALIST-logo.png",
  },
  {
    img_url: "https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png",
  },
  {
    img_url: "https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png",
  },
  {
    img_url: "https://cdn.modesens.com/banner/20211014-GUCCI-logo.png",
  },
  {
    img_url: "https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png",
  },
];
communityData = [
  {
    img_url: "https://cdn.modesens.com/umedia/1625472s?w=400&",
  },
  {
    img_url: "https://cdn.modesens.com/umedia/1624922s?w=400&",
  },
  {
    img_url: "https://cdn.modesens.com/umedia/1593167s?w=400&",
  },
  {
    img_url: "https://cdn.modesens.com/umedia/14180s?w=400&",
  },
];
trendingData = [
  {
    img_url: "https://cdn.modesens.com/product/34097035_17?w=400&",
    brand: "ALEXANDER MCQUEEN",
    name: "Graffiti Logo Tech Baseball Cap In Black",
    price: "$158 - $484",
  },
  {
    img_url: "https://cdn.modesens.com/availability/44744803_1?w=400&",
    brand: "VERSACE",
    name: "Silk Shorts With Heritage Baroque Print In Multicolour",
    price: "$321 - $1375",
  },
  {
    img_url: "https://cdn.modesens.com/availability/25618365_1?w=400&",
    brand: "SAINT LAURENT",
    name: "Black Embroidered Logo Espadrilles",
    price: "$332 - $607",
  },
  {
    img_url: "https://cdn.modesens.com/product/20004583_255?w=400&",
    brand: "GIVENCHY",
    name: "Black Logo Flat Sandals",
    price: "$197 - $356",
  },
];
brandData.forEach(function (ele) {
  let brandDiv = document.createElement("div");
  brandDiv.setAttribute("class", "branddiv");
  let brandImg = document.createElement("img");
  brandImg.setAttribute("src", ele.img_url);
  brandDiv.append(brandImg);
  document.querySelector("#main").append(brandDiv);
});
trendingData.forEach(function (ele) {
  let trendingDiv = document.createElement("div");
  let imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "personimg");
  let infoDiv = document.createElement("div");
  infoDiv.setAttribute("class", "allinfo");
  trendingDiv.setAttribute("class", "trendingdata");
  let trendingImg = document.createElement("img");
  trendingImg.setAttribute("src", ele.img_url);
  let trendingBrandName = document.createElement("p");
  trendingBrandName.innerText = ele.brand;
  let trendingName = document.createElement("p");
  trendingName.innerText = ele.name;
  let trendingPrice = document.createElement("p");
  trendingPrice.innerText = ele.price;
  imgDiv.append(trendingImg);
  infoDiv.append(trendingBrandName, trendingName, trendingPrice),
    trendingDiv.append(imgDiv, infoDiv);
  document.querySelector("#trending").append(trendingDiv);
});

communityData.forEach(function (ele) {
  let communityDiv = document.createElement("div");
  communityDiv.setAttribute("class", "commdiv");
  let communityImg = document.createElement("img");
  communityImg.setAttribute("src", ele.img_url);
  communityDiv.append(communityImg);
  document.querySelector("#communityPost").append(communityDiv);
});

document.querySelector(".btnshop > button").addEventListener("click", showMore);
function showMore(e) {
  // window.open("menlanding.html").focus();
  wimdow.location = "menlanding.html";
}
document.querySelector(".btnshop > button").addEventListener("click", shopMore);
function shopMore(e) {
  // window.open("menlanding.html").focus();
  window.location = "menlanding.html";
}
