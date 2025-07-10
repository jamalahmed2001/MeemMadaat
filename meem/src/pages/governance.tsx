import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

// Mock data for demonstration
const trustees = [
  {
    name: "Haji Nasar Hussain",
    role: "Chair of Board",
    contact: "07809 770311",
    location: "Preston"
  },
  {
    name: "Haji Zahid Zafar",
    role: "Trustee",
    contact: "07768 881333",
    location: "Preston"
  },
  {
    name: "Haji Nazir Hussain",
    role: "Trustee",
    contact: "07748 554341",
    location: "Manchester"
  },
  {
    name: "Haji Wahid Zafar",
    role: "Trustee",
    contact: "07424 749271",
    location: "Preston"
  },
  {
    name: "Kamran Ahmed",
    role: "Trustee",
    contact: "07855 828060",
    location: "Preston"
  },
  {
    name: "Haji Rizwan Ahmed",
    role: "Trustee",
    contact: "07786 650546",
    location: "Preston"
  },
  {
    name: "Ch. Imran Ahmed",
    role: "Trustee",
    contact: "07400 400439",
    location: "Preston"
  },
  {
    name: "Haji Asim Raza",
    role: "Trustee",
    contact: "07763 843697",
    location: "Preston"
  },
  {
    name: "Ch. Naeem Akram",
    role: "Trustee",
    contact: "07547 933453",
    location: "Birmingham"
  },
  {
    name: "Ch. Faisal Akhbar",
    role: "Trustee",
    contact: "07976 352883",
    location: "Blackburn"
  },
  {
    name: "Shoaib Karim Attari",
    role: "Trustee",
    contact: "07759 469284",
    location: "Preston"
  }
];

const clinicProjectHeads = [
  {
    name: "Ch. Zameer Hussain",
    role: "Head, Gharmallah Project Management Team",
    contact: "+92 305 5761335"
  },
  {
    name: "Haji Manzoor Raza",
    role: "Project Management Team Member",
    contact: null
  },
  {
    name: "Haji Sabir Hussain",
    role: "Project Management Team Member",
    contact: null
  },
  {
    name: "Haji Riaz Ahmed",
    role: "Head, Shakreela Shareef Project (UK/Pakistan)",
    contact: "+44 7767 902850 / +92 336 208578"
  },
  {
    name: "Haji Shiraz Rafiq Saab",
    role: "Account Signatory",
    contact: "+92 345 5697785"
  },
  {
    name: "Ch. Fiaz Ahmed",
    role: "Account Signatory",
    contact: null
  },
  {
    name: "Ch. Zain Ahmed",
    role: "Project Management Team Member",
    contact: "+92 341 5056013"
  },
  {
    name: "Raja Mehzood Khan Saab",
    role: "Retired Navy – Account Signatory",
    contact: null
  },
  {
    name: "Miayan Ghulam Mustapha Saab",
    role: "Clinic Supervisor",
    contact: null
  },
  {
    name: "Bashir Ahmed Saab",
    role: "Retired Navy Chief",
    contact: null
  },
  {
    name: "Abdul Satar (Papu Bahi)",
    role: "Project Team Member",
    contact: null
  },
  {
    name: "Ch. Haroon Rashid",
    role: "Project Team Member",
    contact: null
  },
  {
    name: "Ch. Yasar Arfat",
    role: "Project Team Member",
    contact: null
  }
];

const policies = [
  {
    title: "Safeguarding Policy",
    description: "Our commitment to protecting vulnerable adults and children in all our programs",
    lastUpdated: "January 2024",
    url: "/governance/safeguarding-policy",
  },
  {
    title: "Conflicts of Interest Policy",
    description: "Guidelines for managing and declaring conflicts of interest among trustees and staff",
    lastUpdated: "December 2023",
    url: "/governance/conflicts-of-interest",
  },
  {
    title: "Financial Controls Policy",
    description: "Procedures for financial management, authorization, and accountability",
    lastUpdated: "November 2023",
    url: "/governance/financial-controls",
  },
  {
    title: "Constitution",
    description: "Our governing document that sets out our charitable objects, powers, and governance structure",
    lastUpdated: "March 2023",
    url: "/governance/constitution",
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect personal data in compliance with GDPR",
    lastUpdated: "October 2023",
    url: "/governance/privacy-policy",
  },
  {
    title: "Complaints Procedure",
    description: "How to raise concerns and our process for handling complaints",
    lastUpdated: "September 2023",
    url: "/governance/complaints-procedure",
  },
];

