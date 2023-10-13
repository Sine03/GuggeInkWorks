"use client";

import React, { useEffect } from "react";

const ScrollButton = ({ targetId, label }) => {
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    const button = document.getElementById(`scrollButton-${targetId}`);
    if (button) {
      button.addEventListener("click", scrollToSection);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      if (button) {
        button.removeEventListener("click", scrollToSection);
      }
    };
  }, [targetId]);

  return (
    <button
      id={`scrollButton-${targetId}`}
      className="text-white hover:underline"
    >
      {label}
    </button>
  );
};

export default ScrollButton;
