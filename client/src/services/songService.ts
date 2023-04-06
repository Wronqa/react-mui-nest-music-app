import { Api } from '../tools/Api';

export const searchSongService = (query: string) => {
	return Api.searchSong(query);
};
