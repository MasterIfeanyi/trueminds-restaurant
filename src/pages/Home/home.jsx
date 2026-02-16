import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import tableDinner from "@/assets/table_dinner.png"

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or filter page
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative min-h-screen">

      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${tableDinner})`
        }}
      >
    

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <div className="max-w-7xl w-full text-left">
            <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
              The Heart of Nigerian Home Cooking
            </h1>
            <p className="text-xl md:text-xl text-white mb-8">
              Handcrafted with passion, delivered with care.
            </p>
            <button 
              onClick={() => navigate('/explore')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-sm transition inline-block"
            >
              Discover what's new
            </button>
          </div>
        </div>
        
        

        {/* Search Bar - Floating over hero section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-6 z-30">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="pl-6 pr-2">
                <FiSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="What are you craving for today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none text-base"
              />
            </div>
          </form>
        </div>


      </div>

      {/* Additional sections can go here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Dishes
          </h2>
          {/* Add your popular dishes content here */}
        </div>
      </section>
    </div>
  );
};

export default Home;
