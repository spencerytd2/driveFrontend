import React from "react";
import {HashLoader} from 'react-spinners'

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white opacity-75 flex flex-col items-center justify-center">
      <HashLoader color="#36d7b7"/>
      <h2 className="text-center text-black text-xl font-semibold mt-2">
        Loading...
      </h2>
    </div>
  );
};

export default Loading;
