import React from "react";
import { WebBackground } from "libs/ui/src/WebBackground/WebBackground";
import { Navbar } from "components/index";

export const WebScreen = (props) => {
  const { children } = props

  return (
    <WebBackground>
      <Navbar />
      { children }
    </WebBackground>
  );
};
