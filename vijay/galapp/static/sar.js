var pics = [
    {
        image: "Screenshot 2025-12-26 194510.png",
        title: "nike boot",
        info: "rs=5000"
    },
    {
        image: "Screenshot 2025-12-26 195504.png",
        title: "adidas boot",
        info: "rs=4000"
    },
    {
        image: "Screenshot 2025-12-26 195746.png",
        title: "puma boot",
        info: "rs=3000"
    },
    {
        image: "Screenshot 2025-12-26 200131.png",
        title: "nivia boot",
        info: "rs=2000"
    },
    {
      image: "Screenshot 2025-12-26 200319.png",
        title: "sega boot",
        info: "rs=1000"
    }
];

var i = 0; 

var photo     = document.getElementById("photo");
var titleText = document.getElementById("title-text");
var infoText  = document.getElementById("info-text");
var countText = document.getElementById("count-text");

function show() {
    photo.src           = pics[i].image;
    titleText.innerHTML = pics[i].title;
    infoText.innerHTML  = pics[i].info;
    countText.innerHTML = (i + 1) + " / " + pics.length;
}
function next() {
    i++;
    if (i >= pics.length) {
        i = 0;
    }
    show();
}
function prev() {
    i--;
    if (i < 0) {
        i = pics.length - 1;
    }
    show();
}
show();