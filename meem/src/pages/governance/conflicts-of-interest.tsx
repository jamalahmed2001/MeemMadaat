import React from 'react';
import Layout from '@/components/Layout';

const ConflictsOfInterest = () => {
  return (
    <Layout>
      <div className="policy-container">
        <div className="policy-header">
          <h1 className="policy-title">Conflicts of Interest Policy</h1>
          <p className="policy-subtitle">Meem Madaat</p>
          <p className="policy-subtitle">Last Reviewed: 5 December 2023</p>
        </div>

        <section className="policy-section">
          <h2 className="policy-section-title">1. Purpose</h2>
          <p className="policy-paragraph">
            To ensure that all decisions are made in the best interests of Meem Madaat by identifying, declaring, and managing any conflicts between personal interests and Charity duties.
          </p>
          <p className="policy-paragraph">
            This policy is designed to protect both the organisation and the individuals involved from any appearance of impropriety. It ensures transparency in our decision-making processes and maintains public trust in our charity.
          </p>
          <p className="policy-paragraph">
            The policy applies to all trustees, senior staff, committee members, and any other individuals who have the ability to influence decisions made by or on behalf of Meem Madaat.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">2. Definitions</h2>
          <p className="policy-paragraph">
            A <span className="policy-emphasis">Conflict of Interest</span> arises when personal, professional, or financial interests could, or could be perceived to, influence an individual's decision-making.
          </p>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Types of Conflicts</h3>
            <ul className="policy-list">
              <li>
                <span className="policy-emphasis">Direct financial gain:</span> Where an individual or their close associates could benefit financially from a decision
              </li>
              <li>
                <span className="policy-emphasis">Indirect financial gain:</span> Where an individual's employer or associated organisation could benefit
              </li>
              <li>
                <span className="policy-emphasis">Non-financial gain:</span> Where an individual could gain non-monetary benefits such as status or influence
              </li>
              <li>
                <span className="policy-emphasis">Conflicting loyalties:</span> Where loyalty to another organisation or cause conflicts with duties to Meem Madaat
              </li>
            </ul>
          </div>

          <div className="policy-example-box">
            <p className="policy-emphasis">Examples of Conflicts:</p>
            <ul className="policy-list" style={{ marginBottom: 0 }}>
              <li>A trustee's family member applying for a paid position with the charity</li>
              <li>A committee member owning shares in a company bidding for a charity contract</li>
              <li>A trustee also serving on the board of a partner organisation</li>
              <li>Personal relationships with beneficiaries that might affect impartial decision-making</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">3. Duties to Declare</h2>
          <p className="policy-paragraph">
            All trustees, senior staff, and committee members must complete a Register of Interests upon appointment and update it within 14 days of any change.
          </p>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Interests to be Declared</h3>
            <p className="policy-paragraph">The following interests must be declared:</p>

            <ul className="policy-list">
              <li>
                <span className="policy-emphasis">Financial interests:</span> Including shareholdings, partnerships, employment, consultancies, or any other financial interest in organisations that might do business with Meem Madaat
              </li>
              <li>
                <span className="policy-emphasis">Family or close personal relationships:</span> With staff, beneficiaries, suppliers, or partner organisations
              </li>
              <li>
                <span className="policy-emphasis">External positions:</span> Including trusteeships, directorships, employment, or significant volunteer roles with other organisations
              </li>
              <li>
                <span className="policy-emphasis">Gifts and hospitality:</span> Any gifts or hospitality received in connection with role at Meem Madaat valued over £25
              </li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">4. Management Procedures</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Declaration at Meetings</h3>
            <p className="policy-paragraph">
              Any relevant interest must be declared at the start of each board or committee meeting. The process is:
            </p>
            <ul className="policy-list">
              <li>The Chair asks for declarations of interest as the first agenda item</li>
              <li>Individuals declare any interests related to agenda items</li>
              <li>The meeting decides how to manage each declared interest</li>
              <li>Declarations and decisions are recorded in the minutes</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Recording</h3>
            <p className="policy-paragraph">
              The declaration and decisions on participation must be recorded in the minutes. This includes:
            </p>
            <ul className="policy-list">
              <li>The nature and extent of the interest</li>
              <li>Whether the individual withdrew from the discussion</li>
              <li>Whether the individual abstained from voting</li>
              <li>Any other action taken to manage the conflict</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Exclusion</h3>
            <p className="policy-paragraph">
              Individuals with a conflict must not vote or participate in discussions related to the matter. The standard approach is:
            </p>
            <ul className="policy-list">
              <li>The individual may be asked to provide information to inform the discussion</li>
              <li>They must then withdraw from the meeting during discussion and decision-making</li>
              <li>They must not attempt to influence the decision in any way</li>
              <li>They are not counted in the quorum for that item</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Independent Oversight</h3>
            <p className="policy-paragraph">
              The Governance Committee reviews all declarations quarterly. This review includes:
            </p>
            <ul className="policy-list">
              <li>Checking all required declarations have been made</li>
              <li>Reviewing how conflicts have been managed</li>
              <li>Identifying any patterns or systemic issues</li>
              <li>Recommending improvements to the policy or procedures</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">5. Breaches</h2>
          <p className="policy-paragraph">
            Failure to declare a conflict constitutes misconduct and may lead to removal from office or further disciplinary action.
          </p>

          <div className="policy-warning-box">
            <p className="policy-emphasis">Consequences of Breach:</p>
            <ul className="policy-list" style={{ marginBottom: 0 }}>
              <li>First breach: Formal warning and mandatory training</li>
              <li>Repeated breach: Removal from position</li>
              <li>Serious breach involving financial gain: Potential legal action</li>
              <li>All breaches documented and reviewed by the Board</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">6. Policy Review</h2>
          <p className="policy-paragraph">
            Reviewed biennially by the Board. The review will consider:
          </p>
          <ul className="policy-list">
            <li>Effectiveness of current procedures</li>
            <li>Any breaches or near-misses in the period</li>
            <li>Changes in legislation or best practice</li>
            <li>Feedback from trustees and staff</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">Appendix: Register of Interests Form</h2>

          <table className="policy-table">
            <thead>
              <tr>
                <th>Category of Interest</th>
                <th>Details to Declare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employment & Remuneration</td>
                <td>Current employer, role, any other paid positions</td>
              </tr>
              <tr>
                <td>Directorships</td>
                <td>Company directorships (paid or unpaid)</td>
              </tr>
              <tr>
                <td>Shareholdings</td>
                <td>Shareholdings over £5,000 or 1% of company</td>
              </tr>
              <tr>
                <td>Property</td>
                <td>Land or property that might create a conflict</td>
              </tr>
              <tr>
                <td>Other Charities</td>
                <td>Trusteeships or senior positions in other charities</td>
              </tr>
              <tr>
                <td>Related Party Interests</td>
                <td>Interests of spouse, partner, or close family members</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #E5E7EB' }}>
            <p className="policy-paragraph">
              I declare that the information provided above is complete and correct. I undertake to update this declaration within 14 days of any change to the interests listed above.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <p>Name: _________________________________</p>
              <p style={{ marginTop: '1rem' }}>Position: _________________________________</p>
              <p style={{ marginTop: '1rem' }}>Signature: _________________________________</p>
              <p style={{ marginTop: '1rem' }}>Date: _________________________________</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ConflictsOfInterest; 