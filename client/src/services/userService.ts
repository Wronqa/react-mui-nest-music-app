import { Api } from '../tools/Api';

export const getUserSongsService = async () => {
	return Api.getUserSongs();
};
