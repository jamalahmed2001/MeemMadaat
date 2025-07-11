import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Real volunteer opportunities based on Meem Madaat's actual work areas
const volunteerRoles = [
  {
    title: "Medical Clinic Volunteers",
    description: "Support our medical clinics in Pakistan providing healthcare to underserved communities",
    requirements: ["Medical qualification preferred", "Fluent in English/Urdu", "Cultural sensitivity", "Minimum 6 months commitment"],
    time: "Flexible scheduling",
    location: "Gharmallah & Shakreela Shareef, Pakistan",
    spots: "8 available",
    category: "medical",
    priority: "High"
  },
  {
    title: "UK Community Support Volunteers",
    description: "Help with food distribution, elderly care, and community events in UK cities",
    requirements: ["Good communication skills", "Reliable transport", "Weekend availability", "Empathy and patience"],
    time: "Weekly 4-hour shifts",
    location: "Preston, Manchester, Birmingham, UK",
    spots: "15 available",
    category: "community",
    priority: "High"
  },
  {
    title: "Emergency Relief Coordinators",
    description: "Organize rapid response efforts during disasters and emergencies",
    requirements: ["Project management experience", "Crisis management skills", "Ability to work under pressure", "Available for emergency deployment"],
    time: "On-call basis",
    location: "Pakistan (with UK coordination)",
    spots: "5 available",
    category: "emergency",
    priority: "Critical"
  },
  {
    title: "Fundraising & Events Team",
    description: "Organize charity events, manage fundraising campaigns, and coordinate with donors",
    requirements: ["Event planning experience", "Strong networking skills", "Creative thinking", "Professional presentation"],
    time: "Project-based",
    location: "UK-based (flexible)",
    spots: "12 available",
    category: "fundraising",
    priority: "High"
  },
  {
    title: "Educational Program Volunteers",
    description: "Support literacy programs and educational initiatives in Pakistan",
    requirements: ["Teaching experience", "Passion for education", "Cultural adaptability", "Long-term commitment"],
    time: "Flexible hours",
    location: "Pakistan schools and centers",
    spots: "10 available",
    category: "education",
    priority: "Medium"
  },
  {
    title: "Infrastructure Project Managers",
    description: "Oversee water pump installations, community facility construction, and infrastructure development",
    requirements: ["Construction/engineering background", "Project management certification", "Travel availability", "Technical skills"],
    time: "Full-time projects",
    location: "Rural Pakistan",
    spots: "3 available",
    category: "infrastructure",
    priority: "Critical"
  },
  {
    title: "Digital Communications Team",
    description: "Manage social media, website content, and digital storytelling for our campaigns",
    requirements: ["Digital marketing experience", "Content creation skills", "Social media expertise", "Photography/videography skills"],
    time: "10 hours/week",
    location: "Remote",
    spots: "6 available",
    category: "digital",
    priority: "Medium"
  },
  {
    title: "Administrative Support",
    description: "Assist with record-keeping, donor management, and organizational administration",
    requirements: ["Strong organizational skills", "Computer proficiency", "Attention to detail", "Confidentiality"],
    time: "Flexible hours",
    location: "UK offices/Remote",
    spots: "8 available",
    category: "admin",
    priority: "Medium"
  }
];

const volunteerBenefits = [
  "Make a real difference in vulnerable communities",
  "Gain international development experience",
  "Build cross-cultural understanding",
  "Develop leadership and project management skills",
  "Network with passionate changemakers",
  "Travel opportunities to Pakistan",
  "Professional development and training",
  "Recognition and certificates of service"
];

