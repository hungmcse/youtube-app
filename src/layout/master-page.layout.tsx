import {Button, Col, Form, Input, Layout, Row} from 'antd';
import * as React from 'react';
import styles from './master-page.module.scss'
import {observer} from 'mobx-react';
import {Container} from 'typedi';
import {UserService} from '../services/user.service';
import {useHistory} from 'react-router-dom';
import {PageRoute} from '../constants/route';

interface IProps {
	children: React.ReactNode
}

const {Header, Content} = Layout;

export const MasterPageLayout = observer((props: IProps): React.ReactElement<IProps> => {
	const userService = Container.get(UserService);
	const history = useHistory();
	console.log(history);
	const [form] = Form.useForm();
	const login = () => {
		const values = form.getFieldsValue();
		const {username, password} = values
		userService.login({username, password});
	}
	return (
		<Layout>
			<Header className={'header'}>
				<Row align={'middle'}>
					<Col span={8}>
						<div className={styles.pageTitle}>Funny Movies</div>
					</Col>
					<Col span={16}>
						<Row justify={'end'}>
							{!userService.user ?
								<Form onFinish={login} layout={'inline'} form={form}>
									<Form.Item name="username" rules={[{required: true}]}>
										<Input placeholder="Username"/>
									</Form.Item>
									<Form.Item name="password" rules={[{required: true}]}>
										<Input placeholder="Password"/>
									</Form.Item>
									<Form.Item>
										<Button htmlType='submit' type='primary'>Login/Register</Button>
									</Form.Item>
								</Form> : <Row align={'middle'}>
									<span className={styles.textLight}>{userService.user.username}</span>
									<Button onClick={() => history.push(PageRoute.Share)} type='primary'>Share video</Button>
									<Button type='primary'>Logout</Button>
								</Row>}
						</Row>
					</Col>

				</Row>
			</Header>
			<Content className={styles.container}>
				{props.children}
			</Content>
		</Layout>
	)
});
