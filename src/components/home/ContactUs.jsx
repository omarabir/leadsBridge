import React from "react";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const calendar = [
  [null, null, null, null, 1, 2],
  [3, 4, { d: 5, dot: true }, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
  [31],
];

const available = new Set([
  6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 31,
]);

const ContactUs = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className=" flex items-center justify-center">
            <img
              src="assets/amazon.png"
              alt="Amazon"
              className=" object-contain"
            />
          </span>
          <span className="text-base ">
            <span className="text-primary">Contact</span>{" "}
            <span className="text-black">Us</span>
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-black leading-tight mb-3">
          Let&apos;s Scale Your <span className="text-primary">Business!</span>
        </h2>

        <p className="text-center text-gray-500 text-sm mb-10">
          FINTRIXX — Your Amazon Growth Partner
        </p>

        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-8 flex flex-col gap-5 border-b lg:border-b-0 lg:border-r border-gray-200">
            <p className="text-gray-500 text-sm font-medium">Naim</p>
            <h3 className="text-[#1a1a2e] text-2xl font-extrabold leading-snug">
              Book Your Strategy Session: Accelerate Your Growth!
            </h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
              30 min
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-sm">
              <svg
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path strokeLinecap="round" d="M3 9h18" />
              </svg>
              Web conferencing details provided upon confirmation.
            </div>
            <div className="mt-auto pt-8">
              <button className="text-blue-600 text-sm hover:underline">
                Cookie settings
              </button>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 relative">
            <div className="absolute top-7 -right-12 w-48 bg-[#5d6064] text-center transform rotate-45 py-1.5 shadow-sm">
              <div className="text-[8px] font-bold tracking-widest text-[#d8dadd] uppercase leading-none mb-0.5">
                Powered by
              </div>
              <div className="text-[15px] font-bold text-white leading-none">
                Calendly
              </div>
            </div>

            <h4 className="text-[#1a1a2e] font-bold text-lg mb-6">
              Select a Date &amp; Time
            </h4>

            <div className="flex items-center justify-between mb-5">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#eef5ff] text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span className="font-semibold text-[#1a1a2e] text-base">
                March 2025
              </span>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#eef5ff] text-blue-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 mb-2">
              {days.map((d) => (
                <div
                  key={d}
                  className="text-center text-xs font-semibold text-gray-400 py-1"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-1">
              {calendar.map((week, wi) =>
                Array.from({ length: 7 }, (_, di) => {
                  const cell = week[di];
                  const dayNum =
                    typeof cell === "object" && cell !== null ? cell.d : cell;
                  const hasDot =
                    typeof cell === "object" && cell !== null && cell.dot;
                  const isAvail = available.has(dayNum);
                  return (
                    <div
                      key={`${wi}-${di}`}
                      className="flex flex-col items-center justify-center py-0.5"
                    >
                      {dayNum ? (
                        <button
                          className={`w-9 h-9 rounded-full text-sm font-medium flex flex-col items-center justify-center relative transition-colors
                            ${
                              isAvail
                                ? "text-blue-600  bg-[#eef5ff]  hover:bg-blue-50"
                                : "text-gray-400 cursor-default"
                            }`}
                        >
                          {dayNum}
                          {hasDot && (
                            <span className="absolute bottom-1 w-1 h-1 bg-blue-400 rounded-full" />
                          )}
                        </button>
                      ) : (
                        <span className="w-9 h-9" />
                      )}
                    </div>
                  );
                }),
              )}
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-sm font-semibold text-[#1a1a2e] mb-2">
                Time zone
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-4 h-4 flex-shrink-0 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path
                    strokeLinecap="round"
                    d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"
                  />
                </svg>
                Asia/Dhaka (3:00pm)
                <svg
                  className="w-3 h-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-gray-500">
          <div className="flex items-center ">
            <svg
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
              />
            </svg>
            leadsbridgesdemo@example.com
          </div>
          <p className="text-center">
            <span className="text-primary font-semibold">Note:</span> Have a
            question? Need a strategy? We&apos;re here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
