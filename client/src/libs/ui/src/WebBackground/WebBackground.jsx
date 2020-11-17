import React from "react";
import Background from "libs/assets/src/weather.png";
import { Colors } from 'libs/styles/src/colors'


export const WebBackground = ({ children }) => {

    const styles = {
      background: {
        backgroundImage: `url(${Background})`,
        backgroundColor: "#A7DBE3",
        padding: '0 0 5vh 0',
      },
    };
  
  return <main style={styles.background}>{children}</main>;
};
