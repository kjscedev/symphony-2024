import { useState } from "react";
import "./css/rules.css";

function Rules() {
  // const [active,setactive] = useState("onee");
  return (
    <div className="h-[110vh] w-[100vw] flex justify-center pt-[18vh] font-Symphony">
      <video
        className="absolute inset-0 object-cover w-full h-[110vh]"
        autoPlay
        loop
        muted
      >
        <source src="bg loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" h-[80vh] w-[80vw] md:h-[70vh] md:w-[70vw] gap-14 justify-center items-center m-auto backdrop-blur-xl rounded-3xl border-2 border-yellow-300 mb-60 ">
        <div>
          <div className=" text-white text-center mt-7 font-bold text-4xl">
            GENERAL RULES
          </div>
          <div className=" mt-5 m-auto w-[60vw] text-white md:text-xl text-[14px]">
            Rules & Regulation • Entry will not be given without a valid Somaiya
            ID card No vehicles will be allowed inside the campus Frisking will
            be conducted before entering the fest arena Wearing mask inside the
            arena is mandatory The following articles are prohibited inside the
            arena and if found they will be confiscated -Cigarettes, cigars or
            any form of tobacco, narcotics and alcohol -Perfumes, Deodorants,
            Make-up or any other flammable objects Decency in dressing must be
            maintained at all times. Clothing should cover torso to knee. No
            shears and tears are allowed. Misbehaviour and misconduct in any
            form will not be tolerated and may lead to expulsion Damage to
            property is strictly prohibited The Organizing Committee is not
            responsible for the loss/theft of any belongings inside the arena.
            The decision of the Organizing Committee would be final regarding
            any other issues. No bags are allowed inside the arena/auditorium.
            -No eatables, drinkables and water -Any sharp or metallic objects
            -Lighters
          </div>
          <img
            className="absolute -bottom-10 -right-8 mobile-image mobile-image "
            width={110}
            src="hme.png"
            alt="Home"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Rules;
