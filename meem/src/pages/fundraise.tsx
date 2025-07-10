import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";

const fundraisingIdeas = [
  {
    title: "Charity Walk/Run",
    description: "Organize a sponsored walk or run in your local area",
    difficulty: "Easy",
    potential: "£500-£2,000",
    time: "2-3 hours",
    category: "events",
    tips: ["Choose a popular local route", "Set up online sponsorship", "Get local business support"]
  },
  {
    title: "Bake Sale",
    description: "Organize a bake sale at work, school, or community center",
    difficulty: "Easy",
    potential: "£200-£800",
    time: "1 day",
    category: "events",
    tips: ["Get volunteers to donate baked goods", "Set up in high-traffic areas", "Accept card payments"]
  },
  {
    title: "Dinner Party",
    description: "Host a themed dinner party and ask for donations",
    difficulty: "Medium",
    potential: "£300-£1,500",
    time: "1 evening",
    category: "social",
    tips: ["Choose a meaningful theme", "Share our work during the event", "Provide donation cards"]
  },
  {
    title: "Skills Challenge",
    description: "Use your talents - music performance, art auction, etc.",
    difficulty: "Medium",
    potential: "£400-£2,500",
    time: "Variable",
    category: "skills",
    tips: ["Leverage your existing skills", "Partner with local venues", "Promote widely on social media"]
  },
  {
    title: "Corporate Challenge",
    description: "Engage your workplace in team fundraising activities",
    difficulty: "Medium",
    potential: "£800-£5,000",
    time: "1-2 weeks",
    category: "corporate",
    tips: ["Get management buy-in", "Create team competitions", "Tie to company values"]
  },
  {
    title: "Online Campaign",
    description: "Create a digital fundraising campaign with social media",
    difficulty: "Easy",
    potential: "£200-£3,000",
    time: "Ongoing",
    category: "digital",
    tips: ["Tell your personal story", "Use compelling visuals", "Regular updates to donors"]
  }
];

const fundraisingTools = [
  {
    name: "Fundraising Pack",
    description: "Complete starter pack with templates, posters, and guidance",
    includes: ["Event planning checklist", "Poster templates", "Sponsorship forms", "Social media assets"]
  },
  {
    name: "JustGiving Integration",
    description: "Set up your personal fundraising page with our official charity link",
    includes: ["Personal page setup", "Donation tracking", "Automatic Gift Aid", "Progress sharing"]
  },
  {
    name: "Marketing Support",
    description: "Professional marketing materials and social media content",
    includes: ["High-quality images", "Social media templates", "Press release template", "Video content"]
  },
  {
    name: "Event Insurance",
    description: "We can provide insurance coverage for approved events",
    includes: ["Public liability insurance", "Event cancellation cover", "Equipment protection", "Legal support"]
  }
];

const successStories = [
  {
    name: "Sarah's Marathon Challenge",
    amount: "£3,200",
    story: "Sarah ran the London Marathon and raised over £3,000 by sharing her training journey and connecting it to our medical aid work.",
    image: "/images/fundraiser-1.jpg"
  },
  {
    name: "Community Iftar Event",
    amount: "£5,800",
    story: "The Preston Muslim Community organized an iftar dinner that brought together 200 people and raised significant funds for our emergency relief work.",
    image: "/images/fundraiser-2.jpg"
  },
  {
    name: "School Charity Week",
    amount: "£1,400",
    story: "Riverside Primary School dedicated their charity week to Meem Madaat, organizing various activities that engaged students and parents.",
    image: "/images/fundraiser-3.jpg"
  }
];

export default function Fundraise() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    plannedDate: "",
    target: "",
    description: "",
    support: []
  });

  const categories = [
    { id: "all", label: "All Ideas" },
    { id: "events", label: "Events" },
    { id: "social", label: "Social" },
    { id: "skills", label: "Skills-Based" },
    { id: "corporate", label: "Corporate" },
    { id: "digital", label: "Digital" }
  ];

  const filteredIdeas = selectedCategory === "all" 
    ? fundraisingIdeas 
    : fundraisingIdeas.filter(idea => idea.category === selectedCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Fundraising form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      plannedDate: "",
      target: "",
      description: "",
      support: []
    });
  };

  return (
    <Layout>
      <Head>
        <title>Fundraise - Meem Madaat | Start Your Fundraising Journey</title>
        <meta
          name="description"
          content="Start your fundraising journey with Meem Madaat. Get ideas, tools, and support to raise funds for our charitable work."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Start Fundraising</h1>
          <p className="text-xl mx-auto">
            Turn your passion into purpose. Every pound you raise helps us transform lives.
          </p>
        </div>
      </section>

      {/* Why Fundraise Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className=" mx-auto text-center">
            <h2 className="text-h2 font-semibold mb-6">Why Fundraise for Meem Madaat?</h2>
            <p className="text-lg text-gray-700 mb-12">
              When you fundraise for us, you're not just raising money - you're building awareness, 
              engaging your community, and creating lasting change. Your efforts directly support our 
              life-saving work across the UK and Pakistan.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Direct Impact</h3>
                <p className="text-sm text-gray-600">Every pound you raise goes directly to our programs, with 95% reaching those in need</p>
              </div>
              <div className="card text-center">
                <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold mb-2">Community Building</h3>
                <p className="text-sm text-gray-600">Bring people together around a meaningful cause and build lasting connections</p>
              </div>
              <div className="card text-center">
                <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold mb-2">Personal Growth</h3>
                <p className="text-sm text-gray-600">Develop leadership skills, build confidence, and create meaningful experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising Ideas */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Fundraising Ideas</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-gofundme-green text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Ideas Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredIdeas.map((idea, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{idea.title}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    idea.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    idea.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {idea.difficulty}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{idea.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-semibold">Potential:</span> {idea.potential}
                  </div>
                  <div>
                    <span className="font-semibold">Time:</span> {idea.time}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Tips for Success:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {idea.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-gofundme-green rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full btn-primary">
                  Get Started with This Idea
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Tools */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Tools & Support</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {fundraisingTools.map((tool, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-4">{tool.name}</h3>
                <p className="text-gray-700 mb-4">{tool.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Includes:</h4>
                  <ul className="text-sm text-gray-600">
                    {tool.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-gofundme-green mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Success Stories</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card">
                <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">{story.name}</h3>
                  <p className="text-2xl font-bold text-gofundme-green mb-3">{story.amount}</p>
                  <p className="text-sm text-gray-600">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className=" mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Register Your Fundraising Event</h2>
            
            <form onSubmit={handleSubmit} className="bg-light-gray p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Event Type *</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                  >
                    <option value="">Select an event type</option>
                    {fundraisingIdeas.map((idea, index) => (
                      <option key={index} value={idea.title}>{idea.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Planned Date</label>
                  <input
                    type="date"
                    name="plannedDate"
                    value={formData.plannedDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Fundraising Target</label>
                  <input
                    type="text"
                    name="target"
                    value={formData.target}
                    onChange={handleInputChange}
                    placeholder="e.g., £500"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Tell us about your event *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Register My Event
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Need Help Getting Started?</h2>
          <p className="text-xl mb-8">
            Our fundraising team is here to support you every step of the way
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-gofundme-green hover:bg-gray-100">
              Get in Touch
            </Link>
            <a href="mailto:fundraising@meemmadaat.org" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 