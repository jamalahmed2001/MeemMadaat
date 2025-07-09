import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

// Mock data for demonstration
const impactStats = {
  totalRaised: "£2.5M",
  peopleHelped: "50,000+",
  donationPolicy: "95%",
};

const testimonial = {
  quote: "Meem Madaat's medical clinic saved my daughter's life. Their free healthcare services have been a blessing for our community.",
  name: "Fatima Ahmed",
  role: "Beneficiary, Pakistan",
  image: "/images/testimonial-1.jpg", // Placeholder
};

const latestNews = [
  {
    id: 1,
    title: "New Medical Clinic Opens in Rural Pakistan",
    date: "March 15, 2024",
    excerpt: "We're proud to announce the opening of our 10th medical clinic...",
  },
  {
    id: 2,
    title: "Winter Appeal Raises £150,000 for UK Homeless",
    date: "March 10, 2024",
    excerpt: "Thanks to your generous donations, we've exceeded our winter appeal target...",
  },
  {
    id: 3,
    title: "Education Program Reaches 1,000 Children",
    date: "March 5, 2024",
    excerpt: "Our literacy program in Pakistan has now reached over 1,000 children...",
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Meem Madaat - UK Registered Charity | Help Us Make a Difference</title>
        <meta
          name="description"
          content="UK-registered charity dedicated to relieving poverty, advancing healthcare, and promoting social cohesion in the UK and Pakistan. Charity No. XXXXX"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-teal to-dark-teal/90">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-h1 font-bold mb-4">Help Us Make a Difference</h1>
          <p className="text-xl mb-2">UK-registered charity (Charity No. XXXXX)</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Dedicated to relieving poverty, advancing healthcare, and promoting social cohesion
            in the UK and Pakistan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary text-lg px-8 py-4">
              Donate Now
            </Link>
            <Link href="/our-work" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Our Objects Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-4">Our Charitable Objects</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            We work tirelessly to create positive change in communities across the UK and Pakistan
            through our three core areas of focus.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Healthcare Card */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Providing free medical care and health education to underserved communities
              </p>
              <Link href="/our-work/medical-aid" className="text-gofundme-green font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* UK Homeless Support Card */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold mb-3">UK Homeless Support</h3>
              <p className="text-gray-600 mb-4">
                Providing shelter, meals, and support services to homeless individuals in the UK
              </p>
              <Link href="/our-work/homeless-support" className="text-gofundme-green font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Education Card */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold mb-3">Education</h3>
              <p className="text-gray-600 mb-4">
                Supporting education and community development initiatives in Pakistan
              </p>
              <Link href="/our-work/education" className="text-gofundme-green font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Our Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-gofundme-green mb-2">{impactStats.totalRaised}</p>
              <p className="text-lg font-semibold">Total Raised</p>
              <p className="text-gray-600">Since our founding</p>
            </div>
            
            <div>
              <p className="text-5xl font-bold text-gofundme-green mb-2">{impactStats.peopleHelped}</p>
              <p className="text-lg font-semibold">People Helped</p>
              <p className="text-gray-600">Across UK and Pakistan</p>
            </div>
            
            <div>
              <p className="text-5xl font-bold text-gofundme-green mb-2">{impactStats.donationPolicy}</p>
              <p className="text-lg font-semibold">Goes to Beneficiaries</p>
              <p className="text-gray-600">Of every donation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <blockquote className="text-xl italic mb-6">
              "{testimonial.quote}"
            </blockquote>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Latest News & Updates</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <article key={article.id} className="card">
                <time className="text-sm text-gray-500">{article.date}</time>
                <h3 className="text-xl font-semibold mt-2 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link href={`/news/${article.id}`} className="text-gofundme-green font-semibold hover:underline">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/news" className="btn-secondary">
              View All News
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
