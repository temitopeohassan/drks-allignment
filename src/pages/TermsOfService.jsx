import PageHead from "../components/PageHead";
import Seo from "../components/Seo";
import { company } from "../data/site";

export default function TermsOfService() {
  return (
    <>
      <Seo
        title="Terms of Service | DRKS Alignment LLC"
        description="Website terms of service for DRKS Alignment LLC."
      />
      <PageHead
        crumb="Terms of Service"
        title="Website terms of service."
        intro="This page is a placeholder. Final terms must be drafted or reviewed by DRKS before publication."
      />
      <section className="section">
        <div className="shell">
          <div className="form-status">
            Legal terms of service content has not yet been provided. Nothing
            on this page should be treated as DRKS&apos;s actual website terms
            until reviewed and confirmed by the team.
          </div>
          <p style={{ marginTop: 24, color: "var(--muted)" }}>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
