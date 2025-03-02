import React, { useState, useRef } from "react";
import dayjs from "dayjs";
import { Bell, Share2, ChevronLeft, ChevronRight } from "lucide-react";

const levels = [
  { id: "T1", points: 2050, unlocked: true },
  { id: "T2", points: 1050, unlocked: true },
  { id: "T3", points: 2050, unlocked: false },
  { id: "T4", points: 2050, unlocked: false },
  { id: "T5", points: 2050, unlocked: false },
  { id: "T6", points: 2050, unlocked: false },
  { id: "T7", points: 2050, unlocked: false },
];

const Dashboard = ({ title, description, coins, progress }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const daysInMonth = currentDate.daysInMonth();
  const today = dayjs().date();
  const scrollRef = useRef(null);

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file); // Store the image
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result); // Set preview
      reader.readAsDataURL(file);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <div className="p-6 bg-gradient-to-r from-[#D8F3DC] via-[#B7E4C7] via-[#A3D9C6] via-[#BFDCE5] to-[#D6E6F2] min-h-screen">
      
      {/* Header Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center ">
        <input 
            type="text" 
            placeholder="Type to search..." 
            className="p-2 rounded-lg border border-gray-300 w-1/3"
          />
          <div className="flex gap-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <Share2 className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
      {/* Dashboard UI */}
      <div className="p-4 bg-white shadow rounded-lg mb-6 flex justify-between items-center">
        {/* Points Section */}
        <div className="bg-green-100 p-4 rounded-lg w-1/3">
          <h2 className="text-lg font-semibold">Points Earned</h2>
          <p className="text-2xl font-bold">12,000 Points</p>
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2">
            Redeem Now →
          </button>
        </div>
        
        {/* Levels Section */}
        <div className="w-1/3 flex items-center gap-4 overflow-x-auto">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-2 rounded-md ${
                level.unlocked ? "text-green-500" : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                  level.unlocked ? "border-green-500" : "border-gray-400"
                }`}
              >
                {level.id}
              </div>
              <p className="text-sm font-semibold">{level.points} Points</p>
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
            <div className="absolute text-3xl font-bold">1,050</div>
          </div>
          <p className="text-gray-600 text-sm">Total Points</p>
          <p className="text-xs text-gray-500">780 Points Away</p>
        </div>
      </div>
       {/* Header with Month Navigation */}
       <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentDate(currentDate.subtract(1, "month"))} className="p-2 bg-gray-200 shadow rounded-full">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold">{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={() => setCurrentDate(currentDate.add(1, "month"))} className="p-2 bg-gray-200 shadow rounded-full">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="relative w-full">
        {/* Left Scroll Button */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 shadow rounded-full" onClick={scrollLeft}>
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Days List */}
        <div ref={scrollRef} className="flex overflow-x-auto space-x-4 p-4 bg-transparent  rounded-lg scrollbar-hide">
          {daysArray.map((day) => (
            <div
              key={day}
              className={`flex flex-col items-center w-16 h-20 p-4 rounded-lg shadow-md text-center cursor-pointer bg-white 
                ${day === today ? "border-2 border-green-500 text-green-500" : "border border-gray-300"}`}
            >
              <span className="text-xl font-bold">{day}</span>
              <span className="text-sm">{currentDate.date(day).format("ddd")}</span>
            </div>
          ))}
        </div>
        {/* Right Scroll Button */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 shadow rounded-full" onClick={scrollRight}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center space-y-4 w-72">
      {/* Mission Details */}
      <h3 className="text-lg font-bold">Plant a tree</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>

      {/* Coins & Progress */}
      <div className="flex items-center justify-between w-full px-4">
        <span className="text-yellow-500 font-bold">{coins}50 Coins</span>

        {/* Circular Progress Bar */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <circle
              className="text-gray-300"
              strokeWidth="3.8"
              stroke="currentColor"
              fill="transparent"
              r="15.9155"
              cx="18"
              cy="18"
            />
            <circle
              className="text-green-500"
              strokeWidth="3.8"
              strokeLinecap="round"
              strokeDasharray={`${progress}, 100`}
              stroke="currentColor"
              fill="transparent"
              r="15.9155"
              cx="18"
              cy="18"
            />
          </svg>
          <div className="absolute text-xs font-bold">{progress}%</div>
        </div>
      </div>

      {/* Image Upload as Underline Text */}
      <label className="cursor-pointer text-blue-500 underline">
        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        {imageFile ? "Change Image" : "Upload Image"}
      </label>

      {/* Display Uploaded Image Below Coins */}
      {imagePreview && (
        <div className="w-24 h-24 mt-2 rounded-lg overflow-hidden border">
          <img src={imagePreview} alt="Uploaded" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
    </div>
  );
};

export default Dashboard;
