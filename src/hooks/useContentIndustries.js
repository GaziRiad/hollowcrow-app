import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../constants/industries";
import { tr } from "../constants/industries";

function useContentIndustries() {
  const { activeLanguage } = useLanguage();
  const content = activeLanguage === "tr" ? tr : en;
  return content;
}

export default useContentIndustries;
