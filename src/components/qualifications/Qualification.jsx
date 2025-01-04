import { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleTab(0)}
            className={
              toggle === 0
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            onClick={() => toggleTab(1)}
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle === 0
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Full Stack Software Engineering
                </h3>
                <span className="qualification__subtitle">
                  Per Scholas SWE Bootcamp
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sept 2024 - Jan 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Bachelor of Technology - Computer Systems Technology
                </h3>
                <span className="qualification__subtitle">
                  New York City College of Technology, CUNY
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sept 2019 - Jun 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Associate's Degree - Computer Information Systems
                </h3>
                <span className="qualification__subtitle">
                  Borough of Manhattan Community College, CUNY
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sept 2016 - Jun 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Crew Member & Section Lead
                </h3>
                <span className="qualification__subtitle">Trader Joes</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Apr 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Information Technology Intern
                </h3>
                <span className="qualification__subtitle">
                  NYC Department of Veteran's Services(DVS)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2023 - May 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Store Manager</h3>
                <span className="qualification__subtitle">
                  Emack and Bolios
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sept 2016 Oct 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
