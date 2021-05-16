var alienGroup
var bulletGroup
var heartGroup
var bg;
var bgSprite
var protecterImg;
var protecter;
var alien1Img;
var alien1;
var alien2
var alien2Img
var bullet
var bullet2
var bulletImg
var score=0;
var gameState="Play";
var heart
var heart1
var heart2
var heartImage
var boss
var bossImage
var Bossbullet 
var bullet3
var bullet2Img
var explosionAnimation
function preload()
{
bg=loadImage("image/background3.jpg");
protecterImg=loadImage("image/spaceship.png")
alien1Img=loadImage("image/alien3.png");
alien2Img=loadImage("image/alien2.png");
bulletImg=loadImage("image/bullet.png");
bullet2Img=loadImage("image/bullet2.png");
heartImage=loadImage("image/heart.png")
bossImage=loadImage("image/boss.png")

}
function setup()
{
    createCanvas(displayWidth-10,displayHeight-150);
bgSprite=createSprite(displayWidth/2,displayHeight/2,100,100)
bgSprite.addImage(bg);
bgSprite.velocityY=-5
protecter=createSprite(displayWidth/2,displayHeight/2+150,20,20)
boss=createSprite(displayWidth/2,displayHeight/2-200,20,20)
boss.addImage(bossImage)
protecter.addImage(protecterImg)
bulletGroup=new Group ();
}

function draw()
{
background("black")
if(bgSprite.y<0){
    bgSprite.y=bgSprite.height/2
}
if(keyDown(RIGHT_ARROW)){
    protecter.x=protecter.x+10
}

if(keyDown(LEFT_ARROW)){
    protecter.x=protecter.x-10
}
drawSprites()
shoot()
Boss()
Attack()
}
function shoot(){
    if(keyWentDown("space")){
bullet=createSprite(protecter.x,protecter.y,10,10)
bullet.addImage(bulletImg)
bullet.scale=0.5
bullet.velocityY=-10
bulletGroup.add(bullet)
    }
 
}
function Boss(){
    
}
function Attack(){
    if(frameCount%35===0){
    bullet2=createSprite(200,200,20,20)
    bullet2.x=boss.x-60
bullet2.y=boss.y
bullet2.addImage(bullet2Img)
bullet2.velocityY=30
bullet2.lifetime=windowHeight/2
    }
    if(frameCount%30===0){
        bullet3=createSprite(200,200,20,20)
        bullet3.x=boss.x+60
    bullet3.y=boss.y
    bullet3.velocityY=30
    bullet3.addImage(bullet2Img)
    bullet3.lifetime=windowHeight/2
        }
}
