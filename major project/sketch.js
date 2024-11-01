function setup() {
  createCanvas(400, 400);
    background(255);
  
  // Set the stroke color and weight for the yellow lines
  stroke(225,225.0);
  strokeWeight( 10 );
  
  let y = 0;
  for (let i = 0; i < 5; i++){
    line(0, y, width,y);
    y += random(50,80);
  }
  
  let x = 0;
  for (let j =0; j < 8; j++) {
    line(x, 0, x, height);
    x +=random(30,60) ;
  }
}
