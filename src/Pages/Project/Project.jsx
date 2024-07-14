import "./Project.css";

const Project = () => {
  return (
    <section className="project" id="project">
      <div className="project-container">
        <div className="project-title">
          <h4>My Projects</h4>
          <p>Discover my projects, where creativity meets innovation</p>
        </div>
        <div className="projects-list">
          <div className="project-item-1">
            <i className="fa-solid fa-brain"></i>
            <h4>EMI Calculator</h4>
            <p>
              An EMI (Equated Monthly Installment) calculator project is a web
              or mobile application designed to help users calculate their
              monthly loan payments.
            </p>
            <div className="btn" style={{ marginTop: "80px" }}>
              <button type="button" className="view-btn">
                View
              </button>
            </div>
          </div>
          <div className="project-item-2">
            <i className="fa-solid fa-landmark"></i>
            <h4>CRM Website</h4>
            <p>
              This project is a CRM Website for adding, updating, deleting
              contacts, leads, tasks, deals and also store customer details to
              manage proper functions
            </p>
            <div className="btn" style={{ marginTop: "10px" }}>
              <a href="https://bestcrm1.netlify.app/" target="_blank">
                <button type="button" className="view-btn">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
