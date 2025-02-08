import React, { useEffect, useState } from "react";
import "./css/proshows.css";
const Proshows = () => {
  //   const [isMobileView, setIsMobileView] = useState(false);
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
  //     };

  //     window.addEventListener("resize", handleResize);
  //     handleResize(); // Initial check
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (isMobileView) {
  //       const intervalId = setInterval(() => {
  //         setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming you have 3 slides
  //       }, 3000); // Adjust interval as needed

  //       return () => clearInterval(intervalId); // Clear the interval on component unmount
  //     }
  //   }, [isMobileView]);

  //   const showSlide = (index) => {
  //     const slides = document.querySelectorAll(".carousel-slide");
  //     slides.forEach((slide, i) => {
  //       slide.style.transform = `translateX(-${index * 100}%)`;
  //     });
  //   };

  //   useEffect(() => {
  //     showSlide(currentIndex);
  //   }, [currentIndex, isMobileView]);

  // if (isMobileView) {
  //   return (
  //     <div className="h-[100vh] w-[100vw] flex justify-center pt-[18vh]">
  //       <video
  //         className="absolute inset-0 object-cover w-full h-full"
  //         autoPlay
  //         loop
  //         muted
  //       >
  //         <source src="bg loop.mp4" type="video/mp4" />
  //         Your browser does not support the video tag.
  //       </video>
  //       <div className="carousel-container flex flex-col h-[89vh] w-[80vw] md:w-[90vw] justify-center items-center m-auto overflow-x-auto md:gap-14 gap-2">
  //         <div className="w-[50vw] md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
  //           <div>
  //             <img
  //               className="absolute bottom-0 right-0 w-[250px] "
  //               width={60}
  //               src="pro1.png"
  //             ></img>
  //           </div>
  //           <div>
  //             <img
  //               className="absolute -bottom-4 -right-4"
  //               width={60}
  //               src="hme.png"
  //             ></img>
  //           </div>
  //         </div>
  //         <div className=" w-[50vw] md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
  //           <div>
  //             <img
  //               className="absolute bottom-0 right-0 w-[250px] "
  //               width={60}
  //               src="pro3.png"
  //             ></img>
  //           </div>
  //           <div>
  //             <img
  //               className="absolute -bottom-4 -right-4"
  //               width={60}
  //               src="hme.png"
  //             ></img>
  //           </div>
  //         </div>
  //         <div className=" w-[50vw] md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
  //           <div>
  //             <img
  //               className="absolute bottom-0 right-0 w-[0px] "
  //               width={60}
  //               src="pro1.png"
  //             ></img>
  //           </div>
  //           <div>
  //             <img
  //               className="absolute -bottom-4 -right-4"
  //               width={60}
  //               src="hme.png"
  //             ></img>
  //           </div>
  //         </div>
  //         <div className=" w-[50vw] md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
  //           <div>
  //             <img
  //               className="absolute bottom-0 right-0 w-[400px] "
  //               width={60}
  //               src="pro2.png"
  //             ></img>
  //           </div>
  //           <div>
  //             <img
  //               className="absolute -bottom-4 -right-4"
  //               width={60}
  //               src="hme.png"
  //             ></img>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center pt-[10vh]">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src="bg loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="carousel-container flex h-[85vh] w-[95vw] md:w-[90vw] justify-center items-center m-auto overflow-x-auto md:gap-14 gap-6">
        <div className=" flex h-[85vh] w-[95vw] md:w-[95vw]  justify-center items-center m-auto overflow-x-auto  md:gap-5 gap-6  ">
          <div className=" w-[20vw] md:w-[20vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300 ">
            <div>
              <img
                className="absolute bottom-0 right-0 w-[250px] "
                width={60}
                src="pro1.png"
              ></img>
            </div>
            <div>
              <img
                className="absolute -bottom-4 -right-4"
                width={60}
                src="hme.png"
              ></img>
            </div>
          </div>
          <div className=" w-[20vw] md:w-[20vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300 ">
            <div>
              <img
                className="absolute bottom-0 right-0 w-[250px] "
                width={60}
                src="pro3.png"
              ></img>
            </div>
            <div>
              <img
                className="absolute -bottom-4 -right-4"
                width={60}
                src="hme.png"
              ></img>
            </div>
          </div>
          <div className="   w-[20vw] md:w-[20vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
            <div>
              <img
                className="absolute bottom-0 right-0 w-[300px] "
                width={60}
                src="pro4.png"
              ></img>
            </div>
            <div>
              <img
                className="absolute -bottom-4 -right-4"
                width={60}
                src="hme.png"
              ></img>
            </div>
          </div>
          <div className="  w-[20vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
            <div>
              <img
                className="absolute bottom-0 right-0 w-[400px] "
                width={60}
                src="pro2.png"
              ></img>
            </div>
            <div>
              <img
                className="absolute -bottom-4 -right-4"
                width={60}
                src="hme.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// return (
//   <div className="h-[110vh] w-[100vw] bg-[url('../bgsym.png')] bg-repeat bg-cover pt-[18vh]  ">
//     <div className="carousel-container flex h-[85vh] w-[95vw] md:w-[90vw] justify-center items-center m-auto overflow-x-auto md:gap-14 gap-6">
//       <div className="carousel-slide w-[80vw] md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
//         <div>
//           <img
//             className="absolute -bottom-4 -right-4"
//             width="60"
//             src="hme.png"
//             alt="slide-1"
//           />
//         </div>
//       </div>
//       <div className="carousel-slide w-[80vw] md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
//         <div>
//           <img
//             className="absolute -bottom-4 -right-4"
//             width="60"
//             src="hme.png"
//             alt="slide-2"
//           />
//         </div>
//       </div>
//       <div className="carousel-slide w-[80vw] md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
//         <div>
//           <img
//             className="absolute -bottom-4 -right-4"
//             width="60"
//             src="hme.png"
//             alt="slide-3"
//           />
//         </div>
//       </div>
//     </div>

/* <div className=" flex h-[85vh] w-[95vw] md:w-[90vw]  justify-center items-center m-auto overflow-x-auto  md:gap-14 gap-6  ">
          <div className=" w-[85vw] md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300 ">
            <div>
              <img
                className="absolute -bottom-4 -right-4"
                width={60}
                src="hme.png"
              ></img>
            </div>
          </div>
          <div className="  w-[85vw]  md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300 ">
            <div>
              <img
                className="absolute -bottom-4 -right-4"
                width={60}
                src="hme.png"
              ></img>
            </div>
          </div>
          <div className="  w-[85vw] md:w-[25vw] h-[80vh] backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
            <div>
              <img
                className="absolute -bottom-4 -right-4"
                width={60}
                src="hme.png"
              ></img>
            </div>
          </div>
        </div> */

//     </div>
//   );
// };

export default Proshows;
