import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FormSection from "./components/FormSection";
import CardPreview from "./components/CardPreview";
import Footer from "./components/Footer";
import CardView from "./components/CardView";

// Component để scroll lên đầu khi route thay đổi
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  const [cardData, setCardData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    avatar: "",
    facebook: "",
    linkedin: "",
    website: "",
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleFormSubmit = (data) => {
    setCardData(data);
    setShowPreview(true);
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <FormSection onSubmit={handleFormSubmit} />
      {showPreview && <CardPreview cardData={cardData} />}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/QR-Digital-Business-Card">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card/:cardId" element={<CardView />} />
      </Routes>
    </Router>
  );
}

export default App;
