let counter = 0;
module.exports = {
  incementCounter() {
    counter += 1;
  },
  getCounter() {
    return counter;
  },
};
