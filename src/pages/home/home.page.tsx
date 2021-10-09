import React from 'react';
import {HomeModel} from './home.model';
import {Col, Row} from 'antd';
import styles from './home.module.scss'
import dislike from '../../assets/icon/dislike.svg'
import like from '../../assets/icon/like.svg'

interface IProps {
	children: React.ReactNode
}

const HomePage = (): React.ReactElement<IProps> => {
	const model = new HomeModel();
	return (
		<div className={styles.container}>
			{model.videos.map((item, index) =>
				<Row key={index}>
					<Col span={8}>
						<iframe width="100%" height="315" src={item.url}
								title="YouTube video player" frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen/>
					</Col>
					<Col offset={1} span={14}>
						<div className={styles.videoTitle}>{item.title}</div>
						<div>Share by: {item.author}</div>
						<div>
							<span><img className={styles.feedbackIcon} src={like}/>20</span>
							<span className={styles.ml4}><img className={styles.feedbackIcon} src={dislike}/>10</span>
						</div>
						<div>Description:</div>
						<div>{item.description}</div>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default HomePage;
