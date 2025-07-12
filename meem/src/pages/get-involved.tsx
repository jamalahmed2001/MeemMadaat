import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";

// Real involvement opportunities based on llm.md timeline
const volunteerOpportunities = [
  {
    id: 1,
    title: "Medical Clinic Support",
    category: "Healthcare",
    location: "Gharmallah & Shakreela Shareef, Pakistan",
    commitment: "2-4 weeks",
    skills: ["Medical background", "Administrative support", "Patient care"],
    description: "Join our medical teams in Pakistan providing free healthcare to rural communities. Support our clinics that serve 80+ patients daily.",
    impact: "Direct support to 15,000+ patients served annually",
    requirements: "Medical qualification preferred but not essential for admin roles",
    timeCommitment: "Flexible scheduling available",
    isRemote: false,
    isOngoing: true
  },
  {
    id: 2,
    title: "UK Community Outreach",
    category: "Community Support",
    location: "Preston & Greater Manchester, UK",
    commitment: "Weekly",
    skills: ["Community engagement", "Care package preparation", "Event coordination"],
    description: "Help deliver care packages to homeless individuals, elderly, and vulnerable populations across the UK. Join our partnership with Preston City Council.",
    impact: "Support 350+ vulnerable individuals annually",
    requirements: "Compassionate attitude and reliability",
    timeCommitment: "2-4 hours per week",
    isRemote: false,
    isOngoing: true
  },
  {
    id: 3,
    title: "Emergency Relief Coordination",
    category: "Emergency Response",
    location: "Remote & Field",
    commitment: "As needed",
    skills: ["Crisis management", "Logistics", "Communication"],
    description: "Join our rapid response team for humanitarian crises. Recent work includes Gaza Appeal (£5,000 raised), Pakistan floods relief, and earthquake response.",
    impact: "48-hour response time to major emergencies",
    requirements: "Ability to work under pressure and coordinate resources",
    timeCommitment: "On-call basis during emergencies",
    isRemote: true,
    isOngoing: true
  },
  {
    id: 4,
    title: "Fundraising & Events",
    category: "Development",
    location: "UK-wide",
    commitment: "Event-based",
    skills: ["Event planning", "Marketing", "Public speaking"],
    description: "Organize charity events, manage fundraising campaigns, and build community partnerships. Help us continue raising £2.5M+ for our causes.",
    impact: "Directly contributes to 95% donation policy",
    requirements: "Creativity and networking skills",
    timeCommitment: "Flexible around events",
    isRemote: true,
    isOngoing: true
  },
  {
    id: 5,
    title: "Digital & Communications",
    category: "Communications",
    location: "Remote",
    commitment: "Ongoing",
    skills: ["Social media", "Content creation", "Website management"],
    description: "Help share our impact stories, manage social media channels, and maintain our digital presence to reach more supporters.",
    impact: "Amplify reach to potential 50,000+ supporters",
    requirements: "Digital marketing experience preferred",
    timeCommitment: "5-10 hours per week",
    isRemote: true,
    isOngoing: true
  },
  {
    id: 6,
    title: "Administrative Support",
    category: "Operations",
    location: "Preston Office/Remote",
    commitment: "Ongoing",
    skills: ["Data entry", "Financial tracking", "Report writing"],
    description: "Support our charity operations, maintain our low 5% administrative cost ratio, and help with governance requirements.",
    impact: "Ensures maximum funds reach beneficiaries",
    requirements: "Attention to detail and computer skills",
    timeCommitment: "Flexible hours",
    isRemote: true,
    isOngoing: true
  }
];

