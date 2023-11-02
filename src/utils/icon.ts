import { STATUS_NOTIFY } from "common/constants";

export const convertIconStatus = (status: string) => {
	switch (status) {
		case STATUS_NOTIFY._INFO_COMPANY:
			return "https://res.cloudinary.com/taidev/image/upload/v1698728754/zalo_demo/category-coffee_qpxoi0.svg";
		case STATUS_NOTIFY._BEST_SALE:
			return "https://res.cloudinary.com/taidev/image/upload/v1698728754/zalo_demo/category-food_jqcail.svg";
		case STATUS_NOTIFY._ORDER_SUCCESS:
			return "https://res.cloudinary.com/taidev/image/upload/v1698728753/zalo_demo/category-matcha_aekqik.svg";
		default:
			break;
	}
};
