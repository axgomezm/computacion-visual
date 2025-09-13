import gifAnimation.*;
GifMaker gifExport;
void setup() {
  size(600, 600);       
  ellipseMode(CENTER);  
  gifExport = new GifMaker(this, "elipse.gif");
  gifExport.setRepeat(0);   
  gifExport.setDelay(33);   
}
void draw() {
  background(255);        
  fill(255, 150, 0);     
  noStroke();

  pushMatrix();
  translate(width/2, height/2);
  
  float angle = radians(frameCount % 360);
  rotate(angle);
  float s = 1.0 + 0.5 * sin(radians(frameCount));
  scale(s);
  
  ellipse(0, 0, 200, 120);
  popMatrix();
  
  gifExport.addFrame();
  if (frameCount == 120) {
    gifExport.finish();
    noLoop();
  }
}
