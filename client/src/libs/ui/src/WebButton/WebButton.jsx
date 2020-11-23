/* Custom button
=============================== */

import React from "react";
import {
  Colors,
  Typography,
  // SizeKeys,
} from "libs/styles/src"
import { Button } from "evergreen-ui";

// export interface AppButtonProps {
//   onPress?: () => void;
//   type?: 'default' | 'secondary' | 'outline' | 'danger';
//   size?: SizeKeys;
//   icon?: string;
//   disabled?: boolean;
//   loading?: boolean;
//   customStyles?: ViewStyle;
// }

export const WebButton = ({
  children,
  onClick,
  type = "default",
  size = "default",
  icon,
  intent,
  disabled,
  loading,
  customStyles,
}) => {
  // styles
  const styles = {}
  // const styles = {
  //   baseContainer: {
  //     borderRadius: 99,
  //     paddingVertical: Typography.sizes[size] * 0.9,
  //     paddingHorizontal: Typography.sizes[size] * 2,
  //     minWidth: size === "large" ? 220 : 160,
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   baseLabel: {
  //     fontSize: Typography.sizes[size],
  //     fontFamily: Typography.families.bold,
  //     textAlign: "center",
  //   },
  //   baseIcon: {
  //     marginRight: 10,
  //     marginLeft: -10,
  //     marginTop: -1,
  //     marginBottom: -5,
  //   },
  //   spinner: {
  //     marginRight: 10,
  //     marginLeft: -10,
  //   },
  //   defaultContainer: {
  //     backgroundColor: Colors.blue,
  //   },
  //   defaultLabel: {
  //     color: textColor,
  //   },
  //   defaultIcon: {
  //     color: textColor,
  //   },
  //   secondaryContainer: {
  //     backgroundColor: Colors.green,
  //   },
  //   secondaryLabel: {
  //     color: textColor,
  //   },
  //   secondaryIcon: {
  //     color: textColor,
  //   },
  //   dangerContainer: {
  //     backgroundColor: Colors.red,
  //   },
  //   dangerLabel: {
  //     color: textColor,
  //   },
  //   dangerIcon: {
  //     color: textColor,
  //   },
  //   outlineContainer: {
  //     backgroundColor: "transparent",
  //     borderColor: Colors.blueLight,
  //     paddingVertical: 15,
  //     borderWidth: 3,
  //   },
  //   outlineLabel: {
  //     color: textColor,
  //   },
  // };

  return (
    <Button
      style={{ backgroundColor: "green", width: "10vw", color: "pink" }}
      // style={{ ...customStyles, ...styles }}
      onClick={onClick}
      // type={"reset"}
      appearance={"minimal"}
      // intent={intent}
      // disabled={disabled}
      isLoading={false}
    >
      {children}
    </Button>
  );
};
