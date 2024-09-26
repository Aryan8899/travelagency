"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick"; // Import react-slick for carousel
import { motion } from "framer-motion"; // Import framer-motion for animations
import offersData from "../data/offers.json"; // Importing mock data
import Link from "next/link"; // For Next.js routing

const Offers = () => {
  // Utility function to format the date as DD/MM/YYYY
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0"); // Ensure two digits for day
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Ensure two digits for month (Months are 0-indexed)
    const year = d.getFullYear();
    return `${day}/${month}/${year}`; // Return the formatted date as DD/MM/YYYY
  };

  const getTimeRemaining = (expirationDate) => {
    const total = new Date(expirationDate) - new Date();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [loading, setLoading] = useState(true); // Simulate loading
  const [error, setError] = useState(null); // Simulate error state
  const [sortedOffers, setSortedOffers] = useState(offersData); // Offers data
  const [refreshKey, setRefreshKey] = useState(0); // Used to force re-render Slider

  useEffect(() => {
    // Update countdown for each offer
    const timers = sortedOffers.map((offer) => {
      return setInterval(() => {
        setTimeLeft((prevState) => ({
          ...prevState,
          [offer.id]: getTimeRemaining(offer.expirationDate),
        }));
      }, 1000);
    });

    // Simulate fetching data and error handling
    setTimeout(() => {
      if (offersData.length === 0) {
        setError("No offers available at the moment.");
      } else {
        setLoading(false);
      }
    }, 1000);

    return () => timers.forEach((timer) => clearInterval(timer)); // Clear all timers on unmount
  }, [sortedOffers]);



  // Slick settings for swipeable cards
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time for large screens
    slidesToScroll: 1,
    arrows: false,
    key: refreshKey, // Force re-render when sorting
    responsive: [
      {
        breakpoint: 1024, // For tablet screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Loading or Error Handling
  if (loading) return <div className="text-center">Loading offers...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
          Special Travel Offers
        </h2>

        {/* Sorting Buttons */}
  

        {/* Wrap the offers grid in the Slider */}
        <Slider {...settings}>
          {sortedOffers.map((offer) => (
            <motion.div
              key={offer.id}
              className="px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: offer.id * 0.1 }} // Delayed entry animation
            >
              <div
                className={`relative border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 bg-white min-h-[420px] flex flex-col justify-between ${
                  offer.isBestDeal ? "bg-yellow-50 border-yellow-400" : "border-gray-200"
                }`}
              >
                {/* Best Deal Badge */}
                {offer.isBestDeal && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-bl-lg">
                    Best Deal
                  </span>
                )}

                {/* Offer details */}
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {offer.name}
                </h3>
                <p className="mb-4 text-gray-600">{offer.description}</p>
                <p className="mb-2 font-bold text-green-600">
                  Save {offer.discountPercentage}%
                </p>
                <p className="mb-2 text-gray-500 line-through">
                  ${offer.originalPrice}
                </p>
                <p className="mb-6 text-4xl font-extrabold text-blue-600">
                  ${offer.discountedPrice}
                </p>

                {/* Link to offer details and Book Now button with flex for alignment */}
                <div className="flex justify-between items-center">
                  <Link href={`pages/offers/${offer.id}`} legacyBehavior>
                    <a className="text-blue-500 font-medium hover:underline">
                      View Details
                    </a>
                  </Link>

                  <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out shadow">
                    Book Now
                  </button>
                </div>

                {/* Expiration date with consistent format */}
                <p className="mt-6 text-sm text-gray-500">
                  Expires on: {formatDate(offer.expirationDate)}
                </p>

                {/* Countdown timer with animation */}
                <div className="mt-2 text-sm text-red-600 font-semibold">
                  {timeLeft[offer.id] && timeLeft[offer.id].days >= 0 ? (
                    <motion.span
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Time left: {timeLeft[offer.id].days}d{" "}
                      {timeLeft[offer.id].hours}h {timeLeft[offer.id].minutes}m{" "}
                      {timeLeft[offer.id].seconds}s
                    </motion.span>
                  ) : (
                    <span>Offer expired!</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Offers;
