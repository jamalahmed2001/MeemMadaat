import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

// Real Meem Madaat timeline from llm.md
const timeline = [
  { year: "1 January 2016", event: "Meem Madaat conceived by UK volunteers with family ties to rural Punjab, Pakistan, inspired by Islamic principles of service and inclusivity." },
  { year: "15 January 2018", event: "Meem Madaat formally established as a charitable group in Preston, UK. Constitution adopted detailing objects: poverty relief, health, education, cohesion." }, 
  { year: "June 2018", event: "First clean-water pump installed in Gharmallah, Pakistan—bringing safe water to 200+ families and cutting water-borne diseases." },
  { year: "December 2018", event: "Inaugural UK homeless outreach: Delivered 150 hot-meal packs, blankets & hygiene kits to local shelters in Preston." },
  { year: "March 2019", event: "Clinic #1 opens in Gharmallah: weekly medical camp with volunteer doctors offering general check-ups & antenatal care." },
  { year: "29 November 2019", event: "Major charity event at Masjid E Raza Community Hall, Preston - establishing broader community partnerships." },
  { year: "March 2020", event: "Launch of Quranic education programs and development of UK-Pakistan operational bridge during pandemic challenges." },
  { year: "September 2020", event: "Medical aid programme expanded with two additional satellite clinics in neighbouring villages of the Jhelum district." },
  { year: "2021", event: "Infrastructure development year: Water pump projects, educational programs, Pakistan Day commemorative projects, and environmental initiatives." },
  { year: "April 2021", event: "Shakreela Shareef Project launched—third permanent clinic in rural Pakistan under local management, plus expanded eye-care camps." },
  { year: "2022", event: "Major expansion year: Launch of Clinic 1 and 2, funeral hall project, emergency relief for Pakistan floods, Bangladesh floods, and earthquake relief." },
  { year: "July 2022", event: "15,000-patient milestone: Across all clinics, Meem Madaat has now treated over 15,000 people since inception." },
  { year: "2022 Ramadan", event: "Comprehensive project launch: Clinic projects, community support, iftar programs, and food parcel distribution." },
  { year: "2022 Eid", event: "Multi-community initiatives: UK projects, prison support at Hindley Prison, orphan support, and 'Eid is a celebration for all' programs." },
  { year: "20 March 2023", event: "Constitution amended at EGM to strengthen governance: extended trustee terms, formalised Safeguarding Team, updated meeting quorums." },
  { year: "8 August 2023", event: "Al-Khair collaboration: Raised £1,500 for hospital funds and £9,000 to sponsor 15 orphans in Pakistan through joint appeals and workplace giving." },
  { year: "15 November 2023", event: "Rebuild With Hope (Preston): Partnered with DCA and Preston City Council on winter-warmth drive for isolated elderly—200+ care packages delivered." },
  { year: "20 April 2024", event: "Gaza Emergency Appeal: Launched a special Ramadan appeal in support of Heal Humanity, raising £5,000 for urgent relief (Zakat, Fitrah, Fidyah, Lillah)." },
  { year: "12 April 2024", event: "Clinics rotate between Gharmallah & Shakreela Shareef—second permanent outpost opened, treating 80+ patients daily." },
];

const values = [
  {
    icon: "❤️",
    title: "Compassion",
    description: "We treat everyone with kindness and empathy, understanding that each person has unique needs and circumstances.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "We maintain the highest standards of transparency and accountability in all our operations and financial management.",
  },
  {
    icon: "🌍",
    title: "Community",
    description: "We believe in the power of communities working together to create lasting positive change.",
  },
  {
    icon: "⭐",
    title: "Excellence",
    description: "We strive for excellence in all our programs, ensuring maximum impact for every donation received.",
  },
];

