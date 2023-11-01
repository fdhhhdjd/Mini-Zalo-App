import useNotify from "hooks/useSelectorNotify";
import { FC, useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { getNotifyInitiate } from "redux/notification/Actions";
import { NotifyItem } from "types/Notify";
import { convertIconStatus } from "utils/icon";
import { Box, Text } from "zmp-ui";

import { ListRenderer } from "./list-renderer";
import { NotifyItemSkeleton } from "./skeletons";

const NotificationList: FC = () => {
	const dispatch = useDispatch();

	const { notify, isLoading } = useNotify();

	useEffect(() => {
		dispatch(getNotifyInitiate());
	}, []);

	return (
		<Box className="bg-background">
			{isLoading ? (
				<NotifyItemSkeleton />
			) : (
				<ListRenderer
					noDivider
					items={notify}
					renderLeft={(item: NotifyItem) => (
						// eslint-disable-next-line jsx-a11y/alt-text
						<img className="w-10 h-10 rounded-full" src={convertIconStatus(item.fields.status)} />
					)}
					renderRight={(item) => (
						<Box key={item.id}>
							<Text.Header>{item.fields.title}</Text.Header>
							<Text size="small" className="text-gray overflow-hidden whitespace-nowrap text-ellipsis">
								{item.fields.description}
							</Text>
						</Box>
					)}
				/>
			)}
		</Box>
	);
};

export default NotificationList;
