function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">
          Per Scholas SWE Bootcamp Graduate.
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-time-five about__icon"></i>
        <h3 className="about__title">Availability</h3>
        <span className="about__subtitle">
          Open to full-time, part-time, or freelance
        </span>
      </div>
    </div>
  );
}

export default Info;
