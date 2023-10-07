function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = 100;

  this.getHeroElement = function () {
    return (
      '<img width="' +
      this.size +
      '"' +
      ' height="' +
      this.size +
      '"' +
      ' src="' +
      this.image +
      '"' +
      ' style="top: ' +
      this.top +
      "px; left:" +
      this.left +
      'px;position:absolute;" />'
    );
  };

  this.moveRight = function () {
    this.left += this.speed;
  };

  this.moveLeft = function () {
    this.left -= this.speed;
  };

  this.moveUp = function () {
    this.top -= this.speed;
  };

  this.moveDown = function () {
    this.top += this.speed;
  };
}

var hero = new Hero("cat.png", 20, 30, 200);

function start() {
  if (hero.left < window.innerWidth - hero.size) {
    hero.moveRight();
  }
  document.getElementById("game").innerHTML = hero.getHeroElement();
  setTimeout(start, 500);
}

document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 37: // Mũi tên trái
      hero.moveLeft();
      break;
    case 38: // Mũi tên lên
      hero.moveUp();
      break;
    case 39: // Mũi tên phải
      hero.moveRight();
      break;
    case 40: // Mũi tên xuống
      hero.moveDown();
      break;
  }
});

start();
