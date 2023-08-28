var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["eb7c48e5-c852-49ae-89d2-1667ffad1b9c","9316701f-6831-4ce7-83e3-a85bd28d67c7","e2a704b8-b7b9-4154-9e28-af7c6e4335cd","9438071a-b8c2-4ff0-889f-b0c494e3cb7f","b59a4cba-aace-4bca-9f66-c8f3d46e5232"],"propsByKey":{"eb7c48e5-c852-49ae-89d2-1667ffad1b9c":{"name":"rover_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jTOPCqemZeDLi_OeTaRvzhS4wRXkkoz8/category_icons/rover.png","frameSize":{"x":378,"y":325},"frameCount":1,"looping":true,"frameDelay":2,"version":"jTOPCqemZeDLi_OeTaRvzhS4wRXkkoz8","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":378,"y":325},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jTOPCqemZeDLi_OeTaRvzhS4wRXkkoz8/category_icons/rover.png"},"9316701f-6831-4ce7-83e3-a85bd28d67c7":{"name":"birdside_01_1","sourceUrl":null,"frameSize":{"x":400,"y":202},"frameCount":1,"looping":true,"frameDelay":12,"version":"GXuD6PgE7Mzw7eWjfpagw2MlO_dgYuKf","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":202},"rootRelativePath":"assets/9316701f-6831-4ce7-83e3-a85bd28d67c7.png"},"e2a704b8-b7b9-4154-9e28-af7c6e4335cd":{"name":"birdside_07_1","sourceUrl":null,"frameSize":{"x":400,"y":214},"frameCount":1,"looping":true,"frameDelay":12,"version":"2NnrD1mEnwdN8Mz7ZjCBcX9G._gtWSat","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":214},"rootRelativePath":"assets/e2a704b8-b7b9-4154-9e28-af7c6e4335cd.png"},"9438071a-b8c2-4ff0-889f-b0c494e3cb7f":{"name":"red_fruit_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Fa5nIehzr0ZEHfa2m6PSf61_rSLAXUnB/category_food/red_fruit.png","frameSize":{"x":366,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"Fa5nIehzr0ZEHfa2m6PSf61_rSLAXUnB","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":366,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Fa5nIehzr0ZEHfa2m6PSf61_rSLAXUnB/category_food/red_fruit.png"},"b59a4cba-aace-4bca-9f66-c8f3d46e5232":{"name":"bg_landscape06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl/category_backgrounds/bg_landscape06.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl/category_backgrounds/bg_landscape06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
b.setAnimation("bg_landscape06_1");

var bola = createSprite(200, 200, 15, 15);
var raquete = createSprite(335, 200, 10, 100);
var raquete2 = createSprite(65, 200, 10, 100);

raquete.shapeColor = "blue";
bola.shapeColor = "red";
raquete2.shapeColor = "blue";

raquete2.setAnimation("birdside_07_1");
raquete2.scale=0.3;

raquete.setAnimation("birdside_01_1");
raquete.scale=0.3;

bola.setAnimation("red_fruit_1");
bola.scale=0.1;



createEdgeSprites();







function draw() {
  background("white");
  drawSprites();
  
  raquete.collide(edges);
  raquete2.collide(edges);
  
 if (bola.isTouching(raquete2) || bola.isTouching(raquete) ) {
    
   playSound("assets/category_animals/chick.mp3", false);
     
  }
   
  
  
if (keyDown("up")) { 
 raquete.y -= 5 ;
}

if (keyDown("down")) {
 raquete.y += 5 ;
}

if (keyDown("ENTER")) {
 bola.velocityX = 4;
   bola.velocityY = 5;
     
}
raquete2.y = bola.y ;

for (var i = 0; i <= 400; i=i+20) {
  line(200, i, 200, i+10);
}
if (bola.x<0 || bola.x>400) {
  resetbola()};
  



bola.bounceOff(raquete2);
bola.bounceOff(raquete);
bola.bounceOff(topEdge);
bola.bounceOff(bottomEdge);
}
function resetbola (){
  bola.x=200;
  bola.y=200;
  bola.velocityY=0;
  bola.velocityX=0;
} 





















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
