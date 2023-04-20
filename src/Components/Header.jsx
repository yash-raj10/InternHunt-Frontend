import React from "react";
import Name from "./img/Name.png";
import Logo from "./img/Logo.png";

const Header = () => {
  function liveSearch() {
    let cards = document.querySelectorAll(".cards");
    let search_query = document.getElementById("searchbox").value;
    for (var i = 0; i < cards.length; i++) {
      if (
        cards[i].innerText.toLowerCase().includes(search_query.toLowerCase())
      ) {
        cards[i].classList.remove("is-hidden");
      } else {
        cards[i].classList.add("is-hidden");
      }
    }
  }

  return (
    <>
      <div className=" flex justify-between bg-green-400 ">
        <img className="h-14 mx-4 my-2" src={Name} alt="" />

        <a
          className="font-bold rounded-3xl  bg-black hover:bg-blue-500 text-blue-500 hover:text-black my-3 mr-2 px-3 py-3"
          href="#bar"
        >
          Check now!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-workspace ml-2 inline-block"
            viewBox="0 0 16 16"
          >
            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
          </svg>
        </a>
      </div>
      <div className=" bg-green-200 flex sm:flex-row flex-col justify-between">
        <div className="px-6 py-8">
          <h1 className=" font-extrabold mt-4 text-5xl">InternHunt</h1>
          <p className="my-4 text-3xl">
            Found Internship in any field adipisicing elit.
          </p>
          <p className="mt-3 mr-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            distinctio mollitia officia ratione provident modi, ab neque aliquid
            explicabo nulla, nostrum numquam. Est quae sunt possimus asperiores
            fuga minima ipsa.explicabo nulla, nostrum numquam. Est quae sunt
            possimus asperiores fuga minima ipsa.
          </p>
          <div className="flex flex-row mx-1 sm:mx-2 mt-8">
            <a
              className="mx-6 bg-black hover:bg-blue-500 text-blue-500 hover:text-black px-4 py-2 rounded-full font-bold"
              href="#bar"
            >
              View Section
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clipboard2-data ml-2 inline-block"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z" />
              </svg>
            </a>
            <a
              className="mx-2 bg-black hover:bg-blue-500 text-blue-500 hover:text-black px-4 py-2 rounded-full font-bold"
              href="#search"
            >
              Search roles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-vcard-fill ml-2 inline-block"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
              </svg>
            </a>
          </div>
        </div>
        <img src={Logo} alt="" className="h-80 w-80 mr-8 my-8 sm:ml-0 ml-10" />
      </div>
      <h1
        className="flex justify-center text-3xl pt-16 bg-blue-300  "
        id="search"
      >
        Search for any specific role
      </h1>
      <div className="flex justify-center bg-blue-300 pb-8 ">
        <input
          type="search"
          id="searchbox"
          onInput={() => liveSearch()}
          placeholder="Search a specific role"
          className="w-full max-w-xs sm:max-w-2xl border-gray-600 border border-solid rounded-full px-3 py-1 mt-8 mb-8 mr-4 hover:bg-slate-200 hover:placeholder-black focus:outline-none"
        />
        <span
          class="input-group-text flex items-center whitespace-nowrap rounded text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default Header;
