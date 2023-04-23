import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import SearchBox from './SearchBox';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('(Component) SearchBox', () => {
	it('Should full render on the screen', () => {
		render(<SearchBox />);

		const input = screen.getByRole('textbox');
		const icon = screen.getByRole('button');

		expect(input).toBeInTheDocument();
		expect(icon).toBeInTheDocument();
	});
	it('Should run onSearch function when click button', () => {
		const handleClick = jest.fn().mockImplementation(() => {
			console.log('test');
		});
		render(<SearchBox onSearch={handleClick} />);

		const iconBtn = screen.getByRole('button');

		act(() => {
			userEvent.click(iconBtn);
		});

		expect(handleClick).toBeCalled();
	});
	it('Should textbox be empty', () => {
		render(<SearchBox />);

		const input: HTMLInputElement = screen.getByRole('textbox');

		expect(input.value).toBe('');
	});
	it('Should input value change', () => {
		const testValue = 'It works';
		render(<SearchBox />);

		const input: HTMLInputElement = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: testValue } });

		expect(input.value).toBe(testValue);
	});
});
