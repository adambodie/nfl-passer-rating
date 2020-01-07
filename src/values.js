export const aValue = (completions, attempts) => {
	if (attempts < 0 || completions < 0) {
		return "Must be greater than or equal to zero";
	}
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

export const bValue = (yards, attempts) => {
	if (yards != 0 && attempts == 0) {
		return "Need at least one attempt to produce a B value";
	}
	let b = ((yards/attempts) - 3) * 0.25;
	if (b > 2.375) {
		b = 2.375;
	}
	if (b < 0) {
		b = 0;
	}
	return b;
}

export const cValue = (touchdowns, attempts) => {
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

export const dValue = (interceptions, attempts) => {
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

export const eValue = (completions, attempts, yards, touchdowns, interceptions) => {
	let a = parseFloat(aValue(completions, attempts));
	let b = parseFloat(bValue(yards, attempts));
	let c = parseFloat(cValue(touchdowns, attempts));
	let d = parseFloat(dValue(interceptions, attempts));
	let e = ((a + b + c + d)/ 6) * 100;
	if (e > 158.3) {
		e = 158.3;
	}
	if (e < 0) {
		e = 0;
	}
	return parseFloat(e.toFixed(1));
}
