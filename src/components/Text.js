import { css } from "@emotion/css";

const styles = {
  textContainer: css`
    text-align: center;
    padding: 10px;
    width: 100%;
  `,
  textTitle: css`
    font-weight: bold;
    padding-bottom: 10px;
    padding-top: 10px;
  `,
  textContent: css`
  text-align: justify;
  padding-top: 10px;
`,
};

export const Text = ({ title, content }) => (
  <div className={styles.textContainer}>
    <div className={styles.textTitle}>{title}</div>
    <div className={styles.textContent}>{content}</div>
  </div>
);
