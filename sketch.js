var movingRect,fixedRect,obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green"

  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green"

  obj1=createSprite(100,100,50,50);
  obj1.shapeColor="green"
  
  obj2=createSprite(200,100,50,50);
  obj2.shapeColor="green"
  obj2.velocityX=3
  obj2.velocityY=-3

  obj3=createSprite(300,100,50,50);
  obj3.shapeColor="green"

  obj4=createSprite(400,100,50,50);
  obj4.shapeColor="green"

}

function draw() {
  background(0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY

if(isTouching(movingRect,obj4)){
  movingRect.shapeColor="blue"
  obj1.shapeColor="blue"
  obj2.shapeColor="red"
  obj3.shapeColor="orange"
  obj4.shapeColor="blue"

}else{
  movingRect.shapeColor="green"
  obj1.shapeColor="green"
}

  bounceOff(movingRect,obj2);
  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2){
   object1.velocityX=object1.velocityX*(-1)
   object2.velocityX=object2.velocityX*(-1)
  
  }if (object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
      object1.velocityY=object1.velocityY*(-1)
      object2.velocityY=object2.velocityY*(-1)
    }

  }

function isTouching(object1,object2){

  if (object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2
   && object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
    return true
     
    }else
    {
   return false                             
}
}
