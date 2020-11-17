import React from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { WebAlertTemplate } from "./components/WebAlertTemplate";

export const WebAlertProvider = (props) => {
  const { options, children } = props;
  return (
    <AlertProvider template={WebAlertTemplate} {...options}>
      { children }
    </AlertProvider>
  );
};
