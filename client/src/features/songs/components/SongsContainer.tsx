import React from 'react';
import CustomCard from '../../../components/card/CustomCard';
import { Box, Typography } from '@mui/material';
import {
	type ISong,
	type ISongs,
} from '../../../shared/interfaces/song.interface';

interface SongsContainerProps {
	title: string;
	songsData: ISongs;
}
const SongsContainer = ({ title, songsData }: SongsContainerProps) => {
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
					Ilość utworów: {songsData.songs.length}
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
						maxHeight: '65vh',
						overflowX: 'hidden',
					}}
				>
					{songsData.songs?.map((song: ISong) => (
						<CustomCard song={song} type={songsData.type} key={song.id} />
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default SongsContainer;
