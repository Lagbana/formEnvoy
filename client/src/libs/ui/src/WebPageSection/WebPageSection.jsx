import React from "react";
import {
  SectionOneMessaging,
  SectionTwoMessaging,
  SectionThreeMessaging,
  FooterSectionMessaging,
} from "libs/content/marketing/Seo";

export const WebPageSection = ({
  children,
  isHero,
  isSectionOne,
  isSectionTwo,
  isSectionThree,
  isFooter,
  height,
  mTop,
  mBottom,
  pTop,
  pBottom,
}) => {
  const styles = {
    section: {
      paddingTop: pTop,
      paddingBottom: pBottom,
      marginTop: mTop,
      marginBottom: mBottom,
      width: "100%",
      height: height,
      backgroundColor: "green",
    },
    wrapper: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "22px",
      paddingBottom: "24px",
      paddingLeft: "10px",
      paddingRight: "10px",
      width: "100%",
      maxWidth: "1200px", //! make more responsive
      height: isHero ? "0%" : "100%",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: isHero ? "transparent" : "lightblue",
    },
    messaging: {
      backgroundColor: "white",
      height: "15vh",
      width: "100%",
      marginBottom: 0,
      display: "none",
    },
      content: {
        marginTop: '10px'
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <div style={styles.messaging}>
          {isSectionOne && <SectionOneMessaging />}
          {isSectionTwo && <SectionTwoMessaging />}
          {isSectionThree && <SectionThreeMessaging />}
          {isFooter && <FooterSectionMessaging />}
        </div>
        <div style={styles.content}>{children}</div>
      </div>
    </section>
  );
};
