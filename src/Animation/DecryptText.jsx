import React, { useEffect, useState } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const DecryptText = ({ text = "", speed = 20, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      const currentLength = Math.min(text.length, Math.floor(iteration));

      setDisplayedText(
        text
          .split("")
          .map((char, index) => {
            if (index < currentLength) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iteration += 0.35;

      if (iteration >= text.length) {
        setDisplayedText(text); // Ensure exact text at end
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default DecryptText;
