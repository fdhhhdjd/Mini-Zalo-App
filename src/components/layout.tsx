import React, { FC } from "react";
import { getSystemInfo } from "zmp-sdk";
import { Box } from "zmp-ui";

import { Navigation } from "./navigation";
import RoutesWithTransition from "./RoutesWithTransition";
import { ScrollRestoration } from "./scroll-restoration";
if (getSystemInfo().platform === "android") {
	const androidSafeTop = Math.round(
		(window as any)?.ZaloJavaScriptInterface?.getStatusBarHeight() / window.devicePixelRatio
	);
	document.body.style.setProperty("--zaui-safe-area-inset-top", `${androidSafeTop}px`);
}

export const Layout: FC = () => {
	return (
		<Box flex flexDirection="column" className="h-screen">
			<ScrollRestoration />
			<Box className="flex-1 flex flex-col overflow-auto">
				<RoutesWithTransition />
			</Box>
			<Navigation />
		</Box>
	);
};
