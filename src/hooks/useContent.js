import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../constants/index";
import { tr } from "../constants/index";

function useContent() {
  const { activeLanguage } = useLanguage();
  const content = activeLanguage === "tr" ? tr : en;
  return content;
}

export default useContent;
