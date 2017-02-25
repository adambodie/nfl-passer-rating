var cValue = (touchdowns, attempts) => {
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
