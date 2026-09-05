import { Link, useParams } from "react-router-dom";
import PageHead from "../components/PageHead";
import CtaBand from "../components/CtaBand";
import Arc from "../components/Arc";
import Seo from "../components/Seo";
import NotFound from "./NotFound";
import { caseStudies, getCaseStudy } from "../data/impact";
import { getService } from "../data/services";

export function OurImpactIndex() {
  return (
    <>
      <Seo
        title="Our Impact | DRKS Alignment LLC"
        description="Case studies and measurable outcomes from DRKS Alignment LLC."
      />
      <PageHead
        crumb="Our Impact"
        title="Evidence that the information reached people."
        intro="Case studies and measurable outcomes are published only once verified and, where required, cleared by the client."
      />

      <section className="section">
        <div className="shell">
          <span className="label">Featured work</span>
          <h2 style={{ maxWidth: "22ch" }}>Case studies, pending verification.</h2>
          <div className="grid-3" style={{ marginTop: 44 }}>
            {caseStudies.map((item) => (
              <Link
                key={item.slug}
                to={`/our-impact/${item.slug}`}
                className="cap-card"
              >
                <h3>{item.title}</h3>
                <p className="pending">{item.client}</p>
                <span className="cap-card__more">Read case study</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) return <NotFound />;

  const service = getService(caseStudy.serviceSlug);
  const others = caseStudies.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <Seo
        title={`${caseStudy.title} | DRKS Alignment LLC`}
        description="Case study — pending verification and client clearance."
      />
      <PageHead
        crumb={
          <>
            <Link to="/our-impact">Our Impact</Link> / {caseStudy.title}
          </>
        }
        title={caseStudy.title}
        intro={`Client: ${caseStudy.client}`}
      />

      <section className="section">
        <div className="shell split">
          <div>
            <Arc />
            <h2>Challenge</h2>
            <p>{caseStudy.challenge}</p>
            <h2 style={{ marginTop: 36 }}>Our solution</h2>
            <p>{caseStudy.solution}</p>
            <h2 style={{ marginTop: 36 }}>The impact</h2>
            <p>{caseStudy.impact}</p>
          </div>
          <div className="panel">
            <span className="label">Metrics</span>
            <dl>
              {caseStudy.metrics.map((metric) => (
                <div className="data-row" key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd className="pending">{metric.value}</dd>
                </div>
              ))}
              {service && (
                <div className="data-row">
                  <dt>Practice area</dt>
                  <dd>
                    <Link to={`/what-we-do/${service.slug}`}>{service.name}</Link>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="form-status">
          This case study is intentionally unpublished content. Client name,
          challenge, solution, impact and metrics go live only once confirmed
          by DRKS and, where required, cleared by the client.
        </div>
      </div>

      {others.length > 0 && (
        <section className="section section--tint">
          <div className="shell">
            <span className="label">Related work</span>
            <div className="grid-2" style={{ marginTop: 28 }}>
              {others.map((item) => (
                <Link
                  key={item.slug}
                  to={`/our-impact/${item.slug}`}
                  className="cap-card"
                >
                  <h3>{item.title}</h3>
                  <p className="pending">{item.client}</p>
                  <span className="cap-card__more">Read case study</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
