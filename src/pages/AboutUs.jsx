import React from "react";

import GetStarted from "components/home/GetStarted";
import Canvas from "components/home/Canvas";
import { Devider } from "components/home/Devider";

const AboutUs = () => {
  return (<>
    <div
      style={{
        position: 'relative',
        padding: '120px 0 80px 0',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Canvas />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-[#fff] text-center font-medium text-4xl mb-5 pt-10 pb-5 ">
          ABOUT US
        </h1>
      </div>
      <Devider
        invert={true}
        color={'#FFF'}
      />
    </div>
    <div className="w-full mb-[70px]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
        <div className="pt-16 mb-20">
          <div className="flex flex-col items-center">
            <h2 className=" mb-10 text-5xl text-[#181e3e] text-center leading-relaxed font-medium">
              OUR MISSION: DEMOCRATIZE AND SIMPLIFY THE CLOUD
            </h2>
            <p className="font-medium  mt-10 text-base">
              Our mission is to simplify cloud computing, enabling developers
              and businessesto focus more on innovation and less on infrastructure
              management. As a worldwide cloud infrastructure provider,
              we are dedicated to delivering easily accessible, affordable,
              and dependable cloud services to startups, developers,
              and SMBs globally.
            </p>
            <p className="font-medium  mt-7 text-base">
              We also want to further democratize the internet by providing
              the resources necessary so that anyone can create and innovate
              on the web - no matter where or who they are. We staunchly believe
              in nurturing an environment of inclusivity, ensuring everyone has
              the liberty to access and utilize groundbreaking technologies.
              Striving to tear down barriers, we aspire to build a global cloud
              community that fuels fresh ideas, inspires creativity, and accelerates
              our shared digital future.
            </p>
          </div>
        </div>
      </div>
      <GetStarted />
    </div>
  </>
  );
};

export default AboutUs;
