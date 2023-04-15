import axios, { AxiosInstance } from 'axios';
import { LoginDataInterface, RegisterDataInterface } from '../shared/types';
import { ISong } from '../shared/interfaces/song.interface';

export class Api {
	private static axiosInstance: AxiosInstance;

	public static async initAxios() {
		Api.axiosInstance = axios.create({
			baseURL: 'http://localhost:5000',

			withCredentials: true,
		});
	}
	static async signup(data: RegisterDataInterface) {
		return Api.axiosInstance.post('/auth/signup', data, {
			headers: { 'Access-Control-Allow-Origin': '*' },
		});
	}
	static async signin(data: LoginDataInterface) {
		return Api.axiosInstance.post('/auth/signin', data, {
			headers: { 'Access-Control-Allow-Origin': '*' },
		});
	}
	static async checkAuthentication() {
		return Api.axiosInstance.get('/auth/whoami', {
			headers: { 'Access-Control-Allow-Origin': '*' },
			withCredentials: true,
		});
	}
	static async logout() {
		return Api.axiosInstance.post('/auth/signout', {
			headers: { 'Access-Control-Allow-Origin': '*' },
			withCredentials: true,
		});
	}
	static async searchSong(query: string) {
		return Api.axiosInstance.get(`/song/find?name=${query}`);
	}
	static async getUserSongs() {
		return Api.axiosInstance.get('/user/songs');
	}
	static async addSongToLibrary(data: ISong) {
		return Api.axiosInstance.post('/song/save', data);
	}
	static async deleteSongFromLibrary(id: string) {
		return Api.axiosInstance.delete(`/song/delete/${id}`);
	}
	static async likeSong(id: string, favorite: boolean) {
		return Api.axiosInstance.patch(`/song/like/${id}`, { favorite });
	}
}
