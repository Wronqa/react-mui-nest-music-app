import React from 'react';
import CustomCard from '../../../components/card/CustomCard';
import { Box, Typography, Container } from '@mui/material';

interface SongsContainerProps {
	title: string;
}
const SongsContainer = ({ title }: SongsContainerProps) => {
	return (
		<Box sx={{ pt: 4, pb: 4, pl: 3, pr: 3 }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography component="div" variant="h5">
					{title}
				</Typography>
				<Typography component="div" variant="body1" sx={{ mr: 3 }}>
					Ilość utworów: 47
				</Typography>
			</Box>

			<Box component="main" maxWidth="xl">
				<Box
					sx={{
						overflow: 'scroll',
						marginTop: 0,
						mb: 13,
						display: 'flex',
						flexDirection: 'rows',
						justifyContent: 'flex-start',
						width: '100vw',
						flexWrap: 'wrap',
						maxHeight: '70vh',
					}}
				>
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
					<CustomCard />
				</Box>
				<div></div>
			</Box>
		</Box>
	);
};

export default SongsContainer;
