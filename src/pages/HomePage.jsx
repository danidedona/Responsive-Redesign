import React, { useState } from "react";

const colors = {
  offwhite: "#FFFFF7",
  purple: "#6C3A92",
  blue: "#0A0E70",
  text: "#000000",
};

function HomePage() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div
      style={{
        "--color-off-white": colors.offwhite,
        "--color-purple": colors.purple,
        "--color-blue": colors.blue,
        "--color-text": colors.text,
      }}
      className="homepage w-full"
    >
      {/* Play */}
      <section
        id="Play"
        className="flex flex-col md:flex-row justify-center gap-8 w-full lg:px-12 md:px-8 px-4 py-4"
      >
        {/* First Column */}
        <section className="mt-16 md:mt-20 lg:mt-20 w-full md:w-[45%]">
          {/* Top half (image) */}
          <div className="bg-gray-300 relative z-10 w-full h-[240px] md:h-[320px]">
            <img
              src="images/webkinznext.png"
              alt="Image"
              className="object-cover w-full h-full"
            />
            {/* Hovering Image */}
            <div
              className="absolute overflow-hidden"
              style={{
                top: "-120px", // Adjusted for mobile
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px", // Smaller on mobile
                height: "200px", // Smaller on mobile
              }}
            >
              <img
                src="images/next_logo.png"
                alt="Hovering Image"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Circle wrapper */}
          <div className="relative z-20 flex justify-center">
            <button
              className="absolute -top-8 w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer flex items-center justify-center border-8 border-[var(--color-purple)] bg-[var(--color-off-white)]"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 md:h-6 md:w-6 text-[var(--color-blue)] transition-transform ${
                  isOpen1 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Bottom half (sign-in form) */}
          <div
            className={`bg-[var(--color-purple)] text-[var(--color-text)] transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen1
                ? "max-h-[600px] md:max-h-[800px] pt-8 md:pt-12 p-4 md:p-8"
                : "max-h-[50px] pt-12"
            }`}
          >
            {isOpen1 && (
              <form className="space-y-4 md:space-y-6">
                <h2 className="text-center text-xl lg:text-2xl font-bold text-white">
                  Webkinz Next Login
                </h2>
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="w-full p-2 md:p-3 border rounded text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full p-2 md:p-3 border rounded text-black placeholder-gray-500"
                  />
                  <div className="text-right mt-2">
                    <button className="text-sm text-white underline">
                      Forgot password?
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-white text-[var(--color-purple)] px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold transition-all transform shadow-md hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
                    Play!
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Second Column */}
        <section className="mt-12 md:mt-20 w-full md:w-[45%]">
          {/* Top half (image) */}
          <div className="bg-gray-300 relative z-10 w-full h-[240px] md:h-[320px]">
            <img
              src="images/webkinzclassic.png"
              alt="Image"
              className="object-cover w-full h-full"
            />
            {/* Hovering Image */}
            <div
              className="absolute overflow-hidden"
              style={{
                top: "-120px", // Adjusted for mobile
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px", // Smaller on mobile
                height: "200px", // Smaller on mobile
              }}
            >
              <img
                src="images/classic_logo.png"
                alt="Hovering Image"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Circle wrapper */}
          <div className="relative z-20 flex justify-center">
            <button
              className="absolute -top-8 w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer flex items-center justify-center border-8 border-[var(--color-blue)] bg-[var(--color-off-white)]"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 md:h-6 md:w-6 text-[var(--color-blue)] transition-transform ${
                  isOpen2 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Bottom half (sign-in form) */}
          <div
            className={`bg-[var(--color-blue)] text-[var(--color-text)] transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen2
                ? "max-h-[600px] md:max-h-[800px] pt-8 md:pt-12 p-4 md:p-8"
                : "max-h-[50px] pt-12"
            }`}
          >
            {isOpen2 && (
              <form className="space-y-4 md:space-y-6">
                <h2 className="text-center text-xl lg:text-2xl font-bold text-white">
                  Webkinz Classic Login
                </h2>
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="w-full p-2 md:p-3 border rounded text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full p-2 md:p-3 border rounded text-black placeholder-gray-500"
                  />
                  <div className="text-right mt-2">
                    <button className="text-sm text-white underline">
                      Forgot password?
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-white text-[var(--color-blue)] px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold transition-all transform shadow-md hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
                    Play!
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </section>

      <section className="bg-[url('/images/orangeback.png')] bg-cover bg-center bg-no-repeat py-8">
        <div className="flex flex-col md:flex-row justify-center gap-8 w-full lg:px-28 md:px-8 px-4">
          {/* First Column: Image */}
          <div className="flex-[2] bg-transparent">
            <img
              src="/images/toys.png"
              alt="Webkinz Plush"
              className="w-full h-auto"
            />
          </div>

          {/* Second Column: Text and Buttons */}
          <div className="flex-[1] flex flex-col justify-center items-center text-center">
            <h1 className="text-xl md:text-sm lg:text-2xl font-bold text-[var(--color-text)] mb-4 relative z-10">
              Webkinz Plush Available Now!
            </h1>
            <h1 className="text-xl md:text-sm lg:text-2xl font-bold text-[var(--color-text)] mb-6 relative z-10">
              Includes codes for both games!
            </h1>

            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-xs">
              <button className="bg-[var(--color-off-white)] text-[var(--color-text)] px-6 py-3 rounded-lg w-full transition-all transform shadow-md hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
                Find on Ganz eStore
              </button>
              <button className="bg-[var(--color-off-white)] text-[var(--color-text)] px-6 py-3 rounded-lg w-full transition-all transform shadow-md hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
                Find a Store
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:px-28 md:px-8 px-4">
        <div className="bg-[var(--color-purple)] rounded-3xl p-8 flex flex-col items-center text-center">
          <h1 className="text-sm lg:text-2xl text-white mb-4">
            Webkinz is the original Toy-to-Life game that has been enjoyed by
            millions.
          </h1>

          <h1 className="text-sm lg:text-2xl text-white mb-6">
            Now there are two games to enjoy!
          </h1>

          {/* Replace the image src with a YouTube embed if desired */}
          <div className="w-full max-w-4xl mb-6">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/wIoZ5OnDTXI"
                title="Webkinz Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          <h1 className="text-sm lg:text-2xl text-white">
            Build your family of pets in a world of fun!
          </h1>
        </div>
      </section>

      <section className="bg-[url('/images/purpleback.png')] bg-cover bg-center bg-no-repeat py-8">
        <div className="lg:px-28 md:px-8 px-4 flex flex-col items-start">
          {/* Title */}
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-10 self-center text-center">
            Latest News
          </h1>

          {/* News Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* News Item 1 */}
            <div className="bg-[var(--color-purple)] text-white rounded-2xl p-8 flex flex-col justify-between text-left">
              <div>
                <p className="lg:text-lg text-sm mb-4">Wed, 12 Mar 2025</p>
                <h1 className="lg:text-2xl text-lg font-bold md:mb-4 mb-10 underline">
                  Update #371: What's New!
                </h1>
                <p className="lg:text-2xl text-lg md:mb-8 mb-16">
                  Webkinz Classic has once again been updated and the NEW Mayor
                  of Kinzville, Arte Fact, has all the newz about what's new.
                </p>
              </div>
              <button className="bg-white text-[var(--color-purple)] px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold transition-all transform shadow-md hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
                Read More!
              </button>
            </div>

            {/* News Item 2 */}
            <div className="bg-[var(--color-purple)] text-white rounded-2xl p-8 flex flex-col justify-between text-left">
              <div>
                <p className="lg:text-lg text-sm mb-4">Wed, 12 Mar 2025</p>
                <h1 className="lg:text-2xl text-lg font-bold md:mb-4 mb-10 underline">
                  Webkinz Classic Wheel Prizes Updated!
                </h1>
                <p className="lg:text-2xl text-lg md:mb-8 mb-16">
                  Spin each wheel daily to win prizes for your pets!
                </p>
              </div>
              <button className="bg-white text-[var(--color-purple)] px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold transition-all transform shadow-md hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
                Read More!
              </button>
            </div>

            {/* News Item 3 */}
            <div className="bg-[var(--color-purple)] text-white rounded-2xl p-8 flex flex-col justify-between text-left">
              <div>
                <p className="lg:text-lg text-sm mb-4">Tue, 11 Mar 2025</p>
                <h1 className="lg:text-2xl text-lg font-bold md:mb-4 mb-10 underline">
                  Fantastic Snowman Leaderboard for February!
                </h1>
                <p className="lg:text-2xl text-lg md:mb-8 mb-16">
                  Once again last month we saw two leaders for the Fantastic
                  Snowman!
                </p>
              </div>
              <button className="bg-white text-[var(--color-purple)] px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold transition-all transform shadow-md hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
                Read More!
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-4 py-8 bg-[var(--color-off-white)]">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-6">
          {/* Logo Column */}
          <div className="flex-[0.1] flex justify-center md:justify-start">
            <img
              src="/images/GANZ Logo black.png"
              alt="Webkinz Logo"
              className="w-20 h-auto"
            />
          </div>

          {/* Legal Text Column */}
          <div className="flex-[0.9] text-xs text-[var(--color-text)]">
            <p>
              Webkinz World® is a multi-award winning virtual world for boys and
              girls aged 6+. On Webkinz.com, players discover a whole world of
              fun, caring and learning, while they adopt and play with their
              pets, decorate rooms, play games, collect prizes, and chat with
              their friends!
            </p>
            <p className="mt-2">
              With over 1,000 pets to adopt, more than 15,000 items to collect,
              and over 100 games and activities. Webkinz World is a place kids
              of all ages will enjoy! Content is in English only.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="text-center font-bold text-base text-[var(--color-text)]">
          © Ganz 2021. All Rights Reserved.
        </div>
      </section>
    </div>
  );
}

export default HomePage;
