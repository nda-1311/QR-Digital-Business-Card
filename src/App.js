import React, { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FormSection from "./components/FormSection";
import CardPreview from "./components/CardPreview";
import Footer from "./components/Footer";

function App() {
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

export default App;
