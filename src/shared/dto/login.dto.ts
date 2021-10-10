import {DTO, METHOD} from './base.dto';

export interface ILoginBody {
	username: string,
	password: string,
}

export class LoginResponseDto {
}

export class LoginDto extends DTO {
	public url = 'api/login';
	public method = METHOD.POST;
	public readonly response!: LoginResponseDto;
	public query: undefined;
	constructor(public body: ILoginBody) {
		super();
	}
}
