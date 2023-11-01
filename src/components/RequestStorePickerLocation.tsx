import { ListItem } from "components/list-item";
import React from "react";
import { useSetRecoilState } from "recoil";
import { requestLocationTriesState } from "state";

const RequestStorePickerLocation = () => {
	const retry = useSetRecoilState(requestLocationTriesState);

	return <ListItem onClick={() => retry((r) => r + 1)} title="Chọn cửa hàng" subtitle="Yêu cầu truy cập vị trí" />;
};

export default RequestStorePickerLocation;
