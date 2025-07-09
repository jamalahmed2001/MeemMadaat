import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";

// Mock data for demonstration
type YearData = {
  totalDonations: string;
  peopleHelped: string;
  programsActive: number;
  volunteersEngaged: number;
};

const impactData: Record<string, YearData> = {
  "2024": {
    totalDonations: "£850,000",
    peopleHelped: "15,000",
    programsActive: 12,
    volunteersEngaged: 325,
  },
  "2023": {
    totalDonations: "£650,000",
    peopleHelped: "12,000",
    programsActive: 10,
    volunteersEngaged: 280,
  },
  "2022": {
    totalDonations: "£450,000",
    peopleHelped: "8,500",
    programsActive: 8,
    volunteersEngaged: 200,
  },
};

const storiesOfChange = [
  {
    id: 1,
    title: "From Streets to Stability",
    category: "Homeless Support",
    image: "/images/story-1.jpg",
    excerpt: "John's journey from homelessness to employment shows the power of comprehensive support.",
    impact: "Now employed and housed",
  },
  {
    id: 2,
    title: "A Village Transformed",
    category: "Medical Aid",
    image: "/images/story-2.jpg",
    excerpt: "How our clinic in rural Sindh became a lifeline for 5,000 residents.",
    impact: "90% reduction in preventable diseases",
  },
  {
    id: 3,
    title: "Education Opens Doors",
    category: "Education",
    image: "/images/story-3.jpg",
    excerpt: "Zainab's story: from illiteracy to university through our education program.",
    impact: "First in family to attend university",
  },
  {
    id: 4,
    title: "Community Kitchen Success",
    category: "Homeless Support",
    image: "/images/story-4.jpg",
    excerpt: "Our London community kitchen now serves 500 meals daily to those in need.",
    impact: "Zero hunger in the neighborhood",
  },
  {
    id: 5,
    title: "Breaking the Cycle",
    category: "Education",
    image: "/images/story-5.jpg",
    excerpt: "How vocational training is creating opportunities for youth in Pakistan.",
    impact: "85% job placement rate",
  },
];

export default function Impact() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const currentData = impactData[selectedYear]!;

  return (
    <Layout>
      <Head>
        <title>Impact & Reports - Meem Madaat | Our Results & Transparency</title>
        <meta
          name="description"
          content="Explore Meem Madaat's impact through data, stories, and annual reports. See how your donations make a difference."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Impact & Reports</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transparency is at the heart of our work. Explore our impact through data, stories,
            and comprehensive reports.
          </p>
        </div>
      </section>

      {/* Interactive Dashboard */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Impact Dashboard</h2>

          {/* Year Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-light-gray p-1">
              {Object.keys(impactData).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    selectedYear === year
                      ? "bg-gofundme-green text-white"
                      : "text-gray-700 hover:text-gofundme-green"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <p className="text-4xl font-bold text-gofundme-green mb-2">
                {currentData.totalDonations}
              </p>
              <p className="text-lg font-semibold">Total Donations</p>
              <p className="text-sm text-gray-600 mt-2">Funds raised</p>
            </div>
            <div className="card text-center">
              <p className="text-4xl font-bold text-gofundme-green mb-2">
                {currentData.peopleHelped}
              </p>
              <p className="text-lg font-semibold">People Helped</p>
              <p className="text-sm text-gray-600 mt-2">Direct beneficiaries</p>
            </div>
            <div className="card text-center">
              <p className="text-4xl font-bold text-gofundme-green mb-2">
                {currentData.programsActive}
              </p>
              <p className="text-lg font-semibold">Active Programs</p>
              <p className="text-sm text-gray-600 mt-2">Across UK & Pakistan</p>
            </div>
            <div className="card text-center">
              <p className="text-4xl font-bold text-gofundme-green mb-2">
                {currentData.volunteersEngaged}
              </p>
              <p className="text-lg font-semibold">Volunteers</p>
              <p className="text-sm text-gray-600 mt-2">Active participants</p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-light-gray rounded-lg p-8 text-center">
              <p className="text-gray-600">
                Interactive charts showing donation allocation, program growth, and beneficiary
                demographics would be displayed here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Impact Report Summary */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">
              Annual Impact Report Summary
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">2023 Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-gofundme-green mr-3 flex-shrink-0 mt-1"
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
                  <p className="text-gray-700">
                    Opened 3 new medical clinics in underserved areas of Pakistan
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-gofundme-green mr-3 flex-shrink-0 mt-1"
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
                  <p className="text-gray-700">
                    Provided 50,000 meals to homeless individuals across 5 UK cities
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-gofundme-green mr-3 flex-shrink-0 mt-1"
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
                  <p className="text-gray-700">
                    Enrolled 500 new students in our education programs
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-gofundme-green mr-3 flex-shrink-0 mt-1"
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
                  <p className="text-gray-700">
                    Maintained 95% of donations going directly to charitable activities
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link href="/documents/annual-report-2023.pdf" className="btn-primary inline-flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Full Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-4">Stories of Change</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Behind every number is a human story. These are just a few of the lives transformed
            through your support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storiesOfChange.slice(0, 3).map((story) => (
              <article key={story.id} className="card">
                <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
                <span className="inline-block px-3 py-1 bg-gofundme-green/10 text-gofundme-green text-sm font-semibold rounded-full mb-3">
                  {story.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-3">{story.excerpt}</p>
                <p className="text-sm font-semibold text-gofundme-green">
                  Impact: {story.impact}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/stories" className="btn-secondary">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Be Part of Our Impact</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every donation, no matter the size, contributes to these life-changing results.
          </p>
          <Link
            href="/donate"
            className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
          >
            Make Your Impact Today
          </Link>
        </div>
      </section>
    </Layout>
  );
} 