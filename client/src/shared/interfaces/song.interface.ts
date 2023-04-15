import { Dispatch } from 'react';

export interface ISongs {
	songs: ISong[];
	type: ISongsViewType;
}
export interface ISong {
	id: string;
	title: string;
	duration: number;
	preview: string;
	artist: string;
	picture: string;
	isFavorite: boolean;
}
export interface ICardControls {
	play?: boolean;
	add?: boolean;
	favorite?: boolean;
	remove?: boolean;
	addToQueue?: boolean;
}
export interface ICardFunctions {
	play?: () => void;
	add?: () => void;
	like?: () => void;
	remove?: () => void;
	addToQueue?: () => void;
	deleteFromQueue?: () => void;
}
export enum ISongsViewType {
	SEARCH = 'search',
	HOME = 'home',
	FAVORITE = 'favorities',
}
export interface ISongsState {
	songs: ISong[];
}
export interface ISongsContext {
	state: ISongsState;
	dispatch: Dispatch<ISongsAction>;
}
export interface ISongsAction {
	type: SongsActions;
	payload: ISong[] | ISong | string;
}

export enum SongsActions {
	LOAD_SONGS = 'loadSongs',
	ADD_SONG = 'addSong',
	LIKE_SONG = 'likeSong',
	REMOVE_SONG = 'removeSong',
}
