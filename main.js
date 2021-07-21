
canvas=new fabric.Canvas("mycanvas");
 block_y=1;
 block_x=1;

blockimg_width = 350;
blockimg_height = 430;

var block= "";

function Createblock(getimage) {
    fabric.Image.fromURL(getimage,function (Img) {
        block=Img;
        //set width and height
        block.scaleToWidth(blockimg_width);
        block.scaleToHeight(blockimg_height);
        //set postion,,top=y,left=x
        block.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') {
		Createblock("rr.jpg");
		console.log("r key is pressed")	;

	}
    
	if(keyPressed == '71'){
		Createblock("gr.png");
		block_x = 200;
		console.log("g key is pressed");
	}
	
	if(keyPressed == '89'){
		Createblock("yr.png");
		block_x =350;
		console.log("y key is pressed");
	}

	if(keyPressed == '80'){
		Createblock("pr.png");
		block_x = 600;
		console.log("p key is pressed");
	}

	if(keyPressed == '66'){
	Createblock("br.png");
		block_x = 700;
	console.log("b key is pressed");
	}
	
}

