import aValue from '../scripts/aValue';
import bValue from '../scripts/bValue';
import cValue from '../scripts/cValue';
import dValue from '../scripts/dValue';

var eValue = (completions, attempts, yards, touchdowns, interceptions) => {
      let a = parseFloat(aValue(completions, attempts));
      let b = parseFloat(bValue(yards, attempts));
      let c = parseFloat(cValue(touchdowns, attempts));
      let d = parseFloat(dValue(interceptions, attempts));
      let e = ((a + b + c + d)/ 6) * 100;
      if (e > 158.3) {
        e = 158.3;
      }
      if (e < 0) {
        let e = 0;
      }
      return parseFloat(e.toFixed(1));
    }

module.exports = eValue;
