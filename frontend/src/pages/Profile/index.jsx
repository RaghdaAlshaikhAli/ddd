import "./style.scss";

//components
import About from "./About/index";
import Avatar from "./Avatar/index";
import Experience from "./Experience/index";
import Education from "./Education";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="left">
        <Avatar />
      </div>
      <div className="right">
        <About />
        <div className="information">
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Profile;
