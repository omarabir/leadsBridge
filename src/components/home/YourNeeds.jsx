import React from "react";

const solutions = [
  {
    title: "We Make You Stand Out",
    desc: "Targeted marketing to reach the right buyers.",
  },
  {
    title: "We Fix Your Rankings",
    desc: "SEO, keywords & ads for visibility.",
  },
  {
    title: "We Optimize Your Ads",
    desc: "No wasted budget—only high ROI advertising.",
  },
  {
    title: "We Manage Your Inventory",
    desc: "So you never run out of stock or overstock.",
  },
  {
    title: "We Keep Your Account Safe",
    desc: "Avoid suspensions, policy violations & account risks.",
  },
  {
    title: "We Scale Your Business",
    desc: "Expansion, market entry & growth.",
  },
];

const YourNeeds = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className=" flex items-center justify-center">
            <img
              src="assets/amazon.png"
              alt="Amazon"
              className=" object-contain"
            />
          </span>
          <span className="text-base ">
            <span className="text-white">Growth</span>{" "}
            <span className="text-primary">Business</span>
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white leading-tight mb-5">
          How We Help You
          <br />
          Win on <span className="text-primary">Amazon</span>
        </h2>

        <p className="text-center text-gray-400 text-base mb-14 max-w-lg mx-auto">
          At FINTRIXX, we don&apos;t guess—we use data-driven strategies to
          scale your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="bg-[#252525] border border-[#333] rounded-2xl p-6 flex flex-col gap-4"
            >
              <h3 className="text-primary font-bold text-base">{item.title}</h3>
              <div className="w-0.5 h-7 bg-primary rounded-full" />
              <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-primary text-white border-2 border-white rounded-full font-semibold px-8 py-3 shadow-[4px_4px_0_0_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#fff] transition-all text-lg mb-10 lg:mb-0">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default YourNeeds;
