import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";


import NotFoundIcon from "@/shared/assets/icons/NotFound.svg?react";
import { Button } from "@/shared/ui";

import styles from "./NotFoundPage.module.scss";


const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClickBack = () => {
    if (window.history.length < 1) return navigate("/");
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <NotFoundIcon className={styles.icon} />
        <h3 className={styles.title}>{t("notFound.title")}</h3>
        <p className={styles.description}>{t("notFound.description")}</p>
        <Button
          onClick={handleClickBack}
          variant="primary"
          form={"rounded"}
          className={styles.button}
        >
          {t("notFound.goBack")}
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