const partnershipOpportunities = [
  {
    title: "Corporate Partnership",
    description: "Partner with us for employee volunteering, fundraising campaigns, and CSR initiatives",
    benefits: ["Tax benefits", "Team building", "Brand association", "Regular impact reports"],
    examples: ["Preston City Council partnership", "Al-Khair collaboration (£10,500 raised)"],
    commitment: "Ongoing relationship"
  },
  {
    title: "Faith Community Partnership",
    description: "Work with your mosque, church, or faith community to support our interfaith initiatives",
    benefits: ["Shared values", "Community impact", "Spiritual fulfillment", "Collective action"],
    examples: ["Masjid E Raza Community Hall events", "Interfaith homeless support"],
    commitment: "Project-based or ongoing"
  },
  {
    title: "Educational Institution Partnership",
    description: "Universities, colleges, and schools can partner with us for student projects and research",
    benefits: ["Real-world experience", "Social impact", "Academic credit", "Career development"],
    examples: ["Student placement programs", "Research collaborations"],
    commitment: "Semester or year-long projects"
  },
  {
    title: "Healthcare Partnership",
    description: "Medical professionals and healthcare institutions can support our clinic operations",
    benefits: ["Professional development", "International experience", "Skill sharing", "Networking"],
    examples: ["Medical missions to Pakistan", "Telemedicine support"],
    commitment: "Short-term missions or ongoing consultation"
  }
];

const skillsNeeded = [
  { skill: "Medical Professionals", urgency: "High", areas: ["General Practice", "Nursing", "Pharmacy", "Optometry"] },
  { skill: "Project Management", urgency: "Medium", areas: ["Infrastructure", "Healthcare", "Emergency Response"] },
  { skill: "Digital Marketing", urgency: "Medium", areas: ["Social Media", "Content Creation", "Website Management"] },
  { skill: "Grant Writing", urgency: "High", areas: ["Funding Applications", "Report Writing", "Compliance"] },
  { skill: "Translation Services", urgency: "Medium", areas: ["Urdu/English", "Arabic/English", "Document Translation"] },
  { skill: "Legal/Compliance", urgency: "Low", areas: ["Charity Law", "International Operations", "Governance"] }
];

