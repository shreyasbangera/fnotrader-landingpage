import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ChartsModal from "./ChartsModal";

const Feature = ({features, title, subtitle, theme}) => {
  const [activeSection, setActiveSection] = useState(features[0].id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, []);

  const activeImages =
    features.find((s) => s.id === activeSection)?.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === activeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? activeImages.length - 1 : prevIndex - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSwitchSection = (id) => {
    setCurrentImageIndex(0)
    setActiveSection(id)
  }

  const themeClasses = {
    blue: {
      background: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800",
      text: "text-white",
      inactiveSection: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
      activeSection: "bg-white shadow-lg border-white",
    },
    white: {
      background: "bg-blue-50",
      text: "text-gray-900",
      inactiveSection: "bg-white border-gray-200 hover:bg-gray-100",
      activeSection: "bg-blue-600 shadow-lg border-blue-600",
    },
  };

  return (
    <section id={title.toLowerCase()} className={`py-12 lg:py-20 ${themeClasses[theme].background}`}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center lg:mb-16 mb-12">
        <h2 className={`text-2xl lg:text-3xl font-semibold ${themeClasses[theme].text} lg:mb-4 mb-2`}>{title}</h2>
        <p className={`text-base lg:text-lg ${theme === "blue" ? "text-gray-100" : "text-gray-600"}`}>{subtitle}</p>
      </div>
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 items-center gap-8 lg:gap-0 lg:justify-between">
        {/* Left sidebar with features */}
        <div className={`w-full lg:max-w-sm overflow-y-auto max-h-[36.5rem] ${theme === "blue" ? "lg:discover-scrollbar" : "lg:quiktrade-scrollbar"}`}>
        <div className="lg:pr-3 pb-2 space-y-3">
        {/* <div> */}
          {features.map((section) => (
            <div
              key={section.id}
              onClick={() => handleSwitchSection(section.id)}
              className={`px-6 py-7 rounded-xl cursor-pointer border  transition-all duration-300 group shadow-sm
              ${
                activeSection === section.id
                  ? `${themeClasses[theme].activeSection}`
                  : `${themeClasses[theme].inactiveSection}`
              }`}
            >
                <h3
                  className={`text-lg font-semibold mb-2.5 transition-colors
                  ${
                    activeSection === section.id
                      ? theme === 'white' ? 'text-white' : 'text-blue-600'
                      : `${themeClasses[theme].text}`
                  }`}
                >
                  {section.title}
                </h3>
              <p
                  className={`text-sm leading-relaxed transition-colors
                  ${
                    activeSection === section.id
                      ? theme === 'white' ? 'text-blue-50' : 'text-gray-600'
                      : theme === "blue"
                      ? "text-blue-100"
                      : "text-gray-500"
                  }`}
                >
                  {section.description}
                </p>
            </div>
          ))}
          {/* </div> */}
          </div>
        </div>

        {/* Right side image */}
        <div className="max-w-3xl w-full">
          <div className={`bg-white rounded-xl shadow-lg border ${theme === "blue" ? "border-white" : "border-neutral-200"} h-full relative `}>
            {activeImages.length > 0 && (
              <div className="lg:px-16 py-8 px-6 lg:h-[464px] xl:h-[504px] h-[394px] sm:h-[529px] min-w-[250px]">
                <h3 className="text-lg lg:text-xl text-gray-900 font-medium text-center pb-4">
                  {activeImages[currentImageIndex]?.title}
                </h3>
                <img
                  onClick={openModal}
                  onLoad={() => setIsImageLoaded(true)}
                  src={activeImages[currentImageIndex]?.file || "/placeholder.svg"}
                  alt={activeImages[currentImageIndex]?.title}
                  className={`w-full p-2 shadow-lg cursor-pointer object-contain rounded-lg transition-opacity duration-300 ${
                    isImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />

                {activeImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200 group"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200 group"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                    </button>
                  </>
                )}
                <p className="absolute bottom-8 lg:left-16 left-6 lg:right-16 right-6 text-gray-900 text-sm leading-6">
                  {activeImages[currentImageIndex]?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <ChartsModal
      isOpen={isModalOpen}
      onClose={closeModal}
      imageUrl={activeImages[currentImageIndex]?.file || "/placeholder.svg"}
      imageTitle={activeImages[currentImageIndex]?.title}
    />
  </section>
  );
};

export default Feature;
