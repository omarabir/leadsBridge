import React from "react";

const problems = [
  {
    title: "Lost in Competition?",
    desc: "10M+ sellers & 350M+ product how do you stand out?",
  },
  {
    title: "Burning Cash on Ads?",
    desc: "PPC feels like a money pit with no returns.",
  },
  {
    title: "Low Rankings?",
    desc: "Amazon's complex algorithms keep changing.",
  },
  {
    title: "Inventory Headaches?",
    desc: "Stockouts, overstocking, at the wrong time?",
  },
  {
    title: "Risk of Account Suspension?",
    desc: "Amazon's strict policies make selling stressful.",
  },
  {
    title: "Wasting Time & Getting Stuck?",
    desc: "Managing it all alone is overwhelming",
  },
];

const HarshReality = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="  flex items-center justify-center">
            <img
              src="assets/amazon.png"
              alt="Amazon"
              className=" w-auto object-contain"
            />
          </span>
          <span className="text-base ">
            <span className="text-black">Growth</span>{" "}
            <span className="text-primary">Business</span>
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-black leading-tight mb-5">
          The Harsh Reality of
          <br />
          Selling on <span className="text-primary">Amazon</span>
        </h2>

        <p className="text-center  text-base mb-14 max-w-lg mx-auto">
          Selling on Amazon is tough. Do these struggles sound familiar? Without
          the right strategy, you&apos;re losing money, time, and opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {problems.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
            >
              <h3 className="text-primary font-bold text-base">{item.title}</h3>

              <div className="w-0.5 h-7 bg-primary rounded-full" />

              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-primary text-white font-semibold px-8 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all text-base">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default HarshReality;
