import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white h-[20vh] md:h-[40vh] w-full align-bottom overflow-hidden md:m-auto">
      <div>
        <div className="flex items-center justify-center gap-[6vw] md:gap-[10vw] text-center align-middle m-auto h-[20vh] md:h-[34vh] mt-4">
          {/* Contact Section */}
          <div className="text-center w-[32vw] md:w-[20vw]">
            <h3 className="text-xs md:text-2xl font-extrabold mt-6 md:mt-0">
              CONTACT US
            </h3>
            <br />
            <div className="text-[10px] md:text-sm">
              <h4>Esha Jain</h4>
              <h4>Gen. Secretary</h4>
              <a className="hover:text-zinc-500" href="tel:+918779624785">
                <span>Mobile no. </span>+91 87796 24785
              </a>
              <h4><br />Rishi Shah</h4>
              <h4>Jt. Gen. Secretary</h4>
              <a className="hover:text-zinc-500" href="tel:+919137954546">
                <span>Mobile no. </span>+91 91379 54546
              </a>
            </div>
            <br />

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center w-full">
              <a
                className="hover:text-pink-500 text-lg md:text-xl"
                href="https://www.instagram.com/kjsce_symphony/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="hover:text-blue-500 text-lg md:text-xl"
                href="https://www.facebook.com/KJSCESymphony/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                className="hover:text-blue-500 text-lg md:text-xl"
                href="https://x.com/KjsceSymphony"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                className="hover:text-red-500 text-lg md:text-xl"
                href="https://www.youtube.com/@KJSCELive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
            <br />
          </div>

          {/* Logo Section */}
          <div className="w-[20vw] flex justify-center">
            <img className="w-[159px]" src="logoh.png" alt="logo" />
          </div>

          {/* Reach Us Section */}
          <div className="w-[32vw] md:w-[20vw]">
            <div className="flex gap-28">
              <div className="text-center">
                <h3 className="text-xs md:text-2xl font-extrabold">
                  REACH US
                </h3>
                <br />
                <div className="text-[10px] md:text-sm">
                  <h4 className="font-bold">Address</h4>
                  <h4>
                    K.J. Somaiya College of <br />
                    Engineering Vidyanagar, Vidya Vihar East,<br />
                    Vidyavihar, Mumbai, Maharashtra 400077.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;