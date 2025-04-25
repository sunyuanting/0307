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
  // 畫方框的位置為視窗中心，以方框中心點為基礎，寬高為100
  rectMode(CENTER);
  // rect(windowWidth/2, windowHeight/2, 100, 100);
  // 畫圓的位置為視窗中心，寬高為100
  // 圓顏色為#9e2a2b
  fill("#9e2a2b");
  // ellipse(windowWidth/2, windowHeight/2, 100, 100);
  
  // 依照上面的圓和方框，從視窗最左邊，產生連續的圖案，讓大小隨滑鼠左右移動而改變
  for (let i = 0; i < windowWidth; i += 100) {
          fill("#9e2a2b");
      stroke("#e09f3e");
      strokeWeight(5);
      rect(i, windowHeight/2, mouseX, 100);
      }
  for (let i = 0; i < windowWidth; i += 100) {
          fill("#335c67");
      stroke("#e09f3e");
      strokeWeight(5);
      ellipse(i, windowHeight/2, mouseX, 100);
      }
}
