import React from "react";
// import { MaterialIndicator } from "react-native-indicators";

// export interface AppActivityIndicatorProps {
//   size?: string;
//   color?: string;
//   style?: object;
// }

export const AppActivityIndicator = ({
  size = "large",
  color = "#ffffff",
  style = {},
}) => {
  return (
    <div style={{ ...style }}>
      <MaterialIndicator
        size={size === "large" ? 50 : 25}
        trackWidth={2}
        color={color}
      />
    </div>
  );
};
