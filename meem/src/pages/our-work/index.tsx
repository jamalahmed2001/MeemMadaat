import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";

const programs = [
  {
    title: "Clean Water & Agriculture",
    description: "Installing and maintaining water pumps, wells and safe-water bottling projects in rural Pakistan. Water can change every aspect of life.",
    image: "/photos/Water Projects/imgi_10_2e6e70_180f575ab8fc41999539114d0cb568c2~mv2.jpg",
    stats: {
      projects: "25+",
      communities: "30+",
      beneficiaries: "15,000+",
    },
    link: "/our-work/community-development",
  },
  {
    title: "Free Health Care",
    description: "Running weekly health-check clinics, antenatal support, and covering medical bills for those who cannot afford treatment.",
    image: "/photos/Clinic 1/imgi_15_2e6e70_447bb7eb26e6489ebd0f2ba6c8543ed8~mv2.jpg",
    stats: {
      clinics: "10",
      patients: "25,000+",
      doctors: "50+",
    },
    link: "/our-work/medical-aid",
  },
  {
    title: "Family Welfare",
    description: "Providing housing maintenance support, home-based care for orphans, and assistance with marriage and funeral costs.",
    image: "/photos/Family Support/imgi_13_2e6e70_ffb273c72313415687b5c62abc93b472~mv2.jpg",
    stats: {
      families: "7,000+",
      individuals: "15,000+",
      programs: "8",
    },
    link: "/our-work/family-support",
  },
  {
    title: "Local Community Projects (UK)",
    description: "Serving hot meals to the homeless, collecting food-bank supplies, supporting women's refuges, and running youth outreach programs.",
    image: "/photos/UK Projects/imgi_64_2e6e70_7432f652280c4f40a98855518414e4f2~mv2.jpg",
    stats: {
      meals: "10,000+",
      people: "5,000+",
      programs: "12",
    },
    link: "/our-work/community-development",
  },
  {
    title: "Global Emergency Relief",
    description: "Providing emergency relief, humanitarian aid, and long-term support to vulnerable communities worldwide, including Palestine, Lebanon, and Syria.",
    image: "/photos/Covid 19 packages/imgi_39_2e6e70_0dee80a305c3428389e2877e047f4f8d~mv2.jpg",
    stats: {
      responses: "45",
      people: "55,500+",
      countries: "8",
    },
    link: "/our-work/emergency-relief",
  },
  {
    title: "Education Programs",
    description: "Supporting educational initiatives, school supplies, and learning opportunities for children and adults in underserved communities.",
    image: "/photos/Clinic 2/imgi_21_2e6e70_53b12026c46f4e95b734f4e55e69b22a~mv2.jpg",
    stats: {
      schools: "15+",
      students: "3,000+",
      programs: "20",
    },
    link: "/our-work/education",
  },
  {
    title: "Food Security",
    description: "Ensuring access to nutritious food through distribution programs, food banks, and sustainable food systems development.",
    image: "/photos/Covid 19 packages/imgi_40_2e6e70_7acc070c06e242dfb0116c2c4e3ef268~mv2.jpg",
    stats: {
      meals: "50,000+",
      families: "5,000+",
      programs: "15",
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
          content="Explore Meem Madaat's charitable programs: medical aid in Pakistan, homeless support in the UK, and emergency relief operations worldwide."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Our Work</h1>
          <p className="text-xl mx-auto">
            Through our dedicated programs, we&apos;re making a tangible difference in the lives of
            thousands across the UK, Pakistan, and globally wherever we can help and provide support.
          </p>
          <div className="mt-8 text-sm opacity-90">
            <p>Serving communities since 2019 • UK Registered Charity</p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-semibold mb-6">Our Journey of Impact</h2>
            <p className="text-lg text-gray-700 mb-8">
              From our foundation in 2019 to today, we've grown from local community support to international 
              humanitarian aid, always guided by our commitment to transparency, compassion, and sustainable impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-2xl font-bold text-gofundme-green">2019</p>
                <p className="text-sm text-gray-600">Founded</p>
              </div>
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-2xl font-bold text-gofundme-green">2022</p>
                <p className="text-sm text-gray-600">Major Expansion</p>
              </div>
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-2xl font-bold text-gofundme-green">350,000+</p>
                <p className="text-sm text-gray-600">People Helped</p>
              </div>
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-2xl font-bold text-gofundme-green">6</p>
                <p className="text-sm text-gray-600">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Areas of Work */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Our Areas of Work</h2>
          
          <div className="space-y-12">
            {/* Clean Water & Agriculture */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">💧</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">1. Clean Water & Agriculture Projects</h3>
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "Without water, life would not exist. It is a prerequisite for all human and economic development; water can change every aspect of life."
                  </blockquote>
                  <p className="text-gray-700 mb-4">
                    <strong>What we do:</strong> Install and maintain water pumps, wells and safe-water bottling projects in rural Pakistan.
                  </p>
                </div>
              </div>
            </div>

            {/* Family Welfare */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">2. Family Welfare Projects</h3>
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "Children belong and thrive best in a family environment."
                  </blockquote>
                  <p className="text-gray-700 mb-4">
                    <strong>What we do:</strong> Provide housing maintenance support, home-based care for orphans, and assistance with marriage and funeral costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Free Health Care */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">3. Free Health Care</h3>
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "A healthy lifestyle is essential. It's all too easy to forget the necessity of good health and what healthcare involves—freedom from sickness and disease."
                  </blockquote>
                  <p className="text-gray-700 mb-4">
                    <strong>What we do:</strong> Run weekly health-check clinics, antenatal support, and cover medical bills for those who cannot afford treatment.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Community Projects (UK) */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">4. Local Community Projects (UK)</h3>
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "Tackling homelessness, drug dependency, alcoholism, forced marriages, domestic violence—helps create a crime-free, healthy society."
                  </blockquote>
                  <div className="text-gray-700">
                    <p className="mb-3"><strong>What we do:</strong></p>
                    <ul className="space-y-2 ml-4">
                      <li>• Serve hot meals to the homeless</li>
                      <li>• Collect and distribute food-bank supplies</li>
                      <li>• Support women's refuge centres</li>
                      <li>• Run youth outreach, elderly care, and drug-&-alcohol rehabilitation initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Emergency Relief & Humanitarian Aid */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">5. Global Emergency Relief & Humanitarian Aid</h3>
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "In times of crisis, humanity must come together to provide hope and support to those suffering."
                  </blockquote>
                  <div className="text-gray-700">
                    <p className="mb-3"><strong>What we do:</strong> Provide emergency relief, humanitarian aid, and long-term support to vulnerable communities worldwide. Wherever we can help and provide support, we are there.</p>
                    <p className="text-sm text-gray-600 mb-3 italic">
                      Current focus areas include Palestine, Lebanon, and Syria
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Emergency relief operations</li>
                      <li>• Humanitarian aid distribution</li>
                      <li>• Medical assistance and supplies</li>
                      <li>• Food security programs</li>
                      <li>• Shelter and housing support</li>
                      <li>• Community rehabilitation initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={program.image}
                      alt={`${program.title} program`}
                      fill
                      className="object-cover"
                    />
                  </div>
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

      {/* Historical Timeline Preview */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-semibold mb-4">Our Journey Through Time</h2>
            <p className="text-lg text-gray-600 mx-auto">
              From our foundation in 2019 to international humanitarian aid, discover our timeline of impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 2019 - Foundation */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gofundme-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gofundme-green">2019</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Foundation</h3>
                  <p className="text-sm text-gray-600">
                    Major charity event at Masjid E Raza Community Hall, Preston. Beginning of our journey.
                  </p>
                </div>
              </div>

              {/* 2022 - Major Expansion */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gofundme-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gofundme-green">2022</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Major Expansion</h3>
                  <p className="text-sm text-gray-600">
                    Launch of medical clinics, flood relief operations, and international humanitarian aid.
                  </p>
                </div>
              </div>

              {/* 2023 - Present */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gofundme-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gofundme-green">2023</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Continued Growth</h3>
                  <p className="text-sm text-gray-600">
                    Ongoing development of programs and expansion of services to more communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/about" className="btn-primary">
                Learn About Our History →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Impact */}
      <section className="py-16 bg-white">
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

      {/* Videos Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Watch Our Impact</h2>
          <p className="text-lg text-gray-600 mb-8 mx-auto">
            See our work in action through videos showcasing our various programs and their impact on communities.
          </p>
          <Link href="/our-work/videos" className="btn-primary">
            View All Videos →
          </Link>
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