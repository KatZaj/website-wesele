import { css } from "@emotion/css";

const styles = {
  titleFont: css`
    font-size: 8vw;
    font-weight: bold;
  `,
};

export const Header = () => (
  <>
    <div className={styles.titleFont}>
      <span>JASTARNIA</span>
    </div>
    <div className={styles.titleFont}>
      <span>27.05.2023</span>
    </div>
  </>
);
