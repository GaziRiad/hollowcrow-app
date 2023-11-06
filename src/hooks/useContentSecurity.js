import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../constants/security";
import { tr } from "../constants/security";

function useContentSecurity() {
  const { activeLanguage } = useLanguage();
  const content = activeLanguage === "tr" ? tr : en;
  return content;
}

export default useContentSecurity;
