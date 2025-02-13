import React from "react";

const Proshows = () => {
  return (
    <div
      className="min-h-screen w-screen flex justify-center pt-[10vh] overflow-hidden bg-cover bg-center bg-repeat"
      style={{ backgroundImage: "url('bg.png')" }}
    >
      <div className="relative w-[90vw] max-w-[1800px] h-auto flex flex-col md:flex-2 gap-10 md:mt-20 md:gap-10 items-center justify-center mt-24 space-y-8 mb-10">
        {[
          { title: "Javed Ali", date: "12th February", img: "Javed Ali.png" },
          { title: "DJ Khushi", date: "13th February", img: "DJ khushi.png" },
          { title: "LMI", date: "14th February", img: "LMI.png" },
          { title: "Harsh Gujral", date: "14th February", img: "harsh.png" },
        ].map((show, index) => (
          <div
            key={index}
            className="w-full max-w-[450px] h-[40vh] bg-black/50 backdrop-blur-lg rounded-3xl border-2 border-yellow-300 relative shadow-xl hover:scale-105 transition-transform duration-300 flex"
          >
            <div className="p-4 text-white">
              <h2 className="text-3xl font-bold">{show.title}</h2>
              <p className="text-lg mt-2 text-yellow-300">{show.date}</p>
            </div>
            <div className="m-2">
              <img
                className="absolute bottom-0 right-0 max-w-[220px] h-[350px] md:h-[400px] md:max-w-[250px]"
                src={show.img}
                alt={show.title}
              />
            </div>
            <div>
              <img
                className="absolute -bottom-4 -right-4 w-14"
                src="hme.png"
                alt="decoration"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proshows;
