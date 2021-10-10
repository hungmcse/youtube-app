import {Container, Service} from 'typedi';
import {HttpService} from './http.service';
import {YoutubeVideoDto} from '../shared/dto/video/video-source.dto';
import {GOOGLE_API_KEY, YOUTUBE_API} from '../environment/environment';
import {YOUTUBE_PART} from '../shared/model/video.model';
import {VideoListDto} from '../shared/dto/video/video-list.dto';
import {PagingRequestDto} from '../shared/dto/paging.dto';


@Service()
export class VideoService {
	private readonly httpService = Container.get(HttpService);
	public getYoutubeVideoDetail = async (id: string) => {
		return this.httpService.requestExternal(new YoutubeVideoDto({
			id,
			key: GOOGLE_API_KEY,
			part: [YOUTUBE_PART.SNIPPET, YOUTUBE_PART.STATISTIC]
		}), YOUTUBE_API);
	}
	// TODO: Use infinite load with paging API
	private  defaultPageSize = 100;
	public getVideos = async () => {
		return this.httpService.request(new VideoListDto(new PagingRequestDto(1, this.defaultPageSize)))
	}
}
