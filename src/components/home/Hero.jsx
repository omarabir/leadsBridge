import Button from "../button/Button";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-28 flex flex-col items-center justify-center text-center">
    
      <div className="flex items-center gap-2 pr-3 sm:pr-4 py-1 mb-6 md:mb-8 mx-auto w-max  ">
        <div className="flex items-center justify-center">
          <img
            src="assets/amazon.png"
            alt="Amazon"
            className="h-6 sm:h-8 object-contain"
          />
        </div>
        <p className="text-gray-600 font-medium text-xs sm:text-sm">
          <span className="text-black">Your Full-Service</span>{" "}
          <span className="text-primary">Amazon Partner</span>
        </p>
      </div>

  
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-[1.1] sm:leading-tight lg:leading-[1.05] max-w-4xl tracking-tight mb-8 md:mb-10 px-2 sm:px-0">
        Turn Your Amazon Struggles <br className="hidden md:block" /> into
        Success—Save Time, <br className="hidden xl:block" />
        <span className="text-primary">Maximize Profits!</span>
      </h1>


      <Button className="text-base md:text-lg py-3  px-8 w-[90%] sm:w-auto shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
        Book a Free Consultation
      </Button>

      <img
        src="assets/Total Incomes Container.png"
        alt="Total Incomes"
        className="hidden lg:block absolute left-2 xl:left-8 top-32 xl:top-40 w-48 xl:w-72 transform -rotate-12 pointer-events-none"
      />

  
      <img
        src="assets/Review Container.png"
        alt="Review Container"
        className="hidden lg:block absolute right-2 xl:right-8 top-36 xl:top-44 w-48 xl:w-72 transform rotate-6 pointer-events-none"
      />
    </section>
  );
}
