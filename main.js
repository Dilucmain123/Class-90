canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.



background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

rover_width=100;
rover_height=90;

//Create "add()" function


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}
//defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

                                         //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

//Create "uploadBackground()" function.

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
                              
                                         //Draw image of background

//Create "uploadrover()" function.

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

                                        //Draw image of rover


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    } 
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == "37")
    {
        left();
        console.log("left");
    }
    if(keyPressed =='39')
{
    right();
    console.log("right");
}
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



