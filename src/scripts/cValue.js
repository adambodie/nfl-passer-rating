var cValue = (touchdowns, attempts) => {
    if (attempts < 0 || touchdowns < 0) {
      return "Must be greater than or equal to zero";
    }
    if (touchdowns > attempts) {
      return "More touchdowns than attempts not allowed";
    }
      let c = (touchdowns/attempts) * 20;
      if (c > 2.375) {
        c = 2.375;
      }
      if (c < 0) {
        c = 0;
      }
      return c;
    }

module.exports = cValue;
