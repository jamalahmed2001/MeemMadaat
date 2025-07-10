import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const educationPrograms = [
  { type: "Primary Schools", beneficiaries: "3,500+", locations: "12 schools" },
  { type: "Adult Literacy", beneficiaries: "2,200+", locations: "8 centers" },
  { type: "Vocational Training", beneficiaries: "1,800+", locations: "6 centers" },
  { type: "Scholarship Program", beneficiaries: "850+", locations: "Multiple institutions" },
  { type: "Teacher Training", beneficiaries: "320+", locations: "Regional centers" },
];

const services = [
  "Free primary education",
  "Adult literacy classes",
  "Vocational skills training",
  "Scholarship assistance",
  "Teacher training programs",
  "Educational materials provision",
];

export default function Education() {
  return (
    <Layout>
      <Head>
        <title>Education Programs - Meem Madaat | Building Brighter Futures</title>
        <meta
          name="description"
          content="Learn about Meem Madaat's education programs providing free schooling, adult literacy, and vocational training in Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Education Programs</h1>
          <p className="text-xl mx-auto">
            Empowering communities through quality education and skills development
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Education is the foundation of lasting change. Our comprehensive education programs
              in Pakistan focus on providing free, quality education to children from disadvantaged
              backgrounds, while also offering adult literacy programs and vocational training to
              help individuals develop marketable skills.
            </p>
            <p className="text-lg text-gray-700">
              From building and operating schools to providing scholarships and teacher training,
              we're committed to breaking the cycle of poverty through education. Our programs
              are designed to be sustainable and community-led, ensuring long-term impact.
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
              <p className="text-4xl font-bold text-gofundme-green mb-2">28</p>
              <p className="text-lg font-semibold">Education Centers</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">8,670+</p>
              <p className="text-lg font-semibold">Students Educated</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">450+</p>
              <p className="text-lg font-semibold">Teachers Trained</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">95%</p>
              <p className="text-lg font-semibold">Completion Rate</p>
            </div>
          </div>

          {/* Education Programs */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold text-center mb-8">Our Education Programs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationPrograms.map((program, index) => (
                <div key={index} className="card text-center">
                  <h4 className="text-xl font-semibold mb-2">{program.type}</h4>
                  <p className="text-gray-600">
                    <span className="block text-2xl font-bold text-gofundme-green mb-1">
                      {program.beneficiaries}
                    </span>
                    beneficiaries
                  </p>
                  <p className="text-sm text-gray-500 mt-2">{program.locations}</p>
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
                    &quot;I never thought I would be able to read and write at the age of 45. The adult
                    literacy program at Meem Madaat changed my life. Now I can help my children
                    with their homework and even manage my small business accounts.&quot;
                  </blockquote>
                  <p className="font-semibold">Muhammad Akram</p>
                  <p className="text-gray-600">Father of three, Multan</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Stories like Muhammad's demonstrate how education can transform not just individual
                lives but entire families and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Invest in Education</h2>
          <p className="text-xl mb-8 mx-auto">
            Your support can help us build more schools, train more teachers, and provide
            education opportunities to thousands more children and adults.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
            >
              Fund a School
            </Link>
            <Link
              href="/get-involved"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Volunteer as a Teacher
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 