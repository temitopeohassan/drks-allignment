import { Link } from "react-router-dom";
import PageHead from "../components/PageHead";
import CtaBand from "../components/CtaBand";
import Arc from "../components/Arc";
import Seo from "../components/Seo";
import {
  certifications,
  governmentData,
  naicsCodes,
  pastPerformance,
  qualifications,
  vehicleGroups,
} from "../data/credentials";

const isPending = (value) => typeof value === "string" && value.startsWith("[");

function Cell({ value }) {
  return <td className={isPending(value) ? "pending" : undefined}>{value}</td>;
}

export default function ContractVehicles() {
  return (
    <>
      <Seo
        title="Contract Vehicles | DRKS Alignment LLC"
        description="Contract vehicles, past performance, NAICS codes and registration details for DRKS Alignment LLC."
      />
      <PageHead
        crumb={
          <>
            <Link to="/who-we-are">Who We Are</Link> / Contract Vehicles
          </>
        }
        title="How to put us on contract."
        intro="Vehicles, past performance and registration details for contracting officers and capture teams. Every value on this page is published only after DRKS verifies it against the award document or the live SAM.gov registration."
      />

      <section className="section">
        <div className="shell">
          <Arc />
          <span className="label">Vehicles</span>
          <h2 style={{ maxWidth: "24ch" }}>
            Where DRKS can be awarded work today.
          </h2>

          {vehicleGroups.map((group) => (
            <div className="vehicle-group" key={group.id}>
              <h3>{group.title}</h3>
              <p style={{ color: "var(--muted)", maxWidth: "62ch" }}>
                {group.blurb}
              </p>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th scope="col">Vehicle</th>
                      <th scope="col">Contract number</th>
                      <th scope="col">Agency</th>
                      <th scope="col">Scope</th>
                      <th scope="col">Period of performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.vehicles.map((vehicle) => (
                      <tr key={vehicle.id}>
                        <th scope="row" className={isPending(vehicle.name) ? "pending" : undefined}>
                          {vehicle.name}
                        </th>
                        <Cell value={vehicle.number} />
                        <Cell value={vehicle.agency} />
                        <Cell value={vehicle.scope} />
                        <Cell value={vehicle.period} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell">
          <Arc />
          <span className="label">Past performance</span>
          <h2 style={{ maxWidth: "26ch" }}>
            The contract-level record behind the case studies.
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: "62ch" }}>
            Narrative case studies live on{" "}
            <Link to="/our-impact">Our Impact</Link>. This table is the
            contract record a buyer checks alongside them.
          </p>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Contract</th>
                  <th scope="col">Agency</th>
                  <th scope="col">Role</th>
                  <th scope="col">Value</th>
                  <th scope="col">Period</th>
                  <th scope="col">Scope</th>
                </tr>
              </thead>
              <tbody>
                {pastPerformance.map((item) => (
                  <tr key={item.id}>
                    <th scope="row" className={isPending(item.contract) ? "pending" : undefined}>
                      {item.contract}
                    </th>
                    <Cell value={item.agency} />
                    <Cell value={item.role} />
                    <Cell value={item.value} />
                    <Cell value={item.period} />
                    <Cell value={item.scope} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid-2">
          <div className="panel">
            <h3>NAICS codes</h3>
            <p style={{ color: "var(--muted)" }}>
              Codes carried on the SAM.gov registration. Confirm the live
              registration before publishing.
            </p>
            <dl>
              {naicsCodes.map((item, index) => (
                <div className="data-row" key={`${item.code}-${index}`}>
                  <dt className={isPending(item.code) ? "pending" : undefined}>
                    {item.code}
                    {item.primary ? " (primary)" : ""}
                  </dt>
                  <dd className={isPending(item.title) ? "pending" : undefined}>
                    {item.title}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="panel">
            <h3>Certifications</h3>
            <p style={{ color: "var(--muted)" }}>
              Set-aside and socio-economic certifications, with the body that
              issued each one and the date it must be re-verified.
            </p>
            <dl>
              {certifications.map((item, index) => (
                <div className="data-row" key={`${item.name}-${index}`}>
                  <dt className={isPending(item.name) ? "pending" : undefined}>
                    {item.name}
                  </dt>
                  <dd className={isPending(item.issuer) ? "pending" : undefined}>
                    {item.issuer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <span className="label">Registration and qualifications</span>
          <h2 style={{ maxWidth: "24ch", marginBottom: 24 }}>
            The identifiers a contracting officer will ask for first.
          </h2>
          <dl>
            <div className="data-row">
              <dt>UEI</dt>
              <dd className="pending">{governmentData.uei}</dd>
            </div>
            <div className="data-row">
              <dt>CAGE code</dt>
              <dd className="pending">{governmentData.cage}</dd>
            </div>
            <div className="data-row">
              <dt>SAM.gov registration</dt>
              <dd className="pending">{governmentData.samRegistration}</dd>
            </div>
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
        </div>
      </section>

      <div className="shell">
        <div className="form-status">
          This page is intentionally unpublished content. Vehicles, contract
          numbers, NAICS codes, certifications, UEI and CAGE go live only once
          DRKS verifies each against its own award documents and SAM.gov
          registration. Nothing here may be sourced from another contractor.
        </div>
      </div>

      <CtaBand
        title="Need our capability statement or a vehicle we're not on yet?"
        body="Tell us the requirement and the vehicle you need it delivered under. We will tell you plainly whether we can take it prime or should team."
        actions={[
          { label: "Discuss a Requirement", to: "/contact", variant: "btn--gold" },
          { label: "Explore What We Do", to: "/what-we-do", variant: "btn--ghost" },
        ]}
      />
    </>
  );
}
