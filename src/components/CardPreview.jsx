import React, { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import {
  FaFacebook,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaCopy,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const CardPreview = ({ cardData }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [cardId, setCardId] = useState("");
  const cardRef = useRef(null);

  // Tạo ID duy nhất và lưu vào localStorage
  useEffect(() => {
    const id = cardData.name.replace(/\s+/g, "-").toLowerCase() + "-" + Date.now();
    setCardId(id);
    
    // Lưu vào localStorage
    const savedCards = localStorage.getItem("businessCards");
    const cards = savedCards ? JSON.parse(savedCards) : {};
    cards[id] = cardData;
    localStorage.setItem("businessCards", JSON.stringify(cards));
  }, [cardData]);

  // Generate unique URL for the card
  const cardUrl = `${window.location.origin}/QR-Digital-Business-Card/card/${cardId}`;

  const downloadCard = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
      });

      const link = document.createElement("a");
      link.download = `business-card-${cardData.name
        .replace(/\s+/g, "-")
        .toLowerCase()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(cardUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="card-preview"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🎉 Danh Thiếp Của Bạn Đã Sẵn Sàng!
          </h2>
          <p className="text-xl text-gray-600">
            Tải xuống hoặc chia sẻ ngay bây giờ
          </p>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isDarkMode
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FaSun className="inline mr-2" />
              Light
            </button>
            <button
              onClick={() => setIsDarkMode(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FaMoon className="inline mr-2" />
              Dark
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Card Preview */}
          <div className="flex justify-center animate-slide-up">
            <div
              ref={cardRef}
              className={`w-full max-w-md rounded-card p-8 shadow-card-hover transform hover:scale-103 transition-all duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {/* Header with Avatar */}
              <div className="flex items-center gap-6 mb-6">
                {cardData.avatar ? (
                  <img
                    src={cardData.avatar}
                    alt={cardData.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-lg"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {cardData.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold mb-1">{cardData.name}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    {cardData.position}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary" />
                  <span className="text-sm">{cardData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-primary" />
                  <span className="text-sm">{cardData.phone}</span>
                </div>
              </div>

              {/* Social Links */}
              {(cardData.facebook || cardData.linkedin || cardData.website) && (
                <div className="flex gap-4 mb-6">
                  {cardData.facebook && (
                    <a
                      href={cardData.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <FaFacebook />
                    </a>
                  )}
                  {cardData.linkedin && (
                    <a
                      href={cardData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {cardData.website && (
                    <a
                      href={cardData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <FaGlobe />
                    </a>
                  )}
                </div>
              )}

              {/* QR Code */}
              <div
                className={`rounded-xl p-6 flex justify-center ${
                  isDarkMode ? "bg-white" : "bg-gray-50"
                }`}
              >
                <QRCodeCanvas
                  value={cardUrl}
                  size={200}
                  level="H"
                  includeMargin={true}
                  fgColor="#000000"
                  bgColor="#ffffff"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6 animate-slide-up animate-delay-200">
            {/* Download Button */}
            <div className="bg-white rounded-card p-6 shadow-card">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaDownload className="text-primary" />
                Tải Xuống
              </h3>
              <button
                onClick={downloadCard}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                💾 Tải Danh Thiếp (PNG)
              </button>
            </div>

            {/* Copy Link */}
            <div className="bg-white rounded-card p-6 shadow-card">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaCopy className="text-primary" />
                Chia Sẻ Link
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={cardUrl}
                  readOnly
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-sm"
                />
                <button
                  onClick={copyLink}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
                  }`}
                >
                  {copied ? "✓ Đã Sao" : "Sao Chép"}
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-card p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                💡 Mẹo Sử Dụng
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ In QR code lên danh thiếp giấy của bạn</li>
                <li>✓ Chia sẻ link trên email signature</li>
                <li>✓ Đặt làm ảnh bìa LinkedIn</li>
                <li>✓ Gửi cho khách hàng qua chat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPreview;
