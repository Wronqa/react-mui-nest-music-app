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
}
////ZSoptymalizowac
export interface CardControls {
	play?: boolean;
	add?: boolean;
	favorite?: boolean;
	remove?: boolean;
}
export interface CardFunctions {
	play?: () => void;
	add?: () => void;
	favorite?: () => void;
	remove?: () => void;
}
export enum TYPES {
	'search',
	'home',
	'favorities',
}
