function bouncingBall(h, b, w) {
  if (h > 0 && b > 0 && b < 1 && w < h) {
    let seen = 1;
    let ballHeight = h * b;
    while (ballHeight > w) {
      seen += 2;
      ballHeight *= b;
    }
    return seen;
  }
  return -1;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);