import { Parallax } from "react-parallax";
import cloud from "../img/cloud.svg";
import { css } from "@emotion/css";

const styles = {
  cloudWrapper: css`
    height: 250px;
    display: flex;
    width: 100%;
  `,
  cloudPosition: (percentage) => css`
    position: relative;
    display: inline-block;
    top: ${100 - percentage * 50}px;
    right: ${50 + percentage * 50}px;
    margin-left: auto;
  `,
};

export const Cloud = () => (
  <Parallax
    renderLayer={(percentage) => (
      <div className={styles.cloudWrapper}>
        <div className={styles.cloudPosition(percentage)}>
          <img src={cloud} alt="" />
        </div>
      </div>
    )}
  ></Parallax>
);
