import React from 'react';
import ReactDOM from 'react-dom';
import Rating from '../components/Rating';
import { aValue, bValue, cValue, dValue, eValue } from '../values';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Rating />, div);
	ReactDOM.unmountComponentAtNode(div);
});


describe('aValue', () => {
	test('aValue to equal 1', () => {
		expect(aValue(10, 20)).toBe(1);
	});

	test('aValue to equal 2.375', () => {
		expect(aValue(20, 20)).toBe(2.375);
	});

	test('aValue to equal 0', () => {
		expect(aValue(0, 1)).toBe(0);
	});
});

describe('bValue', () => {
	test('bValue to equal 1', () => {
		expect(bValue(280, 40)).toBe(1);
	});

	test('bValue to equal 2.375', () => {
		expect(bValue(300, 20)).toBe(2.375);
	});

	test('bValue to equal 0', () => {
		expect(bValue(0, 1)).toBe(0);
	});
});

describe('cValue', () => {
	test('cValue to equal 1', () => {
		expect(cValue(1, 20)).toBe(1);
	});

	test('cValue to equal 2.375', () => {
		expect(cValue(1, 1)).toBe(2.375);
	});

	test('cValue to equal 0', () => {
		expect(cValue(0, 20)).toBe(0);
	});
});

describe('dValue', () => {
	test('dValue to equal 1', () => {
		expect(dValue(1, 25)).toBe(1.375);
	});

	test('dValue to equal 2.375', () => {
		expect(dValue(1, 1)).toBe(0);
	});

	test('dValue to equal 0', () => {
		expect(dValue(0, 20)).toBe(2.375);
	});
});


describe('eValue', () => {
	test('passer rating to equal 90.4', () => {
		expect(eValue(15, 25, 250, 1, 1)).toBe(90.4);
	});

	test('passer rating to equal 0', () => {
		expect(eValue(0, 1, 0, 0, 1)).toBe(0);
	});

	test('passer rating to equal 158.3', () => {
		expect(eValue(25, 30, 400, 4, 0)).toBe(158.3);
	});
});
