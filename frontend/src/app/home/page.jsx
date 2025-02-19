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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-extrabold mb-12 text-white">ข้อความ</h1>
      <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{item.name}</h2>
            <p className="text-gray-700 text-lg">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;