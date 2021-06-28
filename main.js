canvas= new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

player_object="";
block_image_object= "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({

      top: player_y,
      left: player_x  
     });
canvas.add(player_object);

    }
    )
}

function blocks_update(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        player_object=Img;

     player_object.scaleToWidth(block_image_width);
     player_object.scaleToHeight(block_image_height);
     player_object.set({

      top: player_y,
      left: player_x  
     });
canvas.add(player_object);

    }
    )
}