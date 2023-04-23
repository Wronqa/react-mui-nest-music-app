import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import CustomLink from './CustomLink';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('(Component) Custom link', () => {
	const path = '/test';
	const text = 'Zaloguj sie';

	it('Should render text passed as props', async () => {
		act(() => {
			render(
				<MemoryRouter initialEntries={['/main']}>
					<Routes>
						<Route
							path="/main"
							element={<CustomLink text={text} path={path} />}
						/>
					</Routes>
				</MemoryRouter>
			);
		});

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('Link should redirect to path passed as props', async () => {
		act(() => {
			render(
				<MemoryRouter initialEntries={['/main']}>
					<Routes>
						<Route
							path="/main"
							element={<CustomLink text={text} path={path} />}
						/>
						<Route path="/test" element={<div>TEST</div>} />
					</Routes>
				</MemoryRouter>
			);
		});

		const linkElement = screen.getByText(text);

		act(() => {
			userEvent.click(linkElement);
		});

		await waitFor(() => {
			expect(screen.getByText(/TEST/i)).toBeInTheDocument();
		});
	});
});
