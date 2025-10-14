import React from "react";

function LanguageToggle({ language, toggleLanguage }) {
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm border border-teal-400 px-3 py-1.5 rounded-lg hover:bg-teal-500/20 transition-all duration-300"
    >
      🌐 {language === "es" ? "EN" : "ES"}
    </button>
  );
}

export default LanguageToggle;
