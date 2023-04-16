import { type ISong } from '../shared/interfaces/song.interface';
import { Api } from '../tools/Api';

export const searchSongService = async (query: string) => {
	return Api.searchSong(query);
};
export const addSongToLibrary = async (data: ISong) => {
	return Api.addSongToLibrary(data);
};
export const deleteSongFromLibrary = async (id: string) => {
	return Api.deleteSongFromLibrary(id);
};
export const likeSong = async (id: string, favorite: boolean) => {
	return Api.likeSong(id, favorite);
};
