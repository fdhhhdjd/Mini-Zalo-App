import { ActionSheet } from "components/fullscreen-sheet";
import { ListItem } from "components/list-item";
import CoreLoading from "components/SpinnerLoading";
import useStores from "hooks/useSelectorStore";
import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { getPlaceholderInitiate } from "redux/store/Actions";
import { StoreItem } from "types/store";
import { displayDistance } from "utils/location";

export const StorePicker: FC = () => {
	const { store, isLoading } = useStores();

	const [isVisible, setVisible] = useState(false);
	const [selected, setSelected] = useState<StoreItem>();
	const dispatch = useDispatch();

	const handleSelectedStoreIndex = (index: number) => {
		setSelected(store[index]);
	};

	useEffect(() => {
		if (isVisible) dispatch(getPlaceholderInitiate());
	}, [isVisible]);

	return (
		<React.Fragment>
			<ListItem
				onClick={() => setVisible(true)}
				title={selected ? selected?.fields.name : "Chọn cửa hàng"}
				subtitle={selected ? selected?.fields.address : "Yêu cầu truy cập vị trí"}
			/>
			{isLoading ? (
				<CoreLoading />
			) : (
				<>
					{store.length > 0 &&
						createPortal(
							<ActionSheet
								title="Các cửa hàng ở gần bạn"
								visible={isVisible}
								onClose={() => setVisible(false)}
								actions={[
									store.map((store: StoreItem & { fields: { distance?: number } }, i) => ({
										text: store.fields.distance
											? `${store.fields.name} - ${displayDistance(store.fields.distance)}`
											: store.fields.name,
										onClick: () => {
											handleSelectedStoreIndex(i);
										}
									})),
									[{ text: "Đóng", close: true, danger: true }]
								]}
							></ActionSheet>,
							document.body
						)}
				</>
			)}
		</React.Fragment>
	);
};