const annualReports = [
  {
    year: "2023",
    income: "£850,000",
    expenditure: "£780,000",
    beneficiaries: "15,000",
    pageUrl: "/governance/annual-report-2023",
  },
  {
    year: "2022",
    income: "£650,000",
    expenditure: "£590,000",
    beneficiaries: "12,000",
    pageUrl: "/governance/annual-report-2022",
  },
  {
    year: "2021",
    income: "£450,000",
    expenditure: "£410,000",
    beneficiaries: "8,500",
    pageUrl: "/governance/annual-report-2021",
  },
];

export default function Governance() {
  return (
    <Layout>
      <Head>
        <title>Governance - Meem Madaat | Transparency & Accountability</title>
        <meta
          name="description"
          content="Learn about Meem Madaat's governance structure, trustees, policies, and financial reports. We're committed to transparency and accountability."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Governance</h1>
          <p className="text-xl mx-auto">
            We are committed to the highest standards of governance, transparency, and accountability
            in all aspects of our work.
          </p>
        </div>
      </section>

      {/* Governing Document Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Governing Document</h2>
            
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Constitution</h3>
              <p className="text-gray-700 mb-6">
                Meem Madaat is governed by a constitution adopted on 15 January 2018 and last amended
                on 20 March 2023. The constitution sets out our charitable objects, powers, and
                governance structure.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Our Charitable Objects:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>The relief of poverty in the UK and Pakistan</li>
                    <li>The advancement of health and saving of lives</li>
                    <li>The advancement of education</li>
                    <li>The promotion of social inclusion and community cohesion</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Link href="/governance/constitution" className="btn-primary inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    View Constitution
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trustees Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Board of Trustees</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-dark-teal text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Role</th>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {trustees.map((trustee, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{trustee.name}</td>
                    <td className="px-6 py-4">{trustee.role}</td>
                    <td className="px-6 py-4">{trustee.location}</td>
                    <td className="px-6 py-4">{trustee.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Clinic Project Heads Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Clinic Project Heads (Pakistan)</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-dark-teal text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Role</th>
                  <th className="px-6 py-4 text-left">Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clinicProjectHeads.map((head, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{head.name}</td>
                    <td className="px-6 py-4">{head.role}</td>
                    <td className="px-6 py-4">{head.contact ?? "(no contact provided)"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Policies & Procedures Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Policies & Procedures</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {policies.map((policy, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
                <p className="text-gray-600 mb-4">{policy.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Updated: {policy.lastUpdated}</span>
                  <a 
                    href={policy.url}
                    className="text-gofundme-green font-semibold hover:underline inline-flex items-center"
                  >
                    View Policy
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports & Financials Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Annual Reports & Financials</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-600 mb-8">
              We publish detailed annual reports and accounts, independently examined in accordance
              with charity regulations.
            </p>
            
            <div className="text-center mb-8">
              <Link href="/governance/annual-reports" className="btn-primary inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View All Annual Reports
              </Link>
            </div>
            
            <div className="space-y-4">
              {annualReports.map((report, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2">Annual Report {report.year}</h3>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Income:</span>
                          <span className="font-semibold ml-2">{report.income}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Expenditure:</span>
                          <span className="font-semibold ml-2">{report.expenditure}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Beneficiaries:</span>
                          <span className="font-semibold ml-2">{report.beneficiaries}</span>
                        </div>
                      </div>
                    </div>
                    <a 
                      href={report.pageUrl}
                      className="btn-primary inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Report
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gofundme-green/10 rounded-lg">
              <h3 className="font-semibold mb-2">Financial Transparency</h3>
              <p className="text-gray-700">
                95% of all donations go directly to our charitable activities. Administrative costs
                are kept to a minimum through volunteer support and efficient operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 