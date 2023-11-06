import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import LanguageContext from "./contexts/LanguageContext";
import HowItWorks from "./pages/HowItWorks";
import { AnimatePresence } from "framer-motion";
import Solutions from "./pages/Solutions";
import Security from "./pages/Security";
import Efficiency from "./pages/Efficiency";
import WorkPlaceSafety from "./pages/WorkPlaceSafety";
import SalesAndMarketing from "./pages/SalesAndMarketing";

function App() {
  const location = useLocation();

  return (
    <LanguageContext>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/security" element={<Security />} />
          <Route path="/efficiency" element={<Efficiency />} />
          <Route path="/workplace" element={<WorkPlaceSafety />} />
          <Route path="/sales&marketing" element={<SalesAndMarketing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </LanguageContext>
  );
}
export default App;
