import {observable} from 'mobx';
import {IYoutubeVideo} from '../../shared/model/video.model';

export class HomeModel {
	@observable
	public videos: IYoutubeVideo[] = [
		{
			url: 'https://www.youtube.com/embed/fn_4AtUm198',
			title: 'Đau Thương Chỉ Vì Em-Vu Khải Hiền \\"只因你伤心\\"巫启贤-吉他的天空 #ĐauThuongChiViEm #只因你伤心 #吉他的天空 #巫启贤',
			author: 'hungmc',
			description: 'Đau Thương Chỉ Vì Em\\n只因你伤心-巫启贤&吉他的天空\\n\\nChúc các bạn nghe nhạc vui vẻ.\\nFanpage: https://www.facebook.com/FuMingYinYue/'
		},
		{
			url: 'https://www.youtube.com/embed/fi6n1KzreYE',
			title: 'Đau Thương Chỉ Vì Em-Vu Khải Hiền \\"只因你伤心\\"巫启贤-吉他的天空 #ĐauThuongChiViEm #只因你伤心 #吉他的天空 #巫启贤',
			author: 'hungmc',
			description: 'Đau Thương Chỉ Vì Em\\n只因你伤心-巫启贤&吉他的天空\\n\\nChúc các bạn nghe nhạc vui vẻ.\\nFanpage: https://www.facebook.com/FuMingYinYue/'
		},
		{
			url: 'https://www.youtube.com/embed/fi6n1KzreYE',
			title: 'Đau Thương Chỉ Vì Em-Vu Khải Hiền \\"只因你伤心\\"巫启贤-吉他的天空 #ĐauThuongChiViEm #只因你伤心 #吉他的天空 #巫启贤',
			author: 'hungmc',
			description: 'Đau Thương Chỉ Vì Em\\n只因你伤心-巫启贤&吉他的天空\\n\\nChúc các bạn nghe nhạc vui vẻ.\\nFanpage: https://www.facebook.com/FuMingYinYue/'
		},

	];
}
