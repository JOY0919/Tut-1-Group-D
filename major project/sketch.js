function setup() {
  createCanvas(400, 400);
    background(255);
  
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


//Zichen Zhang
//Generate red, blue and gray squares that appear in different positions each time they refresh

//Some fixed squares, representing objects（such as some buildings) that don't change
fill('red');
rect(30,60,50,80);

fill('blue');
rect(250,60,50,80);

fill ('grey');
rect (45,290,80,50);

fill('red');
rect(280,280,70,90);


//Random squares, representing objects that change over time

randomRect();
}


function randomRect(){
  let colors = ['red','grey','blue'];

  for (let i=0; i< 5; i++) {
    let x = random(0, 350);
    let y = random(0, 350);
    let rectSize = random(20,100);



    let color = random(colors);
    fill(color);
    noStroke();
    rect(x,y,rectSize, rectSize);


  }
}








