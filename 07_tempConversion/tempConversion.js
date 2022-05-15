const ctof = function(celsius) {
  let fahr = celsius*1.8 + 32;
  console.log(`fahr: ${fahr}`);
  return Math.round(fahr * 10) / 10;
};

const ftoc = function(f) {
  let celsius = (f - 32) * 5 / 9;
  console.log(`celsius: ${celsius}`);
  return Math.round(celsius * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