const trustees = [
  {
    name: "Haji Nasar Hussain",
    role: "Chair of Board",
    bio: "Leading the board with dedication to our mission of providing healthcare and support to communities in need.",
    location: "Preston",
    contact: "07809 770311"
  },
  {
    name: "Haji Zahid Zafar",
    role: "Trustee",
    bio: "Bringing valuable experience in community outreach and project management to our Preston operations.",
    location: "Preston",
    contact: "07768 881333"
  },
  {
    name: "Haji Nazir Hussain",
    role: "Trustee",
    bio: "Overseeing our Manchester initiatives and expanding our reach in the region.",
    location: "Manchester",
    contact: "07748 554341"
  },
  {
    name: "Kamran Ahmed",
    role: "Trustee",
    bio: "Active in community engagement and educational programs, supporting both UK and Pakistan operations.",
    location: "Preston",
    contact: "07855 828060"
  },
  {
    name: "Ch. Zameer Hussain",
    role: "Head of Gharmallah Project",
    bio: "Leading our flagship medical aid project in Pakistan with extensive healthcare management experience.",
    location: "Pakistan",
    contact: "+92 305 5761335"
  },
  {
    name: "Haji Riaz Ahmed",
    role: "Head, Shakreela Shareef Project",
    bio: "Managing our second major clinic project with dual UK-Pakistan operational oversight.",
    location: "UK/Pakistan",
    contact: "+44 7767 902850"
  },
];

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us - Meem Madaat | UK Charitable Group</title>
        <meta
          name="description"
          content="Learn about Meem Madaat's history since 2016, mission, values, and the team behind our charitable work in the UK and Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">About Meem Madaat</h1>
          <p className="text-xl mx-auto">
            Founded on the principles of compassion and service, we've been creating positive change
            in communities across the UK and Pakistan since 2016.
          </p>
        </div>
      </section>

      {/* Our Aims & Objectives Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-8">Our Aims & Objectives</h2>
            
            <div className="text-center mb-12">
              <p className="text-xl text-gray-700 font-medium mb-8">
                Our mission is to eradicate poverty by providing a helping hand in all aspects of life.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We work in four key impact areas:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Pakistan */}
              <div className="bg-light-gray p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gofundme-green">🇵🇰 Pakistan Development</h3>
                <p className="text-gray-700 mb-4">
                  Promoting social integration, building clean-water and agricultural infrastructure, 
                  free clinics, family welfare and education programs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Medical clinics (Gharmallah & Shakreela Shareef)</li>
                  <li>• Clean-water projects</li>
                  <li>• Agricultural infrastructure</li>
                  <li>• Education initiatives</li>
                  <li>• Funeral hall (Janzah Gah) construction</li>
                  <li>• Environmental projects</li>
                </ul>
              </div>

              {/* United Kingdom */}
              <div className="bg-light-gray p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gofundme-green">🇬🇧 UK Community Support</h3>
                <p className="text-gray-700 mb-4">
                  Supporting homeless and vulnerable people through hot meals, food-bank collections, 
                  prison programs, and community outreach initiatives.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hot meals for homeless</li>
                  <li>• Food-bank collections</li>
                  <li>• Prison support (Hindley Prison)</li>
                  <li>• Elderly support programs</li>
                  <li>• Inter-faith community events</li>
                  <li>• Emergency assistance</li>
                </ul>
              </div>

              {/* Emergency Relief */}
              <div className="bg-light-gray p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gofundme-green">🚨 Emergency Relief</h3>
                <p className="text-gray-700 mb-4">
                  Rapid response to natural disasters and humanitarian crises, providing emergency aid 
                  and long-term recovery support.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Pakistan flood relief (2022)</li>
                  <li>• Bangladesh disaster response</li>
                  <li>• Earthquake relief operations</li>
                  <li>• Gaza humanitarian appeal</li>
                  <li>• Multi-disaster response capabilities</li>
                  <li>• Community resilience building</li>
                </ul>
              </div>

              {/* Religious & Cultural Programs */}
              <div className="bg-light-gray p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gofundme-green">🕌 Religious & Cultural</h3>
                <p className="text-gray-700 mb-4">
                  Organizing community events, religious education, and cultural celebration programs 
                  that bring people together across faith and cultural boundaries.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Ramadan programs & iftar distribution</li>
                  <li>• Eid celebrations for all communities</li>
                  <li>• Quranic education programs</li>
                  <li>• Religious tolerance initiatives</li>
                  <li>• Cultural preservation projects</li>
                  <li>• Community hall events</li>
                </ul>
              </div>
            </div>

            {/* Community Events */}
            <div className="bg-gofundme-green/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Community Events & Awareness</h3>
              <p className="text-gray-700 mb-6 text-center">
                We also organise youth and community events to:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-gofundme-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold mb-2">Volunteerism</h4>
                  <p className="text-sm text-gray-600">
                    Raise awareness of volunteerism and the power of civil society
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gofundme-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="font-semibold mb-2">Unity & Tolerance</h4>
                  <p className="text-sm text-gray-600">
                    Promote racial harmony and religious tolerance
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gofundme-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h4 className="font-semibold mb-2">Crime Prevention</h4>
                  <p className="text-sm text-gray-600">
                    Tackle crime and drug-abuse through education and rehabilitation support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Our Journey</h2>
          
          {/* Founding Story */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gofundme-green">Our Founding Story</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Meem Madaat was conceived on <strong>1 January 2016</strong> by a small group of UK volunteers with family ties to rural Punjab, Pakistan. Inspired by Islamic principles of service and inclusivity, our founders set out to help poverty-stricken villages in the Jhelum district, while also supporting vulnerable people in Preston.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From these humble beginnings, we formally established ourselves as a charitable group on <strong>15 January 2018</strong>, adopting our constitutional framework and charitable objects focused on poverty relief, health advancement, education, and community cohesion. We are currently working towards official charity registration.
              </p>
            </div>
          </div>

          {/* Learning to Walk Philosophy */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gofundme-green/5 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gofundme-green">Learning to Walk Before We Run</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At this early stage, we chose to <strong>"learn to walk before we run"</strong> by concentrating our first efforts on a handful of villages in the Jhelum district. We appealed directly for standing orders of just <strong>£3/month</strong>, distributed donation boxes locally, and began building relationships with community leaders—laying the foundation for everything we do today.
              </p>
              <p className="text-gray-600 italic">
                This patient, community-centered approach remains at the heart of our work, ensuring we understand local needs before implementing solutions.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gofundme-green/30"></div>
              
              {/* Timeline items */}
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="absolute left-8 w-4 h-4 bg-gofundme-green rounded-full -translate-x-1/2"></div>
                  <div className="ml-20">
                    <p className="text-gofundme-green font-bold text-lg">{item.year}</p>
                    <p className="text-gray-700 mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-semibold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 mb-8">
              A world where every person has access to healthcare, education, and basic necessities,
              regardless of their background or circumstances.
            </p>
            <div className="bg-gofundme-green/5 p-6 rounded-lg">
              <p className="text-lg text-gray-700 font-medium italic">
                "One day this drop will form an ocean to serve humanity across the globe"
              </p>
            </div>
          </div>

          {/* Core Values & Ethos */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-gofundme-green/10 to-gofundme-green/5 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gofundme-green">Our Core Values & Ethos</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Guided by Faith</h4>
                  <p className="text-gray-700 mb-4">
                    Our work is guided by the Qur'anic injunction that <em>"those who spend in charity will be richly rewarded"</em> (Qur'an 57:10). We are inspired by Islamic principles of service and inclusivity in all our endeavors.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Universal Service</h4>
                  <p className="text-gray-700 mb-4">
                    We help without discriminating on creed, caste, religion or gender, and partner with other charities doing essential work worldwide. Our mission transcends all boundaries to serve humanity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-h3 font-semibold text-center mb-12">Our Organizational Values</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Our Team Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-4">Our Leadership Team</h2>
          <p className="text-lg text-center mb-12 mx-auto">
            Led by a dedicated board of trustees and project heads who bring diverse expertise and a shared commitment
            to our mission across the UK and Pakistan.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">{trustee.name}</h3>
                <p className="text-gofundme-green font-medium mb-1">{trustee.role}</p>
                <p className="text-sm text-gray-500 mb-3">{trustee.location}</p>
                <p className="text-sm text-gray-600 mb-3">{trustee.bio}</p>
                {trustee.contact && (
                  <p className="text-xs text-gray-500 font-mono">{trustee.contact}</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/governance" className="btn-secondary">
              View Full Governance Structure
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 mx-auto">
            Your support helps us continue our vital work in communities that need it most.
            From £3/month standing orders to major project sponsorship, every contribution counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary bg-white text-gofundme-green hover:bg-gray-100">
              Donate Now
            </Link>
            <Link
              href="/volunteer"
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