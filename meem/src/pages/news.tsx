import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import { useState } from "react";

// Real Meem Madaat news articles based on llm.md timeline
const newsArticles = [
  {
    id: 1,
    title: "Gaza Emergency Appeal Raises £5,000 for Heal Humanity",
    date: "April 20, 2024",
    author: "Meem Madaat Team",
    category: "Emergency Relief",
    excerpt: "Responding to urgent humanitarian needs in Gaza, Meem Madaat launched a special £5,000 Ramadan appeal to support the Heal Humanity campaign. The appeal called on donors to contribute Zakat, Fitrah, Fidyah, and Lillah—with a commitment that 100% of donations reach affected families.",
    image: "/photos/Covid 19 packages/imgi_39_2e6e70_0dee80a305c3428389e2877e047f4f8d~mv2.jpg",
  },
  {
    id: 2,
    title: "Medical Clinics Now Serving 80+ Patients Daily",
    date: "April 12, 2024",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "Our medical clinics now rotate between Gharmallah and Shakreela Shareef, with our second permanent outpost officially opened. The expanded network now treats over 80 patients daily, providing free healthcare to rural communities across the Jhelum district.",
    image: "/photos/Clinic 1/imgi_15_2e6e70_447bb7eb26e6489ebd0f2ba6c8543ed8~mv2.jpg",
  },
  {
    id: 3,
    title: "Partnership with Preston City Council Delivers 200+ Care Packages",
    date: "November 15, 2023",
    author: "Meem Madaat Team",
    category: "Community Support",
    excerpt: "Through our 'Rebuild With Hope' partnership with DCA and Preston City Council, we delivered over 200 care packages to isolated elderly residents during the winter months. This collaborative initiative demonstrates the power of community partnership in supporting vulnerable populations.",
    image: "/photos/UK Projects/imgi_64_2e6e70_7432f652280c4f40a98855518414e4f2~mv2.jpg",
  },
  {
    id: 4,
    title: "Al-Khair Partnership Sponsors 15 Orphans and Supports Hospital Fund",
    date: "August 8, 2023",
    author: "Meem Madaat Team",
    category: "Partnerships",
    excerpt: "In collaboration with Al-Khair UK, our Preston team successfully raised £1,500 for a local hospital fund and £9,000 to sponsor 15 orphaned children in Pakistan. Funds were collected through joint community events, appeals, and innovative workplace giving schemes.",
    image: "/photos/Elderly & Orphans /imgi_9_2e6e70_bafbbdae55274d0abe7ca1787862fe61~mv2.jpg",
  },
  {
    id: 5,
    title: "Constitution Strengthened with Enhanced Governance Framework",
    date: "March 20, 2023",
    author: "Meem Madaat Team",
    category: "Governance",
    excerpt: "At our Extraordinary General Meeting, we formally amended our constitution to strengthen governance structures. Key changes include extended trustee terms, formalized Safeguarding Team protocols, and updated meeting quorum requirements to ensure robust organizational oversight.",
    image: "/photos/Launch/imgi_6_2e6e70_fb0b504540164cd1878064b6686508d3~mv2.jpg",
  },
  {
    id: 6,
    title: "15,000-Patient Milestone Reached Across All Medical Clinics",
    date: "July 2022",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "A historic milestone: across all our medical clinics in Pakistan, Meem Madaat has now treated over 15,000 people since our healthcare program began in 2019. This achievement represents thousands of lives improved through free medical care, antenatal services, and essential medicines.",
    image: "/photos/Clinic 2/imgi_21_2e6e70_53b12026c46f4e95b734f4e55e69b22a~mv2.jpg",
  },
  {
    id: 7,
    title: "Comprehensive Emergency Relief Response to Pakistan Floods",
    date: "August 2022",
    author: "Meem Madaat Team",
    category: "Emergency Relief",
    excerpt: "In response to devastating floods across Pakistan, Meem Madaat launched an emergency relief operation providing food, clean water, temporary shelter, and medical aid to affected communities. Our rapid response capabilities enabled us to reach remote areas within 48 hours of the disaster.",
    image: "/photos/Covid 19 packages/imgi_40_2e6e70_7acc070c06e242dfb0116c2c4e3ef268~mv2.jpg",
  },
  {
    id: 8,
    title: "Ramadan 2022: Record-Breaking Community Support Programs",
    date: "April 2022",
    author: "Meem Madaat Team",
    category: "Community Support",
    excerpt: "Our most comprehensive Ramadan program to date included clinic expansions, community iftar programs, food parcel distribution, and support for vulnerable families. The initiative reached over 5,000 beneficiaries across both UK and Pakistan operations.",
    image: "/photos/Covid 19 packages/imgi_41_2e6e70_b4a7b6739d74428ca42f4766787425e4~mv2.jpg",
  },
  {
    id: 9,
    title: "Eid Celebration Programs Bring Communities Together",
    date: "May 2022",
    author: "Meem Madaat Team",
    category: "Community Support",
    excerpt: "Our Eid 2022 programs demonstrated that 'Eid is a celebration for all.' Highlights included prison support at Hindley Prison, orphan sponsorship programs, and community celebration events that brought together people from all backgrounds in the spirit of unity and joy.",
    image: "/photos/UK Projects/imgi_65_2e6e70_c1f1ee9784ce435abd4f6f9bba47c52e~mv2.jpg",
  },
  {
    id: 10,
    title: "Shakreela Shareef Medical Project Launches",
    date: "April 2021",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "The Shakreela Shareef Project represents our third permanent medical clinic in rural Pakistan, operating under local management with expanded eye-care camps. This strategic expansion allows us to serve additional remote communities previously without access to healthcare services.",
    image: "/photos/Clinic 2/imgi_22_2e6e70_3e265a81305f4122982084425226feeb~mv2.jpg",
  },
  {
    id: 11,
    title: "Infrastructure Development Year: Water, Education, and Environmental Projects",
    date: "2021",
    author: "Meem Madaat Team",
    category: "Infrastructure",
    excerpt: "2021 marked a significant year for infrastructure development. Key projects included multiple water pump installations, educational facility improvements, Pakistan Day commemorative projects, and environmental conservation initiatives. These projects created lasting impact beyond immediate relief.",
    image: "/photos/Water Projects/imgi_10_2e6e70_180f575ab8fc41999539114d0cb568c2~mv2.jpg",
  },
  {
    id: 12,
    title: "Medical Programme Expansion: Two New Satellite Clinics",
    date: "September 2020",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "Despite pandemic challenges, we successfully expanded our medical aid program with two additional satellite clinics in villages neighboring our Gharmallah base. This expansion allows us to reach previously underserved communities while maintaining our quality standards of care.",
    image: "/photos/Clinic 1/imgi_16_2e6e70_7e2799e2456c44d691f07b430d1f22d0~mv2.jpg",
  },
  {
    id: 13,
    title: "Quranic Education Programs Launch During Pandemic",
    date: "March 2020",
    author: "Meem Madaat Team",
    category: "Education",
    excerpt: "Adapting to pandemic challenges, we launched innovative Quranic education programs and strengthened our UK-Pakistan operational bridge. These programs maintained community connections during lockdowns while providing spiritual and educational support to families.",
    image: "/photos/Launch/imgi_7_2e6e70_b27b0f56d98042929a95976e15b8d41a~mv2.jpg",
  },
  {
    id: 14,
    title: "Historic Community Event at Masjid E Raza Community Hall",
    date: "November 29, 2019",
    author: "Meem Madaat Team",
    category: "Milestones",
    excerpt: "Our largest community event to date brought together over 300 people at Masjid E Raza Community Hall in Preston. This milestone event strengthened community partnerships, raised significant funds, and demonstrated the power of collective action in supporting charitable causes.",
    image: "/photos/Launch/imgi_8_2e6e70_7fca97aaadf841fb9f6373a9591c95e4~mv2.jpg",
  },
  {
    id: 15,
    title: "First Medical Clinic Opens in Gharmallah",
    date: "March 2019",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "Our flagship medical clinic in Gharmallah officially opened, offering weekly medical camps with volunteer doctors providing general check-ups, antenatal care, and essential medicine distribution. This clinic would become the foundation of our healthcare program serving thousands.",
    image: "/photos/Clinic 1/imgi_17_2e6e70_384bdf4667e74950bf3aff572096b093~mv2.jpg",
  },
  {
    id: 16,
    title: "First UK Homeless Outreach Program Launches",
    date: "December 2018",
    author: "Meem Madaat Team",
    category: "Community Support",
    excerpt: "Our inaugural UK homeless outreach program delivered 150 hot-meal packs, blankets, and hygiene kits to local shelters in Preston. This program established our commitment to serving vulnerable populations both locally and internationally.",
    image: "/photos/UK Projects/imgi_66_2e6e70_38dd833f4fb54299919958b6fa31b196~mv2.jpg",
  },
  {
    id: 17,
    title: "First Clean Water Pump Installed in Gharmallah",
    date: "June 2018",
    author: "Meem Madaat Team",
    category: "Infrastructure",
    excerpt: "Our first major infrastructure project brought clean water to over 200 families in Gharmallah, Pakistan. This solar-powered water pump significantly reduced waterborne diseases and eliminated the daily 5-kilometer walk that women and children previously made to fetch water.",
    image: "/photos/Water Projects/imgi_11_2e6e70_dcc9e11754ad4195bfc6f0ce94752df5~mv2.jpg",
  },
  {
    id: 18,
    title: "Meem Madaat Formally Established as Charitable Group",
    date: "January 15, 2018",
    author: "Meem Madaat Founders",
    category: "Milestones",
      excerpt: "Meem Madaat was formally established as a charitable group in England & Wales. Our constitution was adopted, detailing our charitable objects: poverty relief, health advancement, education, and community cohesion. This establishment marked our transition from community group to formal charity.",
    image: "/photos/Launch/imgi_6_2e6e70_fb0b504540164cd1878064b6686508d3~mv2.jpg",
  },
  {
    id: 19,
    title: "The Vision Begins: Meem Madaat Conceived",
    date: "January 1, 2016",
    author: "Meem Madaat Founders",
    category: "Milestones",
    excerpt: "On the first day of 2016, a small group of UK volunteers with family ties to rural Punjab, Pakistan, came together with a shared vision. Inspired by Islamic principles of service and inclusivity, they committed to helping poverty-stricken villages in the Jhelum district while supporting vulnerable people in Preston. This was the beginning of our journey.",
    image: "/photos/Family Support/imgi_13_2e6e70_ffb273c72313415687b5c62abc93b472~mv2.jpg",
  },
];