export default function GetInvolved() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Healthcare", "Community Support", "Emergency Response", "Development", "Communications", "Operations"];

  const filteredOpportunities = selectedCategory === "All" 
    ? volunteerOpportunities 
    : volunteerOpportunities.filter(opp => opp.category === selectedCategory);

  return (
    <Layout>
      <Head>
        <title>Get Involved - Meem Madaat | Volunteer & Partner With Us</title>
        <meta
          name="description"
          content="Join Meem Madaat's mission to transform lives. Volunteer opportunities in healthcare, community support, emergency relief. Partner with us to maximize impact across UK and Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Be the Change You Want to See
          </h1>
          <p className="text-xl md:text-2xl mb-8 mx-auto">
            Join our mission to transform lives across the UK and Pakistan. Every skill matters, every hour counts.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-sm opacity-90">Years of Impact</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-sm opacity-90">Lives Transformed</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Direct Impact</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="bg-white text-dark-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Volunteer With Us
            </Link>
            <Link href="/donate" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark-teal transition-colors">
              Donate Now
            </Link>
            <Link href="/fundraise" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark-teal transition-colors">
              Start Fundraising
            </Link>
          </div>
        </div>
      </section>

      {/* Three Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Three Ways to Make a Difference</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-light-gray p-8 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Volunteer Your Time</h3>
              <p className="text-gray-600 mb-6">
                Join our team of 200+ active volunteers. From medical clinics to community support, emergency relief to digital communications - find your perfect role.
              </p>
              <div className="space-y-3 text-sm text-gray-700 mb-6">
                <div>• Medical clinic support in Pakistan</div>
                <div>• UK community outreach programs</div>
                <div>• Emergency relief coordination</div>
                <div>• Digital & communications support</div>
              </div>
              <Link href="/volunteer" className="btn-primary w-full">
                Explore Volunteer Roles
              </Link>
            </div>

            <div className="bg-light-gray p-8 rounded-lg text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Donate Your Resources</h3>
              <p className="text-gray-600 mb-6">
                With our 95% direct impact policy, your donations go straight to where they're needed most. Support medical aid, community programs, or emergency relief.
              </p>
              <div className="space-y-3 text-sm text-gray-700 mb-6">
                <div>• 95% goes directly to beneficiaries</div>
                <div>• Multiple secure payment options</div>
                <div>• One-time or monthly donations</div>
                <div>• UK Gift Aid eligible</div>
              </div>
              <Link href="/donate" className="btn-primary w-full">
                Make a Donation
              </Link>
            </div>

            <div className="bg-light-gray p-8 rounded-lg text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Start Fundraising</h3>
              <p className="text-gray-600 mb-6">
                Launch your own fundraising campaign and multiply your impact. From personal challenges to community events - we provide full support.
              </p>
              <div className="space-y-3 text-sm text-gray-700 mb-6">
                <div>• Complete fundraising toolkit</div>
                <div>• Personal support & guidance</div>
                <div>• Online platform & payment processing</div>
                <div>• Regular impact reporting</div>
              </div>
              <Link href="/fundraise" className="btn-primary w-full">
                Start Your Campaign
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get Involved */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Why Get Involved with Meem Madaat?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Impact</h3>
              <p className="text-gray-600">
                See the immediate difference your time makes in people's lives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Connection</h3>
              <p className="text-gray-600">
                Build meaningful relationships and expand your network
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-gray-600">
                Gain valuable experience and develop new capabilities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted Organization</h3>
              <p className="text-gray-600">
                Work with a UK charitable group with proven impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-semibold mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600 mb-6">
              Here are some of our current volunteer roles. For the complete list and to apply, visit our volunteer page.
            </p>
            <Link href="/volunteer" className="btn-primary">
              View All Volunteer Roles & Apply
            </Link>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gofundme-green text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    opportunity.category === 'Healthcare' ? 'bg-red-100 text-red-800' :
                    opportunity.category === 'Community Support' ? 'bg-blue-100 text-blue-800' :
                    opportunity.category === 'Emergency Response' ? 'bg-orange-100 text-orange-800' :
                    opportunity.category === 'Development' ? 'bg-purple-100 text-purple-800' :
                    opportunity.category === 'Communications' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {opportunity.category}
                  </div>
                  {opportunity.isRemote && (
                    <span className="bg-gofundme-green/10 text-gofundme-green px-2 py-1 rounded-full text-xs font-medium">
                      Remote
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {opportunity.location}
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {opportunity.timeCommitment}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Skills Needed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gofundme-green mb-3">
                    Impact: {opportunity.impact}
                  </p>
                  <Link
                    href="/volunteer"
                    className="w-full bg-gofundme-green hover:bg-gofundme-green/90 text-white font-semibold py-2 px-4 rounded transition-colors text-center block"
                  >
                    Learn More & Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills We Need */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Skills We Need Most</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {skillsNeeded.map((item, index) => (
                <div key={index} className="bg-light-gray p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{item.skill}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.urgency === 'High' ? 'bg-red-100 text-red-800' :
                      item.urgency === 'Medium' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.urgency} Priority
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.areas.map((area, aIndex) => (
                      <span key={aIndex} className="bg-gofundme-green/10 text-gofundme-green px-3 py-1 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Partnership Opportunities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipOpportunities.map((partnership, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{partnership.title}</h3>
                <p className="text-gray-600 mb-6">{partnership.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-gofundme-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Examples:</h4>
                  <ul className="space-y-1">
                    {partnership.examples.map((example, eIndex) => (
                      <li key={eIndex} className="text-gray-600 text-sm">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Commitment:</strong> {partnership.commitment}
                  </p>
                  <Link href="/contact" className="btn-primary w-full text-center">
                    Start Partnership Discussion
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 mx-auto">
            Join our community of volunteers, donors, and fundraisers who are transforming lives across the UK and Pakistan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-white text-gofundme-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Volunteer
            </Link>
            <Link
              href="/donate"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Make a Donation
            </Link>
            <Link
              href="/fundraise"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Start Fundraising
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Discuss Partnership
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 