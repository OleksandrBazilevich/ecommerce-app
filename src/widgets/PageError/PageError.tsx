import { useTranslation } from "react-i18next";


import PageErrorIcon from "@/shared/assets/icons/PageError.svg?react";
import { Button } from "@/shared/ui";

import styles from "./PageError.module.scss";


export const PageError = () => {
  const { t } = useTranslation();

  const handleReloadClick = () => {
    location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PageErrorIcon className={styles.icon} />
        <h3 className={styles.title}>{t("pageError.title")}</h3>
        <p className={styles.description}>{t("pageError.description")}</p>
        <Button
          onClick={handleReloadClick}
          variant="primary"
          form={"rounded"}
          className={styles.button}
        >
          {t("pageError.reload")}
        </Button>
      </div>
    </div>
  );
};
