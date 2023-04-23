import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('(Component) Form', () => {
	const handleClickMock = jest
		.fn()
		.mockImplementation((e) => e.preventDefault());
	let options = {
		signup: true,
		forgotPassword: true,
	};
	const text = 'Passed text';

	it('Should render text passed by props correctly', () => {
		render(
			<Form text={text} options={options} handleClick={handleClickMock}>
				<div>Content</div>
			</Form>
		);

		expect(screen.getAllByText(text)).toHaveLength(2);
	});

	it('Should render text passed by props in button', () => {
		render(
			<Form text={text} options={options} handleClick={handleClickMock}>
				<div>Content</div>
			</Form>
		);

		expect(screen.getByRole('button')).toHaveTextContent(text);
	});

	it('Should render children passed by props in document', () => {
		const childElement = 'Test';

		render(
			<Form text={text} handleClick={handleClickMock} options={options}>
				<div>{childElement}</div>
			</Form>
		);

		expect(screen.getByText(childElement)).toBeInTheDocument();
	});

	it('Button should call handleClick function on click', () => {
		render(
			<Form text={text} handleClick={handleClickMock} options={options}>
				<div>Content</div>
			</Form>
		);
		const button = screen.getByRole('button');

		fireEvent.submit(button);

		waitFor(() => expect(handleClickMock).toBeCalled());
	});

	it('Should display text "Zapomniałeś hasła?" when fortgotPassword is true', () => {
		options = {
			signup: true,
			forgotPassword: true,
		};

		render(
			<Form text={text} options={options} handleClick={handleClickMock}>
				<div>Content</div>
			</Form>
		);

		expect(screen.getByText('Zapomniałeś hasła?')).toBeInTheDocument();
	});

	it('Should redirect when user click to "Zapomniałeś hasła?" text', async () => {
		render(
			<MemoryRouter initialEntries={['/auth/signin']}>
				<Routes>
					<Route
						path="/auth/signin"
						element={
							<Form
								text="Sign In"
								handleClick={handleClickMock}
								options={options}
							>
								<div>Children content</div>
							</Form>
						}
					/>
					<Route
						path="/auth/forgot"
						element={<div>Forgot Password Page</div>}
					/>
				</Routes>
			</MemoryRouter>
		);

		const forgotPasswordLink = screen.getByText('Zapomniałeś hasła?');
		userEvent.click(forgotPasswordLink);

		waitFor(() => {
			expect(screen.getByText(/Forgot Password Page/i)).toBeInTheDocument();
		});
	});

	it('Should render "Nie masz konta? Zarejestruj się!" when signup option is passed as true', () => {
		render(
			<Form text={text} options={options} handleClick={handleClickMock}>
				<div>Content</div>
			</Form>
		);

		expect(
			screen.getByText('Nie masz konta? Zarejestruj się!')
		).toBeInTheDocument();
	});

	it('Should redirect when user click to "Nie masz konta? Zarejestruj się!" text', () => {
		render(
			<MemoryRouter initialEntries={['/auth/signin']}>
				<Routes>
					<Route
						path="/auth/signin"
						element={
							<Form
								text="Sign In"
								handleClick={handleClickMock}
								options={options}
							>
								<div>Children content</div>
							</Form>
						}
					/>
					<Route path="/auth/signup" element={<div>Signup page</div>} />
				</Routes>
			</MemoryRouter>
		);

		const textElement = screen.getByText('Nie masz konta? Zarejestruj się!');
		userEvent.click(textElement);

		waitFor(() => {
			expect(screen.getByText(/Signup page/i));
		});
	});
});
