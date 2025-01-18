import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Car,
  Search,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { cities } from "../../../utils/data";
import LocationSectionDetails from "../details/citiesSectionDetails";

const CitiesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCity, setSelectedCity] = useState(null);
  const itemsPerPage = 4;

  const regions = [...new Set(cities.map((city) => city.region))];

  const filteredCities = cities.filter((city) => {
    const matchesSearch = city.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRegion =
      selectedRegion === "All" || city.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCities = filteredCities.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <span className="text-yellow-500 font-semibold mb-2 block">
            Our Coverage
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Serving Major Cities Across India
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Experience reliable 24/7 transportation services in {cities.length}+
            cities
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center bg-white p-6 rounded-2xl shadow-lg">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for a city..."
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="w-full md:w-48 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="All">All Regions</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Results Summary */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, filteredCities.length)} of{" "}
            {filteredCities.length} cities
          </p>
          <p className="text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedCities.map((city) => (
            <div
              onClick={() => setSelectedCity(city)}
              key={city.name}
              className={`relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                         ${
                           city.popularity === "high"
                             ? "border-2 border-yellow-400"
                             : ""
                         }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{city.coverage}</p>
                </div>
                <MapPin
                  className={`w-6 h-6 ${
                    city.popularity === "high"
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                />
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Car className="w-4 h-4 mr-1" />
                  <span>24/7</span>
                </div>
                <button className="flex items-center text-sm font-medium text-black hover:text-yellow-600 transition-colors">
                  <Phone className="w-4 h-4 mr-1" />
                  Book Now
                </button>
              </div>

              {city.popularity === "high" && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <button
            onClick={(e) => handlePageChange(e, currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const isActive = page === currentPage;
            const isNearCurrent =
              Math.abs(page - currentPage) <= 1 ||
              page === 1 ||
              page === totalPages;

            if (!isNearCurrent && page !== 1 && page !== totalPages) {
              if (page === 2 || page === totalPages - 1)
                return <span key={page}>...</span>;
              return null;
            }

            return (
              <button
                key={page}
                onClick={(e) => handlePageChange(e, page)}
                className={`w-10 h-10 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-yellow-400 text-black font-bold"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={(e) => handlePageChange(e, currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-2 mx-auto">
            Check Availability
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* selected city modal */}
      {selectedCity && (
        <LocationSectionDetails
          city={selectedCity}
          onClose={() => setSelectedCity(null)}
        />
      )}
    </section>
  );
};

export default CitiesSection;
