//* IMPORT

import { TYPES } from "redux/banner/Types";

export type ResponseBannerData = {
	data: {
		records: BannerItem;
	};
};

export interface BannerItem {
	id: string;
	fields: BannerFields;
}

export interface BannerFields {
	title: string;
	image: string;
	description: string;
}

export interface InitialInterface {
	isLoading: boolean;
	banners: BannerItem[];
	error: Error | null;
}

export type BannerAction<T> = {
	type:
		| typeof TYPES.GET_BANNER_PENDING
		| typeof TYPES.GET_BANNER_SUCCESS
		| typeof TYPES.GET_BANNER_ERROR
		| typeof TYPES.SET_BANNER_UNMOUNT;
	payload?: T;
};

export type BannerData = BannerItem;
