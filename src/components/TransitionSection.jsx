import React from "react";
import fondo from "../assets/FondoHome3.avif";

function TransitionBackground({ height = "h-[40vh]" }) {
  return (
    <div
      className={`${height} relative bg-cover bg-center bg-fixed`}
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e141b]/60 to-[#0e141b]/95"></div>
    </div>
  );
}

export default TransitionBackground;
