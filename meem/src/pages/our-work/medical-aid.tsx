import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";

const clinics = [
  { location: "Karachi", patients: "5,000+", established: "2019" },
  { location: "Lahore", patients: "4,500+", established: "2020" },
  { location: "Islamabad", patients: "3,800+", established: "2021" },
  { location: "Peshawar", patients: "3,200+", established: "2022" },
  { location: "Multan", patients: "2,800+", established: "2023" },
];

const services = [
  "General consultations",
  "Maternal and child health",
  "Vaccinations",
  "Basic diagnostics",
  "Medicine dispensing",
  "Health education",
];

const clinicPhotos = [
  // Clinic 1 photos
  "/photos/Clinic 1/imgi_15_2e6e70_447bb7eb26e6489ebd0f2ba6c8543ed8~mv2.jpg",
  "/photos/Clinic 1/imgi_16_2e6e70_7e2799e2456c44d691f07b430d1f22d0~mv2.jpg",
  "/photos/Clinic 1/imgi_17_2e6e70_384bdf4667e74950bf3aff572096b093~mv2.jpg",
  "/photos/Clinic 1/imgi_18_2e6e70_8854959ab60c4c00b8f3bb108675b4e9~mv2.jpg",
  "/photos/Clinic 1/imgi_19_2e6e70_f60e46b2e4794a1da2a2c22bc4c35276~mv2.jpg",
  "/photos/Clinic 1/imgi_20_2e6e70_2a1f770db75f40e4ad68fd98328a87b1~mv2.jpg",
  // Clinic 2 photos
  "/photos/Clinic 2/imgi_21_2e6e70_53b12026c46f4e95b734f4e55e69b22a~mv2.jpg",
  "/photos/Clinic 2/imgi_22_2e6e70_3e265a81305f4122982084425226feeb~mv2.jpg",
  "/photos/Clinic 2/imgi_23_2e6e70_fd648c4dc6c74c6aabbe6dd56de6c302~mv2.jpg",
  "/photos/Clinic 2/imgi_24_2e6e70_c3d505d045cc4d87af7e7b6eea3c182f~mv2.jpg",
  "/photos/Clinic 2/imgi_25_2e6e70_39a15315e8bf401c9695a117a992fcf5~mv2.jpg",
  "/photos/Clinic 2/imgi_26_2e6e70_2c7e8469fa56430ab4707dd8ad60320a~mv2.jpg",
  "/photos/Clinic 2/imgi_27_2e6e70_9e31f9955abc4fd2b65f77a78f7aea4d~mv2.jpg",
  "/photos/Clinic 2/imgi_28_2e6e70_5ddc25042cd043d39d3d5c7f2415906b~mv2.jpg",
  "/photos/Clinic 2/imgi_29_2e6e70_f1d412c47ebb4ff7891296625eaf6f72~mv2.jpg",
  "/photos/Clinic 2/imgi_30_2e6e70_e84abfd147444e708aabd0771866876f~mv2.jpg",
];

export default function MedicalAid() {
  return (
    <Layout>
      <Head>
        <title>Medical Aid - Meem Madaat | Free Healthcare in Pakistan</title>
        <meta
          name="description"
          content="Learn about Meem Madaat's medical aid program providing free healthcare services to underserved communities in Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Medical Aid Program</h1>
          <p className="text-xl mx-auto">
            Bringing free, quality healthcare to underserved communities across Pakistan
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Since 2019, our medical aid program has been providing essential healthcare services
              to communities in Pakistan where access to medical care is limited or unaffordable.
              Through our network of clinics staffed by qualified healthcare professionals, we offer
              free consultations, treatments, and medicines to those who need them most.
            </p>
            <p className="text-lg text-gray-700">
              Our clinics operate on a walk-in basis, ensuring that anyone can receive care without
              appointments or complicated paperwork. We focus on preventive care and health education
              to create lasting improvements in community health.
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
              <p className="text-4xl font-bold text-gofundme-green mb-2">10</p>
              <p className="text-lg font-semibold">Medical Clinics</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">25,000+</p>
              <p className="text-lg font-semibold">Patients Treated</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">50+</p>
              <p className="text-lg font-semibold">Healthcare Workers</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">100,000+</p>
              <p className="text-lg font-semibold">Medicines Dispensed</p>
            </div>
          </div>

          {/* Clinic Locations */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold text-center mb-8">Our Clinic Locations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinics.map((clinic, index) => (
                <div key={index} className="card text-center">
                  <h4 className="text-xl font-semibold mb-2">{clinic.location}</h4>
                  <p className="text-gray-600">
                    <span className="block text-2xl font-bold text-gofundme-green mb-1">
                      {clinic.patients}
                    </span>
                    patients served
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Est. {clinic.established}</p>
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
            <h2 className="text-h2 font-semibold text-center mb-12">Our Medical Facilities</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Take a look at our medical clinics and the care we provide to our patients
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicPhotos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={photo}
                    alt={`Medical clinic facility ${index + 1}`}
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
                    &quot;When my daughter fell ill, we had no money for treatment. The Meem Madaat clinic
                    not only provided free medicine but also arranged follow-up care. They saved her
                    life. I am forever grateful.&quot;
                  </blockquote>
                  <p className="font-semibold">Amina Bibi</p>
                  <p className="text-gray-600">Mother of three, Karachi</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Stories like Amina&apos;s remind us why accessible healthcare is so crucial. Every
                donation helps us reach more families in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Help Us Expand Our Reach</h2>
          <p className="text-xl mb-8 mx-auto">
            With your support, we can open more clinics and provide healthcare to thousands more
            people who desperately need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
            >
              Sponsor a Clinic
            </Link>
            <Link
              href="/volunteer"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Volunteer as a Healthcare Professional
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 