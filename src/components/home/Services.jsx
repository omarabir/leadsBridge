import React from "react";

const services = [
  {
    title: "Amazon Growth & Advertising",
    image: "assets/services/rocket.png",
    items: [
      "Bid & Budget Optimization – Higher ROI, lower ACOS.",
      "Monthly PPC Strategy – Tailored for long-term growth.",
    ],
  },
  {
    title: "SEO & Product Ranking",
    image: "assets/services/ranking.png",
    items: [
      "Organic & Sponsored Ranking – More visibility, more sales",
      "Keyword & Competitor Analysis – Stay ahead of the competition.",
    ],
  },
  {
    title: "Inventory & Account Management",
    image: "assets/services/box.png",
    items: [
      "Inventory Forecasting & Restocking – No stockouts, no overstocking.",
      "Amazon Account Health & Compliance – Avoid suspensions & violations.",
    ],
  },
  {
    title: "Scaling & Expansion",
    image: "assets/services/global.png",
    items: [
      "Launching New Products – Market research-backed success.",
      "International Expansion – Sell beyond borders with ease.",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex items-center justify-center  mb-2">
          <span className=" rounded-md px-2 py-1 flex items-center justify-center">
            <img
              src="assets/amazon.png"
              alt="Amazon"
              className=" object-contain"
            />
          </span>
          <span className="  text-base ">
            Our <span className="text-primary">Services</span>
          </span>
        </div>


        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-black leading-tight mb-4">
          Scale Smarter, <span className="text-primary">Sell Faster</span>
        </h2>

       
        <p className="text-center text-gray-500 text-base mb-14">
          We handle everything Amazon so you can focus on growing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
            
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-primary font-bold text-lg leading-snug">
                    {service.title}
                  </h3>
         
                  <div className="w-0.5 h-8 bg-primary rounded-full" />
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 object-contain flex-shrink-0"
                />
              </div>

        
              <ul className="flex flex-col gap-3">
                {service.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                  >
               
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
