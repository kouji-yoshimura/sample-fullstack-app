export const MINI = 'mini';
export const TINY = 'tiny';
export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';
export const BIG = 'big';
export const HUGE = 'huge';
export const MASSIVE = 'massive';

export const SizeList = [MINI, TINY, SMALL, MEDIUM, LARGE, BIG, HUGE, MASSIVE] as const;
export type Size = typeof SizeList[number];
