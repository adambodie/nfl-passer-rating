let aValue = (completions, attempts) => {
  if (attempts < completions) {
    return "More completions than attempts not allowed";
  } else {
      let a = ((completions/attempts) - 0.3) * 5;
      if (a > 2.375) {
        a = 2.375;
      }
      if (a < 0) {
        a = 0;
      }
      return a;
    }
}

module.exports = aValue;
