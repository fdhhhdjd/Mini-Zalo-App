//* LIB
import React, { FC } from "react";
import { Box, Header, Text, Button } from "zmp-ui";
import { useDispatch } from "react-redux";
import { useRecoilValueLoadable } from "recoil";
import { userState } from "state";

//* IMPORT
import logo from "static/logo.png";
import appConfig from "../../../app-config.json";
import { getConfig } from "utils/config";
import { getPlaceholderInitiate } from "redux/placeholder/PlaceholderActions";
import useStoreTodo from "hooks/useSelectorPlace";

export const Welcome: FC = () => {
  const user = useRecoilValueLoadable(userState);

  const dispatch = useDispatch();

  const handleGetApiPlaceholder = () => {
    dispatch(getPlaceholderInitiate());
  };
  const { todos } = useStoreTodo();

  console.info(todos);

  return (
    <>
      <Header
        className="app-header no-border pl-4 flex-none pb-[6px]"
        showBackIcon={false}
        title={
          (
            <Box flex alignItems="center" className="space-x-2">
              <img
                className="w-8 h-8 rounded-lg border-inset"
                src={getConfig((c) => c.template.headerLogo) || logo}
              />
              <Box>
                <Text.Title size="small">{appConfig.app.title}</Text.Title>
                {user.state === "hasValue" ? (
                  <Text size="xxSmall" className="text-gray">
                    Welcome, {user.contents.name}!
                  </Text>
                ) : (
                  <Text>...</Text>
                )}
              </Box>
            </Box>
          ) as unknown as string
        }
      />
      <Button onClick={handleGetApiPlaceholder}>Get api placeholder</Button>
    </>
  );
};
