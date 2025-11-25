import React from "react";
import { FaLightning, FaShieldAlt, FaMobile, FaDownload } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaLightning className="text-4xl" />,
      title: "Siêu Nhanh",
      description: "Tạo danh thiếp trong 10 giây, không cần đăng ký",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "An Toàn",
      description: "Dữ liệu của bạn được bảo mật tuyệt đối",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Responsive",
      description: "Hiển thị đẹp trên mọi thiết bị",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <FaDownload className="text-4xl" />,
      title: "Xuất Nhiều Format",
      description: "Tải PNG, chia sẻ link dễ dàng",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <p className="text-xl text-gray-600">
            Giải pháp danh thiếp kỹ thuật số hiện đại nhất
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
