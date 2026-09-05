import { Link } from "react-router-dom";
import PageHead from "../components/PageHead";
import CtaBand from "../components/CtaBand";
import Arc from "../components/Arc";
import Seo from "../components/Seo";
import { brandPrinciples, company } from "../data/site";
import { clients, qualifications, vehicleGroups } from "../data/credentials";
import { primaryLeader } from "../data/leadership";

export default function WhoWeAre() {
  return (
    <>
      <Seo
        title="Who We Are | DRKS Alignment LLC"
        description="DRKS Alignment LLC's mission, philosophy, leadership, clients, contracting vehicles and organizational qualifications."
      />
      <PageHead
        crumb="Who We Are"
        title={company.coreIdea}
        intro={company.positioning}
      />

      <section className="section">
        <div className="shell split">
          <div>
            <Arc />
            <h2>Our mission</h2>
            <p className="lede">{company.mission}</p>
            <h2 style={{ marginTop: 36 }}>Our vision</h2>
            <p>{company.vision}</p>
          </div>
          <div className="panel">
            <span className="label">Brand principles</span>
            <ul className="service-list">
              {brandPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell split">
          <div>
            <Arc />
            <h2>Leadership</h2>
            <p className="lede">
              DRKS is led by an executive who has spent more than 20 years
              turning complex operational, financial and regulatory
              requirements into strategies organizations can actually run.
            </p>
            <Link to="/who-we-are/leadership" className="btn btn--outline">
              Meet our leadership
            </Link>
          </div>
          <div className="leader">
            <div className="leader__photo">
              <img src={primaryLeader.photo} alt={primaryLeader.photoAlt} />
            </div>
            <div>
              <h3>{primaryLeader.name}</h3>
              <p style={{ color: "var(--muted)", marginBottom: 12 }}>
                {primaryLeader.title}
              </p>
              <p style={{ color: "var(--muted)" }}>{primaryLeader.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid-3">
          <Link to="/who-we-are/clients-and-partners" className="cap-card">
            <h3>Clients &amp; Partners</h3>
            <p>
              The organizations we serve and the partners we team with, named
              only with their consent.
            </p>
            {clients.length === 0 && (
              <p className="pending">[VERIFY — client roster pending]</p>
            )}
            <span className="cap-card__more">See clients and partners</span>
          </Link>
          <Link to="/who-we-are/contract-vehicles" className="cap-card">
            <h3>Contract Vehicles</h3>
            <p>
              Vehicles, past performance, NAICS codes and registration details
              for contracting officers.
            </p>
            <p className="pending">
              {vehicleGroups.length} vehicle groups — [VERIFY]
            </p>
            <span className="cap-card__more">See contract vehicles</span>
          </Link>
          <Link to="/who-we-are/community" className="cap-card">
            <h3>Community</h3>
            <p>
              How we pair employee well-being with charitable activity in the
              communities we serve.
            </p>
            <span className="cap-card__more">See our community work</span>
          </Link>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <span className="label">Organizational qualifications</span>
          <h2 style={{ maxWidth: "24ch", marginBottom: 24 }}>
            Certifications and quality designations, verified before they&apos;re
            published.
          </h2>
          <dl>
            <div className="data-row">
              <dt>Small business designation</dt>
              <dd className="pending">{qualifications.designation}</dd>
            </div>
            <div className="data-row">
              <dt>CMMI maturity level</dt>
              <dd className="pending">{qualifications.cmmiLevel}</dd>
            </div>
            {qualifications.iso.map((item) => (
              <div className="data-row" key={item}>
                <dt>ISO certification</dt>
                <dd className="pending">{item}</dd>
              </div>
            ))}
          </dl>
          <p style={{ marginTop: 28 }}>
            <Link to="/who-we-are/contract-vehicles" className="btn btn--gold">
              UEI, CAGE, NAICS and vehicles
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export function Leadership() {
  return (
    <>
      <Seo
        title="Leadership | DRKS Alignment LLC"
        description={`${primaryLeader.name}, ${primaryLeader.title} of DRKS Alignment LLC.`}
      />
      <PageHead
        crumb={
          <>
            <Link to="/who-we-are">Who We Are</Link> / Leadership
          </>
        }
        title="The people accountable for delivery."
        intro="DRKS is led by an executive team that has carried operational, financial and regulatory responsibility inside the kinds of organizations we now serve."
      />

      <section className="section">
        <div className="shell">
          <div className="leader">
            <div className="leader__photo">
              <img src={primaryLeader.photo} alt={primaryLeader.photoAlt} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.9rem", marginBottom: 4 }}>
                {primaryLeader.name}
              </h2>
              <p style={{ color: "var(--gold)", fontWeight: 600, marginBottom: 4 }}>
                {primaryLeader.title}
              </p>
              <p className="leader__strapline">{primaryLeader.strapline}</p>
              {primaryLeader.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} style={{ color: "var(--muted)" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell grid-2">
          <div className="panel">
            <h3>Areas of expertise</h3>
            <ul className="service-list">
              {primaryLeader.expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h3>Current roles</h3>
            <dl>
              {primaryLeader.roles.map((role) => (
                <div className="data-row" key={role.organization}>
                  <dt>{role.organization}</dt>
                  <dd>{role.title}</dd>
                </div>
              ))}
            </dl>
            <h3 style={{ marginTop: 32 }}>Earlier experience</h3>
            <ul className="service-list">
              {primaryLeader.priorExperience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <span className="label">Education</span>
          <h2 style={{ maxWidth: "24ch", marginBottom: 24 }}>
            Qualifications behind the practice.
          </h2>
          <dl>
            {primaryLeader.education.map((item) => (
              <div className="data-row" key={item.credential}>
                <dt>{item.institution}</dt>
                <dd>{item.credential}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand
        title="Talk to us about the requirement in front of you."
        body="Tell us what you are trying to move forward. We will tell you plainly whether we are the right partner for it."
        actions={[
          { label: "Contact Us", to: "/contact", variant: "btn--gold" },
          { label: "Explore What We Do", to: "/what-we-do", variant: "btn--ghost" },
        ]}
      />
    </>
  );
}
