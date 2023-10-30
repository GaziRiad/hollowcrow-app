import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../constants/HowItWorks";
import { tr } from "../constants/HowItWorks";

function useContentHowItWorks() {
  const { activeLanguage } = useLanguage();
  const content = activeLanguage === "tr" ? tr : en;
  return content;
}

export default useContentHowItWorks;
