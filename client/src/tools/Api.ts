import axios, { AxiosInstance } from 'axios';
import { RegisterDataInterface } from '../self_types/types';

export class Api {
	private static axiosInstance: AxiosInstance;

	public static async initAxios() {
		Api.axiosInstance = axios.create({
			baseURL: 'http://localhost:5000',
			timeout: 1000,
			withCredentials: true,
		});
	}
	static async signup(data: RegisterDataInterface) {
		return Api.axiosInstance.post('/auth/signup', data, {
			headers: { 'Access-Control-Allow-Origin': '*' },
		});
	}
}
