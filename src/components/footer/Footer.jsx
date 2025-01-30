import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">@Khadka</h1>
        <div className="wrapper">
          <div className="footer__button">
            <a
              className="footer__social-link"
              href="https://github.com/RajeenKhadka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className="fa fa-github"></i>
                <span> GitHub</span>
              </div>
            </a>
          </div>
          <div className="footer__button">
            <a
              className="footer__social-link"
              href="https://www.linkedin.com/in/rajeen315/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className="fa fa-linkedin"></i>
                <span> LinkedIn</span>
              </div>
            </a>
          </div>
          <div className="footer__button">
            <a
              className="footer__social-link"
              href="https://www.facebook.com/rajeen.khadka.31"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className="fa fa-facebook"></i>
                <span> Facebook</span>
              </div>
            </a>
          </div>
          <div className="footer__button">
            <a
              className="footer__social-link"
              href="https://www.instagram.com/rajeenkhadka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className="fa fa-instagram"></i>
                <span> Instagram</span>
              </div>
            </a>
          </div>
        </div>

        <span className="footer__copy">&#169;Khadka. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
