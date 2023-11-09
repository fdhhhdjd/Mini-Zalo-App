import React, { FC } from "react";
import { useNavigate } from "react-router";
import success from "static/success.gif";
import thanksAnimation from "static/thanks.gif";
import { Box, Header, Page, Text, Button } from "zmp-ui";

const SuccessPage: FC = () => {
	const navigate = useNavigate();
	return (
		<Page className="flex flex-col justify-center h-[100vh]">
			<Header />
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
				<img src={success} className="w-40 h-40 object-cover" alt="success" />
				<Text className="font-bold text-3xl text-slate-700 mb-2">Cảm ơn!</Text>
				<Text className="text-1xl mb-6 mt-10 text-slate-500">Đơn hàng đã đặt thành công.</Text>
				<Button size="medium" className="mt-4" onClick={() => navigate("/")}>
					Trở về trang chủ
				</Button>
			</Box>
		</Page>
	);
};

export default SuccessPage;
