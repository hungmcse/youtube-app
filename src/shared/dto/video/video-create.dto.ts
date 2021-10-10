import {DTO, METHOD} from '../base.dto';
import {VIDEO_SOURCE} from '../../model/video.model';

export class VideoBodyDto {
	public url: string;

	public source: VIDEO_SOURCE;

	constructor(payload: {url: string, source: VIDEO_SOURCE}) {
		console.log(payload);
		this.url = payload.url;
		this.source = payload.source;
	}
}

export class VideoCreateDto extends DTO {
	public static url = 'api/video';
	public readonly url = VideoCreateDto.url;
	public method = METHOD.POST;
	public readonly response!: {isSuccess: boolean};
	public query: undefined;

	constructor(public body: VideoBodyDto) {
		super();
	}
}
