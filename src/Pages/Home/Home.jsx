import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Fade, Zoom } from "react-awesome-reveal";
import "./Home.css";
import Profile from '../../assets/Valliyappan.jpg';

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "UI Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
      <div className="home" id="home">
        <div className="home-container">
          <div className="row full-screen align-items-center">
            <div className="content-box col-lg-7">
              <div className="type-box">
                <h4>Hello , My Name is</h4>
                <h1>Valliyappan</h1>
                <p className="text">
                  {text}
                  <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor="#00000"
                  />
                </p>
                <p className="desc">
                  Welcome to my portfolio website! I'm a passionate and aspiring
                  <br />
                  software engineer with a strong desire to create innovative
                  <br />
                  solutions and push the boundaries of technology.With a deep
                  <br />
                  love for coding and problem-solving, I am constantly seeking
                  <br />
                  opportunities to learn and grow in this ever-evolving field
                </p>
                <div className="btn-group">
                  <a
                    href="/src/assets/VALLIYAPPAN RAMASAMY(1).pdf"
                    target="_blank"
                  >
                    Download CV
                  </a>
                  &nbsp; &nbsp; &nbsp;
                  <a href="mailto:valliyappanramasamy610@gmail.com" target="_blank">
                    Contact
                  </a>
                </div>
                <div className="social-icons">
                  <a
                    href="https://www.instagram.com/valliyappan_ram/"
                    target="_blank"
                    className="first-icon"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/valliyappan-ram-a6b973120"
                    target="_blank"
                    className="second-icon"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    className="third-icon"
                    href="https://github.com/Valliyappan1995"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="photo">
                <Fade duration={500} direction="up">
                  <Zoom>
                    <Fade direction="500" cascade>
                      <div className="profile-photo">
                        <img
                          src={Profile}
                          alt="profile picture"
                        />
                      </div>
                    </Fade>
                  </Zoom>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
