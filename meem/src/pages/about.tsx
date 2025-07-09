import Head from "next/head";
import Layout from "../components/Layout";

// Mock data for demonstration
const timeline = [
  { year: "2018", event: "Meem Madaat founded by a group of passionate volunteers" },
  { year: "2019", event: "First medical clinic opened in rural Pakistan" },
  { year: "2020", event: "Launched UK homeless support program in response to COVID-19" },
  { year: "2021", event: "Education program reaches 500 children in Pakistan" },
  { year: "2022", event: "Opened 5th medical clinic and expanded UK operations" },
  { year: "2023", event: "Achieved £1 million in total donations" },
  { year: "2024", event: "Celebrating 6 years of service with 50,000+ people helped" },
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
    name: "Dr. Ahmed Khan",
    role: "Chair of Trustees",
    bio: "Medical doctor with 20 years of experience in public health. Founded several healthcare initiatives in Pakistan.",
    image: "/images/trustee-1.jpg",
  },
  {
    name: "Sarah Thompson",
    role: "Treasurer",
    bio: "Chartered accountant with expertise in charity finance. Previously worked with several UK-based international charities.",
    image: "/images/trustee-2.jpg",
  },
  {
    name: "Imam Muhammad Ali",
    role: "Trustee",
    bio: "Community leader and educator. Has been serving the Muslim community in the UK for over 15 years.",
    image: "/images/trustee-3.jpg",
  },
  {
    name: "Fatima Patel",
    role: "Secretary",
    bio: "Social worker specializing in community development. Extensive experience in both UK and Pakistani contexts.",
    image: "/images/trustee-4.jpg",
  },
];

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us - Meem Madaat | UK Registered Charity</title>
        <meta
          name="description"
          content="Learn about Meem Madaat's history, mission, values, and the team behind our charitable work in the UK and Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">About Meem Madaat</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Founded on the principles of compassion and service, we work to create positive change
            in communities across the UK and Pakistan.
          </p>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Our History</h2>
          
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
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-semibold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700">
              A world where every person has access to healthcare, education, and basic necessities,
              regardless of their background or circumstances.
            </p>
          </div>

          <h3 className="text-h3 font-semibold text-center mb-12">Our Values</h3>
          
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

      {/* Charity Status Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Charity Status</h2>
            
            <div className="bg-light-gray p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Registration Details</h3>
                  <p className="text-gray-700">
                    <strong>Charity Number:</strong> XXXXX<br />
                    <strong>Registered:</strong> England and Wales<br />
                    <strong>Founded:</strong> 2018
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Registered Address</h3>
                  <p className="text-gray-700">
                    Meem Madaat<br />
                    123 Charity Street<br />
                    London, E1 2AB<br />
                    United Kingdom
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-gray-700">
                  Meem Madaat is registered with the Charity Commission for England and Wales.
                  We are committed to full transparency and publish annual reports and accounts
                  in accordance with charity regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-4">Our Team</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Led by a dedicated board of trustees who bring diverse expertise and a shared commitment
            to our mission.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustees.map((trustee, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">{trustee.name}</h3>
                <p className="text-gofundme-green font-medium mb-3">{trustee.role}</p>
                <p className="text-sm text-gray-600">{trustee.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps us continue our vital work in communities that need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="btn-primary bg-white text-gofundme-green hover:bg-gray-100">
              Donate Now
            </a>
            <a href="/volunteer" className="btn-secondary border-white text-white hover:bg-white hover:text-gofundme-green">
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 