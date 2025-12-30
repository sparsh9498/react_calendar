import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calender from './calender';

describe('Calender Component', () => {
    test('renders month and year', () => {
        render(<Calender date={new Date(2024, 5, 1)} />);
        expect(screen.getByText(/June 2024/i)).toBeInTheDocument();
    });

    test('renders all weekday headers', () => {
        render(<Calender date={new Date(2024, 5, 1)} />);
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
            expect(screen.getByText(day)).toBeInTheDocument();
        });
    });
});
