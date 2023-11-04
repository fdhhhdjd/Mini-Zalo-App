import React, { FC } from "react";
import success from "static/success.png";
import thanksAnimation from "static/thanks.gif";
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
					<div className="pyro">
						<div className="before"></div>
						<div className="after"></div>
					</div>
					<div className="flex flex-col items-center space-y-2">
						<img src={thanksAnimation} alt="" className="w-80 h-50 mx-auto mb-4" />
					</div>
					<img src={success} className="w-40 h-40" alt="success" />
					<Text className="font-bold text-6xl mb-2">Thank you!</Text>
					<Text className="text-1xl mb-6 mt-10">Order was success</Text>
				</Box>
			</Page>
		</>
	);
};

export default SuccessPage;
