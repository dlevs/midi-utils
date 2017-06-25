// @flow

const DEFUALT_TUNING = 440;
const NOTE_OFFSET = 69;
const NOTES_PER_OCTAVE = 12;

export const createLogBaseFn = (base: number) => (n: number): number => {
	return Math.log(base) / Math.log(n);
};

export const log2 = createLogBaseFn(2);

export const log10 = createLogBaseFn(10);

export const mtof = (note: number, tuning: number = DEFUALT_TUNING): number => {
	return Math.pow(2, (note - NOTE_OFFSET) / NOTES_PER_OCTAVE) * tuning;
};

export const ftom = (frequency: number, tuning: number = DEFUALT_TUNING): number => {
	return (NOTES_PER_OCTAVE * log2(frequency / tuning)) + NOTE_OFFSET;
};
