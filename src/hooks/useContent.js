import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useLocation } from "react-router";

function useContentSecurity() {
  const location = useLocation();
  const fileName = location.pathname.slice(1);
  const { activeLanguage } = useLanguage();
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function getContent() {
      const content = await import(
        `../translations/${activeLanguage}/${fileName}.json`
      );
      setContent(content);
    }
    getContent();
  }, [activeLanguage, fileName]);

  return { content };
}

export default useContentSecurity;
