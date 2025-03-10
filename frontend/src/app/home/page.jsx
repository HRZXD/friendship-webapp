'use client'
import React, { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/show');
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      } else {
        console.error('Failed to fetch data:', result.error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4 pt-8">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-white">ข้อความ</h1>
      <div className="grid grid-cols-1 gap-6 md:gap-8 w-full max-w-2xl md:max-w-3xl">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-800">{item.name}</h2>
            <p className="text-gray-700 text-base md:text-lg">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;