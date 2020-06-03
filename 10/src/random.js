function ran(a, b) {
  return Math.floor(Math.random() * b) + a;
}

function ran2(a) {
  return Math.floor(Math.random()) + a - 1;
}

function ran3(a, b) {
  if (a != Number || b != Number) {
    return -1;
  }
  return Math.floor(Math.random() * b) + a;
}
export { ran, ran2, ran3 };
