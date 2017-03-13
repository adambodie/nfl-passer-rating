var bValue = (yards, attempts) => {

      let b = ((yards/attempts) - 3) * 0.25;
      if (b > 2.375) {
        b = 2.375;
      }
      if (b < 0) {
        b = 0;
      }
      return b;
    }

module.exports = bValue;
