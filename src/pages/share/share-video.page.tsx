import React from 'react';
import {Button, Col, Form, Input, Row} from 'antd';
import styles from './share-video.module.scss';
import {useHistory} from 'react-router-dom';
import {PageRoute} from '../../constants/route';
import {HttpService} from '../../services/http.service';
import {Container} from 'typedi';
import {VideoBodyDto, VideoCreateDto} from '../../shared/dto/video/video-create.dto';
import {VIDEO_SOURCE} from '../../shared/model/video.model';

const ShareVideoPage = () => {
	const [form] = Form.useForm();
	const httpService = Container.get(HttpService);
	const history = useHistory();
	const submit = async () => {
		await httpService.request(new VideoCreateDto(new VideoBodyDto({url: form.getFieldsValue().url, source: VIDEO_SOURCE.YOUTUBE})));
		history.push(PageRoute.Home);
	}
	return (
		<Row className={styles.container} align={'middle'} justify={'center'}>
			<Col span={12}>
				<fieldset className={styles.box}>
					<legend className={styles.boxLegend}>Share a youtube movie</legend>
					<Form labelCol={{span: 6}}
						  wrapperCol={{span: 16}} onFinish={submit} form={form}>
						<Form.Item name="url" label={'Youtube URL'} rules={[{required: true}]}>
							<Input/>
						</Form.Item>
						<Form.Item wrapperCol={{offset: 6, span: 16}}>
							<Button htmlType='submit' type='primary' block>Share</Button>
						</Form.Item>
					</Form>
				</fieldset>
			</Col>
		</Row>
	);
};

export default ShareVideoPage;
