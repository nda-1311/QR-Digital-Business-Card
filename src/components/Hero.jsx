import React from "react";
import { FaRocket, FaQrcode } from "react-icons/fa";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <FaRocket className="text-primary" />
            <span className="text-sm font-medium text-gray-700">
              Miễn phí 100%
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Tạo Danh Thiếp Kỹ Thuật Số{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Chỉ Trong 10 Giây
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Nhập thông tin → Tạo QR → Chia sẻ ngay
            <br />
            <span className="text-gray-500">
              Không cần đăng ký, không giới hạn
            </span>
          </p>

          <button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <FaQrcode />
            Tạo Ngay Miễn Phí
          </button>
        </div>

        {/* Right Image */}
        <div className="relative animate-slide-up animate-delay-200">
          <div className="relative bg-white rounded-card shadow-card p-8 transform hover:scale-103 transition-all duration-500">
            {/* Business Card Preview */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-white mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold">Nguyễn Văn A</h3>
                  <p className="text-white/80">CEO & Founder</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p>📧 contact@example.com</p>
                <p>📱 +84 123 456 789</p>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center shadow-md">
                <FaQrcode className="text-6xl text-primary" />
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
            <FaQrcode className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
