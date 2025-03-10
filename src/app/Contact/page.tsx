import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-customBlue">
      {/* 🔹 Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-bold">
          <Image 
            src="/logo.png" // 確保這個圖片存在於 public/ 目錄
            alt="MyWebsite Logo"
            width={150} // 設定圖片寬度
            height={50}  // 設定圖片高度
          />
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>

      {/* 🔹 Main Content */}
      <main className="flex-grow max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-100">Contact Us</h1>
        <p className="text-gray-300 mb-6">
          Have any questions? Reach out to us using the form below.
        </p>

        {/* 📝 Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border rounded mt-1" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded mt-1" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border rounded mt-1" rows={4} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>

        {/* 📍 Company Info */}
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
