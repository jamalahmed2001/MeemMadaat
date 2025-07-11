import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";

const emergencyResponses = [
  { type: "Flood Response 2023", beneficiaries: "12,000+", region: "Punjab & Sindh" },
  { type: "Earthquake Relief 2022", beneficiaries: "8,500+", region: "Balochistan" },
  { type: "COVID-19 Response", beneficiaries: "25,000+", region: "Nationwide" },
  { type: "Drought Relief 2021", beneficiaries: "6,200+", region: "Thar Desert" },
  { type: "Fire Relief 2023", beneficiaries: "3,800+", region: "Karachi" },
];

const services = [
  "Emergency shelter provision",
  "Food and water distribution",
  "Medical emergency response",
  "Temporary housing assistance",
  "Disaster preparedness training",
  "Community rehabilitation",
];

const emergencyReliefPhotos = [
  // Covid 19 packages photos (sample from the many available)
  "/photos/Covid 19 packages/imgi_39_2e6e70_0dee80a305c3428389e2877e047f4f8d~mv2.jpg",
  "/photos/Covid 19 packages/imgi_40_2e6e70_7acc070c06e242dfb0116c2c4e3ef268~mv2.jpg",
  "/photos/Covid 19 packages/imgi_41_2e6e70_b4a7b6739d74428ca42f4766787425e4~mv2.jpg",
  "/photos/Covid 19 packages/imgi_42_2e6e70_ef0f324e2b77484cb812b2025971fa34~mv2.jpg",
  "/photos/Covid 19 packages/imgi_43_2e6e70_dc50260ef4e543e3aac1723c7501512f~mv2.jpg",
  "/photos/Covid 19 packages/imgi_44_2e6e70_1ad382b3169f4f699ab53f2341c4ae91~mv2.jpg",
  "/photos/Covid 19 packages/imgi_45_2e6e70_447bb7eb26e6489ebd0f2ba6c8543ed8~mv2.jpg",
  "/photos/Covid 19 packages/imgi_46_2e6e70_8d0522a1f9574ad69b4c47979294ab92~mv2.jpg",
  "/photos/Covid 19 packages/imgi_47_2e6e70_b6718ce165384e3a94c3942c51cb4084~mv2.jpg",
  "/photos/Covid 19 packages/imgi_48_2e6e70_cf26fd6c2076437e9c06bf1319771799~mv2.jpg",
  "/photos/Covid 19 packages/imgi_49_2e6e70_2a0f4d573d964999a992e74508e7aa94~mv2.jpg",
  "/photos/Covid 19 packages/imgi_50_2e6e70_74fc8c0280ba4cd895517cd0badd0ab8~mv2.jpg",
];

export default function EmergencyRelief() {
  return (
    <Layout>
      <Head>
        <title>Emergency Relief - Meem Madaat | Rapid Response to Crises</title>
        <meta
          name="description"
          content="Learn about Meem Madaat's emergency relief programs providing immediate assistance during natural disasters and crises in Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Emergency Relief</h1>
          <p className="text-xl mx-auto">
            Providing immediate assistance when disasters strike communities
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              When natural disasters and emergencies strike, time is of the essence. Our emergency
              relief program is designed to provide rapid, effective assistance to communities
              affected by floods, earthquakes, fires, and other crises across Pakistan.
            </p>
            <p className="text-lg text-gray-700">
              Working with local partners and emergency services, we deliver essential supplies,
              temporary shelter, medical aid, and long-term rehabilitation support to help
              communities recover and rebuild stronger than before.
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
              <p className="text-4xl font-bold text-gofundme-green mb-2">45</p>
              <p className="text-lg font-semibold">Emergency Responses</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">55,500+</p>
              <p className="text-lg font-semibold">People Helped</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">72hrs</p>
              <p className="text-lg font-semibold">Average Response Time</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">£1.8M</p>
              <p className="text-lg font-semibold">Emergency Aid Distributed</p>
            </div>
          </div>

          {/* Emergency Responses */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold text-center mb-8">Recent Emergency Responses</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyResponses.map((response, index) => (
                <div key={index} className="card text-center">
                  <h4 className="text-xl font-semibold mb-2">{response.type}</h4>
                  <p className="text-gray-600">
                    <span className="block text-2xl font-bold text-gofundme-green mb-1">
                      {response.beneficiaries}
                    </span>
                    people assisted
                  </p>
                  <p className="text-sm text-gray-500 mt-2">{response.region}</p>
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
            <h2 className="text-h2 font-semibold text-center mb-12">Emergency Services</h2>
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

      {/* Response Process */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Our Response Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gofundme-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Assessment</h3>
                <p className="text-gray-600">
                  Our local teams quickly assess the situation and identify immediate needs
                  within 24 hours of a disaster.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gofundme-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Immediate Relief</h3>
                <p className="text-gray-600">
                  We deploy emergency supplies, medical aid, and temporary shelter
                  to affected communities within 48-72 hours.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gofundme-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Long-term Recovery</h3>
                <p className="text-gray-600">
                  We support communities through rehabilitation, reconstruction,
                  and disaster preparedness training.
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
            <h2 className="text-h2 font-semibold text-center mb-12">Emergency Relief in Action</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              See how we provide immediate relief during emergencies and support communities in their recovery
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyReliefPhotos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={photo}
                    alt={`Emergency relief operation ${index + 1}`}
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
                    &quot;When the floods came, we lost everything - our home, our belongings, our hope.
                    But Meem Madaat was there within days, providing us with shelter, food, and
                    the support we needed to start rebuilding. They didn't just help us survive
                    the disaster, they helped us recover our dignity.&quot;
                  </blockquote>
                  <p className="font-semibold">Hassan Ali</p>
                  <p className="text-gray-600">Flood survivor, Sindh Province</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Stories like Hassan's remind us that in times of crisis, quick and compassionate
                response can make the difference between despair and hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Support Emergency Preparedness</h2>
          <p className="text-xl mb-8 mx-auto">
            Help us maintain our emergency response capabilities so we can be ready
            when the next disaster strikes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
            >
              Donate to Emergency Fund
            </Link>
            <Link
              href="/get-involved"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Join Our Response Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 