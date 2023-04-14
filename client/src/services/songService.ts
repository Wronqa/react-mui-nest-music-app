import { SongInterface } from '../shared/interfaces/song.interface';
import { Api } from '../tools/Api';

export const searchSongService = (query: string) => {
	return Api.searchSong(query);
};
export const addSongToLibrary = (data: SongInterface) => {
	return Api.addSongToLibrary(data);
};
export const deleteSongFromLibrary = (id: string) => {
	return Api.deleteSongFromLibrary(id);
};
export const likeSong = (id: string, favorite: boolean) => {
	return Api.likeSong(id, favorite);
};
