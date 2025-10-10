import githubIcon from "../../assets/SkillIcons/GitHub.svg";
import webIcon from "../../assets/webIcon.png";
//import comingsoonIMG from "../../assets/ImagesProjects/ComingSoon.jpg";
import angularIcon from "../../assets/SkillIcons/Angular.svg";
import tailwindcssIcon from "../../assets/SkillIcons/Tailwind CSS.svg";
import login from "../../assets/miniEcommerceIMG/login.png"
import register from "../../assets/miniEcommerceIMG/register.png"
import products from "../../assets/miniEcommerceIMG/products.png"
import detail from "../../assets/miniEcommerceIMG/detail.png"
import cart from "../../assets/miniEcommerceIMG/cart.png"
import order from "../../assets/miniEcommerceIMG/order.png"
import profile from "../../assets/miniEcommerceIMG/profile.png"
import { useState } from "react";

export default function MiniEcommerce() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    products,login,register,detail,cart,order,profile];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col px-4 py-2 md:px-8 md:py-6 rounded-lg border-1 border-cyan-400 shadow-cyan-400/80 shadow-lg">
      {/* ชื่อ Project */}
      <h2 className=" font-bold text-center mb-5">miniEcommerce</h2>
      {/* รูป Project */}
      <img
        src={products}
        alt="miniEcommerce"
        className="mb-2 rounded-lg shadow cursor-pointer shadow-black hover:scale-105 hover:shadow-cyan-400 transition"
        onClick={() => openModal(0)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* รูปใน Modal */}
            <img
              src={images[currentIndex]}
              alt="Selected"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-[0_0_25px_#0ff]"
            />

            {/* ปุ่มปิด */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-3xl hover:text-pink-400"
            >
              ✖
            </button>

            {/* ปุ่มลูกศร */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-5xl text-cyan-300 hover:text-cyan-400 transition"
            >
              ❮
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-5xl text-cyan-300 hover:text-cyan-400 transition"
            >
              ❯
            </button>

            {/* ตัวบอก index */}
            <div className="absolute bottom-3 w-full text-center text-gray-300">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      {/* คำอธิบาย */}
      <div className="mb-5 text-base">

        <p>
          เว็บขายสินค้าออนไลน์ขนาดเล็ก 
          สำหรับการศึกษาและแสดงความสามารถในการพัฒนาเว็บแอปพลิเคชัน 
          ตั้งแต่ระบบผู้ใช้จนถึงการสั่งซื้อสินค้า
        </p>
  
        <ul>
          <p>🔐 ระบบผู้ใช้</p>
          <li className=" list-disc list-inside">สมัครสมาชิก / เข้าสู่ระบบด้วย JWT</li>
          <li className=" list-disc list-inside">หน้าโปรไฟล์ พร้อมปุ่ม Logout และ ประวัติคำสั่งซื้อ</li>
        </ul>

        <ul>
          <p>🛍️ ระบบสินค้า</p>
          <li className=" list-disc list-inside">แสดงรายการสินค้าจาก Database</li>
          <li className=" list-disc list-inside">ช่องค้นหาและดูรายละเอียดสินค้า</li>
        </ul>

        <ul>
          <p>🧺 ระบบตะกร้า</p>
          <li className=" list-disc list-inside">เพิ่ม/ลบสินค้าในตะกร้า (เก็บข้อมูลใน Local State)</li>
          <li className=" list-disc list-inside">แสดงราคารวมและจำนวนสินค้า</li>
        </ul>

        <ul>
          <p>💳 หน้าชำระเงิน</p>
          <li className=" list-disc list-inside">ฟอร์มกรอกข้อมูลผู้รับ</li>
          <li className=" list-disc list-inside">ระบบจำลองการชำระเงิน (Mock Payment)</li>
        </ul>

      </div>








      {/* ปุ่มลิงค์และTechStack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 h-full justify-center items-end mt-3">
        <div className="flex justify-center md:justify-start gap-2">
          <a
            href="https://github.com/GGameover-AI/miniEcommerce-Frontend"
            className=" bg-pink-500 px-6 py-2 rounded-2xl hover:bg-pink-400 hover:scale-110 hover:shadow-md hover:shadow-pink-400 transition"
          >
            <img src={githubIcon} className=" w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="https://mini-ecommerce-frontend-two.vercel.app"
            className=" bg-pink-500 px-6 py-2 rounded-2xl hover:bg-pink-400 hover:scale-110 hover:shadow-md hover:shadow-pink-400 transition"
          >
            <img src={webIcon} className=" w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
        <div className="flex justify-center md:justify-end items-center gap-1">
          <img src={angularIcon} className="w-8 h-8 md:w-12 md:h-12" />
          <img src={tailwindcssIcon} className="w-8 h-8 md:w-12 md:h-12" />
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/512px-.NET_Core_Logo.svg.png?20210328084203"
            }
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <img
            src={"https://www.svgrepo.com/show/303301/postgresql-logo.svg"}
            className="w-8 h-8 md:w-12 md:h-12"
          />
        </div>
      </div>
    </div>
  );
}
