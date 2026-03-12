import React from "react";
import Button from "../button/Button";

const WhyChoose = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-10 sm:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start text-left z-10 relative">
          <div className="flex items-center gap-3 mb-6 bg-transparent">
            <div className=" flex items-center justify-center ">
              <img
                src="assets/amazon.png"
                alt="Amazon"
                className="  object-contain"
              />
            </div>
            <p className=" text-xl">
              <span className="text-white">Why</span>{" "}
              <span className="text-primary">Choose Us</span>
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-8">
            Why Choose <span className="text-primary">FINTRIXX?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl">
            Amazon is tough—we make it easy. At FINTRIXX, we help sellers rank
            higher, scale faster, & sell smarter. We analyze trends, optimize
            ads, manage inventory, & protect your account so you can focus on
            your business.
            <br />
            <br />
            <span className="inline-flex items-center gap-2">
              <img
                src="assets/rocket icon.png"
                alt="rocket"
                className="w-5 h-5 object-contain"
              />
              No more guesswork. No more wasted money. Just real results.
            </span>
          </p>

          <button className="bg-primary text-white border-2 border-white rounded-full font-semibold px-8 py-3 shadow-[4px_4px_0_0_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#fff] transition-all text-lg mb-10 lg:mb-0">
            Book a Free Consultation
          </button>
        </div>

        <div className="relative flex items-center h-[360px] sm:h-[430px] lg:h-[500px] w-full">
          <svg
            className="absolute right-4 sm:right-12 lg:right-20 top-1/2 -translate-y-1/2 pointer-events-none h-full w-auto"
            viewBox="0 0 187 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M79.7714 394.514C85.5609 399.979 94.5231 400.392 100.505 395.138C129.033 370.081 151.431 340.23 166.285 307.371C182.941 270.529 189.674 230.878 185.972 191.44C182.269 152.001 168.229 113.815 144.921 79.7905C124.106 49.406 96.3906 23.0564 63.5084 2.31329C56.7176 -1.97055 47.8502 -0.111034 43.0055 6.29171L3.25632 58.8245C-2.5762 66.5329 -0.252136 77.5723 7.66446 83.1188C25.3491 95.5089 40.394 110.552 52.0548 127.574C66.9721 149.35 75.9577 173.789 78.3272 199.03C80.6967 224.271 76.3875 249.647 65.728 273.226C57.4755 291.481 45.5853 308.285 30.6489 322.891C23.6864 329.7 23.1532 341.073 30.235 347.758L79.7714 394.514Z"
              fill="#FFA500"
              fillOpacity="0.06"
            />
          </svg>

          <svg
            className="absolute right-2 sm:right-8 lg:right-15 top-1/2 -translate-y-1/2 pointer-events-none h-full w-auto"
            viewBox="0 0 185 438"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M60.3061 422.152C65.6516 428.081 74.5815 429.201 80.9738 424.419C115.417 398.649 142.696 366.385 160.672 330.037C180.579 289.784 188.431 245.825 183.5 202.24C178.569 158.655 161.015 116.856 132.466 80.7204C106.684 48.0876 72.6903 21.0292 33.1238 1.54779C25.8337 -2.04165 17.1074 0.836823 13.0155 7.85725L2.18405 26.4409C-2.6322 34.7042 0.855804 45.2827 9.32327 49.7302C38.4868 65.0481 63.6128 85.6116 82.9589 110.099C105.798 139.007 119.841 172.446 123.786 207.315C127.731 242.183 121.449 277.349 105.524 309.552C92.1555 336.584 72.3547 360.792 47.4969 380.628C39.9037 386.688 38.4951 397.957 44.9997 405.172L60.3061 422.152Z"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>

          <div className="relative z-10 left-4 sm:left-14 lg:left-25 -top-6 w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-[#1a1c20] flex items-center justify-center border-b-4 border-primary flex-shrink-0">
            <img
              src="assets/big logo.png"
              alt="Atom Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>

          <div className="absolute right-0 xl:-right-16 flex flex-col gap-2 sm:gap-4 lg:gap-6 z-20 w-max top-1/2 -translate-y-1/2">
            {[
              { text: "Proven Expertise", offset: "translate-x-0" },
              {
                text: "Maximized Visibility",
                offset: "sm:translate-x-6 lg:translate-x-12",
              },
              {
                text: "Strategic Growth",
                offset: "sm:translate-x-6 lg:translate-x-12",
              },
              { text: "Exclusive Partnerships", offset: "translate-x-0" },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-[#222222] border border-[#333] text-white rounded-2xl px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 flex items-center gap-2 sm:gap-4 shadow-xl transform ${item.offset} transition-transform hover:scale-105 min-w-[130px] sm:min-w-[200px] lg:min-w-[240px] xl:min-w-[280px]`}
              >
                <div className="bg-[#333] w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-inner shrink-0 p-1.5 sm:p-2">
                  <img
                    src="assets/rocket icon.png"
                    alt="Rocket"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-xs sm:text-base lg:text-lg whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
