import React, { useState, useEffect, useRef } from "react";

const images = [
  "../public/vecteezy_sunny-rays-of-light-on-a-lake_1781542.jpg",
  "../public/vecteezy_sunny-rays-of-light-on-a-lake_1781542.jpg",
  "../public/vecteezy_sunny-rays-of-light-on-a-lake_1781542.jpg",
  "../public/vecteezy_sunny-rays-of-light-on-a-lake_1781542.jpg"
];

const CommunitiesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const yourCommunitiesRef = useRef(null);
  const knowMoreCommunitiesRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [joinedCommunities, setJoinedCommunities] = useState([
    { id: 1, name: "Climate Warriors", theme: "Environmental Awareness", image: "climate.jpg", members: 1200 },
    { id: 2, name: "Air Quality Monitors", theme: "Pollution Control", image: "air_quality.jpg", members: 950 },
    { id: 9, name: "Ocean Protectors", theme: "Marine Conservation", image: "ocean_protectors.jpg", members: 800 },
  ]);

  const [createdCommunities, setCreatedCommunities] = useState([
    { id: 3, name: "Green Energy Advocates", theme: "Renewable Energy", image: "green_energy.jpg", members: 500 },
  ]);

  const [popularCommunities, setPopularCommunities] = useState([
    { id: 4, name: "Sustainable Living", theme: "Eco-Friendly Lifestyle", image: "sustainable.jpg", members: 2200 },
    { id: 5, name: "Zero Waste Movement", theme: "Waste Reduction", image: "zero_waste.jpg", members: 1800 },
    { id: 6, name: "Water Conservation", theme: "Saving Water Resources", image: "water_conservation.jpg", members: 1600 },
    { id: 10, name: "Clean Air Initiative", theme: "Reducing Air Pollution", image: "clean_air.jpg", members: 1400 },
    { id: 11, name: "Eco-Friendly Transport", theme: "Sustainable Mobility", image: "eco_transport.jpg", members: 1100 },
  ]);

  const [suggestedCommunities, setSuggestedCommunities] = useState([
    { id: 7, name: "Carbon Footprint Reduction", theme: "Lower Emissions", image: "carbon_reduction.jpg", members: 900 },
    { id: 8, name: "Reforestation Projects", theme: "Tree Planting", image: "reforestation.jpg", members: 700 },
  ]);

  const joinCommunity = (community) => {
    if (!joinedCommunities.find((c) => c.id === community.id)) {
      setJoinedCommunities([...joinedCommunities, community]);
      // Remove from suggested or popular communities
      setSuggestedCommunities(suggestedCommunities.filter((c) => c.id !== community.id));
      setPopularCommunities(popularCommunities.filter((c) => c.id !== community.id));
    }
  };

  const handleCreateCommunity = () => {
    const newCommunity = {
      id: Date.now(), // Unique ID based on timestamp
      name: "New Community",
      theme: "New Theme",
      image: "network_symbol.jpg", // Placeholder image
      members: 1,
    };
    setCreatedCommunities([...createdCommunities, newCommunity]);
    alert("Community created successfully!");
  };

  const scrollToYourCommunities = () => {
    yourCommunitiesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToKnowMoreCommunities = () => {
    knowMoreCommunitiesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Image Carousel Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full h-[50vh] object-cover flex-shrink-0" />
          ))}
        </div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <h1 className="text-2xl font-bold">It's your time to aid mother earth</h1>
          <p>Empower Change by Creating Your Community</p>
          <p>Turn Your Ideas into Action</p>
          <button
            className="mt-4 px-4 py-2 bg-orange-600 text-white text-lg rounded cursor-pointer hover:bg-orange-700 transition-colors duration-300"
            onClick={handleCreateCommunity}
          >
            Create Community
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Transparent Page Blocks Section */}
      <div className="relative w-full h-[42vh] bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: "url('../public/vecteezy_sunny-rays-of-light-on-a-lake_1781542.jpg')" }}>
        <div className="absolute inset-0 bg-green-600 opacity-40"></div>
        <div className="relative flex space-x-16">
          <div
            className="relative w-64 text-center p-8 bg-transparent border border-gray-300 rounded-lg shadow-xl backdrop-blur-md transform hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            onClick={scrollToYourCommunities}
          >
            <span className="text-4xl text-white">👥</span>
            <h2 className="text-lg font-semibold mt-4 text-white">Your Communities</h2>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white opacity-20 transform rotate-12 origin-bottom-right rounded-bl-lg" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%)' }}></div>
          </div>
          <div
            className="relative w-64 text-center p-8 bg-transparent border border-gray-300 rounded-lg shadow-xl backdrop-blur-md transform hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            onClick={scrollToKnowMoreCommunities}
          >
            <span className="text-4xl text-white">🌐</span>
            <h2 className="text-lg font-semibold mt-4 text-white">Know More Communities</h2>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white opacity-20 transform rotate-12 origin-bottom-right rounded-bl-lg" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%)' }}></div>
          </div>
        </div>
      </div>

      {/* Community Listings Section */}
      <div className="p-6 bg-gradient-to-r from-[#D8F3DC] via-[#B7E4C7] via-[#A3D9C6] via-[#BFDCE5] to-[#D6E6F2] min-h-screen overflow-hidden">
        <style>{`::-webkit-scrollbar { display: none; }`}</style>

        {/* Your Communities and Communities You Created Section */}
        <div ref={yourCommunitiesRef} className="space-y-8">
          <h1 className="text-2xl font-bold">Your Communities</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {joinedCommunities.map((community) => (
              <div key={community.id} className="p-4 border rounded-lg shadow-md flex items-center bg-violet-100">
                <img src={community.image} alt={community.name} className="w-16 h-16 rounded-full mr-4" />
                <div className="flex-1">
                  <h2 className="font-semibold">{community.name}</h2>
                  <p className="text-sm text-gray-600">Theme: {community.theme}</p>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer">Enter</button>
                </div>
                <div className="text-right ml-4">
                  <span className="text-lg">👥</span>
                  <p className="text-sm font-semibold">{community.members}</p>
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-bold">Communities You Created</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {createdCommunities.map((community) => (
              <div key={community.id} className="p-4 border rounded-lg shadow-md flex items-center bg-violet-100">
                <img src={community.image} alt={community.name} className="w-16 h-16 rounded-full mr-4" />
                <div className="flex-1">
                  <h2 className="font-semibold">{community.name}</h2>
                  <p className="text-sm text-gray-600">Theme: {community.theme}</p>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer">Enter</button>
                </div>
                <div className="text-right ml-4">
                  <span className="text-lg">👥</span>
                  <p className="text-sm font-semibold">{community.members}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communities You May Like and Popular Communities Section */}
        <div ref={knowMoreCommunitiesRef} className="space-y-8 mt-16">
          <h1 className="text-2xl font-bold">Communities You May Like</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestedCommunities.map((community) => (
              <div key={community.id} className="p-4 border rounded-lg shadow-md flex items-center bg-violet-100">
                <img src={community.image} alt={community.name} className="w-16 h-16 rounded-full mr-4" />
                <div className="flex-1">
                  <h2 className="font-semibold">{community.name}</h2>
                  <p className="text-sm text-gray-600">Theme: {community.theme}</p>
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer" onClick={() => joinCommunity(community)}>Join</button>
                </div>
                <div className="text-right ml-4">
                  <span className="text-lg">👥</span>
                  <p className="text-sm font-semibold">{community.members}</p>
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-bold">Popular Communities</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularCommunities.map((community) => (
              <div key={community.id} className="p-4 border rounded-lg shadow-md flex items-center bg-violet-100">
                <img src={community.image} alt={community.name} className="w-16 h-16 rounded-full mr-4" />
                <div className="flex-1">
                  <h2 className="font-semibold">{community.name}</h2>
                  <p className="text-sm text-gray-600">Theme: {community.theme}</p>
                  <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg cursor-pointer" onClick={() => joinCommunity(community)}>Join</button>
                </div>
                <div className="text-right ml-4">
                  <span className="text-lg">👥</span>
                  <p className="text-sm font-semibold">{community.members}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitiesPage;