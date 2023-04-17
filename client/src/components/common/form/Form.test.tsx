import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('(Component) Form', () => {
	const handleClickMock = jest.fn();
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

		userEvent.click(button);

		expect(handleClickMock).toBeCalled();
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
		const history = createMemoryHistory();

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

		expect(history.location.pathname).toBe('/auth/forgot');
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

	it('Should redirect when user click to "Nie masz konta? Zarejestruj się!" text', async () => {
		const history = createMemoryHistory();

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
					<Route path="/auth/signup" element={<div>Sinup Page</div>} />
				</Routes>
			</MemoryRouter>
		);

		const forgotPasswordLink = screen.getByText(
			'Nie masz konta? Zarejestruj się!'
		);
		userEvent.click(forgotPasswordLink);

		expect(history.location.pathname).toBe('/auth/signup');
	});
});
