var car;
var database,position;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    var locofchild = database.ref("car/position");
    locofchild.on("value",readPosition,showError);
    car = createSprite(250,250,10,10);
    car.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref("car/position").set({
       x:car.x+x,
       y:car.y+y
   })
}
function readPosition(data)
{
    position = data.val();
    car.x = position.x;
    car.y = position.y;
}

function showError()
{
    console.log("there is a Error!!!!");
}
