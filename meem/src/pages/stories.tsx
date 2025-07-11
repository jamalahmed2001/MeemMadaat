import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";
import Image from "next/image";

// Real stories from both volunteers and beneficiaries
const realTestimonials = [
  {
    id: 1,
    name: "Dr. Amna Hassan",
    role: "Medical Clinic Volunteer",
    type: "volunteer",
    quote: "Working at the Gharmallah clinic has been transformative. Seeing patients who travel hours for basic healthcare, and being able to help them, reminds me why I became a doctor. The impact is immediate and profound.",
    duration: "18 months",
    location: "Pakistan",
    image: "/photos/Clinic 1/imgi_18_2e6e70_8854959ab60c4c00b8f3bb108675b4e9~mv2.jpg",
    category: "Medical Aid"
  },
  {
    id: 2,
    name: "Fatima Bibi",
    role: "Mother of Four & Clinic Patient",
    type: "recipient",
    quote: "Before Meem Madaat's clinic opened in our village, I had to travel three hours with my sick children to reach a doctor. Now we have qualified doctors right here. They saved my youngest son's life when he had pneumonia.",
    duration: "Patient since 2019",
    location: "Gharmallah, Pakistan",
    image: "/photos/Clinic 2/imgi_21_2e6e70_53b12026c46f4e95b734f4e55e69b22a~mv2.jpg",
    category: "Medical Aid"
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "UK Community Support Volunteer",
    type: "volunteer",
    quote: "From organizing Eid celebrations at Hindley Prison to distributing care packages to elderly residents, every moment volunteering with Meem Madaat has been meaningful. We truly bridge communities.",
    duration: "2 years",
    location: "Preston, UK",
    image: "/photos/UK Projects/imgi_65_2e6e70_c1f1ee9784ce435abd4f6f9bba47c52e~mv2.jpg",
    category: "UK Community Support"
  },
  {
    id: 4,
    name: "Muhammad Ali",
    role: "Farmer & Water Project Beneficiary",
    type: "recipient",
    quote: "For years, my family walked 5 kilometers daily for clean water. The solar water pump Meem Madaat installed changed everything. My children now attend school instead of fetching water, and our crops are thriving.",
    duration: "Beneficiary since 2021",
    location: "Rural Punjab, Pakistan",
    image: "/photos/Water Projects/imgi_10_2e6e70_180f575ab8fc41999539114d0cb568c2~mv2.jpg",
    category: "Infrastructure Projects"
  },
  {
    id: 5,
    name: "Ahmed Ali",
    role: "Emergency Relief Coordinator",
    type: "volunteer",
    quote: "During the 2022 Pakistan floods, I witnessed the power of rapid response. Our team reached remote villages within hours, providing life-saving aid when government help was days away. This work saves lives.",
    duration: "3 years",
    location: "Pakistan",
    image: "/photos/Covid 19 packages/imgi_43_2e6e70_dc50260ef4e543e3aac1723c7501512f~mv2.jpg",
    category: "Emergency Relief"
  },
  {
    id: 6,
    name: "Margaret Wilson",
    role: "Elderly Resident & Care Package Recipient",
    type: "recipient",
    quote: "During the cold winter months, Meem Madaat volunteers brought me warm blankets, food, and most importantly, friendship. At 78, I felt forgotten by society, but these volunteers reminded me that I matter.",
    duration: "Supported since 2023",
    location: "Preston, UK",
    image: "/photos/Elderly & Orphans /imgi_9_2e6e70_bafbbdae55274d0abe7ca1787862fe61~mv2.jpg",
    category: "UK Community Support"
  },
  {
    id: 7,
    name: "Zara Khan",
    role: "Fundraising Team Leader",
    type: "volunteer",
    quote: "Organizing charity events and seeing the community come together for causes like our Ramadan food drives and flood relief appeals has been incredible. Every pound raised translates to real impact.",
    duration: "4 years",
    location: "Manchester, UK",
    image: "/photos/Family Support/imgi_13_2e6e70_ffb273c72313415687b5c62abc93b472~mv2.jpg",
    category: "Community Support"
  },
  {
    id: 8,
    name: "Hassan Ahmed",
    role: "Village Elder & Funeral Hall Beneficiary",
    type: "recipient",
    quote: "The Janzah Gah that Meem Madaat built for our community has brought dignity to our most difficult times. Previously, families had to travel hours for proper funeral services. Now we can say goodbye to our loved ones with honor.",
    duration: "Community leader since 2020",
    location: "Rural Pakistan",
    image: "/photos/Funerals/imgi_34_2e6e70_50ec022f2e9a448fac5c6d665a0e3d3d~mv2.jpg",
    category: "Infrastructure Projects"
  }
];

