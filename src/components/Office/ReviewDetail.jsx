import React, { useState, useRef } from "react";
import { ArrowLeft, Star, Users, Wifi, Printer, Coffee, Clock, Monitor, MessageSquare } from "lucide-react";
import useWindowSize from "../../hooks/UseWindowSize";

function ReviewDetail({ booking, onBack }) {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;
  
  const [activeTab, setActiveTab] = useState("about");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const videoRef = useRef(null);

  // Sample office data with expanded information based on the booking
  const office = {
    id: booking.id,
    name: booking.name,
    address: booking.location,
    description: "A modern workspace designed for creative professionals and tech entrepreneurs.",
    image: booking.image,
    video360Url: "https://example.com/office-360-video.mp4",
    rating: 4.8,
    reviewCount: 124,
    amenities: [
      { icon: <Wifi />, name: "High-speed WiFi" },
      { icon: <Printer />, name: "Printing facilities" },
      { icon: <Coffee />, name: "Coffee bar" },
      { icon: <Clock />, name: "24/7 access" },
      { icon: <Monitor />, name: "4K monitors" },
    ],
    equipment: [
      "5 workstations with ergonomic chairs",
      "2 private meeting rooms",
      "Video conferencing setup",
      "Whiteboard wall",
      "Lounge area with sofas"
    ],
    reviews: [
      { id: 1, user: "Alex Johnson", rating: 5, date: "March 15, 2025", comment: "Fantastic space with all the amenities I needed for my team meeting." },
      { id: 2, user: "Sarah Miller", rating: 4, date: "March 10, 2025", comment: "Loved the modern design and fast internet. The coffee was great too!" },
      { id: 3, user: "David Chen", rating: 5, date: "February 28, 2025", comment: "The perfect environment for focused work. Will definitely book again." }
    ],
    images: [
      "https://lp-cms-production.imgix.net/2021-07/GettyRF_611992392.jpg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75",
      "https://assets.executivecentre.com/assets/PrivateOffice-VN-OfficeComboPromo.jpg",
      "https://officesnapshots.com/wp-content/uploads/2022/04/savills-offices-ho-chi-minh-city.jpg",
      "https://officesnapshots.com/wp-content/uploads/2023/04/agoda-offices-ho-chi-minh-city-1200x674.jpg",
    ],
    bookingTime: booking.bookingTime,
    date: booking.date,
    status: booking.status
  };

  const handlePlay360Video = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`} 
      />
    ));
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmitReview = () => {
    // Here you would typically send the review to your backend
    console.log("Submitting review:", { rating, reviewText });
    
    // Show success message or redirect
    alert("Review submitted successfully!");
    
    // Reset form
    setRating(0);
    setReviewText("");
    
    // Go back
    onBack();
  };

  return (
    <div className="w-full min-h-screen bg-[url('https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/IMG-2227.jpg')] backdrop-blur-sm">
      {isMobile ? (
        <div className="relative pb-24 backdrop-blur-sm">
          {/* Header with image */}
          <div 
            className="relative w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${office.image})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            
            <button
              onClick={onBack}
              className="absolute top-4 left-4 text-white p-2 rounded-full font-bold flex items-center z-10"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="px-4 py-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-white">{office.name}</h1>
                <p className="text-white/80 text-sm">{office.address}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  {renderStars(office.rating)}
                  <span className="ml-1 text-white font-bold">{office.rating}</span>
                </div>
                <p className="text-xs text-white/70">{office.reviewCount} reviews</p>
              </div>
            </div>

            {/* Booking details */}
            <div className="mb-6 p-3 bg-white/10 rounded-lg">
              <h2 className="text-lg font-bold text-white mb-2">Booking Details</h2>
              <div className="flex justify-between items-center text-white/80 mb-1">
                <span>Date:</span>
                <span className="font-medium">{office.date}</span>
              </div>
              <div className="flex justify-between items-center text-white/80 mb-1">
                <span>Time:</span>
                <span className="font-medium">{office.bookingTime}</span>
              </div>
              <div className="flex justify-between items-center text-white/80">
                <span>Status:</span>
                <span className={`font-medium capitalize px-2 py-1 rounded-full ${
                  office.status === "using" ? "bg-green-500/20" : 
                  office.status === "completed" ? "bg-yellow-500/20" : "bg-gray-500/20"
                }`}>{office.status}</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/20 mb-6">
              <button 
                className={`pb-2 px-4 text-sm font-medium ${activeTab === 'about' ? 'text-white border-b-2 border-red-500' : 'text-white/60'}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button 
                className={`pb-2 px-4 text-sm font-medium ${activeTab === 'reviews' ? 'text-white border-b-2 border-red-500' : 'text-white/60'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
              <button 
                className={`pb-2 px-4 text-sm font-medium ${activeTab === 'photos' ? 'text-white border-b-2 border-red-500' : 'text-white/60'}`}
                onClick={() => setActiveTab('photos')}
              >
                Photos
              </button>
            </div>

            {/* Tab content */}
            {activeTab === 'about' && (
              <div>
                {/* 360 Video */}
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster={office.image}
                    src={office.video360Url}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <button 
                      onClick={handlePlay360Video}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">360°</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-white mb-2">About This Space</h2>
                  <p className="text-white/80">{office.description}</p>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-white mb-3">Amenities</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {office.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="mr-2 text-white">{amenity.icon}</div>
                        <span className="text-white/80 text-sm">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div>
                  <h2 className="text-lg font-bold text-white mb-3">Equipment & Features</h2>
                  <ul className="text-white/80">
                    {office.equipment.map((item, index) => (
                      <li key={index} className="mb-1 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="mr-3">
                    <div className="text-3xl font-bold text-white">{office.rating}</div>
                    <div className="flex mt-1">{renderStars(office.rating)}</div>
                  </div>
                  <div className="text-sm text-white/80">
                    Based on {office.reviewCount} reviews
                  </div>
                </div>

                {office.reviews.map(review => (
                  <div key={review.id} className="border-t border-white/10 py-4">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center mr-2">
                          <Users className="w-4 h-4 text-gray-700" />
                        </div>
                        <span className="text-white font-medium">{review.user}</span>
                      </div>
                      <div className="text-xs text-white/60">{review.date}</div>
                    </div>
                    <div className="flex mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-white/80">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'photos' && (
              <div className="grid grid-cols-2 gap-3">
                {office.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden"
                  >
                    <img src={image} alt={`Office view ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Action Button */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-700/80 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('add-review')}
              className="w-full bg-blue-500/80 text-white py-3 rounded-full flex items-center justify-center font-medium"
            >
              <MessageSquare className="mr-2" />
              Add a Review
            </button>
          </div>

          {/* Add Review Modal */}
          {activeTab === 'add-review' && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="bg-gray-800 w-full max-w-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Add Your Review</h2>
                
                <div className="mb-6">
                  <label className="block text-white mb-2">Your Rating</label>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`w-8 h-8 cursor-pointer ${
                          star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                        }`}
                        onClick={() => handleRatingChange(star)}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white mb-2">Your Review</label>
                  <textarea
                    className="w-full h-32 bg-gray-700 text-white rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Share your experience..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    className="flex-1 bg-gray-600 text-white py-3 rounded-lg"
                    onClick={() => setActiveTab('reviews')}
                  >
                    Cancel
                  </button>
                  <button 
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg disabled:opacity-50"
                    disabled={rating === 0 || !reviewText.trim()}
                    onClick={handleSubmitReview}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Desktop view
        <div className="flex min-h-screen backdrop-blur-sm">
          {/* Left panel with image and details */}
          <div className="w-1/2 p-8">
            <button
              onClick={onBack}
              className="text-white p-2 mb-4 rounded-full font-bold flex items-center"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
            </button>
            
            <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
              <img src={office.image} alt={office.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4">
                <button 
                  onClick={() => setActiveTab('photos')}
                  className="bg-white/20 text-white backdrop-blur-sm px-3 py-1 rounded-lg text-sm"
                >
                  View all photos
                </button>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">{office.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(office.rating)}
              </div>
              <span className="text-white mr-1">{office.rating}</span>
              <span className="text-white/60">({office.reviewCount} reviews)</span>
            </div>
            
            <p className="text-white/80 mb-6">{office.address}</p>

            {/* Booking details */}
            <div className="mb-6 p-4 bg-white/10 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-3">Booking Details</h2>
              <div className="flex justify-between items-center text-white/80 mb-2">
                <span>Date:</span>
                <span className="font-medium">{office.date}</span>
              </div>
              <div className="flex justify-between items-center text-white/80 mb-2">
                <span>Time:</span>
                <span className="font-medium">{office.bookingTime}</span>
              </div>
              <div className="flex justify-between items-center text-white/80">
                <span>Status:</span>
                <span className={`font-medium capitalize px-3 py-1 rounded-full ${
                  office.status === "using" ? "bg-green-500/20" : 
                  office.status === "completed" ? "bg-yellow-500/20" : "bg-gray-500/20"
                }`}>{office.status}</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">About This Space</h2>
              <p className="text-white/80">{office.description}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Amenities</h2>
              <div className="grid grid-cols-3 gap-4">
                {office.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-3 text-white">{amenity.icon}</div>
                    <span className="text-white/80">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right panel with tabs */}
          <div className="w-1/2 bg-gray-700/50 p-8">
            <div className="flex border-b border-white/20 mb-6">
              <button 
                className={`pb-3 px-6 text-sm font-medium ${activeTab === 'about' ? 'text-white border-b-2 border-red-500' : 'text-white/60'}`}
                onClick={() => setActiveTab('about')}
              >
                Features
              </button>
              <button 
                className={`pb-3 px-6 text-sm font-medium ${activeTab === 'video' ? 'text-white border-b-2 border-red-500' : 'text-white/60'}`}
                onClick={() => setActiveTab('video')}
              >
                360° Tour
              </button>
              <button 
                className={`pb-3 px-6 text-sm font-medium ${activeTab === 'reviews' ? 'text-white border-b-2 border-red-500' : 'text-white/60'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
              <button 
                className={`pb-3 px-6 text-sm font-medium ${activeTab === 'photos' ? 'text-white border-b-2 border-red-500' : 'text-white/60'}`}
                onClick={() => setActiveTab('photos')}
              >
                Photos
              </button>
            </div>
            
            {activeTab === 'about' && (
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Equipment & Features</h2>
                <ul className="text-white/80 grid grid-cols-2 gap-y-3">
                  {office.equipment.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'video' && (
              <div>
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster={office.image}
                    src={office.video360Url}
                    controls
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <button 
                      onClick={handlePlay360Video}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                    >
                      <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">360°</span>
                      </div>
                    </button>
                  </div>
                </div>
                <p className="text-white/70 mt-4 text-center">
                  Click and drag to navigate the 360° virtual tour
                </p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="mr-6">
                    <div className="text-4xl font-bold text-white">{office.rating}</div>
                    <div className="flex mt-2">{renderStars(office.rating)}</div>
                  </div>
                  <div className="text-white/80">
                    Based on {office.reviewCount} reviews
                  </div>
                </div>

                <div className="space-y-6">
                  {office.reviews.map(review => (
                    <div key={review.id} className="border-t border-white/10 py-4">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center mr-3">
                            <Users className="w-5 h-5 text-gray-700" />
                          </div>
                          <span className="text-white font-medium">{review.user}</span>
                        </div>
                        <div className="text-sm text-white/60">{review.date}</div>
                      </div>
                      <div className="flex mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-white/80">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'photos' && (
              <div className="grid grid-cols-2 gap-4">
                {office.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden"
                  >
                    <img src={image} alt={`Office view ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'add-review' && (
              <div className="p-4 bg-gray-800 rounded-xl">
                <h2 className="text-xl font-bold text-white mb-6">Add Your Review</h2>
                
                <div className="mb-6">
                  <label className="block text-white mb-2">Your Rating</label>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`w-8 h-8 cursor-pointer ${
                          star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                        }`}
                        onClick={() => handleRatingChange(star)}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white mb-2">Your Review</label>
                  <textarea
                    className="w-full h-32 bg-gray-700 text-white rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Share your experience..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    className="flex-1 bg-gray-600 text-white py-3 rounded-lg"
                    onClick={() => setActiveTab('reviews')}
                  >
                    Cancel
                  </button>
                  <button 
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg disabled:opacity-50"
                    disabled={rating === 0 || !reviewText.trim()}
                    onClick={handleSubmitReview}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <button 
                onClick={() => setActiveTab('add-review')}
                className="w-full bg-blue-500/80 text-white py-4 rounded-xl flex items-center justify-center font-medium text-lg"
              >
                <MessageSquare className="mr-2" />
                Add a Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewDetail;