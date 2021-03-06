import { ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Question({
  title,
  desc,
  example,
  maxLength,
  submitHandler,
}) {
  const [isExample, setExample] = useState(false);
  const [word, setWord] = useState("");

  return (
    <div className="absolute inset-0 h-screen w-screen transition-all ease-in-out duration-1000 transform translate-x-full slide">
      <div className="mx-auto h-screen max-w-screen-md flex items-center">
        <div className="py-8 w-full text-center pb-20 mx-10">
          <div className="flex sm:justify-between w-full sm:items-center mb-4 flex-col sm:flex-row">
            <div className="text-left">
              <p className="text-xl sm:text-3xl font-bold text-white mr-6">
                {title}
              </p>
              <p className="text-xs sm:text-base text-gray-200 mt-1">{desc}</p>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-xs sm:text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none w-24 sm:w-28 sm:m-0 mt-2"
              onClick={() => setExample(!isExample)}
            >
              {isExample ? "Write" : "Example"}
            </button>
          </div>

          <div className="flip h-52">
            <div
              className={`flip-content w-full ${
                isExample ? "flip-content-clicked" : ""
              }`}
            >
              <div className="flip-input w-full">
                <textarea
                  spellCheck="false"
                  className="w-full rounded-lg shadow-md outline-none resize-none border border-gray-200 h-52 text-sm sm:text-lg py-4 px-6 placeholder-gray-300 placeholder-opacity-100"
                  placeholder="I love business and making money"
                  maxLength={maxLength}
                  onChange={(e) => setWord(e.target.value)}
                ></textarea>
                <div className="sm:text-base text-xs text-gray-300 -mt-8 mr-4 sm:-mt-10 sm:mr-4 text-right">
                  {word.length} / {maxLength}
                </div>
              </div>
              <div className="flip-example bg-indigo-900 text-gray-300 p-4 rounded-lg w-full h-52 text-left py-4 px-6 text-lg">
                {example}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 lg:bottom-auto lg:left-auto lg:right-16 lg:top-1/2 flex hover:animate-bounce-right ">
        <button
          className="rounded-full shadow-md bg-blue-200 p-3 hover:bg-blue-300 -ml-6"
          onClick={() => submitHandler(word)}
        >
          <ChevronRightIcon className="w-6 h-6 sm:h-10 sm:w-10 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
