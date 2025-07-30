import { useTranslation } from "react-i18next";

import { languageIconList, type SupportedLngsType } from "@/shared/config";
import { Button , AppIcon } from "@/shared/ui";


export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLngsType;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };
  return (
    <Button onClick={toggleLanguage} variant="ghost">
      <AppIcon Icon={languageIconList[currentLanguage]} />
    </Button>
  );
};
