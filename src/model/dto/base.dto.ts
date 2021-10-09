import { METHOD } from '../../constants/http';

export abstract class DTO {

	public abstract query: any;
	public abstract body: any;
	public abstract readonly url: string;
	public abstract readonly method: METHOD;
	public abstract readonly response: ResponseDTO;
}

export abstract class ResponseDTO {

}
