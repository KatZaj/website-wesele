import translation from "../utils";
import { Text } from "./Text.js";

import { css } from "@emotion/css";

const styles = {
  columnLayout: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    padding-bottom: 20px;
  `,
  column: css`
    flex: 33.33%;
    justify-content: center;
    display: flex;
    min-width: 220px;
  `,
};

export const TextDetails = () => (
  <div className={styles.columnLayout}>
    <div className={styles.column}>
      <Text
        title={translation.accommodation.title}
        content={translation.accommodation.content}
      />
    </div>
    <div className={styles.column}>
      <Text
        title={translation.transport.title}
        content={translation.transport.content}
      />
    </div>
    <div className={styles.column}>
      <Text
        title={translation.contact.title}
        content={translation.contact.content}
      />
    </div>
  </div>
);
