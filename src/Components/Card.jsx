import React from "react";

const Card = ({ apiData }) => {
  console.log(apiData);

  return (
    <>
      <div className="bg-green-200">
        <div
          id="root"
          class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mx-6 pt-10"
        >
          {apiData.map((CurrentEl) => {
            return (
              <>
                <div class=" cards shadow-2xl hover:border-gray-700 bg-blue-300 bg h-full p-8 border-4 border-blue-400 rounded-lg flex  justify-center sm:mx-2 sm:p-3 md:p-8">
                  <div class="flex flex-col items-center  ml-6">
                    <div class="mt-3 text-2xl font-bold">{CurrentEl.title}</div>
                    <div class="text-center mt-2 text-gray-600 text-sm">
                      {CurrentEl.desc}
                    </div>
                    <p class="text-center my-2  text-gray-600 underline text-sm">
                      Stipend:-<span className=" font-extrabold">$</span>
                      <span class="font-bold"> {CurrentEl.stipend}</span>
                    </p>
                    <p className=" font-extrabold">{CurrentEl.roles}</p>
                    <p class="text-center mt-1 text-gray-600 text-sm">
                      Check Out :-
                      <a href={CurrentEl.url} class="underline font-bold">
                        Here
                      </a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
