let circleColor;

function setup() {
  createCanvas(400, 400);
  // 建立一個依照視窗大小的畫布
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為HSB
  colorMode(HSB);
  // 畫布的顏色為#335c6722的HSB
  background(150, 50, 40, 0.13);
  circleColor = color(random(360), 100, 50);
}

function draw() {
  // background(0, 0, 87);
  // 畫圓的顏色為180, 50%, 40%
  fill(180, 50, 40);
  // 畫圓的邊框為30, 100%, 90%
  stroke(30, 100, 90);
  // 畫圓的邊框寬度為5
  strokeWeight(5);
  // 畫方框的位置為視窗中心，以方框中心點為基礎，寬高為100
  rectMode(CENTER);
  // rect(windowWidth/2, windowHeight/2, 100, 100);
  // 畫圓的位置為視窗中心，寬高為100
  // 圓顏色為0, 100%, 50%
  // fill(0, 100, 50);
  // ellipse(windowWidth/2, windowHeight/2, 100, 100);
  // 畫圓的位置隨滑鼠移動而改變，顏色在滑鼠按下時改變
  let hueValue = map(mouseX, 0, windowWidth, 0, 360);
  fill(hueValue, 100, 50);
  ellipse(mouseX, mouseY, 100, 100);
}
