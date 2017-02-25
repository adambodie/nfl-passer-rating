var dValue = (interceptions, attempts) => {
      let d = 2.375 - ((interceptions/attempts) * 25);
      if (d > 2.375) {
        d = 2.375;
      }
      if (d < 0) {
        d = 0;
      }
      return d;
    }

module.exports = dValue;
