import { youtubeConfig } from '../config/config';
import fetch from 'isomorphic-fetch';

export const fetchVideoFromId = async ids => {
	const id = Array.isArray(ids) ? ids.join() : ids;
	try {
		const response = await fetch(
			`${youtubeConfig.endpoint}${youtubeConfig.part_param}&id=${id}&key=${youtubeConfig.client_api_key}`,
			{
				method: "GET",
			});
		if (response.ok) {
			const json = await response.json();
			return json;
		} else {
			return false;
		}
	} catch (e) {
		return false;
	}
};