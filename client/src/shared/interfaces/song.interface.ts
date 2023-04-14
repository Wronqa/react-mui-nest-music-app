export interface SongsInterface {
	songs: SongInterface[];
	type: TYPES;
}
export interface SongInterface {
	id: string;
	title: string;
	duration: number;
	preview: string;
	artist: string;
	picture: string;
	isFavorite: boolean;
}
export interface CardControls {
	play?: boolean;
	add?: boolean;
	favorite?: boolean;
	remove?: boolean;
}
export interface CardFunctions {
	play?: () => void;
	add?: () => void;
	like?: () => void;
	remove?: () => void;
}
export enum TYPES {
	'search',
	'home',
	'favorities',
}
/////////////////////
export interface SongsStateInterface {
	songs: SongInterface[];
}
export interface SongsActionInterface {
	type: SONGS_ACTIONS;
	payload: any;
}
export enum SONGS_ACTIONS {
	loadSongs = 'loadSongs',
	addSong = 'addSong',
	likeSong = 'likeSong',
	removeSong = 'removeSong',
}
