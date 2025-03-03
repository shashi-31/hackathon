import React, { useState, useRef } from "react";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const levels = [
  { id: "T1", points: 2050, unlocked: true },
  { id: "T2", points: 1050, unlocked: true },
  { id: "T3", points: 2050, unlocked: false },
  { id: "T4", points: 2050, unlocked: false },
  { id: "T5", points: 2050, unlocked: false },
  { id: "T6", points: 2050, unlocked: false },
  { id: "T7", points: 2050, unlocked: false },
];

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const daysInMonth = currentDate.daysInMonth();
  const today = dayjs().date();
  const scrollRef = useRef(null);

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="p-6 bg-gradient-to-r from-[#D8F3DC] via-[#B7E4C7] to-[#D6E6F2] min-h-screen">
      {/* Dashboard UI */}
      <div className="p-4 bg-white shadow-lg rounded-xl mb-6 flex justify-between items-center gap-4">
        {/* Points Section */}
        <div className="bg-green-100 p-4 rounded-xl w-1/3 shadow-md text-center transform hover:scale-105 transition-all">
          <h2 className="text-md font-semibold text-gray-700">Points Earned</h2>
          <p className="text-3xl font-extrabold text-green-700">12,000</p>
          <button className="mt-2 px-4 py-2 text-sm bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition-all">
            Redeem
          </button>
        </div>

        {/* Levels Section */}
        <div className="w-1/3 flex items-center gap-2 overflow-x-auto scrollbar-hide p-2 bg-gray-100 rounded-xl shadow-md">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:scale-110 shadow-md ${
                level.unlocked ? "text-green-600 bg-green-50" : "text-gray-400 bg-gray-200"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold text-sm ${
                  level.unlocked ? "border-green-600 bg-green-100" : "border-gray-300 bg-gray-200"
                }`}
              >
                {level.id}
              </div>
              <p className="text-xs font-semibold mt-1">{level.points} Pts</p>
            </div>
          ))}
        </div>

        {/* Circular Progress */}
        <div className="text-center w-1/3">
          <div className="relative w-24 h-24 flex items-center justify-center mx-auto">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle
                className="text-gray-300"
                strokeWidth="3.8"
                stroke="currentColor"
                fill="transparent"
                r="15.9155"
                cx="18"
                cy="18"
              ></circle>
              <circle
                className="text-green-500"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeDasharray="60, 100"
                stroke="currentColor"
                fill="transparent"
                r="15.9155"
                cx="18"
                cy="18"
              ></circle>
            </svg>
            <div className="absolute text-3xl font-bold text-green-700">1,050</div>
          </div>
          <p className="text-gray-600 text-xs">Total Points</p>
          <p className="text-xs text-gray-500">780 Pts Away</p>
        </div>
      </div>
      
      {/* Days List */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Scroll Button */}
        <button className="absolute left-0 z-10 p-2 bg-gray-200 shadow rounded-full">
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 p-4 bg-transparent rounded-lg overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {daysArray.map((day) => (
            <div
              key={day}
              className={`flex flex-col items-center w-12 h-16 p-3 rounded-lg shadow-md text-center cursor-pointer bg-white transition-all duration-300 hover:bg-green-100 ${
                day === today ? "border-2 border-green-500 text-green-500" : "border border-gray-300"
              }`}
            >
              <span className="text-lg font-bold">{day}</span>
              <span className="text-xs">{currentDate.date(day).format("ddd")}</span>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button className="absolute right-0 z-10 p-2 bg-gray-200 shadow rounded-full">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;