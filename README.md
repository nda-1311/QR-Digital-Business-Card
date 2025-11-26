# 🚀 QR Digital Business Card Generator

Ứng dụng tạo danh thiếp kỹ thuật số với QR Code hiện đại, nhanh chóng và miễn phí 100%. Hỗ trợ upload ảnh lên cloud để chia sẻ đầy đủ thông tin qua QR code!

**🌐 Demo Live:** [https://nda-1311.github.io/QR-Digital-Business-Card/](https://nda-1311.github.io/QR-Digital-Business-Card/)

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8.svg)
![ImgBB](https://img.shields.io/badge/ImgBB-Cloud%20Storage-green.svg)

## ✨ Tính Năng

- ⚡ **Siêu Nhanh**: Tạo danh thiếp trong 10 giây
- 🎨 **UI Đẹp Mắt**: Thiết kế hiện đại theo phong cách startup công nghệ
- 📱 **Responsive**: Hoạt động mượt mà trên mọi thiết bị
- 🔄 **Real-time Preview**: Xem trước danh thiếp ngay khi nhập
- 🌓 **Dark/Light Mode**: Chuyển đổi giao diện linh hoạt
- 💾 **Xuất PNG**: Tải xuống danh thiếp chất lượng cao với icons căn chỉnh hoàn hảo
- 🔗 **Chia Sẻ Link**: Link riêng cho mỗi danh thiếp, có thể chia sẻ
- 🎯 **QR Code Thực Tế**: Quét QR bằng điện thoại để xem danh thiếp đầy đủ
- ☁️ **Cloud Storage**: Avatar được lưu trên ImgBB cloud, không giới hạn
- 📦 **Data Compression**: Nén dữ liệu bằng lz-string để URL ngắn gọn
- 🔐 **Hash Fragment**: Dữ liệu được mã hóa an toàn trong URL
- 🚀 **Dynamic Routing**: Mỗi card có URL riêng biệt với scroll to top
- 🎨 **Icon Rendering**: Unicode symbols trong ảnh export để tránh lỗi alignment

## 🛠️ Công Nghệ Sử Dụng

- **React 19**: Framework UI hiện đại
- **React Router v7**: Routing động cho SPA
- **Tailwind CSS**: Styling nhanh và responsive
- **QRCode.react**: Tạo mã QR thực tế
- **html2canvas**: Xuất ảnh PNG chất lượng cao
- **lz-string**: Nén dữ liệu để URL ngắn gọn
- **ImgBB API**: Cloud storage cho avatar
- **React Icons**: Bộ icon đẹp mắt
- **GitHub Pages**: Hosting miễn phí với SPA routing

## 🔧 Cấu Hình ImgBB API

Để upload avatar lên cloud, bạn cần API key từ ImgBB:

1. Truy cập: [https://api.imgbb.com/](https://api.imgbb.com/)
2. Đăng ký tài khoản miễn phí
3. Lấy API key
4. Thay thế trong `src/components/FormSection.jsx`:

```javascript
const IMGBB_API_KEY = "YOUR_API_KEY_HERE";
```

**Fallback:** Nếu upload thất bại, ảnh sẽ tự động resize và lưu dưới dạng base64 nén.

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
│   ├── index.html          # HTML template + SPA routing support
│   ├── 404.html            # GitHub Pages routing handler
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # Hero section với CTA
│   │   ├── Features.jsx    # Features showcase
│   │   ├── FormSection.jsx # Form nhập liệu + ImgBB upload
│   │   ├── CardPreview.jsx # Preview & Export với compression
│   │   ├── CardView.jsx    # Trang hiển thị card riêng + decode
│   │   └── Footer.jsx      # Footer
│   ├── App.js              # Router + ScrollToTop logic
│   ├── index.js            # Entry point
│   └── index.css           # Tailwind CSS + custom styles
├── tailwind.config.js      # Cấu hình Tailwind với custom colors
├── postcss.config.js       # Cấu hình PostCSS
└── package.json            # Dependencies + scripts
```

## 🔥 Tính Năng Kỹ Thuật Nổi Bật

### 1. Cloud Image Storage

- Upload avatar lên ImgBB cloud
- Không giới hạn dung lượng
- Fallback: auto resize + base64 nếu upload thất bại
- File size check: max 5MB

### 2. Data Compression & Encoding

- Nén dữ liệu bằng `lz-string`
- Encode trong hash fragment (#) thay vì query (?)
- URL ngắn gọn hơn 70% so với base64 thông thường
- Support avatar URL từ cloud

### 3. QR Code Sharing

- Dữ liệu được embed trực tiếp vào QR
- Quét QR từ bất kỳ thiết bị nào
- Hiển thị đầy đủ thông tin kể cả avatar
- Không cần server/database

### 4. PNG Export với Icon Perfect Alignment

- Unicode symbols (✉ ☎) thay thế SVG icons khi export
- Đảm bảo icons căn chỉnh hoàn hảo trong ảnh
- Scale 3x cho chất lượng cao
- Chờ fonts load hoàn toàn trước khi render

### 5. Scroll to Top on Route Change

- Tự động scroll lên đầu khi navigate
- Smooth user experience
- Xử lý đúng với hash routing

## 🎨 Palette Màu

- **Primary**: `#7ACFF5` (Sky Blue)
- **Secondary**: `#A78BFA` (Purple)
- **Accent**: `#F3F4F6` (Light Gray)
- **Text**: `#1F2937` (Dark Gray)
- **Background**: Gradient from gray-50 to gray-100

## 🚀 Hướng Dẫn Sử Dụng Chi Tiết

### Tạo Danh Thiếp Mới

1. **Nhập thông tin cơ bản**

   - Họ tên (bắt buộc)
   - Chức vụ (bắt buộc)
   - Email (bắt buộc, validate format)
   - Số điện thoại (bắt buộc)

2. **Upload Avatar**

   - Click "Chọn Ảnh"
   - Chọn file ảnh (max 5MB)
   - Ảnh tự động upload lên ImgBB cloud
   - Hiển thị trạng thái "Đang upload..."
   - Nếu thất bại: tự động resize & nén base64

3. **Thêm Mạng Xã Hội (tùy chọn)**

   - Facebook URL
   - LinkedIn URL
   - Website URL

4. **Tạo & Preview**
   - Click "Tạo Danh Thiếp Ngay"
   - Tự động scroll xuống preview
   - Chuyển đổi Dark/Light mode
   - Xem QR code real-time

### Chia Sẻ & Export

1. **📥 Tải PNG**

   - Click "Tải Danh Thiếp (PNG)"
   - Icons tự động chuyển sang Unicode
   - Ảnh chất lượng cao (scale 3x)
   - Download tự động

2. **🔗 Chia Sẻ Link**

   - Click "Sao Chép" để copy link
   - Dữ liệu đã được nén trong URL
   - Gửi qua email, chat, social media

3. **📱 Quét QR Code**
   - Mở camera điện thoại
   - Quét QR code
   - Tự động mở trang danh thiếp
   - Hiển thị đầy đủ avatar + thông tin

## 💡 Tips & Tricks

- **Avatar tốt nhất**: Ảnh chân dung, nền đơn giản, kích thước < 5MB
- **QR Code**: In QR lên danh thiếp giấy để khách hàng quét
- **Link Sharing**: Chia sẻ link thay vì ảnh để cập nhật thông tin dễ dàng
- **Dark Mode**: Dùng Dark mode cho screenshot đẹp hơn
- **Browser Support**: Chrome, Firefox, Safari, Edge (latest versions)

## 🐛 Troubleshooting

**Q: Upload ảnh bị lỗi?**

- Kiểm tra kích thước file (< 5MB)
- Kiểm tra API key ImgBB có đúng không
- Hệ thống tự động fallback sang base64

**Q: QR code không quét được?**

- Đảm bảo đã deploy code mới nhất
- Check console log để xem lỗi decode
- Thử tạo danh thiếp mới

**Q: Ảnh export bị lệch icons?**

- Đã fix bằng Unicode symbols
- Chờ 200ms để fonts load

## 🔮 Roadmap

- [ ] PWA Support
- [ ] Export PDF
- [ ] Multiple card templates
- [ ] vCard (.vcf) export
- [ ] Social share preview
- [ ] Analytics tracking

## 📝 License

MIT License - Sử dụng miễn phí cho mọi mục đích

## 👨‍💻 Author

**Nguyen Duc Anh**

- GitHub: [@nda-1311](https://github.com/nda-1311)
- Email: 1dap2xoe@gmail.com

---

⭐ Nếu thấy hữu ích, hãy cho repo này một star nhé!

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
