import React from "react";

import styles from "./styles.module.scss";
import GlobalStyles from "../../styles/Global.module.scss";
import SocialButton from "../SocialButton";

export default function SpreadMessageCTA({
  ctaCopy,
  ctaTitle,
  socialTitle,
  socialCopy,
  socialButtons
}) {
  return (
    <div className={GlobalStyles.inner}>
      <div className={styles.container}>
        {/* cta block / right col */}
        <div className={styles.ctaCopy}>
          <div className={styles.title}>{ctaTitle}</div>
          <p className={styles.copy}>{ctaCopy}</p>
        </div>

        {/* social block  / right col */}
        <div className={styles.socialBlock}>
          <h3 className={styles.subTitle}>{socialTitle}</h3>
          <p>{socialCopy}</p>
          <div className={styles.socialContainer}>
            {socialButtons.map(item => (
              <div className={styles.socialButtons}>
                <SocialButton description={item.description} logo={item.logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
