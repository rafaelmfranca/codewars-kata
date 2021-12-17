const dirReduc = (arr) => (
  arr.reduce((acc, dir) => (acc[acc.length - 1] === getOpposite(dir) ? acc.pop() : acc.push(dir), acc), [])
);

const getOpposite = (dir) => {
  const opposite = {"NORTH": "SOUTH", "EAST": "WEST", "SOUTH": "NORTH", "WEST": "EAST"};
  return opposite[dir];
};

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])