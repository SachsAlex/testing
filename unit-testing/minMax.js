function min(a, b) {
  if (a < b) return a;
  if (b < a) return b;
  else return console.log("Fehlerhafte Eingabe");
}

function max(a, b) {
  if (a > b) return a;
  if (b > a) return b;
  else return console.log("Fehlerhafte Eingabe");
}

module.exports.min = min;
module.exports.max = max;
