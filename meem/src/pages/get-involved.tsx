import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const involvementOptions = [
  {
    title: "Donate",
    icon: "💝",
    description: "Your donations directly support our programs and help us reach more people in need.",
    features: [
      "One-time or monthly donations",
      "Sponsor specific programs",
      "Gift Aid eligible",
      "100% secure payments",
    ],
    link: "/donate",
    buttonText: "Donate Now",
  },
  {
    title: "Volunteer",
    icon: "🤝",
    description: "Join our team of dedicated volunteers making a difference in communities.",
    features: [
      "Flexible time commitment",
      "Various roles available",
      "Training provided",
      "Make lasting impact",
    ],
    link: "/volunteer",
    buttonText: "Apply to Volunteer",
  },
  {
    title: "Fundraise",
    icon: "🎯",
    description: "Organize your own fundraising event or campaign to support our cause.",
    features: [
      "Fundraising toolkit",
      "Personal fundraising page",
      "Support from our team",
      "Recognition for efforts",
    ],
    link: "/fundraise",
    buttonText: "Start Fundraising",
  },
];

const otherWays = [
  {
    title: "Corporate Partnership",
    description: "Partner with us for CSR initiatives and employee engagement programs.",
    icon: "🏢",
  },
  {
    title: "Legacy Giving",
    description: "Leave a lasting impact by including Meem Madaat in your will.",
    icon: "🌟",
  },
  {
    title: "Spread the Word",
    description: "Share our mission on social media and help raise awareness.",
    icon: "📢",
  },
  {
    title: "In-Kind Donations",
    description: "Donate goods, services, or professional expertise to support our work.",
    icon: "📦",
  },
];

export default function GetInvolved() {
  return (
    <Layout>
      <Head>
        <title>Get Involved - Meem Madaat | Donate, Volunteer, Fundraise</title>
        <meta
          name="description"
          content="Discover how you can support Meem Madaat's charitable work through donations, volunteering, fundraising, and more."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Get Involved</h1>
          <p className="text-xl max-w-3xl mx-auto">
            There are many ways to support our mission. Whether through donations, volunteering,
            or spreading awareness, every contribution makes a difference.
          </p>
        </div>
      </section>

      {/* Main Options */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{option.icon}</div>
                  <h2 className="text-h3 font-semibold mb-3">{option.title}</h2>
                  <p className="text-gray-600">{option.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-gofundme-green mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <Link href={option.link} className="btn-primary inline-block">
                    {option.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Other Ways to Help</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {otherWays.map((way, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{way.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{way.title}</h3>
                <p className="text-sm text-gray-600">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-semibold mb-6">Your Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <p className="text-4xl font-bold text-gofundme-green mb-2">£25</p>
                <p className="text-gray-700">Provides medical care for 5 patients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gofundme-green mb-2">£50</p>
                <p className="text-gray-700">Feeds 20 homeless individuals for a week</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gofundme-green mb-2">£100</p>
                <p className="text-gray-700">Sponsors a child's education for 3 months</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              Every contribution, whether time, money, or effort, creates ripples of positive change
              in the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">
            What Our Supporters Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <blockquote className="text-gray-700 mb-4">
                "Volunteering with Meem Madaat has been life-changing. Seeing the direct impact
                of our work on families in need is incredibly rewarding."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Emma Johnson</p>
                  <p className="text-sm text-gray-600">Volunteer since 2021</p>
                </div>
              </div>
            </div>

            <div className="card">
              <blockquote className="text-gray-700 mb-4">
                "I organized a charity run for Meem Madaat and raised £5,000. The support from
                their team made it easy and enjoyable."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">David Chen</p>
                  <p className="text-sm text-gray-600">Fundraiser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose how you'd like to support our mission and join thousands of others
            creating positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-white hover:text-gofundme-green"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 