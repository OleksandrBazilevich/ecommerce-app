import MapPinIcon from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
import UsersIcon from "@/shared/assets/icons/Users.svg?react";
import LogoIcon from "@/shared/assets/icons/Logo.svg?react";

import styles from "./Header.module.scss";
import { AppIcon, Button, Input } from "@/shared/ui";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router";
import { routePaths } from "@/shared/config";
import { useLocation } from "react-router";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLoginClick = () => {
    navigate(routePaths.login);
  };

  if (pathname === routePaths.login) return;

  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <LogoIcon className={styles.logo} />

        <Button variant="ghost">
          <AppIcon Icon={MapPinIcon} />
          <span>10115 New York</span>
        </Button>
      </div>

      <div className={styles.section}>
        <Input
          className={styles.search}
          placeholder={t("header.searchBy")}
          Icon={<AppIcon size={18} Icon={SearchIcon} theme="background" />}
          rounded
        />
      </div>
      <div className={styles.section}>
        <Button variant="secondary">
          <span>{t("header.cart")}</span>
        </Button>

        <Button onClick={handleLoginClick} variant="outlined">
          <AppIcon Icon={UsersIcon} />
          <span>{t("header.login")}</span>
        </Button>

        <ThemeSwitcher />

        <LanguageSwitcher />
      </div>
    </header>
  );
};
