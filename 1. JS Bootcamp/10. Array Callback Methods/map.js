const nums = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

// Double each element
const doubles = nums.map(function (val) {
  return val * 2;
});
console.log(doubles);

// Return obj with keys : num,isEven

const res = nums.map(function (val) {
  //   if (val % 2 == 0) {
  //     return { num: val, isEven: true };
  //   } else {
  //     return { num: val, isEven: false };
  //   }
  return {
    num: val,
    isEven: val % 2 === 0,
  };
});
console.log(res);

// change asap -> A.S.A.P
const change = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
console.log(change);
