import { Link } from "react-router-dom";
import PageHead from "../components/PageHead";
import CtaBand from "../components/CtaBand";
import Arc from "../components/Arc";
import Seo from "../components/Seo";
import { community, communityInitiatives, culture } from "../data/site";

export default function Community() {
  return (
    <>
      <Seo
        title="Community | DRKS Alignment LLC"
        description="How DRKS Alignment LLC pairs employee well-being with charitable activity in the communities we serve."
      />
      <PageHead
        crumb={
          <>
            <Link to="/who-we-are">Who We Are</Link> / Community
          </>
        }
        title="The same standard we apply to the work."
        intro={community.description}
      />

      <section className="section">
        <div className="shell split">
          <div>
            <Arc />
            <h2>Well-being that does something</h2>
            <p className="lede">
              Our health challenges are tied to charitable activity, so the
              habit our team builds for itself turns into support for a
              community organization at the same time.
            </p>
            <p style={{ color: "var(--muted)" }}>
              Life inside the company is described in full on{" "}
              <Link to="/join-our-team">Join Our Team</Link>.
            </p>
          </div>
          <div className="panel">
            <span className="label">How we participate</span>
            <ul className="service-list">
              {culture.wellbeing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell">
          <span className="label">Initiatives</span>
          <h2 style={{ maxWidth: "24ch" }}>What we actually run.</h2>
          <div className="grid-3" style={{ marginTop: 44 }}>
            {communityInitiatives.map((initiative) => (
              <div className="cap-card" key={initiative.title}>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
                <p className="pending">{initiative.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Arc />
          <span className="label">Community partners</span>
          <h2 style={{ maxWidth: "26ch" }}>
            Organizations we support, named with their permission.
          </h2>
          {community.organizations.length === 0 ? (
            <p className="pending">
              [VERIFY — community partner organizations pending confirmation]
            </p>
          ) : (
            <ul className="service-list" style={{ maxWidth: "48ch" }}>
              {community.organizations.map((org) => (
                <li key={org}>{org}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <div className="shell">
        <div className="form-status">
          This page is intentionally unpublished in part. Named nonprofit
          partners, donation totals, volunteer hours and event specifics go
          live only once DRKS confirms them and, where the partner is named,
          has their permission.
        </div>
      </div>

      <CtaBand
        title="Work with us on something in your community."
        body="If you run a health or community organization and think our team could help, tell us what you are trying to move forward."
        actions={[
          { label: "Contact Us", to: "/contact", variant: "btn--gold" },
          { label: "Join Our Team", to: "/join-our-team", variant: "btn--ghost" },
        ]}
      />
    </>
  );
}
