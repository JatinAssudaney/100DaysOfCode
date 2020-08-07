const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const getStats = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return { min, max, sum, avg };
};
const stats = getStats(reviews);
console.log(stats);
