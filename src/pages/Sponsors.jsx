function Sponsors() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center pt-[12vh]"
    style={{backgroundImage: "url('bg.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      {/* <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src="bg loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className=" h-[80vh] w-[80vw] md:h-[70vh] md:w-[70vw] gap-14 justify-center items-center m-auto backdrop-blur-xl rounded-3xl border-2 border-yellow-300 ">
        {" "}
        <div>
          <div className=" font-Symphony text-black text-center mt-7 font-bold text-xl">
            OUR SPONSORS
          </div>
          <div class=" h-[62vh] w-[70vw] md:h-[50vh] md:w-[60vw] grid grid-cols-2 md:grid-cols-3 gap-12 m-auto mt-9 overflow-auto ">
            <div className=" h-[120px] m-auto">
              <a href="https://www.thedanceworx.com/">
                <img className="h-[120px]" src="s1.png" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="https://noescape.in/">
                <img className="h-[120px]" src="s2.jpg" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="https://www.birdsofparadyes.com/">
                <img className="h-[120px]" src="s3.png" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="https://envi.in/">
                <img className="h-[120px]" src="s4.png" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="https://www.thedanceworx.com/">
                <img className="h-[120px]" src="s5.jpeg" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="">
                <img className="h-[120px]" src="s6.jpg" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="https://offthegrid.in/">
                <img className="h-[120px]" src="s7.png" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="">
                <img className="h-[120px]" src="s81.jpg" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="">
                <img className="h-[120px]" src="s91.jpg" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="https://www.ekostay.com/">
                <img className="h-[120px]" src="s10.jpg" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="https://www.powermaxfitness.co.in/">
                <img className="h-[120px]" src="s12.jpg" />
              </a>
            </div>
            <div className="h-[120px] m-auto">
              <a href="https://www.instagram.com/cocomistry_/">
                <img className="h-[120px]" src="s13.jpeg" />
              </a>
            </div>
          </div>
          {/* <div className=" text-white text-center mt-7 font-bold flex justify-center items-center absolute bottom-8 m-auto w-[80vw]  md:w-[70vw]  ">
            
          </div> */}
          <img
            className="absolute -bottom-10 -right-8 mobile-image "
            width={110}
            src="hme.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
