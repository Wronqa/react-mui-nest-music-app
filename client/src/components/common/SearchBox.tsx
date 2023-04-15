import {
	FormControl,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';

interface SearchBoxInterface {
	onSearch?: (query: string) => void;
}
const SearchBox = ({ onSearch }: SearchBoxInterface) => {
	const [value, setValue] = useState('');
	return (
		<FormControl variant="filled" sx={{ width: '35ch', ml: 4, p: 0 }}>
			<OutlinedInput
				sx={{
					height: '25px',
					backgroundColor: 'white',
					p: 1,
					'& input::placeholder': {
						fontSize: '15px',
					},
				}}
				id="filled-adornment-password"
				type={'text'}
				placeholder="Search music"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				startAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							edge="start"
							onClick={() => {
								onSearch && onSearch(value);
							}}
						>
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				}
				label="Password"
			/>
		</FormControl>
	);
};

export default SearchBox;
