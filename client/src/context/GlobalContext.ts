import { Dispatch, createContext } from 'react';
import {
	AuthActionInterface,
	AuthStateInterface,
} from '../shared/interfaces/auth.interface';
import {
	SongsActionInterface,
	SongsStateInterface,
} from '../shared/interfaces/song.interface';

interface GlobalContextInterface {
	authState: AuthStateInterface;
	authDispatch: Dispatch<AuthActionInterface>;
	songsState: SongsStateInterface;
	songsDispatch: Dispatch<SongsActionInterface>;
}

const AUTH_INITIAL_VALUE: AuthStateInterface = {
	user: null,
};
const SONGS_INITIAL_VALUE: SongsStateInterface = {
	songs: [],
};

export const GlobalContext = createContext<GlobalContextInterface>({
	authState: AUTH_INITIAL_VALUE,
	authDispatch: () => null,
	songsState: SONGS_INITIAL_VALUE,
	songsDispatch: () => null,
});
