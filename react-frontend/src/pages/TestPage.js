import { ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import "../styles/Home.css";
import ResultModal from "../components/ResultModal";
import Question from "../components/Question";
import { listQuestion } from "../data/QuestionData";
import { majorData } from "../data/MajorData";

export default function TestPage() {
  const maxLength = 450;
  const shortQuestionMaxLength = 220;
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    const temp = [...listQuestion];
    const res = [];

    for (let i = 0; i < 4; i++) {
      const rand = Math.floor(Math.random() * temp.length);

      res.push(temp[rand]);
      temp.splice(rand, 1);
    }

    setQuestion(res);
  }, []);

  const inputListener = (e) => {
    setWord(e.target.value);
  };

  const submitHandler = (word) => {
    let tok = word.split(" ");
    if (tok.length < 10) {
      // TO DO
      // MODAL ERROR MESSAGE
      return;
    }

    setLoading(true);
    fetch("/predict", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        essay: word,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.probabilities[0] < 0.4) {
          let activeSlide = document.querySelector(".slide.translate-x-0");

          let nextSlide = activeSlide.nextElementSibling;
          if (nextSlide == null) {
            setProbabilities(res.probabilities);

            let fin_majors = [];
            for (let m of res.majors) {
              fin_majors.push(m.split("_").join(" "));
            }

            setMajors(fin_majors);
            setmodalOpened(true);
            return;
          }

          activeSlide.classList.remove("translate-x-0");
          activeSlide.classList.add("-translate-x-full");
          nextSlide.classList.remove("translate-x-full");
          nextSlide.classList.add("translate-x-0");
        } else {
          setProbabilities(res.probabilities);

          let fin_majors = [];
          for (let m of res.majors) {
            fin_majors.push(m.split("_").join(" "));
          }

          setMajors(fin_majors);
          setmodalOpened(true);
        }
      });
  };

  const [isExample, setExample] = useState(false);
  const [word, setWord] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isModalOpened, setmodalOpened] = useState(false);
  const [probabilities, setProbabilities] = useState([]);
  const [majors, setMajors] = useState([]);

  return (
    <div
      className="bg-cover w-screen h-screen bg-left-bottom relative overflow-hidden"
      style={{ backgroundImage: "url(/assets/pattern-blue.jpg)" }}
    >
      <div
        className={`bg-black inset-0 absolute z-10 bg-opacity-30 flex justify-center items-center ${
          isLoading ? "block" : "hidden"
        }`}
      >
        <svg
          className="w-16 h-16 animate-spin text-white"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
          ></path>
        </svg>
      </div>
      <div>
        <ResultModal
          open={isModalOpened}
          setOpen={setmodalOpened}
          majors={majors}
          probabilities={probabilities}
        ></ResultModal>
      </div>
      <div className="relative flex">
        <div className="absolute inset-0 w-screen h-screen transition-all ease-in-out duration-1000 transform translate-x-0 slide">
          <div className="mx-auto h-screen max-w-screen-md flex items-center">
            <div className="py-8 w-full text-center pb-20 mx-10">
              <div className="flex sm:justify-between w-full sm:items-center mb-4 flex-col sm:flex-row">
                <div className="text-left">
                  <p className="text-xl sm:text-3xl font-bold text-white">
                    Tell me about yourself
                  </p>
                  <p className="text-xs sm:text-base text-gray-200 mt-1">
                    A bit lost ? Feel free to check on my example behind this
                    card.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-xs sm:text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none w-24 sm:w-28 sm:m-0 mt-2"
                  onClick={() => setExample(!isExample)}
                >
                  {isExample ? "Write" : "Example"}
                </button>
              </div>

              <div className="flip h-80">
                <div
                  className={`flip-content w-full ${
                    isExample ? "flip-content-clicked" : ""
                  }`}
                >
                  <div className="flip-input w-full">
                    <textarea
                      spellCheck="false"
                      className="w-full rounded-lg shadow-md outline-none resize-none border border-gray-200 h-80 text-sm sm:text-lg py-4 px-6 placeholder-gray-300 placeholder-opacity-100"
                      placeholder="I love business and making money"
                      maxLength={maxLength}
                      onChange={inputListener}
                    ></textarea>
                    <div className="sm:text-base text-xs text-gray-300 -mt-8 mr-4 sm:-mt-10 sm:mr-4 text-right">
                      {word.length} / {maxLength}
                    </div>
                  </div>
                  <div className="flip-example bg-indigo-900 text-gray-300 p-4 rounded-lg w-full h-80 text-left py-4 px-6 text-lg">
                    I love to learn about computer science and problem solving.
                    I think I'm really good at mathematics and critical
                    thinking.
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
        {question.length > 0 &&
          question.map((q, idx) => (
            <Question
              key={idx}
              title={q.question}
              desc={q.description}
              example={q.example}
              submitHandler={submitHandler}
              maxLength={shortQuestionMaxLength}
            />
          ))}
      </div>
    </div>
  );
}
