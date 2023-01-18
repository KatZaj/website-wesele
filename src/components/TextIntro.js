import { css } from "@emotion/css";

const styles = {
  textContainer: css`
    text-align: center;
    padding: 10px;
  `,
  textTitle: css`
    font-weight: bold;
    padding-bottom: 10px;
    padding-top: 10px;
  `,
};

export const TextIntro = ({ title, content }) => (
  <div className={styles.textContainer}>
    <div className={styles.textTitle}>{title}</div>
    <div >{content}</div>
  </div>
);