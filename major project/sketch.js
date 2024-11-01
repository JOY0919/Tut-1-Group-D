function setup() {
  createCanvas(400, 400);
    background(255);
  
  // Set the stroke color and weight for the yellow lines
  stroke(255, 255, 0);
  strokeWeight( 10 );
  
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
