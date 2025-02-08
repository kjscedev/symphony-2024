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
        <div className=" flex flex-col justify-center items-center gap-9 w-[200px] h-[200px] font-Symphony   ">
          <div>
            <img
              className="  w-[60vw] md:w-[15vw] m-auto mt-14"
              src="m1.png"
              alt="Content 1"
            />
          </div>
          <div className=" text-white text-center text-3xl">
            {" "}
            PAINT THE PIXEL
          </div>
        </div>
      );
      break;
    case 2:
      displayContent = (
        <div className=" flex flex-col justify-center items-center gap-9 w-[200px] h-[200px]  ">
          <div>
            <img
              className=" w-[60vw] md:w-[15vw] m-auto mt-14"
              src="m2.png"
              alt="Content 2"
            />
          </div>
          <div className=" text-white text-center text-3xl"> CRESCENDO</div>
        </div>
      );
      break;
    case 3:
      displayContent = (
        <div className=" flex flex-col justify-center items-center gap-9 w-[200px] h-[200px]  ">
          <div>
            <img
              className=" w-[60vw] md:w-[15vw] m-auto mt-14"
              src="m3.png"
              alt="Content 3"
            />
          </div>
          <div className=" text-white text-center text-3xl"> SYMPHONY IDOL</div>
        </div>
      );
      break;
    case 4:
      displayContent = (
        <div className=" flex flex-col justify-center items-center gap-9 w-[200px] h-[200px]  ">
          <div>
            <img
              className="  w-[60vw] md:w-[15vw] m-auto mt-14"
              src="m4.png"
              alt="Content 4"
            />
          </div>
          <div className=" text-white text-center text-3xl"> VERVE</div>
        </div>
      );
      break;
    case 5:
      displayContent = (
        <div className=" flex flex-col justify-center items-center gap-9 w-[200px] h-[200px]  ">
          <div>
            <img
              className="  w-[60vw] md:w-[15vw] m-auto mt-14"
              src="m5.png"
              alt="Content 5"
            />
          </div>
          <div className=" text-white text-center text-3xl">UDGHOSH</div>
        </div>
      );
      break;
    case 6:
      displayContent = (
        <div className=" flex flex-col justify-center items-center gap-9 w-[200px] h-[200px]  ">
          <div>
            <img
              className="  w-[60vw] md:w-[15vw] m-auto mt-14"
              src="m6.png"
              alt="Content 6"
            />
          </div>
          <div className=" text-white text-center text-3xl"> FEEL THE BEAT</div>
        </div>
      );
      break;
    case 7:
      displayContent = (
        <div className=" flex flex-col justify-center items-center gap-9 w-[200px] h-[200px]  ">
          <div>
            <img
              className="  w-[60vw] md:w-[15vw] m-auto mt-14"
              src="m7.png"
              alt="Content 7"
            />
          </div>
          <div className=" text-white text-center text-3xl"> NATSAMRAT</div>
        </div>
      );
      break;
    case 8:
      displayContent = (
        <div className=" flex flex-col justify-center items-center gap-9 w-[200px] h-[200px]  ">
          <div>
            <img
              className="  w-[60vw] md:w-[15vw] m-auto mt-14"
              src="m81.png"
              alt="Content 8"
            />
          </div>
          <div className=" text-white text-center text-3xl"> DECIBEL</div>
        </div>
      );
      break;
    default:
      displayContent = null;
  }
  return (
    <div className="h-[120vh] md:h-[128vh] w-[100vw] bg-[url('../bgsym.png')] bg-repeat bg-cover pt-[18vh] ">
      <div className="h-[60vh] w-[80vw] md:h-[70vh] md:w-[70vw] justify-center items-center m-auto backdrop-blur-xl rounded-3xl border-2 border-yellow-300  ">
        <div className="  flex md:flex-row flex-col justify-center items-center  gap-48 m-auto ">
          <div>
            <div>
              <img
                className="  w-[60vw] md:w-[18vw] m-auto mt-14 md:block hidden"
                src="m4r.png"
                alt="Content 1"
              />
            </div>
            <div
              className="absolute w-[300px] h-[0px] border-[3px] border-zinc-400 transform rotate-90 hidden md:flex"
              style={{ left: "calc(50% - 150px)", top: "183px" }}
            ></div>
          </div>
          <div>{displayContent}</div>
        </div>
        <div className="text-white text-center mt-7 font-bold md:flex justify-center items-center absolute bottom-8 m-auto w-[80vw] md:w-[70vw] -gap-[100px] hidden ">
          <button className="m-auto backdrop-blur-xl text-xl rounded-xl border-2 border-yellow-300 hover:border-yellow-600 p-[10px]">
            Know More
          </button>
          <button className="m-auto backdrop-blur-xl text-xl rounded-xl border-2 border-yellow-300 hover:border-yellow-600 p-[10px]">
            Register
          </button>
          <button className="m-auto backdrop-blur-xl text-xl rounded-xl border-2 border-yellow-300 hover:border-yellow-600 p-[10px]">
            Back
          </button>
        </div>
        <img
          className="absolute -bottom-10 -right-8"
          width={110}
          src="hme.png"
          alt="Image"
        />
      </div>
      <div className="text-white text-center mt-10 -gap-[100px] font-bold flex justify-center items-center bottom-8 m-auto w-[80vw] md:w-[70vw] -gap-[100px] md:hidden  ">
        <button className="m-auto backdrop-blur-xl text-xl rounded-xl border-2 border-yellow-300 hover:border-yellow-600 p-[10px]">
          Know More
        </button>
        <button className="m-auto backdrop-blur-xl text-xl rounded-xl border-2 border-yellow-300 hover:border-yellow-600 p-[10px]">
          Register
        </button>
        <button className="m-auto backdrop-blur-xl text-xl rounded-xl border-2 border-yellow-300 hover:border-yellow-600 p-[10px]">
          Back
        </button>
      </div>

      <div className="flex m-auto justify-center items-center gap-4 md:gap-9 mt-8 ">
        <div>
          <button onClick={() => changeContent(1)}>
            <div className=" backdrop-blur-xl w-[80px] h-[80px] m-auto">
              <img
                className="w-[12vw] md:w-[180px] m-auto hover:scale-110"
                src="m1.png"
                alt="Content 1"
              />
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => changeContent(2)}>
            <div className=" backdrop-blur-xl w-[80px] h-[80px]">
              <img
                className="w-[12vw] md:w-[17vw] m-auto hover:scale-110"
                src="m2.png"
                alt="Content 2"
              />
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => changeContent(3)}>
            <div className=" backdrop-blur-xl w-[80px] h-[80px]">
              <img
                className="w-[12vw] md:w-[17vw] m-auto hover:scale-110"
                src="m3.png"
                alt="Content 3"
              />
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => changeContent(4)}>
            <div className=" backdrop-blur-xl w-[80px] h-[80px]">
              <img
                className="w-[12vw] md:w-[17vw] m-auto hover:scale-110"
                src="m4.png"
                alt="Content 4"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="flex m-auto justify-center items-center gap-4 md:gap-9 mt-8">
        <div>
          <button onClick={() => changeContent(5)}>
            <div className=" backdrop-blur-xl w-[80px] h-[80px]">
              <img
                className="w-[12vw] md:w-[17vw] m-auto hover:scale-110"
                src="m5.png"
                alt="Content 5"
              />
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => changeContent(6)}>
            <div className=" backdrop-blur-xl w-[80px] h-[80px]">
              <img
                className="w-[12vw] md:w-[17vw] m-auto hover:scale-110"
                src="m6.png"
                alt="Content 6"
              />
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => changeContent(7)}>
            <div className=" backdrop-blur-xl w-[80px] h-[80px]">
              <img
                className="w-[12vw] md:w-[17vw] m-auto hover:scale-110"
                src="m7.png"
                alt="Content 7"
              />
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => changeContent(8)}>
            <div className=" backdrop-blur-xl w-[80px] h-[80px]">
              <img
                className="w-[12vw] md:w-[7vw] m-auto hover:scale-110  "
                src="m81.png"
                alt="Content 8"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
