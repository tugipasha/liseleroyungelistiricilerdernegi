import { Locale, TranslationDictionary } from "../types";
import { tr } from "./tr";
import { en } from "./en";
import { de } from "./de";

export const dictionaries: Record<Locale, TranslationDictionary> = {
  tr,
  en,
  de,
};

export { tr, en, de };
