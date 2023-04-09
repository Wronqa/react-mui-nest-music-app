export interface SongsInterface {
	songs: SongInterface[];
}
export interface SongInterface {
	id: number;
	title: string;
	duration: number;
	preview: string;
	artist: string;
	picture: string;
}
