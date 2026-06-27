import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import profile1 from "../../assets/new/logo.png";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";
import introVideo from "../../assets/new color.mp4";
const code = `const developer = {
    fristName:"Sofi",
    lastName:"tesfu",
    aka:"Mr Sofi",
    hobby:repeat = () =>{
      //eat();
      //sleep();
      //code();
      //repeat();
      };
    }`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="">
            <HeaderTitle />
          </div>
          <div className="div-imag">
            <img src={profile1} className="profile__photo" alt="" 
            
            />
          </div>
        </div>
        <div className="card grid lower">
          {/* <CodeBlock language={"javascript"} code={code} /> */}
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <video
              className="video"
              src={introVideo}
              width="560" height="315"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* <iframe
              className="iframe"
              width="560" height="315" src="https://www.youtube.com/embed/on5wLLnGocc?si=AoyeMRhZO-vx_0pz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>     */}
                    </div>
          <div>
            <p className="text__muted description">
              I dissect Intricate user experience challenges to engineer
              Integrity-foosed solutions that resenate with billions of users.
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
