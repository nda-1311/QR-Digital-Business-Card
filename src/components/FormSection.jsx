import React, { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaImage,
  FaFacebook,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

const FormSection = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    avatar: "",
    facebook: "",
    linkedin: "",
    website: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên";
    }

    if (!formData.position.trim()) {
      newErrors.position = "Vui lòng nhập chức vụ";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      // Scroll to preview
      setTimeout(() => {
        const preview = document.getElementById("card-preview");
        if (preview) {
          preview.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const inputFields = [
    {
      name: "name",
      label: "Họ và Tên",
      icon: <FaUser />,
      type: "text",
      placeholder: "Nguyễn Đức Anh",
    },
    {
      name: "position",
      label: "Chức Vụ",
      icon: <FaBriefcase />,
      type: "text",
      placeholder: "Developer",
    },
    {
      name: "email",
      label: "Email",
      icon: <FaEnvelope />,
      type: "email",
      placeholder: "1dap2xoe@gmail.com",
    },
    {
      name: "phone",
      label: "Số Điện Thoại",
      icon: <FaPhone />,
      type: "tel",
      placeholder: "0358102981",
    },
    {
      name: "facebook",
      label: "Facebook",
      icon: <FaFacebook />,
      type: "url",
      placeholder: "https://facebook.com/yourpage",
    },
    {
      name: "linkedin",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      type: "url",
      placeholder: "https://linkedin.com/in/yourprofile",
    },
    {
      name: "website",
      label: "Website",
      icon: <FaGlobe />,
      type: "url",
      placeholder: "https://yourwebsite.com",
    },
  ];

  return (
    <section id="form-section" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tạo Danh Thiếp Của Bạn
          </h2>
          <p className="text-xl text-gray-600">
            Điền thông tin dưới đây để tạo danh thiếp kỹ thuật số
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-card shadow-card p-8 md:p-12 animate-slide-up animate-delay-200"
        >
          {/* Avatar Upload */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-3 flex items-center gap-2">
              <FaImage className="text-primary" />
              Ảnh Đại Diện
            </label>
            <div className="flex items-center gap-6">
              {formData.avatar ? (
                <img
                  src={formData.avatar}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-lg"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-4 border-dashed border-gray-300">
                  <FaUser className="text-3xl text-gray-400" />
                </div>
              )}
              <label className="cursor-pointer bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Chọn Ảnh
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            {inputFields.map((field) => (
              <div
                key={field.name}
                className={
                  field.name === "email" || field.name === "phone"
                    ? "md:col-span-2"
                    : ""
                }
              >
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <span className="text-primary">{field.icon}</span>
                  {field.label}
                  {["name", "position", "email", "phone"].includes(
                    field.name
                  ) && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors[field.name] ? "border-red-500" : "border-gray-200"
                  } focus:border-primary focus:outline-none transition-colors duration-300`}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 Tạo Danh Thiếp Ngay
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
