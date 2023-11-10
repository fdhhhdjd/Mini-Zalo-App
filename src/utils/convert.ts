import _ from "lodash";

export const parseData = (inputString: string) => {
	try {
		if (_.isString(inputString)) {
			return JSON.parse(inputString);
		}
	} catch (error) {
		console.error("Lỗi khi phân tích chuỗi JSON:", error);
	}
};

export const truncateText = (str: string) => {
	if (str.length < 25) return str;

	return str.substring(0, 25) + "...";
};
