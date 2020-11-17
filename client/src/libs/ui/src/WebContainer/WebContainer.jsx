import React from "react";
import { Colors } from "libs/styles/src/colors";
import { Typography } from "libs/styles/src/typography";


export const WebContainer = (props) => {
  const { children, customStyles } = props;

  const styles = {
    container: {
      backgroundColor: customStyles.backgroundColor,
      color: customStyles.color,
      width: "55%",
      height: customStyles.height,
      marginTop: customStyles.topSpace,
      marginBottom: customStyles.bottomSpace,
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "1vw",
      ...Typography.bodyDefault,
    },
    textBody: {
      padding: "1vw 2vw 1vw 2vw",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textBody}>{children}</div>
    </div>
  );
};
