# 🚀 QR Digital Business Card Generator

Ứng dụng tạo danh thiếp kỹ thuật số với QR Code hiện đại, nhanh chóng và miễn phí 100%.

**🌐 Demo Live:** [https://nda-1311.github.io/QR-Digital-Business-Card/](https://nda-1311.github.io/QR-Digital-Business-Card/)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8.svg)

## ✨ Tính Năng

- ⚡ **Siêu Nhanh**: Tạo danh thiếp trong 10 giây
- 🎨 **UI Đẹp Mắt**: Thiết kế hiện đại theo phong cách startup công nghệ
- 📱 **Responsive**: Hoạt động mượt mà trên mọi thiết bị
- 🔄 **Real-time Preview**: Xem trước danh thiếp ngay khi nhập
- 🌓 **Dark/Light Mode**: Chuyển đổi giao diện linh hoạt
- 💾 **Xuất PNG**: Tải xuống danh thiếp chất lượng cao
- 🔗 **Chia Sẻ Link**: Link riêng cho mỗi danh thiếp, có thể chia sẻ
- 🎯 **QR Code Thực Tế**: Quét QR bằng điện thoại để mở danh thiếp
- 💿 **Lưu Trữ LocalStorage**: Danh thiếp được lưu vĩnh viễn trên trình duyệt
- 🚀 **Dynamic Routing**: Mỗi card có URL riêng biệt

## 🛠️ Công Nghệ Sử Dụng

- **React 19**: Framework UI hiện đại
- **React Router**: Routing động cho SPA
- **Tailwind CSS**: Styling nhanh và responsive
- **QRCode.react**: Tạo mã QR thực tế
- **html2canvas**: Xuất ảnh PNG
- **React Icons**: Bộ icon đẹp mắt
- **GitHub Pages**: Hosting miễn phí

## 📦 Cài Đặt & Chạy Dự Án

### Yêu Cầu

- Node.js >= 14.0.0
- npm >= 6.0.0

### Bước 1: Clone Dự Án

```bash
git clone https://github.com/nda-1311/QR-Digital-Business-Card.git
cd QR-Digital-Business-Card
```

### Bước 2: Cài Đặt Dependencies

\`\`\`bash
npm install
\`\`\`

### Bước 3: Chạy Development Server

\`\`\`bash
npm start
\`\`\`

Mở trình duyệt tại: `http://localhost:3000`

**Demo trực tiếp:** [http://localhost:3000](http://localhost:3000)

### Bước 4: Build Production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `build/`

### Bước 5: Deploy lên GitHub Pages

```bash
npm run deploy
```

## 📂 Cấu Trúc Dự Án

```
qr-business-card/
├── public/
│   ├── index.html          # HTML template + SPA routing
│   ├── 404.html            # GitHub Pages routing handler
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Features.jsx    # Features section
│   │   ├── FormSection.jsx # Form nhập liệu
│   │   ├── CardPreview.jsx # Preview & Export
│   │   ├── CardView.jsx    # Trang hiển thị card riêng
│   │   └── Footer.jsx      # Footer
│   ├── App.js              # Router & routing logic
│   ├── index.js            # Entry point
│   └── index.css           # Tailwind CSS
├── tailwind.config.js      # Cấu hình Tailwind
├── postcss.config.js       # Cấu hình PostCSS
└── package.json            # Dependencies
```

## 🎨 Palette Màu

- **Primary**: #4F46E5 (Indigo)
- **Secondary**: #7C3AED (Purple)
- **Accent**: #F3F4F6 (Trắng xám)
- **Text**: #1F2937 (Xám đậm)
- **Background**: Gradient xám nhẹ nhàng

## 🚀 Hướng Dẫn Sử Dụng

### Tạo Danh Thiếp Mới

1. **Nhập thông tin**: Điền đầy đủ họ tên, chức vụ, email, số điện thoại
2. **Upload avatar**: Chọn ảnh đại diện (tùy chọn)
3. **Thêm mạng xã hội**: Facebook, LinkedIn, Website (tùy chọn)
4. **Tạo danh thiếp**: Click nút "Tạo Danh Thiếp Ngay"
5. **Preview & Export**: Xem trước card với Dark/Light mode

### Chia Sẻ & Sử Dụng

1. **📥 Tải PNG**: Download hình ảnh danh thiếp chất lượng cao
2. **🔗 Copy Link**: Sao chép link chia sẻ duy nhất cho danh thiếp
3. **📱 Quét QR**: Sử dụng camera điện thoại để quét QR code
4. **🌐 Chia sẻ**: Gửi link cho khách hàng, đối tác qua email/chat
5. **💾 Lưu trữ**: Danh thiếp tự động lưu vào localStorage của trình duyệt

### Xem Danh Thiếp Đã Tạo

- Mỗi danh thiếp có URL riêng: `/card/{id}`
- Click vào link hoặc quét QR để xem card đầy đủ
- Card hiển thị đẹp mắt với avatar, thông tin liên hệ, mạng xã hội
- QR code động để tiếp tục chia sẻ

## 🌟 Tính Năng Nổi Bật

### QR Code Thực Tế

- QR code có thể quét bằng camera điện thoại
- Mỗi card có QR riêng biệt
- Tự động redirect đến trang card khi quét

### Dynamic Routing

- React Router cho SPA routing
- Deep linking hỗ trợ trên GitHub Pages
- URL sharing cho mỗi danh thiếp

### LocalStorage

- Lưu trữ dữ liệu card tự động
- Không cần backend/database
- Dữ liệu persistent trên trình duyệt

### Animations

- Fade-in effects
- Slide-up animations
- Hover transformations
- Smooth transitions

### Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop full-screen

### SEO Optimized

- Meta tags
- Open Graph
- Semantic HTML

## 📝 License

MIT License - Sử dụng miễn phí cho mọi mục đích

## 👨‍💻 Tác Giả

**Nguyễn Đức Anh**

- 📧 Email: 1dap2xoe@gmail.com
- 📱 Phone: 0358102981

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Hãy tạo Pull Request hoặc Issue.

## 📧 Liên Hệ

- Email: 1dap2xoe@gmail.com
- GitHub: [@nda-1311](https://github.com/nda-1311)
- Repository: [QR-Digital-Business-Card](https://github.com/nda-1311/QR-Digital-Business-Card)

---

**Made with ❤️ by Nguyễn Đức Anh**
