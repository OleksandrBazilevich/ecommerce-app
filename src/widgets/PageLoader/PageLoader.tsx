import { useTranslation } from "react-i18next";

import { Spinner } from "@/shared/ui/Spinner/Spinner";

import styles from "./PageLoader.module.scss";

export const PageLoader = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.text}>{t("pageLoader.loading")}</h3>
      <Spinner />
    </div>
  );
};
