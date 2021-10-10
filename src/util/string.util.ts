export const extractYoutubeVideoId = (url: string) => {
	const video_id = url.split('v=')[1];
	const ampersandPosition = video_id.indexOf('&');
	return ampersandPosition != -1 ? video_id.substring(0, ampersandPosition) : video_id;
}