# 🚀 HƯỚNG DẪN CHẠY NHANH

## Bước 1: Cài Đặt Dependencies
\`\`\`bash
npm install
\`\`\`

## Bước 2: Chạy Development Server
\`\`\`bash
npm start
\`\`\`

## Bước 3: Mở Trình Duyệt
Truy cập: **http://localhost:3000**

---

## 📋 Checklist

- ✅ Node.js đã cài (v14 trở lên)
- ✅ npm đã cài
- ✅ Đã chạy \`npm install\`
- ✅ Đã chạy \`npm start\`
- ✅ Mở localhost:3000

---

## 🐛 Troubleshooting

### Lỗi: "Cannot find module"
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Lỗi: Port 3000 đã được sử dụng
\`\`\`bash
# Thay đổi port
PORT=3001 npm start
\`\`\`

### Lỗi: Tailwind CSS không load
\`\`\`bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
\`\`\`

---

## 📦 Build Production

\`\`\`bash
npm run build
\`\`\`

Folder \`build/\` sẽ chứa file production-ready.

---

## 🎯 Demo Features

1. Hero Section với animations
2. Features showcase
3. Form nhập thông tin (validate real-time)
4. Upload avatar
5. Preview danh thiếp real-time
6. QR Code tự động
7. Dark/Light mode toggle
8. Download PNG
9. Copy share link
10. Responsive mobile

---

**Enjoy coding! 🎉**
