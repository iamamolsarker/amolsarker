import { useRef, useEffect } from "react";

const GlareHover = ({
  background = "transparent",
  borderRadius = "100px",
  borderColor = "transparent",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -40,
  glareSize = 350,
  transitionDuration = 1000,
  delay = 1500, // Time between animations
  className = "",
  style = {},
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;

  // Convert hex color to rgba
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const overlayRef = useRef(null);

  const animate = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%, 0 0";

    requestAnimationFrame(() => {
      el.style.transition = `${transitionDuration}ms ease`;
      el.style.backgroundPosition = "100% 100%, 0 0";
    });
  };

  useEffect(() => {
    animate(); // Run immediately
    const interval = setInterval(animate, delay);
    return () => clearInterval(interval);
  }, [delay, transitionDuration]);

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${rgba} 70%,
        hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%, 0 0",
    pointerEvents: "none",
    zIndex: 2,
  };

  return (
    <div
      className={`relative inline-block overflow-hidden border ${className}`}
      style={{
        background,
        borderRadius,
        borderColor,
        ...style,
      }}
    >
      <div ref={overlayRef} style={overlayStyle} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default GlareHover;
