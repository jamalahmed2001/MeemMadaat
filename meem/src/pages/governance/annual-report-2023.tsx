import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const report2023 = {
  year: "2023",
  income: "£850,000",
  expenditure: "£780,000",
  beneficiaries: "15,000",
  summary: "A year of significant expansion and impact, with three new medical clinics opened and major emergency relief operations conducted during the Pakistan floods.",
  keyAchievements: [
    "Opened 3 new medical clinics in rural Pakistan",
    "Provided emergency relief to 2,500 flood-affected families",
    "Launched adult literacy program reaching 800 participants",
    "Distributed 12,000 food parcels to vulnerable families",
    "Completed 15 water well projects benefiting 3,000 people",
    "Trained 45 community health workers"
  ],
  financialBreakdown: {
    income: {
      donations: "£680,000",
      grants: "£120,000",
      events: "£35,000",
      investment: "£15,000"
    },
    expenditure: {
      medicalAid: "£350,000",
      education: "£195,000",
      emergencyRelief: "£156,000",
      foodSecurity: "£78,000",
      administration: "£39,000"
    }
  },
  programImpact: {
    medical: {
      clinics: "10",
      patients: "8,500",
      consultations: "25,000",
      medicines: "£180,000"
    },
    education: {
      students: "1,200",
      teachers: "85",
      schools: "12",
      scholarships: "150"
    },
    emergency: {
      families: "2,500",
      individuals: "12,500",
      foodKits: "8,000",
      shelterKits: "1,200"
    }
  }
};

export default function AnnualReport2023() {
  return (
    <Layout>
      <Head>
        <title>Annual Report 2023 - Meem Madaat | Detailed Impact Report</title>
        <meta
          name="description"
          content="Read our comprehensive 2023 annual report detailing our impact, financials, and achievements in charitable work."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Annual Report 2023</h1>
          <p className="text-xl mx-auto">
            A year of unprecedented growth and impact in our charitable mission
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
            <span className="text-gray-900">2023 Report</span>
          </nav>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-6">Executive Summary</h2>
            <p className="text-lg text-gray-700 mb-8">{report2023.summary}</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gofundme-green/10 rounded-lg">
                <div className="text-3xl font-bold text-gofundme-green mb-2">{report2023.income}</div>
                <div className="text-gray-600">Total Income</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">{report2023.expenditure}</div>
                <div className="text-gray-600">Total Expenditure</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">{report2023.beneficiaries}</div>
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
              {report2023.keyAchievements.map((achievement, index) => (
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

      {/* Financial Breakdown */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-12">Financial Breakdown</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Income Breakdown */}
              <div className="bg-light-gray p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Income Sources</h3>
                <div className="space-y-4">
                  {Object.entries(report2023.financialBreakdown.income).map(([source, amount]) => (
                    <div key={source} className="flex justify-between items-center">
                      <span className="capitalize text-gray-700">{source}</span>
                      <span className="font-semibold">{amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expenditure Breakdown */}
              <div className="bg-light-gray p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Expenditure by Program</h3>
                <div className="space-y-4">
                  {Object.entries(report2023.financialBreakdown.expenditure).map(([program, amount]) => (
                    <div key={program} className="flex justify-between items-center">
                      <span className="capitalize text-gray-700">{program.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold">{amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-semibold mb-12">Program Impact</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Medical Aid */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-red-600">Medical Aid</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clinics Operating</span>
                    <span className="font-semibold">{report2023.programImpact.medical.clinics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Patients Treated</span>
                    <span className="font-semibold">{report2023.programImpact.medical.patients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Consultations</span>
                    <span className="font-semibold">{report2023.programImpact.medical.consultations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Medicines Distributed</span>
                    <span className="font-semibold">{report2023.programImpact.medical.medicines}</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-blue-600">Education</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students Educated</span>
                    <span className="font-semibold">{report2023.programImpact.education.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Teachers Trained</span>
                    <span className="font-semibold">{report2023.programImpact.education.teachers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schools Supported</span>
                    <span className="font-semibold">{report2023.programImpact.education.schools}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Scholarships Given</span>
                    <span className="font-semibold">{report2023.programImpact.education.scholarships}</span>
                  </div>
                </div>
              </div>

              {/* Emergency Relief */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-orange-600">Emergency Relief</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Families Helped</span>
                    <span className="font-semibold">{report2023.programImpact.emergency.families}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Individuals Reached</span>
                    <span className="font-semibold">{report2023.programImpact.emergency.individuals}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Food Kits Distributed</span>
                    <span className="font-semibold">{report2023.programImpact.emergency.foodKits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shelter Kits Provided</span>
                    <span className="font-semibold">{report2023.programImpact.emergency.shelterKits}</span>
                  </div>
                </div>
              </div>
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