var mouseEvent="empty";
var lastpositionXlastpositionofY;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListner("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListner("mouseleave" , mouseleave);
function my_mouseleave(e)
{
mouseEvent = "mouseleave"
}

canvas.addEventListner("mouseup" , mouseup);
function my_mouseup(e)
{
mouseEvent = "mouseUP"
}
canvas.addEventListner("mousemove" , mousemove);
function my_mousemove(e)
{
current_p_of_mouse_x = e.clientX - canvas.offsetLeft;
current_p_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx. linewidth = width_of_line;
    
    console.log("Last position of x and y cordinates = ");
    console.log("x=" + last_position_of_x + "y= " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y cordinates = ");  
    console.log("x=" + current_position_of_x + "y= " + current_position_of_y);
    ctx.lineTo(current_p_of_mouse_x, current_p_of_mouse_y)
ctx.stroke();
}
last_position_of_x = current_p_of_mouse_x;
last_position_of_y = current_p_of_mouse_y;
}


