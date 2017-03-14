var dValue = (interceptions, attempts) => {
      if (attempts < 0 || interceptions < 0) {
        return "Must be greater than or equal to zero";
      }
      if (interceptions > attempts) {
        return "More interceptions than attempts not allowed";
      }    
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
