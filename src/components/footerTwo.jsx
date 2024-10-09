import React from "react";
import Head from "next/head";
const FooterTwo = () => {
  return (
    <>
      <div className="bg-[#05796B] text-white flex items-center justify-center">
        <Head>
          <title>Track Your Crypto Portfolio</title>

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 py-10 md:flex md:gap-10 max-w-6xl">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-sm font-semibold tracking-wider mb-4">
              WHY CHOOSE US
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Track your crypto portfolio on the best way possible
            </h1>
            <p className="text-lg opacity-80">
              Mean if he they been no hold mr. Is at much do made. Latter person
              am secure of estate genius at.
            </p>
          </div>
          <div className="md:w-1/2">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-white bg-opacity-10 rounded-lg text-white placeholder-white placeholder-opacity-60"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-white bg-opacity-10 rounded-lg text-white placeholder-white placeholder-opacity-60"
              />
              <button
                type="submit"
                className="w-full p-4 bg-[#F57059] text-white font-semibold rounded-lg transition-colors hover:bg-opacity-90"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default FooterTwo;
