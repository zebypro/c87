var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	
        fabric.image.fromUrl("BirthdayImage.jpg", function (img){
    block_image_object = img;
    
    block_image_object_object.scaleToWidth(150);
    block_image_object_object.scaleToHeight(140);
    block_image_object.set0({
    
        top:0,
        left:0
    });
    canvas.add(block_image_object);
    });
	
}

function playSound(){
	x.play();
}
