import axios from 'axios';
import {Service} from 'typedi';
import {DTO, ResponseDTO} from '../shared/dto/base.dto';
import {API_HOST} from '../environment/environment';


@Service()
export class HttpService {
	private token: string | undefined;

	constructor() {
		axios.interceptors.response.use((response) => {
			if (response && response.data && response.data.data && response.data.data.token) {
				this.token = response.data.data.token;
			}
			return response;
		})
	}

	public get tokenInfo(): any {
		return this.token;
	}

	public clearToken(): any {
		this.token = undefined;
	}

	public request = async(
		data: DTO,
	): Promise<ResponseDTO<any>> => {
		const response = await axios({
			method: data.method,
			headers: {Authorization: 'Bearer ' + this.token},
			baseURL: API_HOST,
			url: data.url,
			data: data.body,
			params: data.query,
		});
		return response.data;
	};

	public requestExternal = async(
		data: DTO, baseUrl: string,
	): Promise<any> => {
		const response = await axios({
			method: data.method,
			baseURL: baseUrl,
			url: data.url,
			data: data.body,
			params: data.query,
		});
		return response.data;
	};
}