const realTestimonials = [
  {
    name: "Dr. Amna Hassan",
    role: "Medical Clinic Volunteer",
    type: "volunteer",
    quote: "Working at the Gharmallah clinic has been transformative. Seeing patients who travel hours for basic healthcare, and being able to help them, reminds me why I became a doctor. The impact is immediate and profound.",
    duration: "18 months",
    location: "Pakistan",
    image: "/photos/Clinic 1/imgi_18_2e6e70_8854959ab60c4c00b8f3bb108675b4e9~mv2.jpg"
  },
  {
    name: "Fatima Bibi",
    role: "Mother of Four & Clinic Patient",
    type: "recipient",
    quote: "Before Meem Madaat's clinic opened in our village, I had to travel three hours with my sick children to reach a doctor. Now we have qualified doctors right here. They saved my youngest son's life when he had pneumonia.",
    duration: "Patient since 2019",
    location: "Gharmallah, Pakistan",
    image: "/photos/Clinic 2/imgi_21_2e6e70_53b12026c46f4e95b734f4e55e69b22a~mv2.jpg"
  },
  {
    name: "Sarah Thompson",
    role: "UK Community Support Volunteer",
    type: "volunteer",
    quote: "From organizing Eid celebrations at Hindley Prison to distributing care packages to elderly residents, every moment volunteering with Meem Madaat has been meaningful. We truly bridge communities.",
    duration: "2 years",
    location: "Preston, UK",
    image: "/photos/UK Projects/imgi_65_2e6e70_c1f1ee9784ce435abd4f6f9bba47c52e~mv2.jpg"
  },
  {
    name: "Muhammad Ali",
    role: "Farmer & Water Project Beneficiary",
    type: "recipient",
    quote: "For years, my family walked 5 kilometers daily for clean water. The solar water pump Meem Madaat installed changed everything. My children now attend school instead of fetching water, and our crops are thriving.",
    duration: "Beneficiary since 2021",
    location: "Rural Punjab, Pakistan",
    image: "/photos/Water Projects/imgi_10_2e6e70_180f575ab8fc41999539114d0cb568c2~mv2.jpg"
  },
  {
    name: "Ahmed Ali",
    role: "Emergency Relief Coordinator",
    type: "volunteer",
    quote: "During the 2022 Pakistan floods, I witnessed the power of rapid response. Our team reached remote villages within hours, providing life-saving aid when government help was days away. This work saves lives.",
    duration: "3 years",
    location: "Pakistan",
    image: "/photos/Covid 19 packages/imgi_43_2e6e70_dc50260ef4e543e3aac1723c7501512f~mv2.jpg"
  },
  {
    name: "Margaret Wilson",
    role: "Elderly Resident & Care Package Recipient",
    type: "recipient",
    quote: "During the cold winter months, Meem Madaat volunteers brought me warm blankets, food, and most importantly, friendship. At 78, I felt forgotten by society, but these volunteers reminded me that I matter.",
    duration: "Supported since 2023",
    location: "Preston, UK",
    image: "/photos/Elderly & Orphans /imgi_9_2e6e70_bafbbdae55274d0abe7ca1787862fe61~mv2.jpg"
  }
];

