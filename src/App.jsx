import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Service from "./components/Service";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ThankYou from "./ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Header />} />
        <Route path="services" element={<Service />} />
        <Route path="works" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
