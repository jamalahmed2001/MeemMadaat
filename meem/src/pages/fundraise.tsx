import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";

// Real fundraising examples from llm.md timeline
const fundraisingExamples = [
  {
    id: 1,
    title: "Gaza Emergency Appeal",
    organizer: "Meem Madaat Team",
    amount: "£5,000",
    goal: "£5,000",
    type: "Emergency Relief",
    duration: "30 days",
    description: "Ramadan appeal for Gaza relief through Heal Humanity campaign. 100% of donations reached affected families.",
    impact: "Emergency aid to Gaza families",
    year: "2024",
    status: "Completed"
  },
  {
    id: 2,
    title: "Al-Khair Partnership - Orphan Support",
    organizer: "Community Partnership",
    amount: "£9,000",
    goal: "£9,000",
    type: "Child Support",
    duration: "Ongoing",
    description: "Partnership with Al-Khair to sponsor 15 orphans, providing comprehensive support and care.",
    impact: "15 orphans sponsored for full year",
    year: "2023",
    status: "Ongoing"
  },
  {
    id: 3,
    title: "Medical Clinic Expansion",
    organizer: "Healthcare Initiative",
    amount: "£50,000+",
    goal: "£50,000",
    type: "Healthcare",
    duration: "6 months",
    description: "Expansion of medical clinics in Gharmallah and Shakreela Shareef, now serving 80+ patients daily.",
    impact: "15,000+ patients treated annually",
    year: "2022",
    status: "Completed"
  },
  {
    id: 4,
    title: "Pakistan Floods Relief",
    organizer: "Emergency Response Team",
    amount: "£25,000+",
    goal: "£20,000",
    type: "Disaster Relief",
    duration: "45 days",
    description: "Comprehensive flood relief including emergency packages, temporary shelter, and recovery support.",
    impact: "1,000+ families supported",
    year: "2022",
    status: "Completed"
  },
  {
    id: 5,
    title: "Community Hall Events",
    organizer: "Masjid E Raza Community",
    amount: "£15,000+",
    goal: "£10,000",
    type: "Community Building",
    duration: "12 months",
    description: "Historic community events bringing together 300+ attendees for charity fundraising.",
    impact: "Community cohesion & funds for programs",
    year: "2019",
    status: "Completed"
  },
  {
    id: 6,
    title: "Clean Water Initiative",
    organizer: "Infrastructure Team",
    amount: "£30,000+",
    goal: "£25,000",
    type: "Infrastructure",
    duration: "9 months",
    description: "Solar-powered water pumps installation bringing clean water to rural communities.",
    impact: "200+ families with clean water access",
    year: "2018-2021",
    status: "Ongoing"
  }
];

const fundraisingIdeas = [
  {
    category: "Personal Challenges",
    title: "Sponsored Activities",
    examples: ["Marathon/5K runs", "Cycling challenges", "Mountain climbs", "Weight loss journey"],
    potential: "£500 - £5,000+",
    effort: "Medium",
    duration: "3-6 months",
    support: "Full toolkit & promotion"
  },
  {
    category: "Community Events",
    title: "Local Fundraising",
    examples: ["Charity dinners", "Quiz nights", "Bake sales", "Car washes"],
    potential: "£200 - £2,000",
    effort: "Medium",
    duration: "1-3 months",
    support: "Event planning guidance"
  },
  {
    category: "Digital Campaigns",
    title: "Online Fundraising",
    examples: ["Birthday fundraisers", "Memorial funds", "Social media challenges", "Virtual events"],
    potential: "£100 - £10,000+",
    effort: "Low-Medium",
    duration: "1-6 months",
    support: "Digital assets & templates"
  },
  {
    category: "Corporate Initiatives",
    title: "Workplace Fundraising",
    examples: ["Dress down days", "Office competitions", "Sponsored teams", "Payroll giving"],
    potential: "£500 - £20,000+",
    effort: "Low-High",
    duration: "Ongoing",
    support: "Corporate partnership support"
  },
  {
    category: "Faith Communities",
    title: "Religious Fundraising",
    examples: ["Zakat campaigns", "Iftar events", "Jummah collections", "Interfaith initiatives"],
    potential: "£1,000 - £25,000+",
    effort: "Medium",
    duration: "1-12 months",
    support: "Religious calendar alignment"
  },
  {
    category: "Creative Projects",
    title: "Arts & Crafts",
    examples: ["Art auctions", "Craft sales", "Photography exhibitions", "Music concerts"],
    potential: "£200 - £5,000+",
    effort: "High",
    duration: "3-12 months",
    support: "Venue & promotion assistance"
  }
];

