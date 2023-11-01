import { Divider } from "components/divider";
import NotificationList from "components/NotificationList";
import React, { FC } from "react";
import { Header, Page } from "zmp-ui";

const NotificationPage: FC = () => {
	return (
		<Page>
			<Header title="Thông báo" showBackIcon={false} />
			<Divider />
			<NotificationList />
		</Page>
	);
};

export default NotificationPage;
