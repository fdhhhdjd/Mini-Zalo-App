//* LIB
import React from "react";
import { Provider } from "react-redux";
import { App, ZMPRouter, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";

//* IMPORT
import { getConfig } from "utils/config";
import { Layout } from "./layout";
import { ConfigProvider } from "./config-provider";
import store from "redux/store";

const MyApp = () => {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <ConfigProvider
          cssVariables={{
            "--zmp-primary-color": getConfig((c) => c.template.primaryColor),
            "--zmp-background-color": "#f4f5f6",
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
