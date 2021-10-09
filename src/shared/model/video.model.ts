export interface IYoutubeVideo {
	url: string;
	author: string;
	description: string,
	title: string,
}

export enum YOUTUBE_PART {
	SNIPPET = "snippet",
	STATISTIC = "statistics",
}