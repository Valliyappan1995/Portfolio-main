import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="row">
          <div className="education-content">
            <h2 className="title">Education</h2>

            <div className="time-line">
              <div className="time-line-item">
                <div className="circle-dot"></div>
                <h3 className="item-title">B.E Mechanical Engineering - 79%</h3>
                <h4 className="item-title">Loyola Institute Of Technology</h4>
                <h4 className="item-title">
                  <i className="fa-solid fa-calendar"></i>&nbsp; 2013 - 2017
                </h4>
              </div>
              <div className="time-line-item">
                <div className="circle-dot"></div>
                <h3 className="item-title">HSC - 86%</h3>
                <h4 className="item-title">
                  SRV Matriculation Higher Secondary School
                </h4>
                <h4 className="item-title">
                  <i className="fa-solid fa-calendar"></i>&nbsp; 2011 - 2012
                </h4>
              </div>
              <div className="time-line-item">
                <div className="circle-dot"></div>
                <h3 className="item-title">SSLC - 84%</h3>
                <h4 className="item-title">
                  SRV Matriculation Higher Secondary School
                </h4>
                <h4 className="item-title">
                  <i className="fa-solid fa-calendar"></i>&nbsp; 2009 - 2010
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="time-line-item">
          <div className="circle-dot"></div>
          <h3 className="item-title">Full Stack Development</h3>
          <h4 className="item-title">Guvi</h4>
          <h4 className="item-title">
            <i className="fa-solid fa-calendar"></i>&nbsp; SEP - 2023 to JAN -
            2024
          </h4>
          <div className="education-btn">
            <a
              href="https://drive.google.com/file/d/19ELVA8tbkb_d_2vdvwb6oGcOTcQ-9X5s/view?usp=drive_link"
              target="_blank"
            >
              <button type="submit" className="submit-btn">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
