import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import tableDinner from "@/assets/table_dinner.png"
import beans from "@/assets/beans.png"

import jollofImg from "@/assets/jollof.png";
import fufuImg from "@/assets/fufu.png";
import suyaImg from "@/assets/suya.png";
import sweetTreatsImg from "@/assets/sweet_treats.png";
import oilRiceImg from "@/assets/oil_rice.jpg";
import fishImg from "@/assets/fish.png";
import sauceImg from "@/assets/sauce.jpg";
import snailImg from "@/assets/snail.jpg";
import amalaImg from "@/assets/amala.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 1,
      name: 'Jollof Delights',
      image: jollofImg,
      alt: 'Jollof rice with grilled chicken'
    },
    {
      id: 2,
      name: 'Swallow & Soups',
      image: fufuImg,
      alt: 'Fufu with egusi soup'
    },
    {
      id: 3,
      name: 'Grills & BBQ',
      image: suyaImg,
      alt: 'Grilled suya skewers'
    },
    {
      id: 4,
      name: 'Sweet Treats',
      image: sweetTreatsImg,
      alt: 'Puff puff and chin chin'
    },
    {
      id: 5,
      name: 'Jollof Delights',
      image: oilRiceImg,
      alt: 'Jollof rice with chicken'
    },
    {
      id: 6,
      name: 'Grilled Fish',
      image: fishImg,
      alt: 'Grilled fish with spices'
    }
  ];


  const menuItems = [
    {
      id: 1,
      name: "Spicy Tilapia Pepper Soup",
      description: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      price: "3,500",
      image: fishImg
    },
    {
      id: 2,
      name: "Jollof Rice & Fried Chicken",
      description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "3,500",
      image: jollofImg
    },
    {
      id: 3,
      name: "Jollof Rice & Fried Chicken",
      description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "3,500",
      image: jollofImg
    },
    {
      id: 4,
      name: "Jollof Rice & Smoked Chicken",
      description: "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.",
      price: "3,500",
      image: sauceImg
    },
    {
      id: 5,
      name: "Jollof Rice & Fried Chicken",
      description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "3,500",
      image: snailImg
    },
    {
      id: 6,
      name: "Amala & Ewedu soup",
      description: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
      price: "3,500",
      image: amalaImg
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or filter page
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleAddToCart = (itemName) => {
    alert(`Added ${itemName} to cart!`);
  };

  return (
    <div className="relative min-h-screen">

      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${tableDinner})`
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
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-6 z-30">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-18">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Category Name */}
                <div className="px-6 py-12 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto p-6">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Chef's Specials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-18">
              {menuItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-5">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
                      {item.description}
                    </p>

                    {/* Price and Button Container */}
                    <div className="flex items-center justify-between mt-4">
                      {/* Price */}
                      <span className="text-xl font-bold text-orange-500">
                        ₦{item.price}
                      </span>

                      {/* Add to Cart Button */}
                      <button 
                        onClick={() => handleAddToCart(item.name)}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
      </section>


      <section className="">
        <div 
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${beans})`
          }}
        >

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <div className="max-w-7xl w-full text-left">
              <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Introducing Our New Menu Additions!
              </h1>
              <p className="text-xl md:text-xl text-white mb-8">
                Explore exciting new dishes, crafted with the freshest
                ingredients and authentic Nigerian flavors. Limited time
                offer!
              </p>
              <button 
                onClick={() => navigate('/explore')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-sm transition inline-block"
              >
                Discover what's new
              </button>
            </div>
          </div>
        </div>

      </section>


    </div>
  );
};

export default Home;
