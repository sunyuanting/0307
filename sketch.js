function setup() {
  createCanvas(400, 400);
  // 建立一個依照視窗大小的畫布
  createCanvas(windowWidth, windowHeight);
  // 畫布的顏色為fff3b0
  background("#fff3b0");
}

function draw() {
  background(220);
  // 畫圓的顏色為#335c67
  fill("#335c67");
  // 畫圓的邊框為#e09f3e
  stroke("#e09f3e");
  // 畫圓的邊框寬度為5
  strokeWeight(5); 
  // 畫圓的位置為視窗中心，寬高為100
  // ellipse(windowWidth/2, windowHeight/2, 100, 100); 
  // 依照上面圓顏色與邊框顏色，從視窗最左邊，產生連續的圓
  for (let i = 0; i < windowWidth; i += 100) {
    fill("#335c67");
    stroke("#e09f3e");
    strokeWeight(5);
    ellipse(i, windowHeight/2, 100, 100);
  }
}
