import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';
import '@testing-library/jest-dom';

test('getCurrentYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
    });

test('getFooterCopy returns the correct string when true', () => {
const result = getFooterCopy(true);
expect(result).toBe('Holberton School');
});

test('getFooterCopy returns the correct string when false', () => {
const result = getFooterCopy(false);
expect(result).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the correct string', () => {
const result = getLatestNotification();
expect(result).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
