import React, { useEffect } from "react";
import Card from "./Card";
import Api from "./API";

const Mid = () => {
  const [apiData, setApiData] = React.useState(Api);


//   useEffect(() => {
//     getApiList("research");
//   }, []);

  const getApiList = (category) => {
    fetch(`http://localhost:8000/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const updatedList = data.slice(0, 800);
        setApiData(updatedList);
      });
  };

  return (
    <>
      <nav className="bg-blue-300" id="bar">
        <div className=" flex flex-row justify-center pt-14 bg-green-200">
          <button
            className=" mx-1 px-4 py-1 rounded-l-full border-black border-2 border-solid hover:bg-slate-200 bg-white font-bold"
            onClick={() => getApiList("startups")}
          >
            Startup
          </button>
          <button
            className="mx-1 px-3 py-1 border-black border-2 border-solid hover:bg-slate-200 bg-white font-bold"
            onClick={() => getApiList("faang")}
          >
            Maang
          </button>
          <button
            className="mx-1 px-3 py-1  border-black border-2 border-solid font-bold hover:bg-slate-200 bg-white"
            onClick={() => getApiList("research")}
          >
            Research
          </button>
          <button
            className="mx-1 px-3 py-1 rounded-r-full border-black border-2 border-solid hover:bg-slate-200 font-bold bg-white"
            onClick={() => getApiList(" ")}
          >
            All
          </button>
        </div>
      </nav>
      <Card apiData={apiData} />
    </>
  );
};

export default Mid;
