  function Sponsors() {
    const sponsors = [
      { src: "s1.jpg", link: "" },
      { src: "s2.jpg", link: "https://www.dsgroup.com/our-brand/confectionery/pass-pass-pulse" },
      { src: "s3.jpg", link: "" },
      { src: "s4.jpg", link: "" },
      { src: "s5.jpg", link: "" },
      { src: "s6.jpg", link: "" },
      { src: "s7.jpg", link: "" },
      { src: "s8.jpg", link: "" },
      { src: "s9.jpg", link: "" },
      { src: "s10.jpg", link: "" },
      { src: "s11.jpg", link: "" },
      { src: "s12.jpg", link: "" },
      { src: "s13.jpg", link: "" },
      { src: "s14.jpg", link: "" },
      { src: "s15.jpg", link: "https://www.bisleri.com" },
      { src: "s16.jpg", link: "" },
      { src: "s17.jpg", link: "" },
      { src: "s18.jpg", link: "" },
      { src: "s19.jpg", link: "" },
      { src: "s20.jpg", link: "https://www.bisleri.com" },
      { src: "s21.jpg", link: "" },
      { src: "s22.jpg", link: "" },
      { src: "s23.jpg", link: "" },
      { src: "s24.jpg", link: "" },
      { src: "s25.jpg", link: "" },
    ];

    return (
      <div
        className="h-[100vh] w-[100vw] flex justify-center pt-[12vh]"
        style={{ backgroundImage: "url('bg.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <div className="h-[80vh] w-[80vw] md:h-[70vh] md:w-[70vw] gap-14 justify-center items-center m-auto backdrop-blur-xl rounded-3xl border-2 border-yellow-300 p-5">
          <div>
            <div className="font-Symphony text-black text-center mt-3 font-bold text-xl">OUR SPONSORS</div>
            <div className="h-[60vh] w-full grid grid-cols-2  md:grid-cols-3 gap-6 mt-6 overflow-y-auto scrollbar-hide">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="h-[120px] w-[120px] flex justify-center items-center m-auto">
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <img className="h-[120px] w-[120px] object-contain" src={sponsor.src} alt={`Sponsor ${index + 1}`} />
                  </a>
                </div>
              ))}
            </div>
            <img className="absolute -bottom-10 -right-8 mobile-image" width={110} src="hme.png" alt="Decoration" />
          </div>
        </div>
      </div>
    );
  }

  export default Sponsors;
