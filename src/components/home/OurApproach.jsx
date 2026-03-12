import React from "react";

const OurApproach = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex items-start gap-4 flex-shrink-0 w-full lg:w-auto justify-center lg:justify-start">
          <div
            className="rounded-3xl overflow-hidden w-40 sm:w-48 lg:w-52 xl:w-60 flex-shrink-0 shadow-2xl"
           
          >
            <img
              src="assets/our approach/image.png"
              alt="Approach visual 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="rounded-3xl overflow-hidden w-40 sm:w-48 lg:w-52 xl:w-60 flex-shrink-0 shadow-2xl mt-20 sm:mt-24 lg:mt-28"
          
          >
            <img
              src="assets/our approach/image 2.png"
              alt="Approach visual 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 leading-tight">
            Our <span className="text-primary">Approach</span>
          </h2>

          <div className="flex items-center gap-3 border-l-4 border-primary pl-4 py-2 mb-5">
            <span className="text-xl">🎯</span>
            <h3 className="text-white font-semibold text-xl">Mission</h3>
          </div>

          <div className="border-t border-[#2e2e2e] mb-5" />

          <div className="border-l-4 border-primary pl-4 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">🌍</span>
              <h3 className="text-white font-bold text-xl">Vision</h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Founded with purpose, FINTRIXX was created to address the real
              challenges Amazon sellers face—rising ad costs, account risks, and
              complex growth strategies. We started with a vision to make Amazon
              success simple, accessible, and results-driven for every seller.
              Today, we proudly serve sellers across multiple categories,
              helping them manage, grow, and scale with ease.
            </p>
          </div>

          <div>
            <button className="bg-primary text-white border-2 border-white rounded-full font-semibold px-8 py-3 shadow-[4px_4px_0_0_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#fff] transition-all text-lg mb-10 lg:mb-0">
              Book a Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
