import axios from 'axios';
import {Service} from 'typedi';
import {API_HOST} from '../environment/environment';
import {DTO, ResponseDTO} from '../shared/dto/base.dto';

// import jwtDecode from 'jwt-decode';

@Service()
export class HttpService {
	private token: string | undefined;

	constructor() {
		axios.interceptors.response.use((response) => {
			console.log(response);
			if (response.data && response.data.token) {
				this.token = response.data.token;
			}
			return response;
		})
	}

	public get tokenInfo(): any {
		return false;
	}

	public request = async (
		data: DTO,
	): Promise<ResponseDTO> => {
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
}
