
var canvas = new fabric.canvas('my_canvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.image.formURL(get_image, function (Img) {
	block_image_obj = Img;

	    block_image_obj.scaleToWidth(50);
		block_image_obj.scaleToHeight(50);
		block_image_obj.set({
		top:block_y
		left:block_x
		})
		 canvas.add(hole_obj);
		})
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)

	
		keyPressed = e.keyCode;
		console.log(keyPressed);
		if((ball_x==hole_x)&&(ball_y==hole_y)){
			canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML= "You have hit the goal";
		document.getElementById("myCanvas").style.borderColor="red";
        console.log(keyPressed);




		

	if(keyPressed == '82')
	{
		new_image('rr1.png')
	    console.log("r")
	}
	if(keyPressed == '71')
	{
		new_image('gr.png')
	    console.log("g")

	}
	
	if(keyPressed == '89')
	{
		new_image('yr.png')
	    console.log("y")
	}
	if(keyPressed == '80')
	{
		new_image('pr.png')
	    console.log("p")
	}
	if(keyPressed == '66')
	{
		new_image('br.png')
	    console.log("b")
	}
	
}

