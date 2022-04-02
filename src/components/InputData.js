import React, { useState } from "react";

export default function InputData() {
  const [user, setUser] = useState({
    date: "",
    profit: "",
    capital: "",
    drawdown: "",
  });

  let number, value;
  const handleInputs = (e) => {
    console.log(e);
    number = e.target.id;
    value = e.target.value;
    setUser({ ...user, [number]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { date, profit, capital, drawdown } = user;
    const res = await fetch("/data/patch", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        capital: capital,
        date: date,
        profit: profit,
        drawdown: drawdown,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid");
    } else {
      window.alert("sucess");
    }
  };
  return (
    <div className="flex justify-center  h-screen ">
      <div className=" flex flex-col h-2/3 w-1/2 items-center  text-white">
        Login
        <div className="mt-20">
          <div className="w-full max-w-xs">
            <form
              method="POST"
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date
                </label>
                <input
                  value={user.id}
                  onChange={handleInputs}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Profit
                </label>
                <input
                  value={user.id}
                  onChange={handleInputs}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="profit"
                  type="number"
                  placeholder="Todays Profit"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Capital
                </label>
                <input
                  value={user.id}
                  onChange={handleInputs}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="capital"
                  type="number"
                  placeholder="Capital"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Drawdown
                </label>

                <input
                  value={user.id}
                  onChange={handleInputs}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="drawdown"
                  type="number"
                  placeholder="Loss Difference from the top "
                />
                {/* <p className="text-red-500 text-xs italic">Please choose a profit.</p> */}
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={PostData}
                  className="bg-blue-500 px-5  hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  <span className=" ">Submit Data</span>
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm ml-10 text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Have Suggestions?
                </a>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2020 Cult. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
