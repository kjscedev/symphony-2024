function syahi() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center pt-[12vh] font-Symphony"
    style={{backgroundImage: "url('bg.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      
      <div className=" h-[80vh] w-[80vw] md:h-[70vh] md:w-[70vw] flex justify-center items-center m-auto backdrop-blur-xl rounded-3xl border-2 border-yellow-300">
        <div>
          <div className=" m-auto -mt-7 text-black text-center  font-bold text-6xl">
            Syahi
          </div>
          <div className=" mt-5 m-auto w-[60vw] text-black md:text-3xl text-[17px] text-center">
            Syahi - the literary festival at KJSCE’s Symphony comprises poetry,
            storytelling, creative writing, workshops and the glorious open-mic
            'Mehfil-e-Shaam’ Syahi is home for everyone to express their
            creative self and go beyond just literature.
          </div>
          <div>
            <img
              className="absolute -bottom-10 -right-8 mobile-image"
              width={110}
              src="hme.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default syahi;
