import { Cloud } from "./Cloud.js";
import { Text } from "./Text.js";
import translation from "../utils";
import wesele from "../img/boat.png";
import { css } from "@emotion/css";

const styles = {
  intro: css`
    background-color: white;
    position: relative;
    width: 100%;
  `,
  invit: css`
    padding: 50px 10px 50px 10px;
  `,
  container: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  `,
  side: css`
    width: 33vw;
    flex: 1 1 auto;
    overflow: hidden;
    @media (max-width: 70em) {
      display: none;
    }
  `,
  comicsWrapper: css`
    display: flex;
    justify-content: center;
    position: relative;
    top: 32px;
    @media (min-width: 70em) {
      right: 400px;
    }
  `,
};

export const Content = () => (
  <>
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.side}>
          <Cloud />
        </div>
        <div className={styles.invit}>
          <Text
            title={translation.invitation.title}
            content={translation.invitation.content}
          />
        </div>
        <div className={styles.side}>
          <Cloud />
          <Cloud />
        </div>
      </div>
    </div>
    <div className={styles.comicsWrapper}>
      <img src={wesele} alt="" />
    </div>
  </>
);
