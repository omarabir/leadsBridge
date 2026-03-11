import Button from "../button/Button";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-2  pr-4  mb-8 mx-auto w-max">
        <div className="flex items-center justify-center">
          <img
            src="assets/amazon.png"
            alt="Amazon"
            className="h-8 object-contain"
          />
        </div>
        <p className="text-gray-600 font-medium text-sm">
          <span className="text-black">Your Full-Service</span>{" "}
          <span className="text-primary">Amazon Partner</span>
        </p>
      </div>

      <h1 className="text-5xl font-extrabold text-black leading-tight max-w-4xl tracking-tight mb-10">
        Turn Your Amazon Struggles <br /> into Success—Save Time, <br />
        <span className="text-primary">Maximize Profits!</span>
      </h1>

      <Button className="text-lg py-3 px-8">Book a Free Consultation</Button>

      <img
        src="assets/Total Incomes Container.png"
        alt="Total Incomes"
        className="hidden lg:block absolute left-10 top-40 w-72 transform -rotate-12"
      />

      <img
        src="assets/Review Container.png"
        alt="Review Container"
        className="hidden lg:block absolute right-10 top-44 w-72 transform rotate-6"
      />
    </section>
  );
}
