//Module pattern

var fightMode = (function () {
  var harry = "potter";
  var voldemort = "He who must not be named";
  function fight(string1, string2) {
    if (string1.length > string2.length) {
      return string1 + " wins congrats from " + harry;
    } else {
      return string2 + " wins congrats from " + voldemort;
    }
  }
  return {
    fight: fight,
  };
})();

console.log(fightMode.fight("ashish", "kachhadiya"));
