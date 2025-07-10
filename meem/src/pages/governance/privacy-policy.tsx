import React from 'react';
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="policy-container">
        <div className="policy-header">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-subtitle">Meem Madaat</p>
          <p className="policy-subtitle">Last Updated: October 2023</p>
        </div>

        <section className="policy-section">
          <h2 className="policy-section-title">1. Introduction</h2>
          <p className="policy-paragraph">
            Meem Madaat is committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and protect your personal data in accordance with the General Data Protection Regulation (GDPR) and the Data Protection Act 2018.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">2. Information We Collect</h2>
          
          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Personal Information</h3>
            <p className="policy-paragraph">We may collect the following types of personal information:</p>
            <ul className="policy-list">
              <li>Name and contact details</li>
              <li>Date of birth</li>
              <li>Bank account details (for donations)</li>
              <li>Gift Aid declarations</li>
              <li>Employment history (for job applicants)</li>
              <li>References and background checks (for volunteers)</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Technical Information</h3>
            <p className="policy-paragraph">When you visit our website, we may collect:</p>
            <ul className="policy-list">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">3. How We Use Your Information</h2>
          <p className="policy-paragraph">We use your information for the following purposes:</p>
          
          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Legitimate Interests</h3>
            <ul className="policy-list">
              <li>Processing donations and Gift Aid claims</li>
              <li>Sending updates about our work</li>
              <li>Managing volunteer applications</li>
              <li>Maintaining our accounts and records</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Consent-Based Processing</h3>
            <ul className="policy-list">
              <li>Sending marketing communications</li>
              <li>Using photographs in promotional materials</li>
              <li>Sharing success stories</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">4. Data Sharing and Security</h2>
          
          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Third Parties</h3>
            <p className="policy-paragraph">We may share your information with:</p>
            <ul className="policy-list">
              <li>HMRC (for Gift Aid claims)</li>
              <li>Payment processors</li>
              <li>Regulatory authorities</li>
              <li>Partner organizations (with consent)</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Security Measures</h3>
            <p className="policy-paragraph">We protect your data through:</p>
            <ul className="policy-list">
              <li>Encryption of digital records</li>
              <li>Secure physical storage</li>
              <li>Staff training on data protection</li>
              <li>Regular security audits</li>
            </ul>
          </div>

          <div className="policy-warning-box">
            <p className="policy-emphasis">Important:</p>
            <p>While we implement strong security measures, no data transmission over the internet is 100% secure. We cannot guarantee the security of data sent to us electronically.</p>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">5. Your Rights</h2>
          <p className="policy-paragraph">Under GDPR, you have the right to:</p>
          <ul className="policy-list">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request erasure of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">6. Retention Period</h2>
          <p className="policy-paragraph">
            We keep your personal information only for as long as necessary:
          </p>
          <ul className="policy-list">
            <li>Financial records: 7 years</li>
            <li>Gift Aid declarations: 6 years after last donation</li>
            <li>Volunteer records: 3 years after leaving</li>
            <li>Marketing preferences: Until you opt-out</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">7. Cookies</h2>
          <p className="policy-paragraph">
            Our website uses cookies to improve your experience. You can control cookies through your browser settings.
          </p>
          <div className="policy-info-box">
            <p className="policy-emphasis">Types of Cookies We Use:</p>
            <ul className="policy-list" style={{ marginBottom: 0 }}>
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand usage</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">8. Contact Information</h2>
          <p className="policy-paragraph">
            For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer:
          </p>
          <div className="policy-info-box">
            <p>Email: privacy@meemmadaat.org</p>
            <p>Phone: [Contact Number]</p>
            <p>Address: 123 Community Lane, Preston, PR1 2AB</p>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">9. Updates to This Policy</h2>
          <p className="policy-paragraph">
            We review this policy annually and may update it to reflect changes in our practices or legal requirements. Significant changes will be communicated directly to stakeholders.
          </p>
          <p className="policy-paragraph">
            Next review date: October 2024
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 