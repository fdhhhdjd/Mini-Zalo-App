import React, { FC } from "react";
import success from "static/success.png";
import { Box, Header, Page, Text } from "zmp-ui";

const SuccessPage: FC = () => {
	return (
		<>
			<Header />
			<Page>
				<Box
					flexDirection="column"
					flex
					alignItems="center"
					justifyContent="center"
					className="bg-background h-full space-y-5"
				>
					<img src={success} className="w-40 h-40" alt="success" />
					<Text className="font-bold text-4xl">Thank you!</Text>
					<Text className="text-1xl">Order was success</Text>
				</Box>
			</Page>
		</>
	);
};

export default SuccessPage;
