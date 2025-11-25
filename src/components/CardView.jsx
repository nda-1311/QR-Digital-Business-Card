import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import {
  FaFacebook,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const CardView = () => {
  const { cardId } = useParams();
  const [cardData, setCardData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const savedCards = localStorage.getItem("businessCards");
    if (savedCards) {
      const cards = JSON.parse(savedCards);
      const card = cards[cardId];
      if (card) {
        setCardData(card);
      } else {
        setNotFound(true);
      }
    } else {
      setNotFound(true);
    }
  }, [cardId]);

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Không Tìm Thấy Danh Thiếp
          </h1>
          <p className="text-gray-600 mb-8">
            Danh thiếp này không tồn tại hoặc đã bị xóa.
          </p>
          <a
            href="/"
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Tạo Danh Thiếp Mới
          </a>
        </div>
      </div>
    );
  }

  if (!cardData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-card shadow-card-hover p-8 md:p-12">
          {/* Header with Avatar */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            {cardData.avatar ? (
              <img
                src={cardData.avatar}
                alt={cardData.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                {cardData.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {cardData.name}
              </h1>
              <p className="text-xl text-gray-600">{cardData.position}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <a
              href={`mailto:${cardData.email}`}
              className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors duration-300"
            >
              <FaEnvelope className="text-primary text-xl" />
              <span className="text-lg">{cardData.email}</span>
            </a>
            <a
              href={`tel:${cardData.phone}`}
              className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors duration-300"
            >
              <FaPhone className="text-primary text-xl" />
              <span className="text-lg">{cardData.phone}</span>
            </a>
          </div>

          {/* Social Links */}
          {(cardData.facebook || cardData.linkedin || cardData.website) && (
            <div className="flex gap-4 mb-8 justify-center md:justify-start">
              {cardData.facebook && (
                <a
                  href={cardData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <FaFacebook className="text-xl" />
                </a>
              )}
              {cardData.linkedin && (
                <a
                  href={cardData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              )}
              {cardData.website && (
                <a
                  href={cardData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <FaGlobe className="text-xl" />
                </a>
              )}
            </div>
          )}

          {/* QR Code */}
          <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quét QR để lưu thông tin
            </h3>
            <QRCodeCanvas
              value={window.location.href}
              size={200}
              level="H"
              includeMargin={true}
              fgColor="#000000"
              bgColor="#ffffff"
            />
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Tạo Danh Thiếp Của Bạn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
