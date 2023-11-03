import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import LanguageContext from "./contexts/LanguageContext";
import HowItWorks from "./pages/HowItWorks";
import Industries from "./pages/Industries";
import { AnimatePresence } from "framer-motion";
import Solutions from "./pages/Solutions";

function App() {
  const location = useLocation();

  return (
    <LanguageContext>
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Home />} />
          <Route path="/howItWorks" element={<HowItWorks />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </LanguageContext>
  );
}
export default App;
