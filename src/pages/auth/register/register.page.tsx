import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Form, Input } from 'antd';
import './login.scss';
import { HttpService } from '../../../services/http.service';
import { Container } from 'typedi';
import { LoginDTO } from '../../../model/dto/login.dto';
import { PageRoute } from '../../../constants/route';

const RegisterPage = () => {
	const httpService = Container.get(HttpService);
	const history = useHistory();

	const signIn = async (value: {username: string, password: string}) => {
		httpService.request(new LoginDTO(value)).then(() => {
			history.push(PageRoute.Home)
		});
	};

	return (
		<div className="card-area">
			<Card bordered>
				<h2>Sign In</h2>
				<Form name="formSignIn" onFinish={signIn}>
					<Form.Item name="username" rules={[{ required: true, message: 'Please input your username' }]}>
						<Input placeholder="username" autoComplete="username" />
					</Form.Item>
					<Form.Item name="password" rules={[{ required: true, message: 'Please input your password' }]}>
						<Input.Password placeholder="password" autoComplete="password" />
					</Form.Item>
					<div className="btn-area">
						<Form.Item>
							<Button className="login-btn" type="primary" htmlType="submit">
								Sign In
							</Button>
						</Form.Item>
					</div>
				</Form>
			</Card>
		</div>
	);
};

export default RegisterPage;
