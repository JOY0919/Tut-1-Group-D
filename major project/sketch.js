

function setup() {
  createCanvas(400, 400);
}
    
function draw() {
  background(255);
  noLoop()
  drawRandomLines()
  drawfixedRects();
  randomRect();
  drawColouredHorizontalRoad(min(width, height) / 40 * 11);
  drawColouredVerticalRoad(min(width, height) / 40 * 11);
  drawColouredVerticalRoad(min(width, height) / 40 * 7);
  drawColouredHorizontalRoad(min(width, height) / 40 * 7);
  drawColouredVerticalRoad(min(width, height) / 40 * 17);
}

function drawRandomLines(){
  // Set the stroke color and weight for the yellow lines
  stroke(255, 255, 0);
  strokeWeight( 15 );
  
  let yPositions = [0, height];
  for (let i = 0; i < 5; i++){
    yPositions.push(random(50,height - 50));
  }
  yPositions.sort((a,b) => a-b);

  for (let y of yPositions ){
    line(0, y, width,y);
  }

  let xPositions = [0, width];
  for (let j = 0; j < 5; j++){
    xPositions.push(random(50,width - 30));
  }
  xPositions.sort((a,b) => a-b);

  for (let x of xPositions ){
      line(x, 0, x, height);
  }

}



//Zichen Zhang
//Generate red, blue and gray squares that appear in different positions each time they refresh
//Some fixed squares, representing objects（such as some buildings) that don't change

function drawfixedRects(){
  fill('red');
  rect(30,60,50,80);

  fill('blue');
  rect(250,60,50,80);

  fill ('grey');
  rect (45,290,80,50);

  fill('red');
  rect(280,280,70,90);
}

//Random rects, representing objects that change over time

function randomRect(){
  let colors = ['red','grey','blue'];

  //Fixed the size and location of rects.
  let fixedRects = [ 
    { x:30, y:60, w:50, h:80},
    { x:250, y:60, w:50, h:80},
    { x:45, y:290, w:80, h:50},
    { x:280, y:280, w:70, h:90},
  ];

  for (let i=0; i< 5; i++) {
    let rectSize = random(20,80);
    let x, y;
    let overlapping = true;
    
    //while loops are helpful for repeating statements while a condition is true. They're like if statements that repeat.
    //Loop through the locations until find one that doesn't overlap
    while (overlapping){
      x = random(0, 330);
      y = random(0, 330);
      overlapping = false;

      //Check to see if random rects overlaps the fixed rects
      for (let rect of fixedRects){
        let horizontalOverlap = false;
        let verticalOverlap = false;
      
        //Determine whether there is horizontal overlap
        if (x < rect.x + rect.w) {
          if (x + rectSize > rect.x){
            horizontalOverlap = true;
          }
        }
        //Determine whether there is vertical overlap
        if (y < rect.y + rect.h){
          if (y + rectSize > rect.y){
            verticalOverlap = true;
          }
        }

        //If both directions have overlapping, set overlapping to true
        if (horizontalOverlap){
          if (verticalOverlap){
            overlapping = true;
            break;
          }
        }
      }
    }

    let color = random(colors);
    fill(color);
    noStroke();
    rect(x,y,rectSize, rectSize);
  }
}

// Xueying Wang
// The function of drawing fixed yellow lines with three-color squares on it
function drawColouredHorizontalRoad(y){
  let boxSize = min(width, height) / 40;
  let boxNumbers = min(width, height) / boxSize;
  let colourChoice;
  for (let i = 0; i < boxNumbers; i ++){
    let x = i * boxSize;
    if(i % 2 === 0){
      colourChoice = 'yellow';
    } else if (i % 6 == 1 || i % 6 == 5){
      if(random(1) < 0.7){
        colourChoice = 'yellow';
      } else {
        colourChoice = 'grey';
      }
    } else {
      colourChoice = random(['red', 'blue']);
    }

    fill(colourChoice);
    noStroke();
    rect(x, y, boxSize, boxSize);
  }
}

function drawColouredVerticalRoad(x){
  let boxSize = min(width, height) / 40;
  let boxNumbers = min(width, height) / boxSize;
  let colourChoice;
  for (let i = 0; i < boxNumbers; i ++){
    let y = i * boxSize;
    if(i % 2 === 0){
      colourChoice = 'yellow';
    } else if (i % 6 == 1 || i % 6 == 5){
      if(random(1) < 0.7){
        colourChoice = 'yellow';
      } else {
        colourChoice = 'grey';
      }
    } else {
      colourChoice = random(['red', 'blue']);
    }

    fill(colourChoice);
    noStroke();
    rect(x, y, boxSize, boxSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}