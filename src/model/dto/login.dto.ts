import { DTO, ResponseDTO } from './base.dto';
import { METHOD } from '../../constants/http';

export interface ILoginQuery {
	username: string,
	password: string,
}

export class LoginResponse extends ResponseDTO {
	constructor () {
		super();
	}
}

export class LoginDTO extends DTO {
	public url = '/login';
	public method = METHOD.POST;
	body: undefined;
	public readonly response!: LoginResponse;
	public query: ILoginQuery;
	constructor(query: ILoginQuery) {
		super();
		this.query= query
	}
}
