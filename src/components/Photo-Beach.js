import { Parallax } from "react-parallax";
import bgPhoto from "../img/beach.jpg";
import { css } from "@emotion/css";

const styles = {
  photoBeach: css`
    position: relative;
    height: 80vh;
    @media (max-width: 40em) {
      height: 30vh;
    }
  `,
};

export const Photo = () => (
  <Parallax
    className={styles.photoBeach}
    bgImage={bgPhoto}
    strength={200}
  ></Parallax>
);
