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
    <title>Interactive Image Gallery</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <header class="header">
        <h1>IMAGE GALLERY</h1>
    </header>

    <div class="gallery-container">
        <div class="gallery-card">
            <img id="galleryImage" src="Screenshot 2025-12-26 194510.png" alt="Gallery Image">
            <p class="caption" id="caption">NIKE BOOT</p>

            <div class="buttons">
                <button onclick="prevImage()">Previous</button>
                <button onclick="nextImage()">Next</button>
            </div>
        </div>
    </div>

    <footer class="footer">
       ANURANJAN B (25003110)
    </footer>

    <script>
        let gallery = [
            { src: "Screenshot 2025-12-26 194510.png", text: "NIKE BOOT" }
            { src: "Screenshot 2025-12-26 195504.png", text: "ADIDAS BOOT" },
            { src: "Screenshot 2025-12-26 195746.png", text: "PUMA BOOT" },
            { src: "Screenshot 2025-12-26 200131.png", text: "NIVIA" },
            { src: "Screenshot 2025-12-26 200319.png", text: "SEGA BOOT" },
        ];
        let index = 0;
        function nextImage() 
        {
            index++;
            if (index >= gallery.length) 
            {
                index = 0;
            }
            updateImage();
        }
        function prevImage() 
        {
            index--;
            if (index < 0) 
            {
                index = gallery.length - 1;
            }
            updateImage();
        }
        function updateImage() 
        {
            document.getElementById("galleryImage").src = gallery[index].src;
            document.getElementById("caption").innerText = gallery[index].text;
        }
    </script>
</body>
</html>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body
{
    background-color: darkgray;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header 
{
    background-color: rgb(160, 152, 238);
    color: beige;
    text-align: center;
    padding: 15px;
}

.gallery-container 
{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery-card 
{
    background-color:rgb(175, 71, 78);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgb(160, 133, 188);
    text-align: center;
    width: 380px;
}

.gallery-card img 
{
    width: 250px;     
    height: 200px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.caption 
{
    margin: 15px 0;
    font-size: 16px;
    font-weight: bold;
}

.buttons 
{
    display: flex;
    justify-content: center;
    gap: 15px;
}

.buttons button 
{
    background-color: rgb(102, 136, 211);
    color: rgb(111, 172, 210);
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
}

.buttons button:hover 
{
    background-color: rgb(198, 60, 60);
}

.footer 
{
    background-color: rgb(220, 161, 53);
    color:rgb(17, 2, 2);
    text-align: center;
    padding: 12px;
}
```
## OUTPUT:
![alt text](<Screenshot 2025-12-26 211345.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
