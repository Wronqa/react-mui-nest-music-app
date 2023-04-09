import axios, { AxiosInstance } from 'axios';
import { LoginDataInterface, RegisterDataInterface } from '../shared/types';

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
}
