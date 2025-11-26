import React, { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import LZString from "lz-string";
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
  const [isDownloading, setIsDownloading] = useState(false);
  const [cachedImage, setCachedImage] = useState(null);
  const cardRef = useRef(null);

  // Tạo ID duy nhất và lưu vào localStorage
  useEffect(() => {
    const id =
      cardData.name.replace(/\s+/g, "-").toLowerCase() + "-" + Date.now();
    setCardId(id);

    // Lưu TOÀN BỘ dữ liệu vào localStorage
    const savedCards = localStorage.getItem("businessCards");
    const cards = savedCards ? JSON.parse(savedCards) : {};
    cards[id] = cardData;
    localStorage.setItem("businessCards", JSON.stringify(cards));
  }, [cardData]);

  // Clear cache khi đổi theme
  useEffect(() => {
    if (cachedImage) {
      URL.revokeObjectURL(cachedImage.url);
      setCachedImage(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  // Encode dữ liệu - GIỮ CẢ AVATAR (đã được resize/nén nhỏ)
  const encodeCardData = (data) => {
    const jsonString = JSON.stringify(data);
    // Nén bằng lz-string
    const compressed = LZString.compressToEncodedURIComponent(jsonString);
    return compressed;
  };

  // Generate URL với dữ liệu được nén trong hash fragment
  const cardUrl = `${
    window.location.origin
  }/QR-Digital-Business-Card/card/${cardId}#${encodeCardData(cardData)}`;

  const downloadCard = async () => {
    if (cardRef.current && !isDownloading) {
      setIsDownloading(true);

      try {
        // Kiểm tra cache trước
        if (cachedImage) {
          console.log("Sử dụng ảnh từ cache");
          downloadFromCache();
          return;
        }

        console.log("Bắt đầu tạo ảnh...");

        // Đợi fonts và ảnh load xong
        await document.fonts.ready;

        // Preload avatar nếu có
        if (cardData.avatar && !cardData.avatar.startsWith("data:")) {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = resolve;
            img.onerror = resolve; // Vẫn tiếp tục nếu lỗi
            img.src = cardData.avatar;
          });
        }

        await new Promise((resolve) => setTimeout(resolve, 200));

        console.log("Đang render canvas...");

        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
          scale: 2.5, // Giảm xuống 2.5 để cân bằng giữa quality và tốc độ
          useCORS: true,
          allowTaint: false,
          logging: false,
          foreignObjectRendering: false,
          imageTimeout: 15000, // Tăng timeout cho ảnh
          // Đặt width/height cụ thể để tránh méo
          width: cardRef.current.offsetWidth,
          height: cardRef.current.offsetHeight,
          windowWidth: cardRef.current.offsetWidth,
          windowHeight: cardRef.current.offsetHeight,
          onclone: (clonedDoc) => {
            const clonedCard = clonedDoc.querySelector("[data-card-ref]");
            if (clonedCard) {
              // Đảm bảo card có border-radius
              clonedCard.style.borderRadius = "24px";
              clonedCard.style.overflow = "hidden";
            }

            // Fix QR background
            const qrContainer = clonedDoc.querySelector("[data-qr-container]");
            if (qrContainer) {
              qrContainer.style.backgroundColor = isDarkMode
                ? "#374151"
                : "#f9fafb";
              qrContainer.style.borderRadius = "12px";
              qrContainer.style.padding = "24px";
            }

            // Fix avatar
            const clonedAvatarImg = clonedDoc.querySelector(
              'img[alt="' + cardData.name + '"]'
            );
            if (clonedAvatarImg) {
              const parentDiv = clonedAvatarImg.parentElement;
              if (parentDiv) {
                parentDiv.style.width = "96px";
                parentDiv.style.height = "96px";
                parentDiv.style.borderRadius = "50%";
                parentDiv.style.overflow = "hidden";
                parentDiv.style.display = "flex";
                parentDiv.style.alignItems = "center";
                parentDiv.style.justifyContent = "center";
                parentDiv.style.backgroundColor = isDarkMode
                  ? "#374151"
                  : "#f3f4f6";
                parentDiv.style.border = "4px solid #7ACFF5";
              }
              clonedAvatarImg.style.width = "100%";
              clonedAvatarImg.style.height = "100%";
              clonedAvatarImg.style.objectFit = "cover";
            }
          },
        });

        console.log("Canvas đã render:", canvas.width, "x", canvas.height);

        // Tên file
        const fileName = `business-card-${cardData.name
          .replace(/\s+/g, "-")
          .toLowerCase()}.png`;

        // Chuyển thành blob
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              console.error("Không thể tạo blob");
              alert("Không thể tạo ảnh. Vui lòng thử lại!");
              setIsDownloading(false);
              return;
            }

            console.log("Blob created:", blob.size, "bytes");

            // Lưu vào cache
            const url = URL.createObjectURL(blob);
            setCachedImage({ url, fileName, blob });

            // Download
            triggerDownload(url, fileName);
          },
          "image/png",
          1.0
        );
      } catch (error) {
        console.error("LỖI CHI TIẾT:", error);
        setIsDownloading(false);
        alert("Lỗi: " + (error.message || "Không xác định"));
      }
    }
  };

  // Download từ cache
  const downloadFromCache = () => {
    if (cachedImage) {
      triggerDownload(cachedImage.url, cachedImage.fileName);
    }
  };

  // Helper function để trigger download
  const triggerDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.style.position = "fixed";
    link.style.left = "-9999px";

    document.body.appendChild(link);
    link.click();

    console.log("Download triggered");

    setTimeout(() => {
      document.body.removeChild(link);
      setIsDownloading(false);
      console.log("Cleanup completed");
    }, 500);
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
              data-card-ref
              className={`w-full max-w-md rounded-card p-8 shadow-card-hover transform hover:scale-103 transition-all duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {/* Header with Avatar */}
              <div className="flex items-center gap-6 mb-6">
                {cardData.avatar ? (
                  <div
                    className={`w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-lg flex-shrink-0 flex items-center justify-center ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <img
                      src={cardData.avatar}
                      alt={cardData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold shadow-lg flex-shrink-0">
                    {cardData.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold mb-1 break-words">
                    {cardData.name}
                  </h3>
                  <p
                    className={`break-words ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {cardData.position}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <FaEnvelope
                    className="text-primary flex-shrink-0"
                    style={{ fontSize: "16px", minWidth: "16px" }}
                  />
                  <span className="text-sm">{cardData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone
                    className="text-primary flex-shrink-0"
                    style={{ fontSize: "16px", minWidth: "16px" }}
                  />
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
              <div
                data-qr-container
                className={`rounded-xl p-6 flex justify-center ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-50"
                }`}
                style={{
                  backgroundColor: isDarkMode ? "#374151" : "#f9fafb",
                }}
              >
                <QRCodeCanvas
                  value={cardUrl}
                  size={200}
                  level="H"
                  includeMargin={true}
                  fgColor="#000000"
                  bgColor="transparent"
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
                disabled={isDownloading}
                className={`w-full text-white px-6 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 ${
                  isDownloading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-primary to-secondary hover:shadow-xl transform hover:scale-105"
                }`}
              >
                {isDownloading ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Đang xử lý...
                  </>
                ) : cachedImage ? (
                  <>⚡ Tải Nhanh (Đã Cache)</>
                ) : (
                  <>💾 Tải Danh Thiếp (PNG)</>
                )}
              </button>
              {cachedImage && (
                <button
                  onClick={() => {
                    URL.revokeObjectURL(cachedImage.url);
                    setCachedImage(null);
                  }}
                  className="w-full mt-3 text-gray-600 px-4 py-2 rounded-xl border-2 border-gray-300 hover:bg-gray-100 transition-all duration-300 text-sm"
                >
                  🔄 Tạo Lại Ảnh
                </button>
              )}
              <p className="text-xs text-gray-500 mt-2 text-center">
                {cachedImage
                  ? "✅ Ảnh đã sẵn sàng - Tải xuống ngay lập tức!"
                  : "⏱️ Lần đầu sẽ mất vài giây, sau đó tải ngay"}
              </p>
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