const categories = [
  "All",
  "Emergency Relief",
  "Medical Aid",
  "Community Support",
  "Partnerships",
  "Governance",
  "Education",
  "Infrastructure",
  "Milestones",
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <Layout>
      <Head>
        <title>News & Updates - Meem Madaat | Latest Stories & Milestones</title>
        <meta
          name="description"
          content="Stay updated with Meem Madaat's journey since 2016. From our founding vision to major milestones, medical clinic openings, emergency relief operations, and community partnerships."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">News & Updates</h1>
          <p className="text-xl mx-auto">
            Follow our journey from 2016 to today - every milestone, every life changed, every community transformed
          </p>
        </div>
      </section>

      {/* Latest Impact Highlights */}
      <section className="py-12 bg-gofundme-green/5">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-8">Recent Milestones</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">80+ Daily Patients</h3>
              <p className="text-gray-600 text-sm mb-3">
                Our expanded clinic network now serves over 80 patients daily across Gharmallah and Shakreela Shareef.
              </p>
              <Link href="/news/2" className="text-gofundme-green font-medium text-sm hover:underline">
                Read more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">£5,000 Gaza Appeal</h3>
              <p className="text-gray-600 text-sm mb-3">
                Special Ramadan appeal successfully raised £5,000 for emergency relief through Heal Humanity partnership.
              </p>
              <Link href="/news/1" className="text-gofundme-green font-medium text-sm hover:underline">
                Read more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">15,000 Patients Treated</h3>
              <p className="text-gray-600 text-sm mb-3">
                Historic milestone reached across all medical clinics since our healthcare program began in 2019.
              </p>
              <Link href="/news/6" className="text-gofundme-green font-medium text-sm hover:underline">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-8">Our Journey Timeline</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gofundme-green/10 p-8 rounded-lg">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gofundme-green mb-2">2016</div>
                  <p className="text-sm text-gray-600">Vision conceived by UK volunteers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gofundme-green mb-2">2018</div>
                  <p className="text-sm text-gray-600">Formal establishment & first water pump</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gofundme-green mb-2">2019</div>
                  <p className="text-sm text-gray-600">First medical clinic opens in Gharmallah</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gofundme-green mb-2">2024</div>
                  <p className="text-sm text-gray-600">3 clinics serving 80+ patients daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-light-gray border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-gofundme-green text-white"
                    : "bg-white text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="card hover:shadow-lg transition-shadow">
                <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="text-sm px-3 py-1 bg-gofundme-green/10 text-gofundme-green rounded-full">
                    {article.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3">
                  <Link href={`/news/${article.id}`} className="hover:text-gofundme-green transition-colors">
                    {article.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">By {article.author}</p>
                  <Link 
                    href={`/news/${article.id}`}
                    className="text-gofundme-green font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className=" mx-auto text-center">
            <h2 className="text-h2 font-semibold mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to our newsletter for monthly updates on our projects, impact stories, and community events
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:ring-gofundme-green focus:border-gofundme-green"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-8">Follow Our Journey</h2>
          <p className="text-lg text-gray-700 mb-8">
            Stay updated with our daily work and impact through our social media channels
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/meemmadaatwelfaregroup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.youtube.com/channel/UCDq3MHeLr8w_Qj2Ju60zNrA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            
            <a 
              href="https://instagram.com/meemmadaatwelfaregroup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            
            <a 
              href="https://twitter.com/meemmadaat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="X (formerly Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 