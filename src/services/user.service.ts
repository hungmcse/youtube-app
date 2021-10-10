import {Container, Service} from 'typedi';
import {HttpService} from './http.service';
import {IUser} from '../shared/model/user.model';
import {LoginDto} from '../shared/dto/login.dto';
import {observable, runInAction} from 'mobx';


@Service()
export class UserService {
	private readonly httpService = Container.get(HttpService);
	@observable
	public user?: IUser;
	public login = async (payload: IUser) => {
		await this.httpService.request(new LoginDto({...payload}));
		runInAction(() => {
			this.user = payload
		});
	}

	public logout = () =>{
		this.httpService.clearToken();
		this.user = undefined;
	}
}
