function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
console.log(triple(5));
//  BTS
// const triple = function(x){
//     return x*3;
// }

function makeBetweenFunc(min, max) {
  return function (val) {
    return val >= min && val <= max;
  };
}
let isChild = makeBetweenFunc(0, 18);
console.log(isChild(5)); // true
console.log(isChild(67)); //false
