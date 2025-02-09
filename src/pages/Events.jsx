import React, { useState } from "react";

const Events = () => {
  const [content, setContent] = useState(1);

  const changeContent = (newContent) => {
    setContent(newContent);
  };

  let displayContent;
  switch (content) {
    case 1:
      displayContent = (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div>
            <img
              className="w-[60vw] md:w-[15vw] mx-auto"
              src="event1.png"
              alt="Content 1"
            />
          </div>
          <div className="text-black text-center text-2xl md:text-3xl">
            PAINT THE PIXEL
          </div>
        </div>
      );
      break;
    case 2:
      displayContent = (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div>
            <img
              className="w-[60vw] md:w-[15vw] mx-auto"
              src="event2.png"
              alt="Content 2"
            />
          </div>
          <div className="text-black text-center text-2xl md:text-3xl">
            CRESCENDO
          </div>
        </div>
      );
      break;
    case 3:
      displayContent = (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div>
            <img
              className="w-[60vw] md:w-[15vw] mx-auto"
              src="event3.png"
              alt="Content 3"
            />
          </div>
          <div className="text-black text-center text-2xl md:text-3xl">
            SYMPHONY IDOL
          </div>
        </div>
      );
      break;
    case 4:
      displayContent = (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div>
            <img
              className="w-[60vw] md:w-[15vw] mx-auto"
              src="event4.png"
              alt="Content 4"
            />
          </div>
          <div className="text-black text-center text-2xl md:text-3xl">
            VERVE
          </div>
        </div>
      );
      break;
    case 5:
      displayContent = (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div>
            <img
              className="w-[60vw] md:w-[15vw] mx-auto"
              src="event5.png"
              alt="Content 5"
            />
          </div>
          <div className="text-black text-center text-2xl md:text-3xl">
            UDGHOSH
          </div>
        </div>
      );
      break;
    case 6:
      displayContent = (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div>
            <img
              className="w-[60vw] md:w-[15vw] mx-auto"
              src="event6.png"
              alt="Content 6"
            />
          </div>
          <div className="text-black text-center text-2xl md:text-3xl">
            FEEL THE BEAT
          </div>
        </div>
      );
      break;
    case 7:
      displayContent = (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div>
            <img
              className="w-[60vw] md:w-[15vw] mx-auto"
              src="event7.png"
              alt="Content 7"
            />
          </div>
          <div className="text-black text-center text-2xl md:text-3xl">
            NATSAMRAT
          </div>
        </div>
      );
      break;
    case 8:
      displayContent = (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div>
            <img
              className="w-[60vw] md:w-[15vw] mx-auto"
              src="event8.png"
              alt="Content 8"
            />
          </div>
          <div className="text-black text-center text-2xl md:text-3xl">
            DECIBEL
          </div>
        </div>
      );
      break;
    default:
      displayContent = null;
  }

  return (
    <div className="min-h-screen w-full bg-[url('../bg.png')] bg-repeat bg-cover pt-16 pb-8">
      <div className="w-[90vw] md:w-[40vw] mx-auto backdrop-blur-xl rounded-3xl border-2 border-yellow-300 py-8 px-4 relative mt-20 md:mt-32">
        <div className="flex flex-col justify-center items-center">
          {displayContent}

          <div className="flex md:flex-row gap-4 mt-8 w-full justify-center">
            <button className="backdrop-blur-xl w-32 text-lg md:text-xl text-black rounded-xl border-2 bg-red-300 hover:bg-red-600 hover:scale-105 transition-all duration-300 px-6 py-2">
              <a href="https://forms.gle/XYffMYpcivCLC9iaA" target="_blank">
                Register
              </a>
            </button>
            <button className="backdrop-blur-xl w-48 text-lg md:text-xl text-black rounded-xl border-2 bg-blue-300 hover:bg-blue-600 hover:scale-105 transition-all duration-300 px-6 py-2">
              <a href="https://forms.gle/x2MdF5oLdYk6ESyn8" target="_blank">
                Payment Form
              </a>
            </button>
            <img
          className="absolute -bottom-10 -right-8"
          width={110}
          src="hme.png"
          alt="Image"
        />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-9 mt-8">
        {[1, 2, 3, 4].map((num) => (
          <button key={num} onClick={() => changeContent(num)}>
            <img
              className="w-20 h-20 p-2 hover:scale-110 transition-transform"
              src={`event${num}.png`}
              alt={`Event ${num}`}
            />
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-9 mt-4">
        {[5, 6, 7, 8].map((num) => (
          <button key={num} onClick={() => changeContent(num)}>
            <img
              className="w-20 h-20 p-2 hover:scale-110 transition-transform"
              src={`event${num}.png`}
              alt={`Event ${num}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Events;
