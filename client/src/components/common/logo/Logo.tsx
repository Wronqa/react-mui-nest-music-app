import React from 'react';
import { Typography } from '@mui/material';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';

const Logo = () => {
	return (
		<>
			<MusicVideoIcon
				aria-label="Music video icon"
				sx={{ mr: 1 }}
			></MusicVideoIcon>
			<Typography variant="h6" color="inherit" component="div" role="heading">
				eMuzyka
			</Typography>
		</>
	);
};

export default Logo;
