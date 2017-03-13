var eValue = (a, b, c, d) => {
      let e = ((a + b + c + d)/ 6) * 100;
      if (e > 158.3) {
        e = 158.3;
      }
      if (e < 0) {
        e = 0;
      }
      return e;
    }

module.exports = eValue;
