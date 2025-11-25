import React from "react";
import { FaGithub, FaHeart, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              QR Business Card
            </h3>
            <p className="text-gray-400">
              Giải pháp danh thiếp kỹ thuật số hiện đại, nhanh chóng và miễn
              phí.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Trang Chủ
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Tính Năng
                </a>
              </li>
              <li>
                <a
                  href="#form-section"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Tạo Danh Thiếp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Hướng Dẫn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
            <div className="space-y-3 text-gray-400">
              <a
                href="mailto:1dap2xoe@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <FaEnvelope />
                1dap2xoe@gmail.com
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Nguyễn Đức Anh ©
            2025
          </p>
          <p className="mt-2 text-sm">Miễn phí 100% - Không giới hạn sử dụng</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
