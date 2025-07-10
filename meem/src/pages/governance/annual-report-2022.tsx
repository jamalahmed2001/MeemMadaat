import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const report2022 = {
  year: "2022",
  income: "£650,000",
  expenditure: "£590,000",
  beneficiaries: "12,000",
  summary: "A year of steady growth and program expansion, with two new schools established and significant improvements to our medical services.",
  keyAchievements: [
    "Established 2 new primary schools serving 400 children",
    "Provided medical care to 8,500 patients",
    "Distributed winter aid to 1,200 families",
    "Trained 50 community health workers",
    "Completed 12 water well projects benefiting 2,400 people",
    "Launched women's empowerment program with 180 participants"
  ],
  financialBreakdown: {
    income: {
      donations: "£520,000",
      grants: "£90,000",
      events: "£28,000",
      investment: "£12,000"
    },
    expenditure: {
      medicalAid: "£236,000",
      education: "£177,000",
      emergencyRelief: "£88,500",
      foodSecurity: "£59,000",
      administration: "£29,500"
    }
  },
  programImpact: {
    medical: {
      clinics: "8",
      patients: "6,800",
      consultations: "18,500",
      medicines: "£145,000"
    },
    education: {
      students: "950",
      teachers: "65",
      schools: "10",
      scholarships: "120"
    },
    emergency: {
      families: "1,200",
      individuals: "6,000",
      foodKits: "4,500",
      shelterKits: "800"
    }
  }
};

export default function AnnualReport2022() {
  return (
    <Layout>
      <Head>
        <title>Annual Report 2022 - Meem Madaat | Growth and Expansion</title>
        <meta
          name="description"
          content="Read our 2022 annual report highlighting program expansion and community impact in the UK and Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Annual Report 2022</h1>
          <p className="text-xl mx-auto">
            Building foundations for sustainable growth and lasting impact
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
            <Link href="/governance/annual-reports" className="hover:text-gofundme-green">Annual Reports</Link>
            <span>/</span>
            <span className="text-gray-900">2022 Report</span>
          </nav>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-6">Executive Summary</h2>
            <p className="text-lg text-gray-700 mb-8">{report2022.summary}</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gofundme-green/10 rounded-lg">
                <div className="text-3xl font-bold text-gofundme-green mb-2">{report2022.income}</div>
                <div className="text-gray-600">Total Income</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">{report2022.expenditure}</div>
                <div className="text-gray-600">Total Expenditure</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">{report2022.beneficiaries}</div>
                <div className="text-gray-600">People Helped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-12">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {report2022.keyAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg">
                  <svg className="w-6 h-6 text-gofundme-green mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Reports */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-6">Related Reports</h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore our other annual reports and governance documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/governance/annual-reports"
              className="btn-primary inline-flex items-center text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              All Annual Reports
            </Link>
            <Link 
              href="/governance"
              className="bg-transparent border-2 border-gofundme-green text-gofundme-green px-6 py-3 rounded-md font-semibold hover:bg-gofundme-green hover:text-white transition-colors"
            >
              Governance Documents
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 