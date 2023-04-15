import { createContext } from 'react';
import { ISongsContext } from '../../shared/interfaces/song.interface';
import { SONGS_INITIAL_VALUE } from '../initialStates/songs.initialState';

export const SongsContext = createContext<ISongsContext>({
	state: SONGS_INITIAL_VALUE,
	dispatch: () => null,
});
