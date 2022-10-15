let img;
let x = 0;
let y = 0;

function load() {
  img = new Sprite("images/ship.png");
}

function update() {
  x++;
  y++;
}

function draw(pCtx) {
  img.draw(pCtx);
}
