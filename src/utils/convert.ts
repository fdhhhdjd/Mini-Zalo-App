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
