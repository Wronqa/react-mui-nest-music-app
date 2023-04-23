import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('(Component) Navbar', () => {
	it('Should render children on the screen', () => {
		render(
			<Navbar>
				<div>Test</div>
			</Navbar>
		);
		expect(screen.getByText(/Test/i)).toBeInTheDocument();
	});
});
