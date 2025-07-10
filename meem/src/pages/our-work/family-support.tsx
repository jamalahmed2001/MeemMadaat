import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const supportPrograms = [
  { type: "Emergency Financial Aid", families: "2,800+", launched: "2018" },
  { type: "Orphan Support", families: "1,500+", launched: "2019" },
  { type: "Widow Support", families: "1,200+", launched: "2020" },
  { type: "Child Sponsorship", families: "900+", launched: "2021" },
  { type: "Elderly Care", families: "600+", launched: "2022" },
];

const services = [
  "Monthly financial assistance",
  "Emergency relief funds",
  "Educational support for children",
  "Healthcare assistance",
  "Skills training programs",
  "Counseling and guidance",
];

export default function FamilySupport() {
  return (
    <Layout>
      <Head>
        <title>Family Support - Meem Madaat | Supporting Vulnerable Families</title>
        <meta
          name="description"
          content="Learn about Meem Madaat's family support programs helping widows, orphans, and vulnerable families in Pakistan and the UK."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Family Support Program</h1>
          <p className="text-xl mx-auto">
            Providing comprehensive support to vulnerable families, widows, and orphans
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our family support program addresses the immediate and long-term needs of vulnerable
              families in Pakistan and the UK. We provide targeted assistance to widows, orphans,
              elderly individuals, and families facing financial hardship, helping them achieve
              stability and self-sufficiency.
            </p>
            <p className="text-lg text-gray-700">
              Through monthly financial assistance, emergency relief, educational support, and
              skills training, we empower families to break the cycle of poverty and build a
              better future for themselves and their children.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Our Impact</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">7,000+</p>
              <p className="text-lg font-semibold">Families Supported</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">15,000+</p>
              <p className="text-lg font-semibold">Individuals Helped</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">£2.5M+</p>
              <p className="text-lg font-semibold">Aid Distributed</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">95%</p>
              <p className="text-lg font-semibold">Success Rate</p>
            </div>
          </div>

          {/* Support Programs */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold text-center mb-8">Our Support Programs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportPrograms.map((program, index) => (
                <div key={index} className="card text-center">
                  <h4 className="text-xl font-semibold mb-2">{program.type}</h4>
                  <p className="text-gray-600">
                    <span className="block text-2xl font-bold text-gofundme-green mb-1">
                      {program.families}
                    </span>
                    families supported
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Since {program.launched}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Services We Provide</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gofundme-green mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Stories of Impact</h2>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto"></div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-lg italic mb-4">
                    &quot;After my husband passed away, I didn't know how I would support my four children.
                    Meem Madaat's widow support program not only provided monthly assistance but also
                    helped me start a small tailoring business. Now I can support my family with dignity.&quot;
                  </blockquote>
                  <p className="font-semibold">Fatima Khan</p>
                  <p className="text-gray-600">Widow and mother of four, Lahore</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Stories like Fatima's show how comprehensive support can transform lives and
                restore hope to families facing their darkest moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Help Us Support More Families</h2>
          <p className="text-xl mb-8 mx-auto">
            Your donation can provide a lifeline to vulnerable families and help them build
            a path to independence and prosperity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
            >
              Sponsor a Family
            </Link>
            <Link
              href="/get-involved"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 