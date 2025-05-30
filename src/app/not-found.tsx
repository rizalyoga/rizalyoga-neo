import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-300">
      <div className="text-center">
        <h1 className="mb-12 text-4xl font-black ">
          Opps Sorry, Project Not Found
        </h1>
        <Link
          href="/"
          className="bg-lime-400 text-black px-6 py-3 font-bold border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
