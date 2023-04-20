import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" text-center   bg-gray-100 text-gray-900 py-10 ">
        <div className="mb-3">Made with ❤️</div>
        <hr />
        <div className="mt-3 ">
          <p>Get connected with the Developers :-</p>
          <div className="mt-2 ">
            <a
              href="https://twitter.com/Hameesss_"
              className="home__social-link border-gray-400 rounded-md p-1 mx-1 border-2"
              rel="noreferrer"
              target="_blank"
            >
              Hamees
              <i class="bx ml-1 bxl-twitter"></i>
            </a>
            <a
              href="https://twitter.com/Yashrajstwt"
              className="home__social-link border-gray-400 rounded-md p-1 mx-1 border-2"
              rel="noreferrer"
              target="_blank"
            >
              Yash
              <i class="bx ml-1 bxl-twitter"></i>
            </a>
            <a
              href="https://twitter.com/SajjanStr"
              className="home__social-link border-gray-400 rounded-md p-1 mx-1 border-2"
              rel="noreferrer"
              target="_blank"
            >
              Sajjan
              <i class="bx ml-1 bxl-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
