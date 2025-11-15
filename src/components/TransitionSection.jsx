import React from "react";
import videoFondo from "../assets/transition/fondo.mp4";

function TransitionBackground({ height = "h-[40vh]" }) {
  return (
    <div className={`relative overflow-hidden ${height}`}>

      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoFondo} type="video/mp4" />
      </video>

      {/* OVERLAY (para oscurecer y hacer visible el texto/nav) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e141b]/60 to-[#0e141b]/95"></div>

    </div>
  );
}

export default TransitionBackground;
