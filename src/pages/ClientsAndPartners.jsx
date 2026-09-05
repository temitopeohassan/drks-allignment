import { Link } from "react-router-dom";
import PageHead from "../components/PageHead";
import CtaBand from "../components/CtaBand";
import Arc from "../components/Arc";
import Seo from "../components/Seo";
import { clients, partners } from "../data/credentials";
import { audiences } from "../data/site";

function Roster({ items, emptyNote, fields }) {
  if (items.length === 0) {
    return <p className="pending">{emptyNote}</p>;
  }

  return (
    <div className="grid-3" style={{ marginTop: 28 }}>
      {items.map((item) => (
        <div className="cap-card" key={item.name}>
          <h3>{item.name}</h3>
          {fields.map((field) => (
            <p key={field} style={{ color: "var(--muted)" }}>
              {item[field]}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ClientsAndPartners() {
  return (
    <>
      <Seo
        title="Clients & Partners | DRKS Alignment LLC"
        description="The organizations DRKS Alignment LLC serves and the partners we team with."
      />
      <PageHead
        crumb={
          <>
            <Link to="/who-we-are">Who We Are</Link> / Clients &amp; Partners
          </>
        }
        title="Who we work for, and who we work with."
        intro="An organization is named here only when the relationship is verified and the organization has consented to be named. Consent is a separate step from verification, and both are required."
      />

      <section className="section">
        <div className="shell">
          <Arc />
          <span className="label">Clients</span>
          <h2 style={{ maxWidth: "24ch" }}>
            Federal, public health and mission-driven organizations.
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: "62ch" }}>
            Where a client cannot be named, the work is described by sector and
            outcome instead — see <Link to="/our-impact">Our Impact</Link>.
          </p>
          <Roster
            items={clients}
            fields={["sector", "relationship"]}
            emptyNote="[VERIFY — client roster pending confirmation and client consent]"
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell">
          <Arc />
          <span className="label">Partners</span>
          <h2 style={{ maxWidth: "26ch" }}>
            Teaming partners, subcontractors and mentor-protégé relationships.
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: "62ch" }}>
            Teaming lets us take on requirements larger than any one firm should
            carry alone. Vehicles those relationships run under are listed on{" "}
            <Link to="/who-we-are/contract-vehicles">Contract Vehicles</Link>.
          </p>
          <Roster
            items={partners}
            fields={["type", "focus"]}
            emptyNote="[VERIFY — partner roster pending confirmation and partner consent]"
          />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <span className="label">Who we serve</span>
          <h2 style={{ maxWidth: "24ch" }}>
            The audiences our work is built around.
          </h2>
          <div className="grid-3" style={{ marginTop: 44 }}>
            {audiences
              .filter((audience) => audience.id !== "job_candidates")
              .map((audience) => (
                <div className="audience" key={audience.id}>
                  <h3>{audience.name}</h3>
                  <ul>
                    {audience.needs.map((need) => (
                      <li key={need}>{need}</li>
                    ))}
                  </ul>
                  <Link to={audience.ctaPath}>{audience.cta}</Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="form-status">
          This page is intentionally unpublished content. Client and partner
          names, logos and relationship descriptions go live only once DRKS
          confirms the relationship and secures written consent to be named.
          Do not populate it from another organization&apos;s client list.
        </div>
      </div>

      <CtaBand
        title="Looking for a partner on a health communications requirement?"
        body="Tell us the scope and the vehicle. We will tell you plainly whether we should prime it, team on it, or point you elsewhere."
        actions={[
          { label: "Contact Us", to: "/contact", variant: "btn--gold" },
          { label: "See Our Impact", to: "/our-impact", variant: "btn--ghost" },
        ]}
      />
    </>
  );
}
