import React, { useRef, useMemo } from "react";
import "./SkillCard.css";
import logo from "../assets/logo.svg";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at 50% 50%, #D4FE1A 0%, #a6a6a6 #39EEBE)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg, #000000 0%, #6f6f73 100%)";

const SkillCard = ({
  logoUrl = logo,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  altText = "Skill logo",
}) => {
  const wrapRef = useRef(null);

  const cardStyle = useMemo(
    () => ({
      "--behind-gradient": showBehindGradient
        ? behindGradient ?? DEFAULT_BEHIND_GRADIENT
        : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
      width: "100%",
      height: "auto",
      aspectRatio: "1 / 1", // make square by forcing aspect ratio
    }),
    [showBehindGradient, behindGradient, innerGradient]
  );

  return (
    <div
      ref={wrapRef}
      className={`acs-card-wrapper ${className}`.trim()}
      style={cardStyle}
    >
      <section className="acs-card">
        <div className="acs-inside">
          <div className="acs-shine" />
          <div className="acs-glare" />
          <div className="acs-content acs-avatar-content" style={{ pointerEvents: "none" }}>
            <img
              className="avatar"
              src={logoUrl}
              alt={altText}
              loading="lazy"
              onError={(e) => {
                const target = e.target;
                target.style.display = "none";
              }}
            />
          </div>
          {/* Removed all text and user info */}
        </div>
      </section>
    </div>
  );
};

export default React.memo(SkillCard);
