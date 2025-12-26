import React, { useRef, useMemo, } from "react";
import "./ProfileCard.css";
import amolProfile from "../assets/amol-profile.png"
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at 50% 50%, #D4FE1A 0%, #a6a6a6 #39EEBE)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg, #000000 0%, #6f6f73 100%)";

const ProfileCardComponent = ({
  avatarUrl = {amolProfile},
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  miniAvatarUrl,
  name = "Amol Sarker",
  title = "Frontend Developer",
  handle = "iamamolsarker",
  contactText = "Contact",
  showUserInfo = true,
}) => {
  const wrapRef = useRef(null);

  const cardStyle = useMemo(() => ({
    "--behind-gradient": showBehindGradient
      ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT)
      : "none",
    "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
  }), [ showBehindGradient, behindGradient, innerGradient]);

  

  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${className}`.trim()}
      style={cardStyle}
    >
      <section className="pc-card h-[60svh] md:h-[70svh] lg:!h-auto">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              loading="lazy"
              onError={(e) => {
                const target = e.target;
                target.style.display = "none";
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || "User"} mini avatar`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target;
                        target.style.opacity = "0.5";
                        target.src = avatarUrl;
                      }}
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status !flex"> <span className="!flex gap-1">
                      <a href="https://www.linkedin.com/in/iamamolsarker/" target="_blank" ><BiLogoLinkedin/></a> 
                      <a href="https://github.com/iamamolsarker" target="_blank" ><BiLogoGithub/> </a>
                      <a href="https://x.com/iamamolsarker/" target="_blank" ><RiTwitterXFill/></a>
                      </span></div>
                  </div>
                </div>
                <a
                  href="https://wa.me/8801683586860"
                  target="_blank"
                  className="pc-contact-btn"
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={`Contact ${name || "user"}`}
                >
                  {contactText}
                </a>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;
