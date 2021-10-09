import {Button, Col, Form, Input, Layout, Row} from 'antd';
import * as React from 'react';
import './master-page.layout.scss'
import {observer} from 'mobx-react';
import {MasterPageModel} from './master-page.model';

interface IProps {
	children: React.ReactNode
}

const {Header, Content} = Layout;

export const MasterPageLayout = observer((props: IProps): React.ReactElement<IProps> => {
	const model = new MasterPageModel();
	return (
		<Layout>
			<Header className={'header'}>
				<Row align={'middle'}>
					<Col span={8}>
						<div className={'pageTitle'}>Funny Movies</div>
					</Col>
					<Col span={16}>
						<Row justify={'end'}>
							{!model.userService.user ?
								<Form onFinish={model.login} layout={'inline'} form={model.form}>
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
									<span className={'text-light'}>{model.userService.user.username}</span>
									<Button type="link">Logout</Button>
								</Row>}
						</Row>
					</Col>

				</Row>
			</Header>
			<Content className={'container'}>
				{props.children}
			</Content>
		</Layout>
	)
});
