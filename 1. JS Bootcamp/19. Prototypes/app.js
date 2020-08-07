function Color(r, g, b) {
  this.r = r;
  this.b = b;
  this.g = g;
}
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  console.log(`rgb(${r},${g},${b})`);
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();