const categories = ["All", "Medical Aid", "UK Community Support", "Infrastructure Projects", "Emergency Relief", "Community Support"];
const typeFilters = ["All", "Volunteers", "Beneficiaries"];

export default function Stories() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStory, setSelectedStory] = useState<typeof realTestimonials[0] | null>(null);

  const filteredStories = realTestimonials.filter(story => {
    const categoryMatch = selectedCategory === "All" || story.category === selectedCategory;
    const typeMatch = selectedType === "All" || 
      (selectedType === "Volunteers" && story.type === "volunteer") ||
      (selectedType === "Beneficiaries" && story.type === "recipient");
    return categoryMatch && typeMatch;
  });

  return (
    <Layout>
      <Head>
        <title>Stories of Change - Meem Madaat | Real Impact Stories</title>
        <meta
          name="description"
          content="Read inspiring stories of transformation and hope from volunteers and beneficiaries across the UK and Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Stories of Change</h1>
          <p className="text-xl mx-auto ">
            Behind every statistic is a human story. These are real stories from our volunteers 
            and the people whose lives have been transformed through our work across the UK and Pakistan.
          </p>
        </div>
      </section>

      {/* Impact Summary */}
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
              <p className="text-3xl font-bold text-gofundme-green mb-2">3</p>
              <p className="text-sm font-semibold">Medical Clinics</p>
            </div>
            <div className="card">
              <p className="text-3xl font-bold text-gofundme-green mb-2">95%</p>
              <p className="text-sm font-semibold">Direct Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category and Type Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="space-y-4">
            {/* Type Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {typeFilters.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedType === type
                      ? "bg-dark-teal text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? "bg-gofundme-green text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <article key={story.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={story.image}
                    alt={`${story.name} - ${story.role}`}
                    fill
                    className="object-cover"
                  />
                  {/* Type indicator */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      story.type === 'volunteer' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {story.type === 'volunteer' ? '👥 Volunteer' : '❤️ Beneficiary'}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block px-3 py-1 bg-gofundme-green/10 text-gofundme-green text-sm font-semibold rounded-full">
                    {story.category}
                  </span>
                  <span className="text-sm text-gray-500">{story.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{story.role}</p>
                <blockquote className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                  "{story.quote.length > 150 ? story.quote.substring(0, 150) + '...' : story.quote}"
                </blockquote>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{story.location}</span>
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="text-gofundme-green hover:text-gofundme-green/80 font-semibold text-sm"
                  >
                    Read Full Story →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      selectedStory.type === 'volunteer' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {selectedStory.type === 'volunteer' ? '👥 Volunteer' : '❤️ Beneficiary'}
                    </span>
                    <span className="inline-block px-3 py-1 bg-gofundme-green/10 text-gofundme-green text-sm font-semibold rounded-full">
                      {selectedStory.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{selectedStory.name}</h3>
                  <p className="text-gray-600">{selectedStory.role}</p>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-500 hover:text-gray-700 ml-4"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedStory.image}
                  alt={`${selectedStory.name} - ${selectedStory.role}`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">{selectedStory.location} • {selectedStory.duration}</p>
                <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                  "{selectedStory.quote}"
                </blockquote>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex gap-4">
                  <Link href="/donate" className="btn-primary">
                    Support This Cause
                  </Link>
                  <Link href="/volunteer" className="btn-secondary">
                    {selectedStory.type === 'volunteer' ? 'Join Our Team' : 'Get Involved'}
                  </Link>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-500 hover:text-gray-700 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Get Involved Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-6">Be Part of the Next Story</h2>
          <p className="text-lg text-gray-700 mb-8 mx-auto">
            These stories are possible because of supporters like you. Whether you volunteer your time, 
            donate your resources, or simply spread the word, you can help create more stories of hope 
            and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary">
              Donate Now
            </Link>
            <Link href="/volunteer" className="btn-secondary">
              Volunteer With Us
            </Link>
            <Link href="/get-involved" className="btn-secondary">
              Other Ways to Help
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 