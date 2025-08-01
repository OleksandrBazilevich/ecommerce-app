import type { FunctionComponent, SVGProps } from "react";

import EnglishIcon from "../../assets/icons/English.svg?react";
import GermanIcon from "../../assets/icons/German.svg?react";

import { supportedLngs } from "./i18n";


export type SupportedLngsType = (typeof supportedLngs)[number];

type LanguageIconType = Record<
  SupportedLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconType = {
  en: EnglishIcon,
  de: GermanIcon,
};
