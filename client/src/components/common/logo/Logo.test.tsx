import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from './Logo';

let typographyElement: HTMLElement;
let iconElement: HTMLElement;

beforeEach(() => {
	render(<Logo />);
	typographyElement = screen.getByRole('heading');
	iconElement = screen.getByLabelText('Music video icon');
});

describe('(Component) Logo', () => {
	it('Should render Typography on screen', () => {
		expect(typographyElement).toBeInTheDocument();
	});
	it('Should render icon on screen', () => {
		expect(iconElement).toBeInTheDocument();
	});
	it('Should render Typography element with variant "h6"', () => {
		expect(typographyElement).toHaveClass('MuiTypography-h6');
	});
	it('Should render Typography element with text content "eMuzyka"', () => {
		expect(typographyElement).toHaveTextContent('eMuzyka');
	});
	it('Should render Typography element with color "inherit"', () => {
		expect(typographyElement).toHaveStyle('color:inherit');
	});
});
