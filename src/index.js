// @flow

export const createLogBaseFn = (base: number) => (n: number): number => {
	return Math.log(base) / Math.log(n);
};

export const log2 = createLogBaseFn(2);

export const log10 = createLogBaseFn(10);

export const mtof = (note: number, tuning: number = 440): number => {
	return Math.pow(2, (note - 69) / 12) * tuning;
};

export const ftom = (frequency: number): number => {
	return (12 * log2(frequency / 440)) + 69;
};
