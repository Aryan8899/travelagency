import offers from '../../../data/offers.json'; // Adjust the relative path to your offers.json file


const OfferDetails = ({ params }) => {
  const { id } = params; // Extract `id` from params

  // Find the offer by ID
  const offer = offers.find((offer) => offer.id === parseInt(id));

  if (!offer) {
    return <p className="text-center text-red-500">Offer not found.</p>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-3xl p-10 max-w-xl w-full">
        {/* Offer Name */}
        <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-800">
          {offer.name}
        </h1>

        {/* Offer Description */}
        <p className="text-lg text-gray-600 text-center mb-8">
          {offer.description}
        </p>

        {/* Offer Savings and Pricing */}
        <div className="text-center mb-8">
          <p className="text-green-600 font-bold text-4xl mb-2">
            Save {offer.discountPercentage}%
          </p>
          <p className="text-gray-500 line-through text-2xl">
            ${offer.originalPrice}
          </p>
          <p className="text-5xl font-extrabold text-blue-600 mt-2">
            ${offer.discountedPrice}
          </p>
        </div>

        {/* Expiration Date */}
        <p className="text-sm text-gray-500 text-center mb-8">
          Expires on: {new Date(offer.expirationDate).toLocaleDateString()}
        </p>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 text-lg shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;