export default function Volunteer() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    motivation: "",
    availability: "",
    experience: "",
    skills: "",
    location: ""
  });

  const categories = [
    { id: "all", label: "All Roles" },
    { id: "medical", label: "Medical" },
    { id: "community", label: "Community Support" },
    { id: "emergency", label: "Emergency Relief" },
    { id: "fundraising", label: "Fundraising" },
    { id: "education", label: "Education" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "digital", label: "Digital" },
    { id: "admin", label: "Administrative" }
  ];

  const filteredRoles = selectedCategory === "all" 
    ? volunteerRoles 
    : volunteerRoles.filter(role => role.category === selectedCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Volunteer application submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      motivation: "",
      availability: "",
      experience: "",
      skills: "",
      location: ""
    });
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <Layout>
      <Head>
        <title>Volunteer - Meem Madaat | Join Our Team of Changemakers</title>
        <meta
          name="description"
          content="Join Meem Madaat's volunteer team and make a real difference in communities across the UK and Pakistan. Medical, community support, emergency relief, and other roles available."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Become a Volunteer</h1>
          <p className="text-xl mx-auto ">
            Join our dedicated team of volunteers helping communities across the UK and Pakistan. 
            From medical clinics to emergency relief, from community support to infrastructure projects.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-gofundme-green/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="card">
              <p className="text-3xl font-bold text-gofundme-green mb-2">200+</p>
              <p className="text-sm font-semibold">Active Volunteers</p>
            </div>
            <div className="card">
              <p className="text-3xl font-bold text-gofundme-green mb-2">50,000+</p>
              <p className="text-sm font-semibold">Lives Impacted</p>
            </div>
            <div className="card">
              <p className="text-3xl font-bold text-gofundme-green mb-2">15</p>
              <p className="text-sm font-semibold">Countries Reached</p>
            </div>
            <div className="card">
              <p className="text-3xl font-bold text-gofundme-green mb-2">5</p>
              <p className="text-sm font-semibold">Years of Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className=" mx-auto text-center">
            <h2 className="text-h2 font-semibold mb-6">Why Volunteer with Meem Madaat?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our volunteers are the heart of our organization. Every hour you give creates ripples of positive change 
              that extend far beyond what you can imagine. Join a community of dedicated changemakers making real impact.
            </p>
            <div className="mb-12">
              <Link 
                href="/stories" 
                className="inline-flex items-center text-gofundme-green hover:text-gofundme-green/80 font-semibold"
              >
                See the Impact You Can Make →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {volunteerBenefits.map((benefit, index) => (
                <div key={index} className="card text-center">
                  <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Available Volunteer Roles</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-gofundme-green text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Roles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoles.map((role, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      role.priority === "Critical" 
                        ? "bg-red-100 text-red-800" 
                        : role.priority === "High" 
                        ? "bg-orange-100 text-orange-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {role.priority} Priority
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{role.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-gofundme-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Time:</strong> {role.time}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-gofundme-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span><strong>Location:</strong> {role.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-gofundme-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span><strong>Openings:</strong> {role.spots}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Requirements:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {role.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gofundme-green mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full btn-primary"
                >
                  Apply for This Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-semibold mb-4">Stories from Our Community</h2>
            <p className="text-lg text-gray-600 mb-6">
              Hear from both our dedicated volunteers and the people whose lives have been transformed through our work
            </p>
            <Link 
              href="/stories" 
              className="inline-flex items-center text-gofundme-green hover:text-gofundme-green/80 font-semibold"
            >
              Read More Inspiring Stories →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realTestimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    fill
                    className="object-cover"
                  />
                  {/* Type indicator */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      testimonial.type === 'volunteer' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {testimonial.type === 'volunteer' ? '👥 Volunteer' : '❤️ Beneficiary'}
                    </span>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gofundme-green font-semibold">{testimonial.duration}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action for more stories */}
          <div className="text-center mt-12">
            <div className="bg-gofundme-green/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Want to Read More Impact Stories?</h3>
              <p className="text-gray-700 mb-6">
                Discover more inspiring stories of transformation, hope, and community impact from across our programs in the UK and Pakistan.
              </p>
              <Link href="/stories" className="btn-primary">
                Explore All Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="volunteer-form" className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className=" mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-8">Volunteer Application</h2>
            <div className="card">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gofundme-green"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gofundme-green"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gofundme-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gofundme-green"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gofundme-green"
                  >
                    <option value="">Select a role...</option>
                    {volunteerRoles.map((role, index) => (
                      <option key={index} value={role.title}>
                        {role.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gofundme-green"
                  >
                    <option value="">Select availability...</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible</option>
                    <option value="emergency">Emergency/On-call</option>
                    <option value="full-time">Full-time commitment</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us about your relevant experience, qualifications, or skills..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gofundme-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Skills or Languages
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Languages spoken, technical skills, certifications..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gofundme-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to volunteer with Meem Madaat? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    placeholder="Tell us about your motivation and what you hope to contribute..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gofundme-green"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-6">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gofundme-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Application Review</h3>
              <p className="text-gray-600">
                We'll review your application and contact you within 48 hours to discuss your interests and availability.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-gofundme-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Interview & Orientation</h3>
              <p className="text-gray-600">
                We'll schedule a brief interview and provide orientation about our work, values, and expectations.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-gofundme-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Making Impact</h3>
              <p className="text-gray-600">
                Join our team and start making a difference in the lives of vulnerable communities across the UK and Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 