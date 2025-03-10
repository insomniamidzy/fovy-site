"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function FullPageScroll() {
  const ref = useRef(null);

  // 🔹 記錄滾動狀態，確保顯示 / 消失的邏輯
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // 取得當前滾動位置
      const triggerPoint = 500; // ⚡ 設定滾動高度 > 500px 時顯示
      const hidePoint = 1500; // ❌ 設定滾動高度 > 1500px 才消失

      if (scrollY > triggerPoint && scrollY < hidePoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-customBlue">
      {/* 🔹 Navigation Bar */}
      <nav className="bg-black/40 backdrop-blur-lg text-white p-4 fixed top-0 left-0 w-full z-50 border border-white/20 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-bold">
            <Image src="/logo.png" alt="MyWebsite Logo" width={150} height={50} />
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>

      {/* 🔹 Main Content */}
      <main className="flex flex-col flex-grow max-w-6xl gap-40 mx-auto p-12 pt-44">
        {/* 🌟 第一區塊 */}
        <section className="flex flex-row gap-8 p-6 items-center justify-center">
          <div className="flex flex-col gap-4 p-6 items-center justify-center w-[500px]">
            <h1 className="text-6xl font-bold mb-4 text-gray-100">Map Your Skills, Master Your Future.</h1>
            <p className="text-xl text-gray-300 mb-6">
              Empowers freelancers' confidence and career success by visualizing skills, tracking growth, and bridging communication gaps with clients.
            </p>
          </div>
          <Image src="/Product.png" alt="Product Display" width={900} height={300} />
        </section>

        {/* 🌟 第二區塊（橫向滾動圖片） */}
        <h1 className="text-5xl font-bold text-gray-100 text-left">
            The Silent Struggles of Freelancers...
        </h1>
        <section className="overflow-x-auto w-full px-6">
          <div className="flex flex-nowrap gap-12 p-4">
            {/* 第一組 */}
            <div className="flex gap-12 items-center min-w-[800px]">
              <Image src="/UserStory1.png" alt="Image 1" width={300} height={300} className="rounded-lg" />
              <p className="text-xl text-gray-300 mt-4 text-center w-[400px]">
                I love my job and I’m proud of the quality of work I produce for clients.
              </p>
            </div>
            {/* 第二組 */}
            <div className="flex gap-12 items-center min-w-[800px]">
              <Image src="/UserStory2.png" alt="Image 2" width={300} height={300} className="rounded-lg" />
              <p className="text-xl text-gray-300 mt-4 text-center w-[400px]">
                But some days really get me down. Between getting the cold shoulder prospecting for business...
              </p>
            </div>
            {/* 第三組 */}
            <div className="flex gap-12 items-center min-w-[800px]">
              <Image src="/UserStory3.png" alt="Image 3" width={300} height={300} className="rounded-lg" />
              <p className="text-xl text-gray-300 mt-4 text-center w-[400px]">
                My feeling of self worth has definitely been ground down...
              </p>
            </div>
          </div>
        </section>

        {/* 🌟 文字動畫 */}
        <div ref={ref} className="flex flex-col gap-16 my-20 items-center text-center w-full">
          <h1 className="text-6xl font-bold text-gray-100">
            Freelancers Deserve True Freedom
          </h1>

          <motion.h1
            className="text-7xl font-bold text-gray-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            FOVY Makes It Happen!
          </motion.h1>
        </div>

        {/* 📍 公司資訊 */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-100">Our Office</h2>
          <p className="text-gray-300">123 Business Street, City, Country</p>
          <p className="text-gray-300">Email: contact@company.com</p>
          <p className="text-gray-300">Phone: +123 456 7890</p>
        </div>
      </main>

      {/* 🔹 Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}
