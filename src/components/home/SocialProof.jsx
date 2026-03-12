import React from "react";
import Button from "../button/Button";

const SocialProof = () => {
  return (
    <section className="text-center bg-white py-16 md:py-24">
      <h3 className="font-extrabold text-2xl md:text-3xl text-black mb-10">
        Amazon Market Statistics Worldwide 2024
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 justify-center">
        <div className="border border-gray-100 rounded-3xl p-8 shadow-sm bg-white hover:border-primary transition-shadow">
          <h4 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-3">
            600 million
          </h4>
          <p className="text-gray-500 font-medium">
            Amazon Offers Over Products
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-8 shadow-sm bg-white hover:border-primary transition-shadow">
          <h4 className="text-4xl md:text-[2.6rem] font-extrabold text-black tracking-tight mb-3 whitespace-nowrap">
            $638.0 billion
          </h4>
          <p className="text-gray-500 font-medium">
            Amazon Global Net Sales Revenue
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-8 shadow-sm bg-white hover:border-primary transition-shadow">
          <h4 className="text-4xl md:text-[2.6rem] font-extrabold text-black tracking-tight mb-3 whitespace-nowrap">
            11.95 million
          </h4>
          <p className="text-gray-500 font-medium">
            Amazon Handles Orders Daily.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-8 shadow-sm bg-white hover:border-primary transition-shadow">
          <h4 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-3">
            $1.6 billion
          </h4>
          <p className="text-gray-500 font-medium">
            Amazon Average Daily Sales Revenue
          </p>
        </div>
      </div>

      <div className="mt-32 max-w-5xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-2 pr-4 py-1 mb-8 mx-auto w-max pl-1 ">
          <div className="flex items-center justify-center">
            <img
              src="assets/amazon.png"
              alt="Amazon"
              className="h-6 sm:h-8 object-contain"
            />
          </div>
          <p className="text-sm ">
            Our
            <span className="text-primary"> Story</span>
          </p>
        </div>

        <h2 className="text-4xl  lg:text-5xl font-extrabold text-black leading-[1.15] sm:leading-tight lg:leading-[1.1] tracking-tight mb-8">
          Struggling With Amazon Sales? Let’s Scale Your
          <br className="hidden lg:block" />
          Business—<span className="text-primary">Faster, Smarter,</span> &
          Stress-Free!
        </h2>

        <p className="text-gray-600 text-base md:text-lg mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          Amazon is complex, but success doesn’t have to be. At{" "}
          <span className="text-primary font-bold">FINTRIXX</span>, we help
          sellers increase sales, optimize ads, rank higher, and expand into new
          markets —without wasting time or money. 🎯 Let’s turn your struggles
          into scalable success!
        </p>

        <Button className="text-base md:text-lg py-3 md:py-4 px-10 w-[90%] sm:w-auto shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          Book a Free Strategy Call
        </Button>
      </div>
    </section>
  );
};

export default SocialProof;
