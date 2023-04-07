export interface SongsInterface {
	songs: SongInterface[];
}
export interface SongInterface {
	id: number;
	title: string;
	duration: number;
	preview: string;
	link: string;
	artist: ArtistInterface;
	album: AlbumInterface;
}
export interface ArtistInterface {
	name: string;
}
export interface AlbumInterface {
	cover: string;
}
