import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";

// Mock data for demonstration
const newsArticles = [
  {
    id: 1,
    title: "New Medical Clinic Opens in Rural Pakistan",
    date: "March 15, 2024",
    author: "Sarah Thompson",
    category: "Medical Aid",
    excerpt: "We're proud to announce the opening of our 10th medical clinic in the village of Khairpur, Sindh. This clinic will serve over 5,000 residents who previously had to travel hours for basic healthcare.",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    title: "Winter Appeal Raises £150,000 for UK Homeless",
    date: "March 10, 2024",
    author: "James Wilson",
    category: "Homeless Support",
    excerpt: "Thanks to your generous donations, we've exceeded our winter appeal target by 50%. These funds will provide warm meals, shelter, and essential supplies to homeless individuals across five UK cities.",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    title: "Education Program Reaches 1,000 Children",
    date: "March 5, 2024",
    author: "Fatima Patel",
    category: "Education",
    excerpt: "Our literacy program in Pakistan has now reached over 1,000 children across 15 schools. We're seeing remarkable progress with 85% of students achieving basic literacy within six months.",
    image: "/images/news-3.jpg",
  },
  {
    id: 4,
    title: "Volunteer Spotlight: Meet Dr. Hassan",
    date: "February 28, 2024",
    author: "Ahmed Khan",
    category: "Volunteers",
    excerpt: "Dr. Hassan has been volunteering at our Karachi clinic for three years. Learn about his inspiring journey and why he dedicates his weekends to serving those in need.",
    image: "/images/news-4.jpg",
  },
  {
    id: 5,
    title: "Partnership with Local UK Food Banks",
    date: "February 20, 2024",
    author: "Sarah Thompson",
    category: "Partnerships",
    excerpt: "We're excited to announce new partnerships with five food banks across London, Manchester, and Birmingham. This collaboration will help us reach more families facing food insecurity.",
    image: "/images/news-5.jpg",
  },
  {
    id: 6,
    title: "Ramadan Campaign Launch",
    date: "February 15, 2024",
    author: "Muhammad Ali",
    category: "Campaigns",
    excerpt: "As Ramadan approaches, we're launching our annual campaign to provide iftar meals and food packages to families in need across the UK and Pakistan.",
    image: "/images/news-6.jpg",
  },
];

const categories = [
  "All",
  "Medical Aid",
  "Homeless Support",
  "Education",
  "Volunteers",
  "Partnerships",
  "Campaigns",
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <Layout>
      <Head>
        <title>News & Updates - Meem Madaat | Latest Stories & Announcements</title>
        <meta
          name="description"
          content="Stay updated with the latest news, stories, and announcements from Meem Madaat's charitable work in the UK and Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">News & Updates</h1>
          <p className="text-xl mx-auto">
            Stay informed about our latest initiatives, success stories, and the impact of your support
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-gofundme-green text-white"
                    : "bg-light-gray text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="card hover:shadow-lg transition-shadow">
                <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
                
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
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className=" mx-auto text-center">
            <h2 className="text-h2 font-semibold mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to our newsletter for monthly updates on our work and impact
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
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-8">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center hover:bg-gofundme-green hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center hover:bg-gofundme-green hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center hover:bg-gofundme-green hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 