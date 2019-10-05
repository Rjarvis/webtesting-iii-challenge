// Test away!
import React from 'react';
import { render, fireEvent, act } from 'react-testing-library'

import Controls from './Controls';

it('renders Controls locked', () => {
    const { getByText, findByText } = render(<Controls />);
    getByText("notAThing");
    findByText("notAThing");
});