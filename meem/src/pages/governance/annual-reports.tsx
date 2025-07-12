import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const annualReports = [
  {
    year: "2023",
    income: "£850,000",
    expenditure: "£780,000",
    beneficiaries: "15,000",
    keyAchievements: [
      "Opened 3 new medical clinics in rural Pakistan",
      "Provided emergency relief to 2,500 flood-affected families",
      "Launched adult literacy program reaching 800 participants",
      "Distributed 12,000 food parcels to vulnerable families"
    ],
    programBreakdown: {
      medical: "45%",
      education: "25%",
      emergencyRelief: "20%",
      foodSecurity: "10%"
    }
  },
  {
    year: "2022",
    income: "£650,000",
    expenditure: "£590,000",
    beneficiaries: "12,000",
    keyAchievements: [
      "Established 2 new primary schools serving 400 children",
      "Provided medical care to 8,500 patients",
      "Distributed winter aid to 1,200 families",
      "Trained 50 community health workers"
    ],
    programBreakdown: {
      medical: "40%",
      education: "30%",
      emergencyRelief: "15%",
      foodSecurity: "15%"
    }
  },
  {
    year: "2021",
    income: "£450,000",
    expenditure: "£410,000",
    beneficiaries: "8,500",
    keyAchievements: [
      "Launched mobile medical unit serving remote villages",
      "Provided scholarships to 150 underprivileged students",
      "Delivered COVID-19 relief to 1,800 families",
      "Completed water well project benefiting 500 families"
    ],
    programBreakdown: {
      medical: "35%",
      education: "25%",
      emergencyRelief: "25%",
      foodSecurity: "15%"
    }
  }
];

const financialHighlights = [
  {
    metric: "Administrative Costs",
    value: "5%",
    description: "Of total expenditure, keeping overhead minimal"
  },
  {
    metric: "Direct Program Costs",
    value: "95%",
    description: "Of donations go directly to charitable activities"
  },
  {
    metric: "Independent Examination",
    value: "100%",
    description: "All accounts independently examined and verified"
  },
  {
    metric: "Transparency Rating",
    value: "A+",
    description: "Highest rating for financial transparency"
  }
];

export default function AnnualReports() {
  return (
    <Layout>
      <Head>
        <title>Annual Reports - Meem Madaat | Financial Transparency</title>
        <meta
          name="description"
          content="Access Meem Madaat's annual reports and financial statements. We're committed to complete transparency in our charitable work."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Annual Reports</h1>
          <p className="text-xl mx-auto">
            Complete transparency in our charitable work and financial stewardship
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-light-gray">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gofundme-green">Home</Link>
            <span>/</span>
            <Link href="/governance" className="hover:text-gofundme-green">Governance</Link>
            <span>/</span>
            <span className="text-gray-900">Annual Reports</span>
          </nav>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-semibold mb-6">Financial Transparency</h2>
            <p className="text-lg text-gray-700 mb-8">
              We believe in complete transparency and accountability to our donors and beneficiaries.
              Our annual reports provide detailed information about our income, expenditure, and impact.
              All reports are independently examined and prepared in line with best practices for charitable organizations.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialHighlights.map((highlight, index) => (
                <div key={index} className="card text-center">
                  <div className="text-3xl font-bold text-gofundme-green mb-2">
                    {highlight.value}
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.metric}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Annual Reports & Accounts</h2>
          
          <div className="space-y-8">
            {annualReports.map((report, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-6 lg:mb-0">
                      <h3 className="text-2xl font-bold mb-4">Annual Report {report.year}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gofundme-green/10 rounded-lg">
                          <div className="text-2xl font-bold text-gofundme-green">{report.income}</div>
                          <div className="text-sm text-gray-600">Total Income</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{report.expenditure}</div>
                          <div className="text-sm text-gray-600">Total Expenditure</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{report.beneficiaries}</div>
                          <div className="text-sm text-gray-600">People Helped</div>
                        </div>
                      </div>
                    </div>
                                      <div className="flex-shrink-0">
                    <Link 
                      href={`/governance/annual-report-${report.year}`}
                      className="btn-primary inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Full Report
                    </Link>
                  </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {report.keyAchievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-gofundme-green mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Program Breakdown */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Program Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Medical Aid</span>
                          <div className="flex items-center">
                            <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                              <div 
                                className="h-2 bg-red-500 rounded-full" 
                                style={{width: report.programBreakdown.medical}}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold">{report.programBreakdown.medical}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Education</span>
                          <div className="flex items-center">
                            <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                              <div 
                                className="h-2 bg-blue-500 rounded-full" 
                                style={{width: report.programBreakdown.education}}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold">{report.programBreakdown.education}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Emergency Relief</span>
                          <div className="flex items-center">
                            <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                              <div 
                                className="h-2 bg-orange-500 rounded-full" 
                                style={{width: report.programBreakdown.emergencyRelief}}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold">{report.programBreakdown.emergencyRelief}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Food Security</span>
                          <div className="flex items-center">
                            <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                              <div 
                                className="h-2 bg-green-500 rounded-full" 
                                style={{width: report.programBreakdown.foodSecurity}}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold">{report.programBreakdown.foodSecurity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Regulatory Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Organization Status</h3>
                                  <p className="text-gray-700 mb-4">
                    Meem Madaat is a charitable group working towards official charity registration in England and Wales.
                  </p>
                <div className="space-y-2 text-sm">

                  <div><strong>Registered Address:</strong> 123 Main Street, Preston, PR1 1AA</div>
                  <div><strong>Registration Date:</strong> 15 January 2018</div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Independent Examination</h3>
                <p className="text-gray-700 mb-4">
                  Our accounts are independently examined by qualified accountants.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Examiner:</strong> Smith & Associates Chartered Accountants</div>
                  <div><strong>Address:</strong> 456 Business Park, Manchester, M1 2BB</div>
                  <div><strong>Last Examination:</strong> March 2024</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gofundme-green/10 rounded-lg">
              <h3 className="font-semibold mb-2">Questions About Our Finances?</h3>
              <p className="text-gray-700 mb-4">
                We're committed to transparency and welcome any questions about our financial management.
                Contact our trustees for more information.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 