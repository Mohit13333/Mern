import React from "react";

const Analytics = () => {
  return (
    <>
      <section className="my-[9.6rem] mx-auto max-w-screen-xl py-[4rem] px-[2.4rem]">
        <div className="grid grid-cols-4 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5 text-center mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] rounded-[1rem] bg-white capitalize text-black">
          <div className="border-black md:border-e-2 max-sm:border-none">
            <h2 className="text-2xl font-bold">50+</h2>
            <p>Registered companies</p>
          </div>
          <div className="border-black max-sm:border-s-2">
            <h2 className="text-2xl font-bold">10,000+</h2>
            <p>Happy client</p>
          </div>
          <div className="border-black md:border-s-2">
            <h2 className="text-2xl font-bold">500+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className="border-black border-s-2">
            <h2 className="text-2xl font-bold">24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;
