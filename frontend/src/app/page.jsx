'use client'
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    Swal.fire({
      title: "รอแปปปปปป...",
      html: "กำลังส่งข้อมูล...",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (response.ok) {
        Swal.fire({
          title: "ส่งเสร็จแล้ว!",
          text: "ขอบคุณที่ส่งข้อความมา",
          icon: "success",
        });
        setName(""); 
        setMessage("");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      Swal.fire({
        title: "ส่งผิดพลาด!",
        text: "เกิดข้อผิดพลาด กรุณาลองใหม่",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-gray-800">เขียน Friendship</h2>
        <div className="mb-4 md:mb-6">
          <label htmlFor="name" className="block text-gray-700 font-semibold">ชื่อ(ไม่จำเป็นต้องเขียนก็ได้)</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 md:p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="mb-4 md:mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold">ข้อความ</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 p-2 md:p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white p-2 md:p-3 rounded-lg hover:bg-purple-700 transition duration-300">
          กดเลยยย
        </button>
      </form>
    </div>
  );
}