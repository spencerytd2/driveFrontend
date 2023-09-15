import React from "react";

function ReadyGetStarted() {
  return (
    <div className="readyToGet">
      <div
        style={{
          height: "max-content",
          width: "100%",
          position: "relative",
          marginBottom: "-125px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div className="pl-4 w-full flex flex-row flex-wrap md:flex-nowrap gap-[10px]">
          <div
            className="w-1/2"
            style={{
              // transform: 'skewY(6deg)',
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              height: "fit-content",
              // width: 'max-content',
              width: "60%",
              margin: "auto",
              // paddingBottom: '70px'
              // border: '2px solid red',
            }}
          >
            <div>
              <h4 className="text-black font-bold text-lg">
                Ready to get started?
              </h4>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "32px",
                }}
              >
                <div
                  style={{
                    // width: '350px',
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }}
                >
                  <h4 className="text-lg text-[#425466]">
                    Join EarnByWatching today and earn money online by watching
                    videos and Refer Friend to get much more money. It's easy,
                    fun, and rewarding!
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-1/2"
            style={{
              // transform: 'skewY(6deg)',
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              height: "fit-content",
              // width: 'max-content',
              width: "60%",
              margin: "auto",
              // paddingBottom: '70px'
              // border: '2px solid red',
            }}
          >
            <div className="flex mobile">
              <div
                className="mr-8"
                style={{
                  width: "250px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div className="pl-4">
                  <img
                    className="h-10 w-10 mb-2"
                    src={require("../../icons/price-tag.png")}
                    alt="img"
                  />
                </div>
                <h4 className="font-semibold text-base text-black pl-4 border-l-4 border-violet-500	 ">
                  Competitive payouts
                </h4>
                <p className="text-sm text-[#425466] pl-4">
                  We offer some of the highest payouts in the industry so that
                  you can earn more money for your time.
                </p>
              </div>

              <div
                style={{
                  width: "250px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div className="pl-4">
                  <img
                    className="h-10 w-10 mb-2"
                    src={require("../../icons/browser.png")}
                    alt="img"
                  />
                </div>
                <h4 className="font-semibold text-base text-black pl-4 border-l-4 border-violet-500	 ">
                  Safe and secure
                </h4>
                <p className="text-sm text-[#425466] pl-4">
                  Your privacy and security are our top priorities. We use
                  advanced encryption and security measures to ensure your
                  information is always safe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyGetStarted;
