var player ;
var enmy1,enmy2, enmy3, enmy4,enmy5 ,enmy6 ,enmy7
var shoot
var bullet
function preload (){
plright = loadImage("player.png")
plleft = loadImage("player2.png")
pl = loadImage("player3.png")

en2 = loadImage("monster2.png")
en3 = loadImage("monster3.png")
en4 = loadImage("monster4.png")
en5 = loadImage("monster5.png")
en6 = loadImage("monster6.png")

bulet = loadImage("bulletright1.png")
bulet1 = loadImage("bulletleft.png")
shot = loadImage("fire.png")

bck = loadImage("bckgrnd.jpg")

}
function setup() {
  createCanvas(1000,700);
  player = createSprite(500,600,50,50)
  player.addImage(pl)
  player.scale=0.4

  shoot = createSprite(800,600,30,30)
  shoot.addImage(shot)
  shoot.scale=0.19

 enmyGroup = new Group();
  
}

function draw() {
  background(bck);  
  drawSprites();
  bullet = createSprite(500,600,30,30)
  bullet.debug= true;
  //bullet.x =player.x
  //bullet.y = player.y
bullet.visible=false;
enmyGroup.setDepthEach(bullet.depth)
if (mousePressedOver(shoot)){



}

  if (keyDown("up")){
player.y = player.y-10
bullet.y = player.y
  }
  if (keyDown("down")){
    player.y = player.y+10
    bullet.y = player.y
  }
  if(keyDown("right")){
  //  player.x= player.x+10;
  player.addImage(plright)
  player.scale =1
bullet.addImage(bulet)
//bullet.velocityX=10
bullet.scale=0.19
bullet.velocityX=2
bullet.visible=true
  }


  
  if(keyDown("left")){
   // player.x = player.x-10
    player.addImage(plleft)
 bullet.visible=true;
 bullet.addImage(bulet1)
bullet.velocityX=-2;
bullet.scale=0.19

  }
  
  if(frameCount %400===0){
    enemy= createSprite(950,random(200,700),30,30)
    enemy.scale= 0.25
    var monster= Math.round(random(2,6))
    switch(monster){
      case 2: enemy.addImage(en2)
              enemy.velocityX=-2
      break;
      case 3: enemy.addImage(en3)
              enemy.x= 50
              enemy.velocityX=2
              break;
        case 4: enemy.addImage(en4)
             enemy.velocityX=-2
        break;
        case 5:enemy.addImage(en5)
        enemy.x= 50
        enemy.velocityX=2
        break;
               
        case 6:enemy.addImage(en6)
        enemy.velocityX=-2
        break;
        default:break;
         
    }
    
 enmyGroup.add(enemy);

 if(bullet.isTouching(enmyGroup)){
  enmyGroup.destroyEach();
  // enmyGroup.setVisibleEach(false)
     bullet.destroy();

}
  
 // enemies();

}
}

// function enemies ()
// {

//   if(bullet.collide(enmyGroup)){
//     // enmyGroup.destroyEach();
//     enmyGroup.setVisibleEach(false)
//       bullet.destroy();
//      }
// if  (frameCount%300===0) {
//   enmy1 = createSprite(50,random(200,700),30,30)
//   enmy1.velocityX = 2
//   enmy1.addImage(en4)
//   enmy1.scale=0.25
//   enmyGroup.add(enmy1)
//   enmy1.debug=true;
 
//   /*if(enmy1.isTouching(bullet)){
//     enmy1.destroy();
//     bullet.destroy();
//     console.log("enmydies")
//    }*/


//   enmy4 = createSprite(950,random(200,700),30,30)
//   enmy4.velocityX = -2
//   enmy4.addImage(en2)
//   enmy4.scale=0.25
//   enmyGroup.add(enmy4)
//   // // if(enmy4.isTouching(bullet)){
//   //   enmy4.destroy();
//   //   bullet.destroy();
//   //  }
// }

// if (frameCount%400===0) {
//   enmy2 = createSprite(50,random(200,700),30,30)
//   enmy2.velocityX = 2
// enmy2.addImage(en2)
// enmy2.scale = 0.25
// enmyGroup.add(enmy2)

// // if(enmy2.isTouching(bullet)){
// //   enmy2.destroy();
// //   bullet.destroy();
// //  }
//   enmy5 = createSprite(950,random(200,700),30,30)
//   enmy5.velocityX = -2
//   enmy5.addImage(en5)
//   enmy5.scale = 0.25
//   enmyGroup.add(enmy5)
//   // if(enmy5.isTouching(bullet)){
//   //   enmy5.destroy();
//   //   bullet.destroy();
//   //  }
// }

// if (frameCount%200===0){


//   enmy3 = createSprite(50,random(200,700),30,30)
//   enmy3.velocityX = 2
//   enmy3.addImage(en3)
//   enmy3.scale=0.25
//   enmyGroup.add(enmy3)
//   // if(enmy3.isTouching(bullet)){
//   //   enmy3.destroy();
//   //   bullet.destroy();
//   //  }

//   enmy6 = createSprite(950,random(200,700),30,30)
//   enmy6.velocityX = -2
//   enmy6.addImage(en6)
//   enmy6.scale = 0.25
//   enmyGroup.add(enmy6)
//   // if(enmy6.isTouching(bullet)){
//   //   enmy6.destroy();
//   //   bullet.destroy();
//   //  }
// }

// }


// function enemys(){
//   if(frameCount %400===0){
// enemy= createSprite(950,random(200,700),30,30)
// enemy.scale= 0.25
// var monster= Math.round(random(2,6))
// switch(monster){
//   case 2: enemy.addImage(en2)
//           enemy.velocityX=-2
//   break;
//   case 3: enemy.addImage(en3)
//           enemy.x= 50
//           enemy.velocityX=2
//           break;
//     case 4: enemy.addImage(en4)
//          enemy.velocityX=-2
//     break;
//     case 5:enemy.addImage(en5)
//     enemy.x= 50
//     enemy.velocityX=2
//     break;
           
//     case 6:enemy.addImage(en6)
//     enemy.velocityX=-2
//     break;
//     default:break;
     
// }

// enmyGroup.add(enemy);

//   }



  
// 