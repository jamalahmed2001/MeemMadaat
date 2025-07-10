import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const programs = [
  {
    title: "Medical Aid",
    description: "Providing free healthcare services to underserved communities in Pakistan through our network of medical clinics.",
    image: "/images/medical-aid.jpg",
    stats: {
      clinics: "10",
      patients: "25,000+",
      doctors: "50+",
    },
    link: "/our-work/medical-aid",
  },
  {
    title: "Family Support",
    description: "Comprehensive support for vulnerable families, widows, and orphans through financial aid and empowerment programs.",
    image: "/images/family-support.jpg",
    stats: {
      families: "7,000+",
      individuals: "15,000+",
      programs: "5",
    },
    link: "/our-work/family-support",
  },
  {
    title: "Education Programs",
    description: "Empowering communities through quality education, adult literacy, and vocational training programs.",
    image: "/images/education.jpg",
    stats: {
      students: "8,670+",
      centers: "28",
      teachers: "450+",
    },
    link: "/our-work/education",
  },
  {
    title: "Emergency Relief",
    description: "Rapid response to natural disasters and emergencies, providing immediate aid and long-term recovery support.",
    image: "/images/emergency-relief.jpg",
    stats: {
      responses: "45",
      people: "55,500+",
      time: "72hrs",
    },
    link: "/our-work/emergency-relief",
  },
  {
    title: "Community Development",
    description: "Building sustainable infrastructure and empowering communities through water, sanitation, and development projects.",
    image: "/images/community-development.jpg",
    stats: {
      projects: "162",
      communities: "85",
      people: "53,500+",
    },
    link: "/our-work/community-development",
  },
  {
    title: "Food Security",
    description: "Fighting hunger and malnutrition through emergency food distribution and sustainable agriculture programs.",
    image: "/images/food-security.jpg",
    stats: {
      meals: "488,500+",
      people: "104,200+",
      communities: "150",
    },
    link: "/our-work/food-security",
  },
];

export default function OurWork() {
  return (
    <Layout>
      <Head>
        <title>Our Work - Meem Madaat | Healthcare, Education & Support Programs</title>
        <meta
          name="description"
          content="Explore Meem Madaat's charitable programs: medical aid in Pakistan, homeless support in the UK, and education initiatives."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Our Work</h1>
          <p className="text-xl mx-auto">
            Through our dedicated programs, we&apos;re making a tangible difference in the lives of
            thousands across the UK and Pakistan.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-semibold mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 mx-auto">
              Each of our programs is designed to address specific needs in the communities we serve,
              with a focus on sustainable, long-term impact.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="bg-gray-300 rounded-lg aspect-video"></div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h3 className="text-h3 font-semibold mb-4">{program.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{program.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(program.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-2xl font-bold text-gofundme-green">{value}</p>
                        <p className="text-sm text-gray-600 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  <Link href={program.link} className="btn-primary inline-block">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Combined Impact</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-gofundme-green mb-2">350,000+</p>
              <p className="text-lg font-semibold">People Helped</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gofundme-green mb-2">468</p>
              <p className="text-lg font-semibold">Active Programs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gofundme-green mb-2">750+</p>
              <p className="text-lg font-semibold">Volunteers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gofundme-green mb-2">6</p>
              <p className="text-lg font-semibold">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Support Our Work</h2>
          <p className="text-xl mb-8 mx-auto">
            Your donation helps us expand our programs and reach more people in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 