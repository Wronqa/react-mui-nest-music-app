import axios, { AxiosInstance } from 'axios';

export class Api {
	private static axiosInstance: AxiosInstance;

	public static async initAxios() {
		Api.axiosInstance = axios.create({
			baseURL: 'https://some-domain.com/api/',
			timeout: 1000,
			withCredentials: true,
		});
	}
	static async signup() {}
}
