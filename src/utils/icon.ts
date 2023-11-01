import { STATUS_NOTIFY } from "common/constants";

export const convertIconStatus = (status: string) => {
	switch (status) {
		case STATUS_NOTIFY._INFO_COMPANY:
			return "https://o.remove.bg/downloads/fa738e7f-59b7-438b-8c0a-5787189dc2a0/png-transparent-digital-marketing-business-icon-electronic-information-map-electronics-service-happy-birthday-vector-images-thumbnail-removebg-preview.png";
		case STATUS_NOTIFY._BEST_SALE:
			return "https://o.remove.bg/downloads/8aa50201-6e37-446e-9ee3-9fed3201d109/pngtree-big-sale-best-offer-png-image_5376766-removebg-preview.png";
		case STATUS_NOTIFY._ORDER_SUCCESS:
			return "https://o.remove.bg/downloads/21dc17c7-fb3a-4134-94b8-0711581047b6/pngtree-true-sign-png-png-image_1589429-removebg-preview.png";
		default:
			break;
	}
};
