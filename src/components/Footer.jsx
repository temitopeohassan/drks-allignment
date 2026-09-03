import { Link } from "react-router-dom";
import logo from "../assets/drks-logo.jpeg";
import { additionalLinks, company, quickLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>About us</h4>
            <Link to="/" className="footer-logo" aria-label="DRKS Alignment LLC — home">
              <img
                src={logo}
                alt="DRKS Alignment LLC — Strategy. Alignment. Results."
                width="785"
                height="910"
              />
            </Link>
            <p>
              DRKS Alignment LLC exists to help organizations close the gap
              between strategy and execution. We bring structure to complexity,
              clarity to priorities and alignment to the people and processes
              responsible for delivering results.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Additional links</h4>
            <ul>
              {additionalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <dl className="footer-contact">
              <dt>Headquarters</dt>
              <dd>{company.headquarters}</dd>
              <dt>Service area</dt>
              <dd>{company.serviceArea}</dd>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${company.phone}`}>{company.phone}</a>
              </dd>
            </dl>
            <p style={{ marginTop: 22 }}>
              <Link to="/contact" className="btn btn--gold">
                Start a conversation
              </Link>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {company.legalName}. {company.tagline}
          </span>
          <span>
            <Link to="/government">Government buyers</Link>
            {"  ·  "}
            <Link to="/partners">Partners</Link>
            {"  ·  "}
            <Link to="/careers">Careers</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
