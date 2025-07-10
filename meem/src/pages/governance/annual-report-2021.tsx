import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const report2021 = {
  year: "2021",
  income: "£450,000",
  expenditure: "£410,000",
  beneficiaries: "8,500",
  summary: "A challenging year marked by the COVID-19 pandemic, but we adapted our services and launched innovative programs to continue serving those in need.",
  keyAchievements: [
    "Launched mobile medical unit serving remote villages",
    "Provided scholarships to 150 underprivileged students",
    "Delivered COVID-19 relief to 1,800 families",
    "Completed water well project benefiting 500 families",
    "Established food distribution program reaching 2,000 people",
    "Trained 25 community health workers in pandemic protocols"
  ],
  financialBreakdown: {
    income: {
      donations: "£360,000",
      grants: "£60,000",
      events: "£20,000",
      investment: "£10,000"
    },
    expenditure: {
      medicalAid: "£143,500",
      education: "£102,500",
      emergencyRelief: "£102,500",
      foodSecurity: "£41,000",
      administration: "£20,500"
    }
  },
  programImpact: {
    medical: {
      clinics: "6",
      patients: "4,200",
      consultations: "12,000",
      medicines: "£95,000"
    },
    education: {
      students: "680",
      teachers: "45",
      schools: "8",
      scholarships: "95"
    },
    emergency: {
      families: "1,800",
      individuals: "9,000",
      foodKits: "6,000",
      shelterKits: "450"
    }
  }
};

export default function AnnualReport2021() {
  return (
    <Layout>
      <Head>
        <title>Annual Report 2021 - Meem Madaat | Resilience and Adaptation</title>
        <meta
          name="description"
          content="Read our 2021 annual report showcasing how we adapted our services during COVID-19 while maintaining our commitment to those in need."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Annual Report 2021</h1>
          <p className="text-xl mx-auto">
            Resilience and adaptation in the face of unprecedented challenges
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
            <span className="text-gray-900">2021 Report</span>
          </nav>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-6">Executive Summary</h2>
            <p className="text-lg text-gray-700 mb-8">{report2021.summary}</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gofundme-green/10 rounded-lg">
                <div className="text-3xl font-bold text-gofundme-green mb-2">{report2021.income}</div>
                <div className="text-gray-600">Total Income</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">{report2021.expenditure}</div>
                <div className="text-gray-600">Total Expenditure</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">{report2021.beneficiaries}</div>
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
              {report2021.keyAchievements.map((achievement, index) => (
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