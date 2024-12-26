import { useEffect, useState } from "react";
const signalStyles = "w-10 h-10 rounded-full";

function App() {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    let timer;

    switch (activeLight) {
      case "red":
        timer = setTimeout(() => {
          setActiveLight("green");
        }, 4000);
        break;
      case "yellow":
        timer = setTimeout(() => {
          setActiveLight("red");
        }, 500);
        break;
      case "green":
        timer = setTimeout(() => {
          setActiveLight("yellow");
        }, 3000);
        break;
      default:
        break;
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeLight]);

  return (
    <div className="w-full h-screen bg-gray-600 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 h-72 rounded-lg flex items-center justify-center p-2 bg-black">
          <div className="w-full h-full  flex flex-col justify-between items-center py-4 bg-gray-900 shadow-lg">
            <div
              className={
                activeLight === "red"
                  ? `${signalStyles} bg-red-800`
                  : `${signalStyles} bg-red-200`
              }
            ></div>
            <div
              className={
                activeLight === "yellow"
                  ? `${signalStyles} bg-yellow-600`
                  : `${signalStyles} bg-yellow-100`
              }
            ></div>
            <div
              className={
                activeLight === "green"
                  ? `${signalStyles} bg-green-800`
                  : `${signalStyles} bg-green-200`
              }
            ></div>
          </div>
        </div>
        <div className="w-5 h-56 bg-gray-950 " />
        <div className="w-14 h-2 bg-gray-950" />
      </div>
    </div>
  );
}

export default App;
