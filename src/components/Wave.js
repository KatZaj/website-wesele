import { Parallax } from "react-parallax";
import fala from "../img/fala2.png";
import Meduza from "../img/Meduza.svg";
import { TextDetails } from "./TextDetails.js";
import { Text } from "./Text.js";
import translation from "../utils";

import { css } from "@emotion/css";

const styles = {
  wavePosition: (percentage) => css`
    background-color: transparent;
    transform: translateX(${-percentage * 40}%);
  `,
  meduzaContainer: css`
    justify-content: center;
    display: flex;
    width: 100%;
    height: 320px;
    align-items: end;
  `,
  meduzaPosition: (percentage) => css`
    transform: translateY(${-percentage * 150}%);
  `,
  blackContainer: css`
    background-color: #1a1a1aff;
    margin-top: -5px;
    width: 100%;
    color: aliceblue;
    padding-bottom: 15px;
  `,
  footer: css`
    position: relative;
    top: -100px;
  `,
};

export const Wave = () => (
  <Parallax
    strength={800}
    renderLayer={(percentage) => (
      <>
        <div className={styles.wavePosition(percentage)}>
          <img src={fala} alt=""></img>
        </div>
        <div className={styles.blackContainer}>
          <TextDetails />
          <div className={styles.meduzaContainer}>
            <div className={styles.meduzaPosition(percentage)}>
              <img src={Meduza} alt=""></img>
            </div>
          </div>
          <div className={styles.footer}>
            <Text
              title={translation.footer.title}
              content={translation.footer.content}
            />
          </div>
        </div>
      </>
    )}
  ></Parallax>
);
