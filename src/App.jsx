import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import LanguageContext from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageContext>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageContext>
  );
}

export default App;
