import React from "react";
import { WebPageSection } from "libs/ui/src/WebPageSection/WebPageSection";
import { WebContainer } from "libs/ui/src/WebContainer/WebContainer";
import { WebHeader } from "libs/ui/src/WebHeader/WebHeader";
import { WebScreen } from "libs/ui/src/WebScreen/WebScreen";
import { WebButton } from "libs/ui/src/WebButton/WebButton";
import { useAlert } from "react-alert";
import { Colors } from "libs/styles/src/colors";

export const Home = () => {
  const buttonStyles = {
    height: "5vh",
    width: "10vw",
    borderWidth: 0,
    // outline: "none",
    borderRadius: "5px",
  };

  const containerStyles = {
    topSpace: "5vh",
    // bottomSpace: "2vh",
  };

  const styles = {
    t1: {
      color: Colors.GreenTitle,
    },
    t2: {
      color: Colors.BlueTitle,
    },
    t3: {
      color: Colors.YellowTitle,
    },
    t4: {
      color: Colors.RedTitle,
    },
    t5: {
      color: Colors.GreyTitle,
    },
    c1: {
      backgroundColor: Colors.GreenBackground,
      color: Colors.GreenText,
    },
    c2: {
      backgroundColor: Colors.BlueBackground,
      color: Colors.BlueText,
    },
    c3: {
      backgroundColor: Colors.YellowBackground,
      color: Colors.YellowText,
    },
    c4: {
      backgroundColor: Colors.RedBackground,
      color: Colors.RedText,
    },
    c5: {
      backgroundColor: Colors.GreyBackground,
      color: Colors.GreyText,
    },
    b1: {
      backgroundColor: Colors.buttonGreen,
      outlineColor: Colors.GreenOutline,
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      ...buttonStyles,
    },
    b2: {
      backgroundColor: Colors.buttonBlue,
      outlineColor: Colors.BlueOutline,
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      ...buttonStyles,
    },
    b3: {
      backgroundColor: Colors.buttonYellow,
      outlineColor: Colors.YellowOutline,
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      ...buttonStyles,
    },
    b4: {
      backgroundColor: Colors.buttonRed,
      outlineColor: Colors.RedOutline,
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      ...buttonStyles,
    },
    b5: {
      backgroundColor: Colors.GreyText,
      outlineColor: Colors.GreyOutline,
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      ...buttonStyles,
    },
  };

  const alert = useAlert();

  return (
    <WebScreen>
      <WebPageSection isHero={true} height={"100vh"}>
        <div>
          <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t2} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            non aut deserunt, nostrum, accusamus velit maiores eum quis
            blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis
            laudantium sunt esse sed laborum!
          </p>
          <button style={styles.b2} onClick={() => alert.show(" Hello ")}>
            {"Success Button"}
          </button>
        </div>
      </WebPageSection>
      <WebPageSection height={"40vh"} isSectionOne={true}>
        <div>
          <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t1} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            non aut deserunt, nostrum, accusamus velit maiores eum quis
            blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis
            laudantium sunt esse sed laborum!
          </p>
          <button style={styles.b1} onClick={() => alert.show(" Hello ")}>
            {"Success Button"}
          </button>
        </div>
      </WebPageSection>
      <WebPageSection height={"40vh"} isSectionTwo={true}>
        <div>
          <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t3} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            non aut deserunt, nostrum, accusamus velit maiores eum quis
            blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis
            laudantium sunt esse sed laborum!
          </p>
          <button style={styles.b3} onClick={() => alert.show(" Hello ")}>
            {"Success Button"}
          </button>
        </div>
      </WebPageSection>
      <WebPageSection height={"40vh"} isSectionThree={true}>
        <div>
          <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t4} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            non aut deserunt, nostrum, accusamus velit maiores eum quis
            blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis
            laudantium sunt esse sed laborum!
          </p>
          <button style={styles.b4} onClick={() => alert.show(" Hello ")}>
            {"Success Button"}
          </button>
        </div>
      </WebPageSection>
      <WebPageSection height={"40vh"} isFooter={true}>
        <div>
          <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t5} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            non aut deserunt, nostrum, accusamus velit maiores eum quis
            blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis
            laudantium sunt esse sed laborum!
          </p>
          <button style={styles.b5} onClick={() => alert.show(" Hello ")}>
            {"Success Button"}
          </button>
        </div>
      </WebPageSection>
    </WebScreen>
  );
};
