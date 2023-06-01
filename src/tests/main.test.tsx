import '@testing-library/jest-dom';
import {
    describe,
    expect,
    test,
} from 'vitest';
import {
    render,
    screen,
} from '@testing-library/react';

import Fallback from '../pages/Fallback';

describe('Describe', () => {
    test('Test', () => {
        render(<Fallback />);
        expect(document.body).toBeInTheDocument();
        screen.debug();
    });
});
