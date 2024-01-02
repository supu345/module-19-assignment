import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div>
      <div className="max-w-4xl mx-auto py-4 px-4 border  rounded-lg bg-gray-200">
        <article className="flex items-center justify-between p-2 lg:p-3">
          <h2
            className="font-semibold cursor-pointer"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <BsPlusLg />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <BiMinus />
                </button>
              </li>
            )}
          </ul>
        </article>
        <article
          className={`${showAnswer && " border-t border-gray-400 p-2 lg:p-3"}`}
        >
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </div>
  );
};

export default SingleQuestion;
