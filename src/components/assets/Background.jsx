import React, { memo, useEffect } from "react";

const Background = () => {
  // Add CSS to head once component mounts
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .blob1 {
        animation: blob1Move 25s ease-in-out infinite alternate;
      }
      
      .blob2 {
        animation: blob2Move 30s ease-in-out infinite alternate;
      }
      
      .blob3 {
        animation: blob3Move 35s ease-in-out infinite alternate;
      }
      
      @keyframes blob1Move {
        0% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(20vw, 10vh) scale(1.2); }
        50% { transform: translate(5vw, 30vh) scale(0.8); }
        75% { transform: translate(-15vw, 5vh) scale(1.1); }
        100% { transform: translate(10vw, -10vh) scale(0.9); }
      }
      
      @keyframes blob2Move {
        0% { transform: translate(0, 0) scale(1); }
        20% { transform: translate(-25vw, -15vh) scale(1.1); }
        40% { transform: translate(-10vw, 20vh) scale(0.9); }
        60% { transform: translate(15vw, -5vh) scale(1.2); }
        80% { transform: translate(5vw, -25vh) scale(0.8); }
        100% { transform: translate(-20vw, 15vh) scale(1); }
      }
      
      @keyframes blob3Move {
        0% { transform: translate(0, 0) scale(1); }
        20% { transform: translate(15vw, -20vh) scale(0.9); }
        40% { transform: translate(-15vw, -10vh) scale(1.1); }
        60% { transform: translate(-5vw, 15vh) scale(0.8); }
        80% { transform: translate(20vw, 10vh) scale(1.2); }
        100% { transform: translate(-10vw, -25vh) scale(1); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      {/* Basic Background with Pure CSS, no Tailwind classes */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -10,
          backgroundColor: "#000000",
          overflow: "hidden",
        }}>
        {/* Red gradient blob 1 - with animation */}
        <div
          className="blob1 absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full opacity-50"
          style={{
            backgroundColor: "#77001A",
            filter: "blur(80px)",
          }}
        />

        {/* Red gradient blob 2 - with animation */}
        <div
          className="blob2"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "20%",
            width: "500px",
            height: "500px",
            backgroundColor: "#550012",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.6,
          }}
        />

        {/* Red gradient blob 3 - with animation */}
        <div
          className="blob3"
          style={{
            position: "absolute",
            top: "60%",
            left: "30%",
            width: "350px",
            height: "350px",
            backgroundColor: "#77001A",
            borderRadius: "50%",
            filter: "blur(90px)",
            opacity: 0.4,
          }}
        />

        {/* Noise texture overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.5,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundPosition: "0 0",
            backgroundSize: "200px 200px",
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  );
};

export default memo(Background);
