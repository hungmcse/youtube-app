import {Container} from 'typedi';
import {UserService} from '../services/user.service';
import {Form} from 'antd';

export class MasterPageModel {
	public readonly userService = Container.get(UserService);
	public form = Form.useForm()[0];

	public login = () => {
		const values = this.form.getFieldsValue();
		const {username, password} = values
		this.userService.login({username, password});
	}
}
