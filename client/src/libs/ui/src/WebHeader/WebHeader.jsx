import React from "react";
import { Colors } from "libs/styles/src/colors";
import { Typography } from "libs/styles/src/typography";

export const WebHeader = (props) => {
  const { title, customStyles } = props;

  const styles = {
    header: {
      marginLeft: "auto",
      marginRight: "auto",
      color: customStyles ? customStyles.color : "",
      ...Typography.titleLarge,
    },
  };

  return <div style={styles.header}>{title}</div>;
};
