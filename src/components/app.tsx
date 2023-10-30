//* LIB
import React from "react";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import store from "redux/store";
import { getConfig } from "utils/config";
import { App, ZMPRouter, SnackbarProvider } from "zmp-ui";

//* IMPORT

import { ConfigProvider } from "./config-provider";
import { Layout } from "./layout";

const MyApp = () => {
	return (
		<Provider store={store}>
			<RecoilRoot>
				<ConfigProvider
					cssVariables={{
						"--zmp-primary-color": getConfig((c) => c.template.primaryColor),
						"--zmp-background-color": "#f4f5f6"
					}}
				>
					<App>
						<SnackbarProvider>
							<ZMPRouter>
								<Layout />
							</ZMPRouter>
						</SnackbarProvider>
					</App>
				</ConfigProvider>
			</RecoilRoot>
		</Provider>
	);
};
export default MyApp;
