import React, {useEffect, useState} from 'react';
import {Col, Row} from 'antd';
import styles from './home.module.scss'
import dislike from '../../assets/icon/dislike.svg'
import like from '../../assets/icon/like.svg'
import {observer} from 'mobx-react';
import {VideoListDto, VideoListResponseDto} from '../../shared/dto/video/video-list.dto';
import {PagingRequestDto} from '../../shared/dto/paging.dto';
import {ResponseDTO} from '../../shared/dto/base.dto';
import {IVideo, VIDEO_EMBED_URL, VIDEO_SOURCE, YOUTUBE_PART} from '../../shared/model/video.model';
import {extractYoutubeVideoId} from '../../util/string.util';
import {YoutubeVideoDto, YoutubeVideoResponseDto} from '../../shared/dto/video/video-source.dto';
import {GOOGLE_API_KEY, YOUTUBE_API} from '../../environment/environment';
import {Container} from 'typedi';
import {HttpService} from '../../services/http.service';

interface IProps {
	children: React.ReactNode
}
const defaultPageSize = 100;


const HomePage = observer((): React.ReactElement<IProps> => {
	const httpService = Container.get(HttpService);
	const [videos, setVideos] = useState<IVideo[]>([]);
	useEffect(() => {
		httpService.request(new VideoListDto(new PagingRequestDto(1, defaultPageSize))).then((response: ResponseDTO<VideoListResponseDto>) => {
			const videoDetailPromises = response.data.list.map((item: Pick<IVideo, 'author' | 'url'>) => {
				const id = extractYoutubeVideoId(item.url);
				if (id) {
					return httpService.requestExternal(new YoutubeVideoDto({
						id,
						key: GOOGLE_API_KEY,
						part: [YOUTUBE_PART.SNIPPET, YOUTUBE_PART.STATISTIC]
					}), YOUTUBE_API);
				}
			})

			Promise.all(videoDetailPromises.filter((item) => item != undefined) as Array<Promise<YoutubeVideoResponseDto>>).then((rs: YoutubeVideoResponseDto[]) => {
				setVideos(rs.map((detail) => {
					const video = response.data.list.find((item: Pick<IVideo, 'author' | 'url' | 'source'>) => extractYoutubeVideoId(item.url) === detail.items[0].id);
					return {
						url: VIDEO_EMBED_URL[VIDEO_SOURCE.YOUTUBE] + detail.items[0].id,
						title: detail.items[0].snippet.title,
						description: detail.items[0].snippet.description,
						author: video!.author,
						source: video!.source,
						like: detail.items[0].statistics.likeCount,
						dislike: detail.items[0].statistics.dislikeCount
					}
				}))
			})
		})
	}, []);
	return (
		<div className={styles.container}>
			{videos.map((item, index) =>
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
							<span><img className={styles.feedbackIcon} src={like}/>{item.like}</span>
							<span className={styles.ml4}><img className={styles.feedbackIcon} src={dislike}/>{item.dislike}</span>
						</div>
						<div>Description:</div>
						<div>{item.description}</div>
					</Col>
				</Row>
			)}
		</div>
	);
});

export default HomePage;
