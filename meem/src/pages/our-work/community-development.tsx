import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";

const developmentPrograms = [
  { type: "Water & Sanitation", projects: "45+", beneficiaries: "18,000+" },
  { type: "Infrastructure Development", projects: "32+", beneficiaries: "25,000+" },
  { type: "Women's Empowerment", projects: "28+", beneficiaries: "3,200+" },
  { type: "Youth Development", projects: "22+", beneficiaries: "2,800+" },
  { type: "Economic Development", projects: "35+", beneficiaries: "4,500+" },
];

const services = [
  "Water well construction",
  "Sanitation facility installation",
  "Road and bridge construction",
  "Community center development",
  "Women's skills training",
  "Youth mentorship programs",
];

const communityDevelopmentPhotos = [
  // Water Projects photos
  "/photos/Water Projects/imgi_10_2e6e70_180f575ab8fc41999539114d0cb568c2~mv2.jpg",
  "/photos/Water Projects/imgi_11_2e6e70_dcc9e11754ad4195bfc6f0ce94752df5~mv2.jpg",
  "/photos/Water Projects/imgi_12_2e6e70_7b472245a5c34fb58539d42a2177f492~mv2.jpg",
  // Mosque photos
  "/photos/Mosque/imgi_31_2e6e70_62d221b711dc4b3f98381982192ebe2f~mv2.jpg",
  "/photos/Mosque/imgi_32_2e6e70_9ce6b069754b499aa3ecec9ad3170713~mv2.jpg",
  "/photos/Mosque/imgi_33_2e6e70_1d2902ace08f436891a0f0cc00533ffd~mv2.jpg",
  // Launch photos
  "/photos/Launch/imgi_6_2e6e70_fb0b504540164cd1878064b6686508d3~mv2.jpg",
  "/photos/Launch/imgi_7_2e6e70_b27b0f56d98042929a95976e15b8d41a~mv2.jpg",
  "/photos/Launch/imgi_8_2e6e70_7fca97aaadf841fb9f6373a9591c95e4~mv2.jpg",
];

export default function CommunityDevelopment() {
  return (
    <Layout>
      <Head>
        <title>Community Development - Meem Madaat | Building Stronger Communities</title>
        <meta
          name="description"
          content="Learn about Meem Madaat's community development programs building infrastructure and empowering communities in Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Community Development</h1>
          <p className="text-xl mx-auto">
            Building sustainable infrastructure and empowering communities for long-term growth
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              True development comes from within communities. Our community development programs
              focus on building essential infrastructure, empowering local leaders, and creating
              sustainable solutions that communities can maintain and expand upon themselves.
            </p>
            <p className="text-lg text-gray-700">
              From constructing water wells and sanitation facilities to developing women's
              cooperatives and youth programs, we work hand-in-hand with community members to
              identify their priorities and build lasting solutions together.
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
              <p className="text-4xl font-bold text-gofundme-green mb-2">162</p>
              <p className="text-lg font-semibold">Development Projects</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">53,500+</p>
              <p className="text-lg font-semibold">People Impacted</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">85</p>
              <p className="text-lg font-semibold">Communities Served</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">90%</p>
              <p className="text-lg font-semibold">Project Sustainability</p>
            </div>
          </div>

          {/* Development Programs */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold text-center mb-8">Our Development Programs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentPrograms.map((program, index) => (
                <div key={index} className="card text-center">
                  <h4 className="text-xl font-semibold mb-2">{program.type}</h4>
                  <p className="text-gray-600">
                    <span className="block text-2xl font-bold text-gofundme-green mb-1">
                      {program.projects}
                    </span>
                    projects completed
                  </p>
                  <p className="text-sm text-gray-500 mt-2">{program.beneficiaries} beneficiaries</p>
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
            <h2 className="text-h2 font-semibold text-center mb-12">Development Services</h2>
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

      {/* Development Approach */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Our Development Approach</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Community-Led</h3>
                <p className="text-gray-600">
                  We work directly with community leaders and members to identify their most
                  pressing needs and develop solutions that reflect their priorities and values.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Sustainable Solutions</h3>
                <p className="text-gray-600">
                  All projects are designed with long-term sustainability in mind, ensuring
                  communities can maintain and expand upon the infrastructure we build together.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Capacity Building</h3>
                <p className="text-gray-600">
                  We provide training and skill development opportunities that empower local
                  leaders to manage projects and drive future development initiatives.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Measurable Impact</h3>
                <p className="text-gray-600">
                  We track the long-term outcomes of our projects, ensuring they continue
                  to benefit communities years after completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Community Development Projects</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              From water wells to mosques, from launches to community centers - see the projects that are transforming lives
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityDevelopmentPhotos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={photo}
                    alt={`Community development project ${index + 1}`}
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
                    &quot;Before the water well was built, our women had to walk 3 kilometers every day
                    to fetch water. Now our children can attend school instead of carrying water,
                    and our women can focus on their businesses. This well didn't just bring us
                    water - it brought us hope and opportunity.&quot;
                  </blockquote>
                  <p className="font-semibold">Malik Abdul Rahman</p>
                  <p className="text-gray-600">Village elder, Bahawalpur</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Stories like Abdul Rahman's show how infrastructure development can transform
                entire communities and create opportunities for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Community Development in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <video controls className="w-full h-full object-cover" preload="metadata">
                  <source src="/videos/46 - before n after water pumps 2021 mm.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Water Pump Transformation</h3>
                <p className="text-sm text-gray-600">See the before and after impact of water pump installations</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <video controls className="w-full h-full object-cover" preload="metadata">
                  <source src="/videos/31 - MEEM MADAAT SUPPORT TO BUILD A FUNERAL HALL (Janzah gah) & WATER PUMP PROJECTS 2022 UPDATE.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Infrastructure Projects 2022</h3>
                <p className="text-sm text-gray-600">Community hall and water pump projects update</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <video controls className="w-full h-full object-cover" preload="metadata">
                  <source src="/videos/65 - water pump gah.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Water Pump Installation</h3>
                <p className="text-sm text-gray-600">Installing clean water access for communities</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/our-work/videos?category=Water%20Projects" className="btn-primary">
              View All Water Project Videos →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Build Communities with Us</h2>
          <p className="text-xl mb-8 mx-auto">
            Your support helps us create lasting infrastructure and empower communities
            to build their own brighter futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
            >
              Fund a Development Project
            </Link>
            <Link
              href="/get-involved"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Join Our Development Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 