import React from 'react';
import Layout from '@/components/Layout';

const ComplaintsProcedure = () => {
  return (
    <Layout>
      <div className="policy-container">
        <div className="policy-header">
          <h1 className="policy-title">Complaints Procedure</h1>
          <p className="policy-subtitle">Meem Madaat</p>
          <p className="policy-subtitle">Last Updated: September 2023</p>
        </div>

        <section className="policy-section">
          <h2 className="policy-section-title">1. Introduction</h2>
          <p className="policy-paragraph">
            Meem Madaat is committed to providing high-quality services and maintaining the trust of our beneficiaries, donors, and stakeholders. We recognize that sometimes things can go wrong, and we want to hear about these instances to improve our services.
          </p>
          <p className="policy-paragraph">
            This procedure explains how to raise a complaint and what you can expect from us in response. We aim to handle all complaints fairly, efficiently, and effectively.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">2. What is a Complaint?</h2>
          <p className="policy-paragraph">
            A complaint is an expression of dissatisfaction about:
          </p>
          <ul className="policy-list">
            <li>The standard of service we provide</li>
            <li>The behavior of our staff or volunteers</li>
            <li>Our policies or procedures</li>
            <li>Our use of donations or resources</li>
            <li>Any aspect of our operations</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">3. How to Make a Complaint</h2>
          
          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Informal Resolution</h3>
            <p className="policy-paragraph">
              Often, issues can be resolved quickly by speaking directly with the relevant staff member or volunteer. We encourage this as a first step where appropriate.
            </p>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Formal Complaint</h3>
            <p className="policy-paragraph">
              If informal resolution isn't suitable or hasn't worked, you can make a formal complaint:
            </p>
            <ul className="policy-list">
              <li>By email: complaints@meemmadaat.org</li>
              <li>By post: Complaints Officer, 123 Community Lane, Preston, PR1 2AB</li>
              <li>By phone: [Contact Number]</li>
              <li>Through our website contact form</li>
            </ul>
          </div>

          <div className="policy-info-box">
            <p className="policy-emphasis">Information to Include:</p>
            <ul className="policy-list" style={{ marginBottom: 0 }}>
              <li>Your name and contact details</li>
              <li>Details of what went wrong</li>
              <li>When and where it happened</li>
              <li>Who was involved</li>
              <li>What outcome you're seeking</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">4. Our Response Process</h2>
          
          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Stage 1: Initial Response</h3>
            <ul className="policy-list">
              <li>Acknowledge receipt within 2 working days</li>
              <li>Assign a complaint handler</li>
              <li>Investigate the issues raised</li>
              <li>Aim to respond fully within 10 working days</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Stage 2: Review</h3>
            <p className="policy-paragraph">
              If you're not satisfied with our initial response, you can request a review:
            </p>
            <ul className="policy-list">
              <li>Review by a senior manager or trustee</li>
              <li>Further investigation if needed</li>
              <li>Final response within 20 working days</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Stage 3: External Review</h3>
            <p className="policy-paragraph">
              If you remain dissatisfied, you can contact:
            </p>
            <ul className="policy-list">
              <li>The Charity Commission</li>
              <li>The Fundraising Regulator (for fundraising complaints)</li>
              <li>Your local Trading Standards office</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">5. Our Commitments</h2>
          <p className="policy-paragraph">
            When handling your complaint, we will:
          </p>
          <ul className="policy-list">
            <li>Treat you with respect and courtesy</li>
            <li>Handle your complaint confidentially</li>
            <li>Investigate thoroughly and fairly</li>
            <li>Keep you informed of progress</li>
            <li>Explain our decisions clearly</li>
            <li>Learn from complaints to improve our services</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">6. Timeframes</h2>
          <div className="policy-table">
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Timeframe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Acknowledge complaint</td>
                  <td>2 working days</td>
                </tr>
                <tr>
                  <td>Stage 1 response</td>
                  <td>10 working days</td>
                </tr>
                <tr>
                  <td>Stage 2 review</td>
                  <td>20 working days</td>
                </tr>
                <tr>
                  <td>Time limit for raising complaints</td>
                  <td>3 months from incident</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">7. Unreasonable Complaints</h2>
          <p className="policy-paragraph">
            While we're committed to addressing all complaints fairly, we may need to take special action if a complaint is:
          </p>
          <ul className="policy-list">
            <li>Vexatious or malicious</li>
            <li>Pursues unrealistic outcomes</li>
            <li>Takes up disproportionate resources</li>
            <li>Involves abusive behavior</li>
          </ul>

          <div className="policy-warning-box">
            <p className="policy-emphasis">Note:</p>
            <p>In such cases, we may:</p>
            <ul className="policy-list" style={{ marginBottom: 0 }}>
              <li>Limit contact to specific channels or staff members</li>
              <li>Require communication in writing only</li>
              <li>Decline to respond to repeated complaints about the same issue</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">8. Recording and Monitoring</h2>
          <p className="policy-paragraph">
            We maintain a register of all complaints to:
          </p>
          <ul className="policy-list">
            <li>Track progress and ensure timely responses</li>
            <li>Identify patterns or systemic issues</li>
            <li>Monitor the effectiveness of our procedure</li>
            <li>Report to trustees quarterly</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">9. Policy Review</h2>
          <p className="policy-paragraph">
            This procedure is reviewed annually to ensure it remains effective and up-to-date. The next review is due in September 2024.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default ComplaintsProcedure; 