const impactCalculator = {
  "£5": {
    medical: "Basic medication for 1 patient",
    community: "Meal for 1 homeless person",
    emergency: "Emergency food package item",
    education: "School supplies for 1 child"
  },
  "£25": {
    medical: "Complete medical consultation",
    community: "Care package for elderly person",
    emergency: "Emergency relief for 1 family",
    education: "Books for 5 children"
  },
  "£50": {
    medical: "Eye screening for 10 patients",
    community: "Weekly food for homeless shelter",
    emergency: "Emergency shelter for 1 family",
    education: "School fees for 1 child/month"
  },
  "£100": {
    medical: "Monthly clinic supplies",
    community: "Winter clothing for 20 people",
    emergency: "Emergency kit for 5 families",
    education: "Educational materials for classroom"
  },
  "£500": {
    medical: "Eye care camp for 50+ patients",
    community: "Community support program/month",
    emergency: "Major emergency response fund",
    education: "Scholarship for 1 student/year"
  },
  "£1000": {
    medical: "Monthly operations for small clinic",
    community: "Quarterly community outreach",
    emergency: "Rapid response fund",
    education: "Teacher training program"
  }
};

export default function Fundraise() {
  const [selectedAmount, setSelectedAmount] = useState("100");
  const [selectedImpact, setSelectedImpact] = useState("medical");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    goal: "",
    timeline: "",
    description: "",
    experience: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Fundraising application:", formData);
    // Handle form submission
  };

  const getCurrentImpact = () => {
    const amountKey = `£${selectedAmount}` as keyof typeof impactCalculator;
    const impactData = impactCalculator[amountKey];
    if (!impactData) return "Make a meaningful difference";
    return impactData[selectedImpact as keyof typeof impactData];
  };

  return (
    <Layout>
      <Head>
        <title>Start Fundraising - Meem Madaat | Organize Your Own Campaign</title>
        <meta
          name="description"
          content="Start your own fundraising campaign for Meem Madaat. Join successful fundraisers who've raised £2.5M+ for medical aid, community support, and emergency relief across UK and Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Own Fundraising Campaign
          </h1>
          <p className="text-xl md:text-2xl mb-8 mx-auto">
            Join thousands of supporters who have raised £2.5M+ to transform lives across the UK and Pakistan
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">£2.5M+</div>
              <div className="text-sm opacity-90">Total Raised</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Goes to Beneficiaries</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-sm opacity-90">Lives Impacted</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fundraise */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Why Fundraise for Meem Madaat?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Impact</h3>
              <p className="text-gray-600">
                8 years of demonstrable results with 95% of funds reaching beneficiaries
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Full Support</h3>
              <p className="text-gray-600">
                Complete fundraising toolkit, promotional materials, and dedicated support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Immediate Impact</h3>
              <p className="text-gray-600">
                See the direct results of your efforts through our transparent reporting
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Fulfillment</h3>
              <p className="text-gray-600">
                Experience the satisfaction of making a real difference in people's lives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Successful Fundraising Examples</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundraisingExamples.map((example) => (
              <div key={example.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    example.type === 'Emergency Relief' ? 'bg-orange-100 text-orange-800' :
                    example.type === 'Healthcare' ? 'bg-red-100 text-red-800' :
                    example.type === 'Child Support' ? 'bg-blue-100 text-blue-800' :
                    example.type === 'Infrastructure' ? 'bg-green-100 text-green-800' :
                    example.type === 'Community Building' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {example.type}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    example.status === 'Completed' ? 'bg-gray-100 text-gray-700' :
                    'bg-gofundme-green/10 text-gofundme-green'
                  }`}>
                    {example.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
                <p className="text-gray-600 mb-4">{example.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
                    <span>Raised</span>
                    <span className="font-semibold">{example.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gofundme-green h-2 rounded-full" 
                      style={{ 
                        width: example.amount === example.goal ? '100%' : 
                               parseInt(example.amount.replace(/[£,+]/g, '')) > parseInt(example.goal.replace(/[£,+]/g, '')) ? '100%' : 
                               `${(parseInt(example.amount.replace(/[£,+]/g, '')) / parseInt(example.goal.replace(/[£,+]/g, ''))) * 100}%`
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Organizer:</span>
                    <span className="font-medium">{example.organizer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{example.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year:</span>
                    <span className="font-medium">{example.year}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gofundme-green">
                    Impact: {example.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising Ideas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Fundraising Ideas & Support</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundraisingIdeas.map((idea, index) => (
              <div key={index} className="bg-light-gray p-6 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
                  <span className="text-sm text-gofundme-green font-medium">{idea.category}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {idea.examples.map((example, eIndex) => (
                      <li key={eIndex} className="text-gray-600 text-sm">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-800">Potential:</span>
                    <p className="text-gofundme-green font-medium">{idea.potential}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Effort:</span>
                    <p className="text-gray-600">{idea.effort}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <p className="text-gray-600">{idea.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Support:</span>
                    <p className="text-gray-600">{idea.support}</p>
                  </div>
                </div>
                
                <a 
                  href="#fundraising-application"
                  className="w-full bg-gofundme-green hover:bg-gofundme-green/90 text-white font-semibold py-2 px-4 rounded transition-colors text-center block"
                >
                  Start This Type
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Calculator */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Calculate Your Impact</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Fundraising Goal</h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount</label>
                    <div className="grid grid-cols-3 gap-3">
                      {["5", "25", "50", "100", "500", "1000"].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setSelectedAmount(amount)}
                          className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
                            selectedAmount === amount
                              ? "bg-gofundme-green text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          £{amount}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Impact Area</label>
                    <select
                      value={selectedImpact}
                      onChange={(e) => setSelectedImpact(e.target.value)}
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                    >
                      <option value="medical">Medical Aid</option>
                      <option value="community">UK Community Support</option>
                      <option value="emergency">Emergency Relief</option>
                      <option value="education">Education & Development</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6">Your Impact</h3>
                  
                  <div className="bg-gofundme-green/10 p-6 rounded-lg mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gofundme-green mb-2">
                        £{selectedAmount}
                      </div>
                      <div className="text-lg font-medium text-gray-800 mb-3">
                        {getCurrentImpact()}
                      </div>
                      <div className="text-sm text-gray-600">
                        With our 95% direct impact policy, £{Math.round(parseInt(selectedAmount) * 0.95)} goes directly to beneficiaries
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="bg-red-50 p-3 rounded">
                      <strong className="text-red-800">Medical: </strong>
                      <span className="text-red-700">{impactCalculator[`£${selectedAmount}` as keyof typeof impactCalculator]?.medical}</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <strong className="text-blue-800">Community: </strong>
                      <span className="text-blue-700">{impactCalculator[`£${selectedAmount}` as keyof typeof impactCalculator]?.community}</span>
                    </div>
                    <div className="bg-orange-50 p-3 rounded">
                      <strong className="text-orange-800">Emergency: </strong>
                      <span className="text-orange-700">{impactCalculator[`£${selectedAmount}` as keyof typeof impactCalculator]?.emergency}</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <strong className="text-green-800">Education: </strong>
                      <span className="text-green-700">{impactCalculator[`£${selectedAmount}` as keyof typeof impactCalculator]?.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising Application */}
      <section id="fundraising-application" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Start Your Fundraising Campaign</h2>
            
            <div className="bg-light-gray p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Fundraising Type *
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                    >
                      <option value="">Select fundraising type</option>
                      <option value="personal-challenge">Personal Challenge</option>
                      <option value="community-event">Community Event</option>
                      <option value="digital-campaign">Digital Campaign</option>
                      <option value="corporate-initiative">Corporate Initiative</option>
                      <option value="faith-community">Faith Community</option>
                      <option value="creative-project">Creative Project</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-2">
                      Fundraising Goal *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                      <input
                        type="number"
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleInputChange}
                        required
                        min="50"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                        placeholder="500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-month">1 month</option>
                      <option value="3-months">3 months</option>
                      <option value="6-months">6 months</option>
                      <option value="12-months">12 months</option>
                      <option value="ongoing">Ongoing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                    placeholder="Describe your fundraising campaign, what you plan to do, and why people should support you..."
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Fundraising Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                    placeholder="Tell us about any previous fundraising experience (optional)..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreement"
                    required
                    className="mt-1 w-4 h-4 text-gofundme-green focus:ring-gofundme-green border-gray-300 rounded"
                  />
                  <label htmlFor="agreement" className="text-sm text-gray-700">
                    I understand that I will be fundraising on behalf of Meem Madaat and agree to follow the charity's fundraising guidelines. I commit to transparent reporting of funds raised and will work with the team to ensure proper donation processing.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gofundme-green hover:bg-gofundme-green/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  Submit Fundraising Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Resources */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">What Support You'll Get</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Fundraising Toolkit</h3>
              <p className="text-gray-600 text-sm">
                Templates, posters, social media graphics, and planning guides
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Personal Support</h3>
              <p className="text-gray-600 text-sm">
                Dedicated team member to guide you through your campaign
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h6a2 2 0 002-2V7M9 7h6M9 11h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Online Platform</h3>
              <p className="text-gray-600 text-sm">
                Professional fundraising page with secure payment processing
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Impact Reporting</h3>
              <p className="text-gray-600 text-sm">
                Regular updates on how your funds are making a difference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Ready to Start Fundraising?</h2>
          <p className="text-xl mb-8 mx-auto">
            Join the community of fundraisers who have helped us transform 50,000+ lives
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#fundraising-application"
              className="bg-white text-gofundme-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Campaign
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Get More Information
            </Link>
            <Link
              href="/donate"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Donate Instead
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 