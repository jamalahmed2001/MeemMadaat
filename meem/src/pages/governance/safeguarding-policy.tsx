import React from 'react';
import Layout from '@/components/Layout';

const SafeguardingPolicy = () => {
  return (
    <Layout>
      <div className="policy-container">
        <div className="policy-header">
          <h1 className="policy-title">Safeguarding Policy</h1>
          <p className="policy-subtitle">Meem Madaat</p>
          <p className="policy-subtitle">Last Reviewed: 10 January 2024</p>
        </div>

        <section className="policy-section">
          <h2 className="policy-section-title">Introduction</h2>
          <p className="policy-paragraph">
            Meem Madaat is committed to providing a safe environment for all participants, particularly children (under 18) and vulnerable adults, in line with best practices for charitable organizations and the UK's Children Act 1989.
          </p>
          <p className="policy-paragraph">
            This policy sets out our commitment to safeguarding and the procedures we have in place to ensure the protection of all individuals who come into contact with our charity, whether as beneficiaries, volunteers, or staff members.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">1. Policy Statement</h2>
          <ul className="policy-list">
            <li>The Charity shall ensure that all reasonable measures are taken to prevent harm, abuse, and neglect.</li>
            <li>The welfare of beneficiaries is paramount.</li>
            <li>Everyone involved must adhere to the highest standards of conduct.</li>
          </ul>
          <p className="policy-paragraph">
            We recognise that safeguarding is everyone's responsibility and we are committed to creating a culture where concerns can be raised and addressed promptly and appropriately.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">2. Scope</h2>
          <p className="policy-paragraph">
            This policy applies to:
          </p>
          <ul className="policy-list">
            <li>All trustees, employees, volunteers, consultants, and partners.</li>
            <li>All Charity activities, events, and programs in the UK and Pakistan.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">3. Roles and Responsibilities</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Designated Safeguarding Lead (DSL)</h3>
            <p className="policy-paragraph">
              Overall responsibility for policy implementation, reporting, and liaison with external agencies. The DSL will:
            </p>
            <ul className="policy-list">
              <li>Act as the main point of contact for safeguarding concerns</li>
              <li>Ensure all staff and volunteers receive appropriate training</li>
              <li>Maintain accurate records of all safeguarding incidents</li>
              <li>Liaise with statutory agencies as required</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Safeguarding Team</h3>
            <p className="policy-paragraph">
              Comprises at least three trained staff or trustees who support the DSL. The team will:
            </p>
            <ul className="policy-list">
              <li>Assist in developing and reviewing safeguarding procedures</li>
              <li>Support the DSL in managing safeguarding cases</li>
              <li>Promote safeguarding awareness across the organisation</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">4. Safe Recruitment Procedures</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Application</h3>
            <p className="policy-paragraph">
              Completion of a standard application form, including declaration of any past convictions. All applicants must provide:
            </p>
            <ul className="policy-list">
              <li>Full employment history with explanations for any gaps</li>
              <li>Details of any criminal convictions or cautions</li>
              <li>Confirmation of their right to work in the UK (where applicable)</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">References</h3>
            <p className="policy-paragraph">
              Two positive references, one from a professional referee. References will be:
            </p>
            <ul className="policy-list">
              <li>Taken up before interview where possible</li>
              <li>Verified by direct contact with referees</li>
              <li>Specifically asked about suitability to work with children and vulnerable adults</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Disclosure Checks</h3>
            <p className="policy-paragraph">
              DBS checks for UK-based roles; equivalent local checks for Pakistan. The level of check required will depend on the role:
            </p>
            <ul className="policy-list">
              <li>Enhanced DBS check for roles involving direct contact with children or vulnerable adults</li>
              <li>Standard DBS check for other positions as appropriate</li>
              <li>Overseas criminal record checks for those who have lived abroad</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Interview Process</h3>
            <p className="policy-paragraph">
              Panel interviews including a member of the Safeguarding Team. The interview will:
            </p>
            <ul className="policy-list">
              <li>Include questions about safeguarding awareness and scenarios</li>
              <li>Explore any gaps in employment history</li>
              <li>Verify the identity of the candidate</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">5. Code of Conduct</h2>
          <p className="policy-paragraph">
            All staff, volunteers, and trustees must:
          </p>
          <ul className="policy-list">
            <li>Treat beneficiaries with respect and dignity.</li>
            <li>Avoid being alone with a child or vulnerable adult where possible; if unavoidable, ensure visibility and inform a colleague.</li>
            <li>Maintain professional boundaries; no physical punishment or inappropriate language.</li>
            <li>Report any concerns immediately to the DSL.</li>
          </ul>

          <div className="policy-warning-box">
            <p className="policy-emphasis">Important:</p>
            <p>Any breach of this code of conduct may result in disciplinary action, including immediate suspension pending investigation and potential dismissal.</p>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">6. Reporting and Managing Concerns</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Immediate Action</h3>
            <p className="policy-paragraph">
              Ensure the safety of the individual and contact emergency services if needed. If a child or vulnerable adult is in immediate danger:
            </p>
            <ul className="policy-list">
              <li>Call 999 immediately</li>
              <li>Ensure the person is safe and comfortable</li>
              <li>Do not leave them alone if they are distressed</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Internal Reporting</h3>
            <p className="policy-paragraph">
              Complete a Safeguarding Incident Form within 24 hours. The form should include:
            </p>
            <ul className="policy-list">
              <li>Date, time, and location of the incident</li>
              <li>Names of all persons present</li>
              <li>Detailed description of what happened</li>
              <li>Any action taken</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">External Reporting</h3>
            <p className="policy-paragraph">
              DSL to notify local child protection services or the police as required by law. External reporting will be made to:
            </p>
            <ul className="policy-list">
              <li>Local Authority Designated Officer (LADO) for allegations against staff/volunteers</li>
              <li>Children's Social Care for concerns about children</li>
              <li>Adult Social Care for concerns about vulnerable adults</li>
              <li>Police if a crime may have been committed</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Follow-up</h3>
            <p className="policy-paragraph">
              Support to the individual and review of procedures. This includes:
            </p>
            <ul className="policy-list">
              <li>Ensuring ongoing support for the individual affected</li>
              <li>Reviewing circumstances to identify any improvements needed</li>
              <li>Implementing changes to prevent recurrence</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">7. Training and Review</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Training</h3>
            <p className="policy-paragraph">
              Mandatory induction safeguarding training for all new recruits, refresher courses annually. Training will cover:
            </p>
            <ul className="policy-list">
              <li>Recognition of signs of abuse and neglect</li>
              <li>Understanding of this safeguarding policy and procedures</li>
              <li>Appropriate responses to disclosures</li>
              <li>Record keeping requirements</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Review</h3>
            <p className="policy-paragraph">
              Policy review every 12 months or after any significant incident. The review will:
            </p>
            <ul className="policy-list">
              <li>Assess the effectiveness of current procedures</li>
              <li>Incorporate learning from any incidents</li>
              <li>Ensure compliance with current legislation</li>
              <li>Be approved by the Board of Trustees</li>
            </ul>
          </div>
        </section>

        <div className="policy-info-box">
          <p className="policy-emphasis">Contact Information:</p>
          <p>Designated Safeguarding Lead: [Name]</p>
          <p>Email: safeguarding@meemmadaat.org</p>
          <p>Phone: [Emergency Contact Number]</p>
        </div>
      </div>
    </Layout>
  );
};

export default SafeguardingPolicy; 