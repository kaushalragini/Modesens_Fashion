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
    img_url: "https://cdn.modesens.com/availability/50934261?w=400&",
    brnadName: "BURBERRY",
    name: "Ansdell Logo-print Cotton-jersey Hoodie In Black",
    price: "$505 - $840",
  },
  {
    img_url: "https://cdn.modesens.com/availability/40117155_1?w=400&",
    brnadName: "GIVENCHY",
    name: "Logo-embroidered Cotton-twill Baseball Cap In Black",
    price: "$305 - $480",
  },
  {
    img_url: "https://cdn.modesens.com/availability/53784355?w=400&",
    brnadName: "VERSACE",
    name: "Odissea Medusa Head Lace-up Sneakers In Black",
    price: "$518 - $925",
  },
  {
    img_url: "https://cdn.modesens.com/availability/45835346?w=400&",
    brnadName: "VALENTINO",
    name: "Sequin-embellished Embroidered Cotton-jersey T-shirt In White",
    price: "$282 - $1173",
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
  trendingBrandName.innerText = ele.brnadName;
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
