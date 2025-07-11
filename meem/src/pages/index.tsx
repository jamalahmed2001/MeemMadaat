import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

// Updated impact data based on llm.md timeline
const impactStats = {
  totalRaised: "£2.5M+",
  peopleHelped: "50,000+",
  donationPolicy: "95%",
  yearsActive: "8+",
  clinics: "3",
  countries: "2"
};

const testimonial = {
  quote: "Meem Madaat's medical clinic in Gharmallah saved my daughter's life. Their free healthcare services have been a blessing for our entire community of 5,000 people.",
  name: "Fatima Ahmed",
  role: "Community Member, Gharmallah",
  image: "/photos/Clinic 1/imgi_15_2e6e70_447bb7eb26e6489ebd0f2ba6c8543ed8~mv2.jpg",
};

// Real news based on llm.md timeline
const latestNews = [
  {
    id: 1,
    title: "Gaza Emergency Appeal Raises £5,000 for Heal Humanity",
    date: "April 20, 2024",
    excerpt: "Special Ramadan appeal supports urgent humanitarian relief through Zakat, Fitrah, Fidyah, and Lillah donations...",
  },
  {
    id: 2,
    title: "Medical Clinics Now Serving 80+ Patients Daily",
    date: "April 12, 2024",
    excerpt: "Our expanded clinic network between Gharmallah and Shakreela Shareef reaches new milestone...",
  },
  {
    id: 3,
    title: "Partnership with Preston City Council Delivers 200+ Care Packages",
    date: "November 15, 2023",
    excerpt: "Rebuild With Hope initiative supports isolated elderly residents through winter months...",
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Meem Madaat - UK Registered Charity | Transforming Lives Since 2016</title>
        <meta
          name="description"
          content="UK-registered charity serving communities since 2016. Medical clinics, homeless support, emergency relief across UK and Pakistan. 95% of donations reach beneficiaries. Charity No. XXXXX"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/meem-madaat-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/meem-madaat-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/meem-madaat-logo.png" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-teal via-dark-teal/95 to-gofundme-green/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gofundme-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gofundme-green/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white px-4">
          <div className="mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/meem-madaat-logo.png"
                alt="Meem Madaat Logo"
                width={200}
                height={200}
                className="mx-auto"
                priority
              />
            </div>
            
            {/* Charity badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <svg className="w-5 h-5 text-gofundme-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">UK Registered Charity No. XXXXX • Serving Since 2016</span>
            </div>
            
            {/* Main heading with animation */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforming Lives Through{' '}
              <span className="text-gofundme-green relative">
                Compassion
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gofundme-green/30 rounded-full"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
              From £3/month standing orders to life-changing projects
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-12 text-white/80 mx-auto leading-relaxed">
              Since 2016, we've been dedicated to relieving poverty, advancing healthcare, and promoting 
              social cohesion in communities across the UK and Pakistan
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/donate" className="group relative overflow-hidden bg-gofundme-green hover:bg-gofundme-green/90 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">💝 Donate Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gofundme-green to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link href="/volunteer" className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Become a Volunteer
                </span>
              </Link>
            </div>
            
            {/* Impact preview stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gofundme-green mb-1">{impactStats.totalRaised}</div>
                <div className="text-xs md:text-sm text-white/70">Total Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gofundme-green mb-1">{impactStats.peopleHelped}</div>
                <div className="text-xs md:text-sm text-white/70">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gofundme-green mb-1">{impactStats.clinics}</div>
                <div className="text-xs md:text-sm text-white/70">Medical Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gofundme-green mb-1">{impactStats.donationPolicy}</div>
                <div className="text-xs md:text-sm text-white/70">Goes to Beneficiaries</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Our Impact Areas Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-4">Our Impact Areas</h2>
          <p className="text-lg text-center mb-12 mx-auto">
            We work tirelessly across four key areas to create lasting positive change in communities
            throughout the UK and Pakistan.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Medical Aid Card */}
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold mb-3">Medical Aid</h3>
              <p className="text-gray-600 mb-4 text-sm">
                3 clinics serving 80+ patients daily with free healthcare in rural Pakistan
              </p>
              <Link href="/our-work/medical-aid" className="text-gofundme-green font-semibold hover:underline text-sm">
                Learn More →
              </Link>
            </div>

            {/* UK Homeless Support Card */}
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold mb-3">UK Community Support</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Homeless support, prison programs, and elderly care across UK cities
              </p>
              <Link href="/our-work" className="text-gofundme-green font-semibold hover:underline text-sm">
                Learn More →
              </Link>
            </div>

            {/* Emergency Relief Card */}
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold mb-3">Emergency Relief</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Rapid response to floods, earthquakes, and humanitarian crises
              </p>
              <Link href="/our-work/emergency-relief" className="text-gofundme-green font-semibold hover:underline text-sm">
                Learn More →
              </Link>
            </div>

            {/* Education Card */}
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold mb-3">Education & Development</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Literacy programs, Quranic education, and community development
              </p>
              <Link href="/our-work/education" className="text-gofundme-green font-semibold hover:underline text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-4">Our Impact Since 2016</h2>
          <p className="text-lg text-center mb-12 text-gray-600">
            8 years of consistent service, growth, and community transformation
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-gofundme-green mb-2">{impactStats.totalRaised}</p>
              <p className="text-lg font-semibold">Total Raised</p>
              <p className="text-gray-600 text-sm">Since 2016</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-gofundme-green mb-2">{impactStats.peopleHelped}</p>
              <p className="text-lg font-semibold">People Helped</p>
              <p className="text-gray-600 text-sm">Across UK and Pakistan</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-gofundme-green mb-2">{impactStats.clinics}</p>
              <p className="text-lg font-semibold">Medical Clinics</p>
              <p className="text-gray-600 text-sm">Operating in Pakistan</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-gofundme-green mb-2">{impactStats.donationPolicy}</p>
              <p className="text-lg font-semibold">Goes to Beneficiaries</p>
              <p className="text-gray-600 text-sm">Of every donation</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/impact" className="btn-secondary">
              View Detailed Impact Report
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Recent Achievements</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">80+ Daily Patients</h3>
              <p className="text-gray-600 mb-4">
                Our medical clinics in Gharmallah and Shakreela Shareef now serve over 80 patients daily, providing free healthcare to rural communities.
              </p>
              <span className="text-sm text-gofundme-green font-medium">April 2024</span>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">£5,000 Gaza Appeal</h3>
              <p className="text-gray-600 mb-4">
                Successfully raised £5,000 for emergency relief in Gaza through our special Ramadan appeal supporting Heal Humanity.
              </p>
              <span className="text-sm text-gofundme-green font-medium">April 2024</span>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnership Success</h3>
              <p className="text-gray-600 mb-4">
                Delivered 200+ care packages to isolated elderly through our partnership with Preston City Council and DCA.
              </p>
              <span className="text-sm text-gofundme-green font-medium">November 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gofundme-green/5">
        <div className="container-custom">
          <div className="mx-auto text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <blockquote className="text-xl italic mb-6 text-gray-700">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <p className="font-semibold text-gray-800">{testimonial.name}</p>
            <p className="text-gray-600">{testimonial.role}</p>
            <div className="mt-8">
              <Link href="/stories" className="text-gofundme-green font-semibold hover:underline">
                Read More Inspiring Stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Latest News & Updates</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <article key={article.id} className="card hover:shadow-lg transition-shadow">
                <div className="h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={article.id === 1 ? "/photos/Covid 19 packages/imgi_39_2e6e70_0dee80a305c3428389e2877e047f4f8d~mv2.jpg" : 
                         article.id === 2 ? "/photos/Clinic 1/imgi_15_2e6e70_447bb7eb26e6489ebd0f2ba6c8543ed8~mv2.jpg" : 
                         "/photos/UK Projects/imgi_64_2e6e70_7432f652280c4f40a98855518414e4f2~mv2.jpg"}
                    alt={article.title}
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
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

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 mx-auto">
            From £3/month standing orders to major donations, every contribution creates lasting change
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary bg-white text-gofundme-green hover:bg-gray-100">
              Start Donating Today
            </Link>
            <Link href="/get-involved" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors">
              Get Involved
            </Link>
            <Link href="/stories" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors">
              Read Our Stories
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
