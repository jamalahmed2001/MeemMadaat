import React from 'react';
import Layout from '@/components/Layout';

const FinancialControls = () => {
  return (
    <Layout>
      <div className="policy-container">
        <div className="policy-header">
          <h1 className="policy-title">Financial Controls Policy</h1>
          <p className="policy-subtitle">Meem Madaat</p>
          <p className="policy-subtitle">Last Reviewed: 15 November 2023</p>
        </div>

        <section className="policy-section">
          <h2 className="policy-section-title">1. Purpose and Scope</h2>
          <p className="policy-paragraph">
            This policy establishes the financial controls and procedures for Meem Madaat to ensure proper stewardship of charitable funds, compliance with regulatory requirements, and maintenance of public trust. It applies to all financial transactions and activities undertaken by the charity in the UK and Pakistan.
          </p>
          <p className="policy-paragraph">
            The policy aims to:
          </p>
          <ul className="policy-list">
            <li>Safeguard the charity's assets and ensure they are used solely for charitable purposes</li>
            <li>Ensure compliance with Charity Commission regulations and HMRC requirements</li>
            <li>Maintain accurate financial records and reporting</li>
            <li>Prevent fraud and financial mismanagement</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">2. Financial Responsibilities</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Board of Trustees</h3>
            <p className="policy-paragraph">
              The Board has ultimate responsibility for the charity's finances and must:
            </p>
            <ul className="policy-list">
              <li>Approve annual budgets and monitor performance against them</li>
              <li>Review quarterly management accounts and annual financial statements</li>
              <li>Ensure proper internal controls are in place and operating effectively</li>
              <li>Approve significant financial commitments above £10,000</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Finance Committee</h3>
            <p className="policy-paragraph">
              A sub-committee of at least three trustees responsible for:
            </p>
            <ul className="policy-list">
              <li>Detailed review of financial performance and controls</li>
              <li>Recommending annual budgets to the Board</li>
              <li>Reviewing investment performance and reserves policy</li>
              <li>Overseeing audit/independent examination process</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Treasurer</h3>
            <p className="policy-paragraph">
              The Treasurer provides financial leadership and ensures:
            </p>
            <ul className="policy-list">
              <li>Monthly bank reconciliations are completed and reviewed</li>
              <li>Financial reports are accurate and timely</li>
              <li>Compliance with financial policies and procedures</li>
              <li>Financial risks are identified and managed</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">3. Banking and Cash Management</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Bank Accounts</h3>
            <p className="policy-paragraph">
              All bank accounts must be:
            </p>
            <ul className="policy-list">
              <li>Opened in the charity's name with Board approval</li>
              <li>Operated with dual authorization for all transactions</li>
              <li>Reconciled monthly by someone independent of transaction processing</li>
              <li>Protected by appropriate security measures including online banking controls</li>
            </ul>
          </div>

          <table className="policy-table">
            <thead>
              <tr>
                <th>Transaction Amount</th>
                <th>Authorization Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to £500</td>
                <td>One authorized signatory</td>
              </tr>
              <tr>
                <td>£501 - £5,000</td>
                <td>Two authorized signatories</td>
              </tr>
              <tr>
                <td>£5,001 - £10,000</td>
                <td>Two signatories including Treasurer</td>
              </tr>
              <tr>
                <td>Above £10,000</td>
                <td>Board approval and two signatories</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">4. Income Controls</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Donations and Grants</h3>
            <p className="policy-paragraph">
              All income must be properly recorded and acknowledged:
            </p>
            <ul className="policy-list">
              <li>Issue numbered receipts for all cash donations</li>
              <li>Bank all cash within 3 working days</li>
              <li>Maintain donor database with Gift Aid declarations</li>
              <li>Ensure restricted funds are properly identified and tracked</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Gift Aid</h3>
            <p className="policy-paragraph">
              To maximize tax recovery:
            </p>
            <ul className="policy-list">
              <li>Obtain valid Gift Aid declarations before claiming</li>
              <li>Maintain accurate records for HMRC requirements (minimum 6 years)</li>
              <li>Submit claims quarterly to improve cash flow</li>
              <li>Audit Gift Aid processes annually</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">5. Expenditure Controls</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Procurement Process</h3>
            <p className="policy-paragraph">
              To ensure value for money:
            </p>
            <ul className="policy-list">
              <li>Obtain three quotes for purchases over £1,000</li>
              <li>Use approved supplier list where possible</li>
              <li>Document rationale for supplier selection</li>
              <li>Review contracts annually for ongoing services</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Purchase Orders and Invoices</h3>
            <p className="policy-paragraph">
              All expenditure must be properly authorized:
            </p>
            <ul className="policy-list">
              <li>Raise purchase orders for all commitments over £250</li>
              <li>Match invoices to purchase orders and delivery notes</li>
              <li>Code invoices to correct budget lines and cost centers</li>
              <li>Pay suppliers within agreed terms to maintain relationships</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Expense Reimbursements</h3>
            <p className="policy-paragraph">
              Staff and volunteer expenses:
            </p>
            <ul className="policy-list">
              <li>Submit claims within 30 days with receipts</li>
              <li>Approve by line manager before payment</li>
              <li>No cash advances except in exceptional circumstances</li>
              <li>Comply with HMRC rules on allowable expenses</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">6. International Transfers</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Pakistan Operations</h3>
            <p className="policy-paragraph">
              For funds sent to Pakistan projects:
            </p>
            <ul className="policy-list">
              <li>Use regulated money transfer services with audit trails</li>
              <li>Require detailed project budgets before transfer</li>
              <li>Obtain receipts and photos for all expenditure</li>
              <li>Conduct quarterly video calls to review spending</li>
            </ul>
          </div>

          <div className="policy-warning-box">
            <p className="policy-emphasis">Due Diligence Requirements:</p>
            <ul className="policy-list" style={{ marginBottom: 0 }}>
              <li>Verify identity of all recipients</li>
              <li>Screen against sanctions lists</li>
              <li>Document purpose of each transfer</li>
              <li>Report suspicious activity to authorities</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">7. Financial Reporting</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Management Accounts</h3>
            <p className="policy-paragraph">
              Monthly management accounts must include:
            </p>
            <ul className="policy-list">
              <li>Income and expenditure against budget</li>
              <li>Balance sheet showing assets and liabilities</li>
              <li>Cash flow forecast for next 3 months</li>
              <li>Analysis of restricted and unrestricted funds</li>
            </ul>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Annual Accounts</h3>
            <p className="policy-paragraph">
              Statutory accounts prepared in accordance with:
            </p>
            <ul className="policy-list">
              <li>Charities SORP (FRS 102)</li>
              <li>Charity Commission requirements</li>
              <li>Include trustees' annual report</li>
              <li>File with Charity Commission within 10 months</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">8. Reserves Policy</h2>
          <p className="policy-paragraph">
            The charity maintains reserves to:
          </p>
          <ul className="policy-list">
            <li>Cover 3-6 months of operating costs</li>
            <li>Manage cash flow fluctuations</li>
            <li>Fund emergency response activities</li>
            <li>Meet redundancy obligations if required</li>
          </ul>

          <div className="policy-info-box">
            <p className="policy-emphasis">Current Reserves Target:</p>
            <ul className="policy-list" style={{ marginBottom: 0 }}>
              <li>Unrestricted reserves: £150,000 - £250,000</li>
              <li>Represents 4-6 months of core costs</li>
              <li>Reviewed annually by Finance Committee</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">9. Risk Management</h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">Financial Risks</h3>
            <p className="policy-paragraph">
              Key financial risks and controls:
            </p>
            <ul className="policy-list">
              <li><span className="policy-emphasis">Fraud:</span> Segregation of duties, dual authorization, regular audits</li>
              <li><span className="policy-emphasis">Currency fluctuation:</span> Regular transfers, forward contracts where appropriate</li>
              <li><span className="policy-emphasis">Donor dependency:</span> Diversify income sources, maintain reserves</li>
              <li><span className="policy-emphasis">Compliance failure:</span> Regular training, professional advice, internal reviews</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">10. Policy Review</h2>
          <p className="policy-paragraph">
            This policy will be reviewed annually by the Finance Committee and approved by the Board of Trustees. Any amendments must be documented and communicated to all relevant staff and volunteers.
          </p>
          <p className="policy-paragraph">
            Next review date: November 2024
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default FinancialControls; 