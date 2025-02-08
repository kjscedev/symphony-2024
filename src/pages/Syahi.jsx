function syahi() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center pt-[18vh] font-Symphony">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src="bg loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" h-[80vh] w-[80vw] md:h-[70vh] md:w-[70vw] flex justify-center items-center m-auto backdrop-blur-xl rounded-3xl border-2 border-yellow-300   ">
        <div>
          <div className=" m-auto -mt-7 text-white text-center  font-bold text-6xl">
            Syahi
          </div>
          <div className=" mt-5 m-auto w-[60vw] text-white  md:text-3xl text-[17px]">
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
