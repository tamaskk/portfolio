import React from "react";

const Error404 = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800">Oops!</h1>
      <p className="text-xl text-gray-600 mt-4">
        The page you're looking for could not be found. It might be misspelled or
        removed.
      </p>
      <div className="mt-8">
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-opacity-75"
        >
          <svg
            className="w-4 h-4 mr-2 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-1.707l-5.4-5.4a.707.707 0 00-1 0l-1.414 1.414a.707.707 0 000 1l5.4 5.4a.707.707 0 001 0z"
              clipRule="evenodd"
            />
          </svg>
          Go Home
        </a>
      </div>
      <div className="mt-6 text-gray-500">
        Are you sure the web address is correct? Perhaps try searching for it.
      </div>
    </div>
  );
};

export default Error404;
