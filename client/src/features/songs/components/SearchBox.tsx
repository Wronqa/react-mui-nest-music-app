import {
	FormControl,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchBox = () => {
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
				startAdornment={
					<InputAdornment position="end">
						<IconButton aria-label="toggle password visibility" edge="start">
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
