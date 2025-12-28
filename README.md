# Ex.07 Design of Interactive Image Gallery
## Date:26/12/25

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
<html>
<head>
    <meta charset="UTF-8">
    <title>boot Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <h1 class="heading">BOOTS</h1>
        <p class="small-text">nike . adidas. sega. puma. nivia.</p>

        <div class="image-area">
            <img src="Screenshot 2025-12-26 194510.png" id="photo" alt="universe picture">

            <p class="title" id="title-text">NIKE BOOT</p>
            <p class="info" id="info-text">
                Ghost of the Uchihas
            </p>
        </div>

        <div class="buttons">
            <button onclick="prev()">Previous</button>
            <button onclick="next()">Next</button>
        </div>

        <p class="count" id="count-text">1 / 6</p>
    </div>

    <footer class="footer">
        &copy; ANURANJAN B
    </footer>

    <script src="sar.js"></script>
</body>
</html>

style.css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    background: url("Screenshot 2025-12-28 192605.png") no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: rgb(5, 0, 0);
}
.box {
    width: 90%;
    max-width: 600px;
    margin-left:460px;
    padding: 20px;
    
    border-radius: 15px;
    margin-top:68px;
    background: urlno-repeat center center fixed;
}
.heading {
    font-size: 32px;
    margin-bottom: 4px;
    margin-top:5px;
}
.small-text {
    font-size: 20px;
    margin-bottom: 15px;
    color: #d2caca;
}
.image-area img {
    margin-top:20px;
    width: 100%;
    max-width:400px;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid #e92525;
}
.title {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
}
.info {
    margin-top: 4px;
    font-size: 14px;
}
.buttons {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
}
.buttons button {
    width: 120px;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: #ffd4ec;
    color: #2b1022;
}
.count {
    margin-top: 10px;
    font-size: 13px;
    color: #cdd4ff;
}
.footer {
    margin-left:75px;
    font-size: 25px;
    padding: 8px;
    color: #e5e7ff;
}


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
```
## OUTPUT:
![alt text](<Screenshot 2025-12-28 193919.png>)
![alt text](<Screenshot 2025-12-28 193907.png>)
![alt text](<Screenshot 2025-12-28 193838.png>)
![alt text](<Screenshot 2025-12-28 193851.png>)
![alt text](<Screenshot 2025-12-28 193750.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
