import ToolTip from "components/tooltip";
import React, { FC } from "react";
import { useNavigate } from "react-router";
import success from "static/success.gif";
import thanksAnimation from "static/thanks.gif";
import { Box, Header, Page, Text, Button } from "zmp-ui";

const SuccessPage: FC = () => {
	const [isAnimated, setIsAnimated] = React.useState(false);
	React.useLayoutEffect(() => {
		setIsAnimated(true);
		return () => setIsAnimated(false);
	}, []);
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<Page className="flex flex-col justify-center h-[90vh]">
				<Box
					flexDirection="column"
					flex
					alignItems="center"
					justifyContent="center"
					className={`bg-background h-full space-y-5 ${
						isAnimated ? "page-enter-active" : "" // Add the "page-enter-active" class when isAnimated is true
					}`}
				>
					<div className="pyro">
						<div className="before"></div>
						<div className="after"></div>
					</div>
					<div className="flex flex-col items-center space-y-2">
						<img src={thanksAnimation} alt="" className="w-80 h-50 mx-auto mb-4" />
					</div>
					<img src={success} className="w-40 h-40 object-cover" alt="success" />
					<Text className="font-bold text-3xl text-slate-700 mb-2">Thank you!</Text>
					<Text className="text-1xl mb-6 mt-10 text-slate-500">Order was success</Text>
					<ToolTip tooltip="Quay lại trang chủ">
						<Button size="medium" className="mt-4" onClick={() => navigate("/")}>
							Back to Home
						</Button>
					</ToolTip>
				</Box>
			</Page>
		</>
	);
};

export default SuccessPage;
