import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";

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

const ukEducationPhotos = [
  // UK Projects photos
  "/photos/UK Projects/imgi_64_2e6e70_7432f652280c4f40a98855518414e4f2~mv2.jpg",
  "/photos/UK Projects/imgi_65_2e6e70_c1f1ee9784ce435abd4f6f9bba47c52e~mv2.jpg",
  "/photos/UK Projects/imgi_66_2e6e70_38dd833f4fb54299919958b6fa31b196~mv2.jpg",
  "/photos/UK Projects/imgi_67_2e6e70_3b08c3023bdd4a58b0f508e76f9300dd~mv2.jpg",
  "/photos/UK Projects/imgi_68_2e6e70_5e58ea5393dd4df49bdf55c8b0a94efc~mv2.jpg",
  "/photos/UK Projects/imgi_69_2e6e70_0fb911973abe4a718ee45fe88f5b714f~mv2.jpg",
  "/photos/UK Projects/imgi_70_2e6e70_beb7127393554707ac477d57ae495436~mv2.jpg",
  "/photos/UK Projects/imgi_71_2e6e70_a11febbb89c042b2b8ddf3cb9da35afc~mv2.jpg",
  "/photos/UK Projects/imgi_72_2e6e70_b2f80cdc8a7e4a4b84048be032b05d60~mv2.jpg",
  "/photos/UK Projects/imgi_73_2e6e70_1ca51b050b5848df9e6d8586601d913e~mv2.jpg",
  "/photos/UK Projects/imgi_74_2e6e70_9f8b2ff29311487a97fa3544aea44a2c~mv2.jpg",
  "/photos/UK Projects/imgi_75_2e6e70_061410b6fe12483b9ac09ba1cef4cccc~mv2.jpg",
  "/photos/UK Projects/imgi_76_2e6e70_6d946fb109534fbca272ced2198c69d7~mv2.jpg",
  "/photos/UK Projects/imgi_77_2e6e70_1309563097114107ad4e274d52e47773~mv2.jpg",
  "/photos/UK Projects/imgi_78_2e6e70_d559b480986a4481965d75a6c46a69a5~mv2.jpg",
  "/photos/UK Projects/imgi_79_2e6e70_cd82bb8c90c146bc9a743fe93171f45f~mv2.jpg",
  "/photos/UK Projects/imgi_80_2e6e70_2541ffa101584038bf1b06058c694901~mv2.jpg",
  "/photos/UK Projects/imgi_81_2e6e70_66546509459e49d9a0a7142f2084dfb3~mv2.jpg",
  "/photos/UK Projects/imgi_82_2e6e70_b34ce28931984166adc6c759a35f0b9a~mv2.jpg",
  "/photos/UK Projects/imgi_83_2e6e70_952536f11e8644c48231c769014dd568~mv2.jpg",
  "/photos/UK Projects/imgi_84_2e6e70_973272afe06544f68eb796d96077bc7a~mv2.jpg",
  "/photos/UK Projects/imgi_85_2e6e70_ae0d2bee25a4486cb4e9c59a2beda9a0~mv2.jpg",
  "/photos/UK Projects/imgi_86_2e6e70_29e63585b4aa4f30bea3474d8e0312ca~mv2.jpg",
  "/photos/UK Projects/imgi_87_2e6e70_d3d4a70de0d5404796cd743ef8b77b50~mv2.jpg",
  "/photos/UK Projects/imgi_88_2e6e70_4911b75d210b429a8b6a9353b14eec66~mv2.jpg",
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

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Our UK Education Projects</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              See our educational initiatives and community programs in the UK
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukEducationPhotos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={photo}
                    alt={`UK education project ${index + 1}`}
                    fill
                    className="object-cover"
                  />
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