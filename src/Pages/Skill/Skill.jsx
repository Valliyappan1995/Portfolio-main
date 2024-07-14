import "./Skill.css";
import { Fade, Zoom } from "react-awesome-reveal";

const Skill = () => {
  return (
    <section className="skill" id="skill">
      <div className="skill-container">
        <Fade duration={500} direction="up">
          <Zoom>
            <Fade direction="500" cascade>
              <div className="skill-items">
                <div className="skill-title">
                  <h3>Skills</h3>
                </div>
                <div className="skill-list-1">
                  <div className="skill-item">
                    <i className="fa-brands fa-html5"></i>
                    <h4>HTML</h4>
                  </div>
                  <div className="skill-item">
                    <i className="fa-brands fa-css3-alt"></i>
                    <h4>CSS</h4>
                  </div>
                  <div className="skill-item">
                    <i className="fa-brands fa-square-js"></i>
                    <h4>Javascript</h4>
                  </div>
                  <div className="skill-item">
                    <i className="fa-brands fa-bootstrap"></i>
                    <h4>Bootstrap</h4>
                  </div>
                </div>
                <div className="skill-list-2">
                  <div className="skill-item">
                    <i className="fa-brands fa-react"></i>
                    <h4>React</h4>
                  </div>
                  <div className="skill-item">
                    <i className="fa-brands fa-node"></i>
                    <h4>NodeJs</h4>
                  </div>
                  <div className="skill-item">
                    <i className="fa-solid fa-database"></i>
                    <h4>SQL</h4>
                  </div>
                  <div className="skill-item">
                    <i className="fa-solid fa-leaf"></i>
                    <h4>MongoDB</h4>
                  </div>
                </div>
              </div>
            </Fade>
          </Zoom>
        </Fade>
      </div>
    </section>
  );
};

export default Skill;
