function Footer() {
  return (
    <div className=" bg-black text-white h-[20vh] md:h-[40vh] w-full align-bottom overflow-y-hidden md:m-auto ">
      <div>
        <div className="flex items-center justify-center gap-[6vw] md:gap-[10vw] text-center align-middle  m-auto  h-[20vh] md:h-[34vh] mt-4 ">
          <div className=" text-center  w-[32vw] md:w-[20vw]  ">
            <h3 className=" text-[10px] md:text-2xl font-extrabold mt-6 md:0 ">
              CONTACT US
            </h3>
            <br></br>
            {/* <div class="dark:bg-white-700 h-1 w-64 rounded border-0 bg-gray-100 md:my-5"></div> */}
            <div className="text-[8px] md:text-sm">
              <h4 class=" ">Advait Pathankar</h4>
              <h4 class=" ">Gen. Secretary</h4>
              <a className="  hover:text-zinc-500" href="tel:+91-829-138-3303">
                <span> Mobile no. </span>
                +91 9372930910
              </a>
              <h4 class=" ">
                <br></br>Smit Malde
              </h4>
              <h4 class=" ">Jt. Gen. Secretary</h4>
              <a className="  hover:text-zinc-500" href="tel:+91-829-138-3303">
                <span> Mobile no. </span>
                +91 8108928819
              </a>
            </div>
            <br />
            <div className=" flex gap-4 justify-center">
              <a
                className=" hover:text-red-500 "
                href="https://www.instagram.com/kjsce_skream/"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="hover:text-red-500"
                href="https://www.facebook.com/KJSCESKREAM/"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                className="hover:text-red-500"
                href="https://twitter.com/kjsceskream?lang=en"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="hover:text-red-500"
                href="https://www.youtube.com/channel/UC7Z32X4uNZ8c31NteK3065g"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
            <br />
          </div>
          <div className="  w-[20vw] flex justify-center ">
            <img className="w-[159px]" src="logoh.png" alt="image" />
          </div>
          <div className="  w-[32vw] md:w-[20vw]">
            <div className="flex gap-28">
              <div className="  text-center">
                <h3 className=" text-[10px] md:text-2xl font-extrabold ">
                  REACH US
                </h3>
                <br></br>
                {/* <div class="dark:bg-white-700 h-1 w-64 rounded border-0 bg-gray-100 md:my-5"></div> */}
                <div className="text-[8px] md:text-sm">
                  <h4 className="  font-bold ">Address</h4>
                  <h4 className=" ">
                    K.J. Somaiya College of <br></br>Engineering Vidyanagar,
                    Vidya Vihar East,<br></br> Vidyavihar, Mumbai, Maharashtra
                    400077.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class=" dark:bg-white-700 m-auto h-1 w-10/12 rounded border-0 bg-black md:my-5"></div> */}
    </div>
  );
}

export default Footer;
