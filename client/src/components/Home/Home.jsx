import React from "react";
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

  const checker = false;

  // checker ? alert.show(" Alert Test True ") : alert.show(" Alert Test False ");

  return (
    <WebScreen>
      <WebContainer customStyles={{ ...containerStyles, ...styles.c2 }}>
        <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t2} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          non aut deserunt, nostrum, accusamus velit maiores eum quis
          blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis laudantium
          sunt esse sed laborum!
        </p>
        <button style={styles.b2} onClick={() => alert.show(" Hello ")}>
          {"Info Button"}
        </button>
        <WebButton intent={"danger"}>{"Info Button"}</WebButton>
      </WebContainer>
      <WebContainer customStyles={{ ...containerStyles, ...styles.c1 }}>
        <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t1} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          non aut deserunt, nostrum, accusamus velit maiores eum quis
          blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis laudantium
          sunt esse sed laborum!
        </p>
        <button style={styles.b1} onClick={() => alert.show(" Hello ")}>
          {"Success Button"}
        </button>
      </WebContainer>
      <WebContainer customStyles={{ ...containerStyles, ...styles.c3 }}>
        <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t3} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          non aut deserunt, nostrum, accusamus velit maiores eum quis
          blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis laudantium
          sunt esse sed laborum!
        </p>
        <button style={styles.b3} onClick={() => alert.show(" Hello ")}>
          {"Warning Button"}
        </button>
      </WebContainer>
      <WebContainer customStyles={{ ...containerStyles, ...styles.c4 }}>
        <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t4} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          non aut deserunt, nostrum, accusamus velit maiores eum quis
          blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis laudantium
          sunt esse sed laborum!
        </p>
        <button style={styles.b4} onClick={() => alert.show(" Hello ")}>
          {"Error Button"}
        </button>
      </WebContainer>
      <WebContainer customStyles={{ ...containerStyles, ...styles.c5 }}>
        <WebHeader title={"Welcome to FormEnvoy"} customStyles={styles.t5} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          non aut deserunt, nostrum, accusamus velit maiores eum quis
          blanditiis, fugiat obcaecati modi cumque. Iure perspiciatis laudantium
          sunt esse sed laborum!
        </p>
        <button style={styles.b5} onClick={() => alert.show(" Hello ")}>
          {"Generic Button"}
        </button>
      </WebContainer>
    </WebScreen>
  );
};
