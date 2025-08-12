import SkillCard from "../../Animation/SkillCard";
import jsLogo from "../../assets/skills/javascript-logo.svg";
import reactLogo from "../../assets/react.svg";
import tailwindLogo from "../../assets/skills/tailwindcss-logo.svg";
import nodeLogo from "../../assets/skills/node-logo.svg";
import expressLogo from "../../assets/skills/express.svg";
import mongoDBLogo from "../../assets/skills/mongo.svg";
import gitLogo from "../../assets/skills/git.svg";
import firebaseLogo from "../../assets/skills/firebase.svg";
import htmlLogo from "../../assets/skills/html-5.svg";
import cssLogo from "../../assets/skills/css-3.svg";
import figmaLogo from "../../assets/skills/figma.svg";
import wordpressLogo from "../../assets/skills/wordpress.svg";

export function SkillCardSection() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-20  space-y-15">
      <div className="space-y-3">
        <h2 className="text-6xl text-white text-gradient text-center leading-normal">
          Technologies I Use
        </h2>
        <p className="text-center">
          Transforming ideas into functional, user-focused web applications.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-8 gap-8">
          <div>
            <SkillCard logoUrl={htmlLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              HTML
            </p>
          </div>
          <div>
            <SkillCard logoUrl={cssLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              CSS
            </p>
          </div>
          <div>
            <SkillCard logoUrl={jsLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              JavaScript
            </p>
          </div>
          <div>
            <SkillCard logoUrl={reactLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              React
            </p>
          </div>
          <div>
            <SkillCard logoUrl={tailwindLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Tailwind css
            </p>
          </div>
          <div>
            <SkillCard logoUrl={nodeLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Node js
            </p>
          </div>
          <div>
            <SkillCard logoUrl={expressLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Express js
            </p>
          </div>
          <div>
            <SkillCard logoUrl={mongoDBLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              MongoDB
            </p>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-8">
          <div></div>
          <div></div>
          <div>
            <SkillCard logoUrl={gitLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Git
            </p>
          </div>
          <div>
            <SkillCard logoUrl={firebaseLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Firebase
            </p>
          </div>
          <div>
            <SkillCard logoUrl={wordpressLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              WordPress
            </p>
          </div>
          <div>
            <SkillCard logoUrl={figmaLogo} altText="React Logo" />
            <p className="text-lg text-center font-bold mt-2 bg-[linear-gradient(to_bottom,_#fff,_#52527d)] bg-[length:1em_1.5em] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Figma
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
