import React from "react";
import SingleSkills from "./SingleSkills";

const Description = () => {
  return (
    <div className="description">
      <div className="title">Description</div>
      <div className="desc">
        <p>
          We're a team of professional Logo Designers with years of experience.
          We're available exclusively on Fiverr to rock your world with our
          skills. Feel free to contact us anytime 24/7 to discuss your project.
          Thank you!
        </p>
      </div>
      <div className="title">Languages</div>
      <div className="desc">
        <div className="lang">
          English <span>-Fluent</span>
        </div>
        <div className="lang">
          English <span>-Fluent</span>
        </div>
        <div className="lang">
          English <span>-Fluent</span>
        </div>
        <div className="lang">
          English <span>-Fluent</span>
        </div>
      </div>
      <div className="title">Accounts</div>
      <div className="desc">
        <div className="lang">
          <a href="/">Linked in </a>
        </div>
        <div className="lang">
          <a href="/">Google </a>
        </div>
      </div>
      <div className="title">Skills</div>
      <div className="skills">
        <SingleSkills />
      </div>
    </div>
  );
};

export default Description;
