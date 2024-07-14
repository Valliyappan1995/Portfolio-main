import { Fade, Zoom } from "react-awesome-reveal";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <Fade duration={500} direction="up">
          <Zoom>
            <Fade direction="500" cascade>
              <div className="about-info">
                <div className="title">
                  <h1>Biography</h1>
                </div>
                <div className="about-text">
                  <p>
                    I am completed Bachelors Degree in Mechanical Engineering. I
                    have built a solid foundation in Web development,
                    particularly <br />
                    in areas such as HTML, CSS,JavaScript,React,NodeJs and SQL ,
                    MongoDB.
                  </p>
                  <p>
                    My expertise in these areas allows me to approach projects
                    with confidence and deliver high-quality results. I have a
                    strong belief
                    <br /> in the value of continuous learning and staying
                    adaptable in the ever-evolving world of Full Stack
                    Developer.
                  </p>
                  <p>
                    I actively seek out opportunities to expand my knowledge and
                    skills, embracing new technologies and approaches. Feel free
                    to
                    <br />
                    explore my work and get in touch if you have any questions
                    or opportunities to collaborate.
                  </p>
                </div>
                <div className="info-list">
                  <div
                    className="row align-items-center"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div className="col-4">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Valliyappan R</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>06th October 1995</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>28 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Trichy</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>9942246792</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>valliyappanramasamy610@gmail.com</span>
                        </li>
                        <li>
                          <label>Availability: </label>
                          <span>Fulltime</span>
                        </li>
                        <li>
                          <label>Experience: </label>
                          <span>Fresher</span>
                        </li>
                      </ul>
                    </div>
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

export default About;
