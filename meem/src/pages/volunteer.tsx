import Head from "next/head";

import Layout from "../components/Layout";
import { useState } from "react";

const volunteerRoles = [
  {
    title: "Medical Volunteers",
    description: "Healthcare professionals providing free medical services at our clinics",
    requirements: ["Medical qualification", "Valid registration", "Minimum 6 months commitment"],
    time: "Weekly 4-hour shifts",
    location: "Pakistan clinics",
    spots: "5 available",
    category: "medical"
  },
  {
    title: "Education Volunteers",
    description: "Teachers and tutors supporting our education programs",
    requirements: ["Teaching qualification/experience", "English proficiency", "Passionate about education"],
    time: "Flexible scheduling",
    location: "Pakistan schools",
    spots: "8 available",
    category: "education"
  },
  {
    title: "Fundraising Volunteers",
    description: "Help organize events and campaigns to raise funds",
    requirements: ["Strong communication skills", "Event planning experience preferred", "Enthusiasm"],
    time: "Project-based",
    location: "UK-based",
    spots: "10 available",
    category: "fundraising"
  },
  {
    title: "Administrative Support",
    description: "Assist with office tasks, data entry, and project coordination",
    requirements: ["Computer skills", "Attention to detail", "Reliability"],
    time: "Flexible hours",
    location: "Remote/Office",
    spots: "6 available",
    category: "admin"
  },
  {
    title: "Community Outreach",
    description: "Engage with local communities to raise awareness",
    requirements: ["People skills", "Local language knowledge", "Transportation"],
    time: "Weekend events",
    location: "UK communities",
    spots: "15 available",
    category: "outreach"
  },
  {
    title: "Social Media Volunteers",
    description: "Help manage our social media presence and content creation",
    requirements: ["Social media experience", "Creative skills", "Regular availability"],
    time: "5 hours/week",
    location: "Remote",
    spots: "3 available",
    category: "digital"
  }
];

const volunteerBenefits = [
  "Make a real difference in people's lives",
  "Gain valuable experience and skills",
  "Join a supportive community",
  "Training and development opportunities",
  "Travel opportunities (selected roles)",
  "Recognition and certificates",
  "Networking with like-minded people",
  "Flexible scheduling options"
];

const testimonials = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Medical Volunteer",
    quote: "Volunteering with Meem Madaat has been the most rewarding experience of my career. Seeing the direct impact on patients' lives is incredibly fulfilling.",
    duration: "2 years",
    image: "/images/volunteer-1.jpg"
  },
  {
    name: "James Wilson",
    role: "Education Volunteer",
    quote: "Teaching children in rural Pakistan opened my eyes to the power of education. The smiles on their faces make every moment worthwhile.",
    duration: "18 months",
    image: "/images/volunteer-2.jpg"
  },
  {
    name: "Fatima Khan",
    role: "Fundraising Volunteer",
    quote: "Being part of the fundraising team has taught me so much about event management and community engagement. It's amazing what we can achieve together.",
    duration: "1 year",
    image: "/images/volunteer-3.jpg"
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
    experience: ""
  });

  const categories = [
    { id: "all", label: "All Roles" },
    { id: "medical", label: "Medical" },
    { id: "education", label: "Education" },
    { id: "fundraising", label: "Fundraising" },
    { id: "admin", label: "Administrative" },
    { id: "outreach", label: "Outreach" },
    { id: "digital", label: "Digital" }
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
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      motivation: "",
      availability: "",
      experience: ""
    });
  };

  return (
    <Layout>
      <Head>
        <title>Volunteer - Meem Madaat | Join Our Team of Changemakers</title>
        <meta
          name="description"
          content="Join Meem Madaat's volunteer team and make a real difference. Medical, education, fundraising, and administrative roles available."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Become a Volunteer</h1>
          <p className="text-xl mx-auto">
            Join our dedicated team of volunteers and help us create positive change in communities
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className=" mx-auto text-center">
            <h2 className="text-h2 font-semibold mb-6">Why Volunteer with Meem Madaat?</h2>
            <p className="text-lg text-gray-700 mb-12">
              Our volunteers are the heart of our organization. Every hour you give creates ripples of positive change that extend far beyond what you can imagine.
            </p>
            
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

          {/* Roles Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredRoles.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                  <span className="text-sm bg-gofundme-green text-white px-3 py-1 rounded-full">
                    {role.spots}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{role.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {role.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-gofundme-green rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Time:</span> {role.time}
                    </div>
                    <div>
                      <span className="font-semibold">Location:</span> {role.location}
                    </div>
                  </div>
                </div>
                
                <button className="w-full btn-primary">
                  Apply for This Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Hear from Our Volunteers</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gofundme-green">Volunteer for {testimonial.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className=" mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Apply to Volunteer</h2>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
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
                  <label className="block text-sm font-medium mb-2">Preferred Role *</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                  >
                    <option value="">Select a role</option>
                    {volunteerRoles.map((role, index) => (
                      <option key={index} value={role.title}>{role.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Availability *</label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="e.g., Weekends, Evenings, Flexible"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Relevant Experience</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us about any relevant experience or skills"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Why do you want to volunteer with us? *</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gofundme-green focus:border-transparent"
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className=" mx-auto text-center">
            <h2 className="text-h2 font-semibold mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gofundme-green font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Application Review</h3>
                <p className="text-sm text-gray-600">We'll review your application within 5 business days</p>
              </div>
              <div className="card">
                <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gofundme-green font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">Interview</h3>
                <p className="text-sm text-gray-600">Brief interview to discuss your interests and availability</p>
              </div>
              <div className="card">
                <div className="w-12 h-12 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gofundme-green font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Onboarding</h3>
                <p className="text-sm text-gray-600">Training and orientation to get you started</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 