import { useState } from "react";
import "./css/rules.css";

function Rules() {
  return (
    <div
      className="min-h-screen w-[100vw] flex justify-center pt-[15vh] font-Symphony bg-cover bg-center px-4 "
      style={{ backgroundImage: "url('bg.png')" }}
    >
      <div className="w-full max-w-4xl gap-10 justify-center items-center m-auto backdrop-blur-xl rounded-3xl border-2 border-yellow-300 p-6 text-black mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-4">GENERAL RULES</h1>
        <ul className="list-disc text-sm md:text-lg w-full leading-relaxed mt-4 md:ml-6 ">
          <li>Entry will not be given without a valid Somaiya ID card.</li>
          <li>No vehicles will be allowed inside the campus.</li>
          <li>Frisking will be conducted before entering the fest arena.</li>
          <li>Wearing a mask inside the arena is mandatory.</li>
          <li>The following articles are prohibited inside the arena and will be confiscated if found:
            <ul className="list-disc ml-4 md:ml-5">
              <li>Cigarettes, cigars, or any form of tobacco.</li>
              <li>Narcotics and alcohol.</li>
              <li>Perfumes, deodorants, make-up, or any other flammable objects.</li>
              <li>Any sharp or metallic objects.</li>
              <li>Lighters.</li>
              <li>No eatables, drinkables, or water.</li>
            </ul>
          </li>
          <li>Decency in dressing must be maintained at all times. Clothing should cover torso to knee. No sheers and tears are allowed.</li>
          <li>Misbehavior and misconduct in any form will not be tolerated and may lead to expulsion.</li>
          <li>Damage to property is strictly prohibited.</li>
          <li>The Organizing Committee is not responsible for the loss/theft of any belongings inside the arena.</li>
          <li>The decision of the Organizing Committee will be final regarding any other issues.</li>
          <li>No bags are allowed inside the arena/auditorium.</li>
        </ul>
        <img
          className="hidden md:block absolute -bottom-10 -right-8 mobile-image"
          width={110}
          src="hme.png"
          alt="Home"
        />
      </div>
    </div>
  );
}

export default Rules;