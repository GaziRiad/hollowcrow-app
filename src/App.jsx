import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import LanguageContext from "./contexts/LanguageContext";
import HowItWorks from "./pages/HowItWorks";
import { AnimatePresence } from "framer-motion";
import Solutions from "./pages/Solutions";
import Security from "./pages/Security";
import OperationalExcellence from "./pages/OperationalExcellence";
import WorkPlaceSafety from "./pages/WorkPlaceSafety";
import Retail from "./pages/Retail";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Signup from "./pages/Signup";

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
          <Route
            path="/operational-excellence"
            element={<OperationalExcellence />}
          />
          <Route path="/workplace-safety" element={<WorkPlaceSafety />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/success" element={<SuccessStories />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </LanguageContext>
  );
}
export default App;
