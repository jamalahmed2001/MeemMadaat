import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

// Real impact data from llm.md timeline
const impactStats = {
  financialImpact: {
    totalRaised: "£2.5M+",
    donationPolicy: "95%",
    averageAdminCost: "5%",
    recentGazaAppeal: "£5,000",
    alKhairPartnership: "£10,500"
  },
  medicalAid: {
    totalPatients: "15,000+",
    dailyPatients: "80+",
    activeClinics: 3,
    locations: ["Gharmallah", "Shakreela Shareef"],
    eyeCampPatients: "300+",
    glassesDistributed: "150+",
    cataractSurgeries: "12+"
  },
  communitySupport: {
    carePackages: "200+",
    homelessSupported: "150+",
    prisonPrograms: "50+",
    elderlySupport: "100+",
    eidPrograms: "5,000+",
    ramadanPrograms: "5,000+"
  },
  emergencyRelief: {
    pakistanFloods: "2022",
    bangladeshFloods: "2022",
    earthquakeRelief: "2022",
    gazaRelief: "2024",
    covidPackages: "1,000+"
  },
  infrastructure: {
    waterPumps: "Multiple",
    familiesServed: "200+",
    funeralHall: 1,
    mosqueSupport: 1,
    educationalFacilities: "Several"
  },
  timeframe: {
    yearsActive: "8+",
    foundingDate: "2016",
    registrationDate: "2018",
    countries: 2,
    totalBeneficiaries: "50,000+"
  }
};

const projectHighlights = [
  {
    title: "Medical Clinic Network",
    description: "3 clinics serving 80+ patients daily with free healthcare",
    impact: "15,000+ patients treated since 2019",
    location: "Gharmallah & Shakreela Shareef, Pakistan",
    startDate: "2019",
    status: "Ongoing",
    category: "Healthcare"
  },
  {
    title: "Clean Water Initiative",
    description: "Solar-powered water pumps bringing clean water to rural communities",
    impact: "200+ families with access to clean water",
    location: "Gharmallah, Pakistan",
    startDate: "2018",
    status: "Ongoing",
    category: "Infrastructure"
  },
  {
    title: "UK Community Support",
    description: "Homeless outreach, elderly care, and prison programs",
    impact: "350+ vulnerable individuals supported",
    location: "Preston, UK",
    startDate: "2018",
    status: "Ongoing",
    category: "Community"
  },
  {
    title: "Emergency Relief Operations",
    description: "Rapid response to floods, earthquakes, and humanitarian crises",
    impact: "Multiple emergency responses across Pakistan and Gaza",
    location: "Pakistan & Gaza",
    startDate: "2022",
    status: "Ongoing",
    category: "Emergency"
  },
  {
    title: "Annual Eye Care Camps",
    description: "Free eye screenings, glasses distribution, and cataract surgeries",
    impact: "300+ screened, 150+ glasses distributed, 12+ surgeries",
    location: "Rural Punjab, Pakistan",
    startDate: "2022",
    status: "Annual",
    category: "Healthcare"
  },
  {
    title: "Funeral Hall Construction",
    description: "Community funeral facility serving local Muslim community",
    impact: "Dignified funeral services for entire community",
    location: "Gharmallah, Pakistan",
    startDate: "2021",
    status: "Completed",
    category: "Infrastructure"
  }
];

const annualImpact = [
  {
    year: "2024",
    highlights: [
      "Gaza Emergency Appeal raises £5,000",
      "Medical clinics serve 80+ patients daily",
      "Partnership with Preston City Council delivers 200+ care packages"
    ],
    stats: {
      totalRaised: "£300,000+",
      beneficiaries: "8,000+",
      newPrograms: 2
    }
  },
  {
    year: "2023",
    highlights: [
      "Constitution strengthened with enhanced governance",
      "Al-Khair partnership sponsors 15 orphans (£9,000)",
      "Hospital fund support (£1,500)",
      "Second annual eye care camp"
    ],
    stats: {
      totalRaised: "£250,000+",
      beneficiaries: "7,500+",
      newPrograms: 3
    }
  },
  {
    year: "2022",
    highlights: [
      "15,000-patient milestone reached",
      "Comprehensive Pakistan floods relief",
      "Record-breaking Ramadan programs (5,000+ beneficiaries)",
      "Eid celebration programs bring communities together"
    ],
    stats: {
      totalRaised: "£400,000+",
      beneficiaries: "12,000+",
      newPrograms: 5
    }
  },
  {
    year: "2021",
    highlights: [
      "Infrastructure development year",
      "Shakreela Shareef medical project launches",
      "Multiple water pump installations",
      "Educational facility improvements"
    ],
    stats: {
      totalRaised: "£350,000+",
      beneficiaries: "6,000+",
      newPrograms: 4
    }
  },
  {
    year: "2020",
    highlights: [
      "Medical programme expansion: 2 new satellite clinics",
      "Quranic education programs launch during pandemic",
      "UK-Pakistan operational bridge strengthened"
    ],
    stats: {
      totalRaised: "£280,000+",
      beneficiaries: "5,000+",
      newPrograms: 3
    }
  },
  {
    year: "2019",
    highlights: [
      "First medical clinic opens in Gharmallah",
      "Historic community event at Masjid E Raza (300+ attendees)",
      "Healthcare program foundation established"
    ],
    stats: {
      totalRaised: "£200,000+",
      beneficiaries: "3,000+",
      newPrograms: 2
    }
  },
  {
    year: "2018",
    highlights: [
      "Official charity registration (15 January 2018)",
      "First clean water pump installed",
      "First UK homeless outreach program"
    ],
    stats: {
      totalRaised: "£150,000+",
      beneficiaries: "1,500+",
      newPrograms: 2
    }
  },
  {
    year: "2016-2017",
    highlights: [
      "Vision conceived by UK volunteers (1 January 2016)",
      "Planning and foundation work",
      "Community partnerships established"
    ],
    stats: {
      totalRaised: "£50,000+",
      beneficiaries: "500+",
      newPrograms: 1
    }
  }
];

export default function Impact() {
  return (
    <Layout>
      <Head>
        <title>Our Impact - Meem Madaat | 8 Years of Transforming Lives</title>
        <meta
          name="description"
          content="See the real impact of your support. Since 2016, Meem Madaat has raised £2.5M+, helped 50,000+ people, and maintains 95% direct impact. Medical clinics, community support, emergency relief across UK and Pakistan."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            8 Years of Transforming Lives
          </h1>
          <p className="text-xl md:text-2xl mb-8 mx-auto">
            Since 2016, your support has created lasting change across communities in the UK and Pakistan
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">{impactStats.financialImpact.totalRaised}</div>
              <div className="text-sm opacity-90">Total Raised</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">{impactStats.timeframe.totalBeneficiaries}</div>
              <div className="text-sm opacity-90">Lives Impacted</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">{impactStats.medicalAid.activeClinics}</div>
              <div className="text-sm opacity-90">Medical Clinics</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">{impactStats.financialImpact.donationPolicy}</div>
              <div className="text-sm opacity-90">Goes to Beneficiaries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Impact Across Four Key Areas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Medical Aid */}
            <div className="bg-red-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-red-800">Medical Aid</h3>
                  <p className="text-red-600">Free healthcare for rural communities</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">{impactStats.medicalAid.totalPatients}</div>
                  <div className="text-sm text-red-700">Total Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">{impactStats.medicalAid.dailyPatients}</div>
                  <div className="text-sm text-red-700">Daily Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">{impactStats.medicalAid.activeClinics}</div>
                  <div className="text-sm text-red-700">Active Clinics</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">{impactStats.medicalAid.eyeCampPatients}</div>
                  <div className="text-sm text-red-700">Eye Camp Patients</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Key Achievements</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 3 clinics in Gharmallah and Shakreela Shareef</li>
                  <li>• {impactStats.medicalAid.glassesDistributed} glasses distributed</li>
                  <li>• {impactStats.medicalAid.cataractSurgeries} sight-restoring surgeries</li>
                  <li>• Free antenatal care and chronic disease management</li>
                </ul>
              </div>
            </div>

            {/* Community Support */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800">UK Community Support</h3>
                  <p className="text-blue-600">Supporting vulnerable populations locally</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{impactStats.communitySupport.carePackages}</div>
                  <div className="text-sm text-blue-700">Care Packages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{impactStats.communitySupport.homelessSupported}</div>
                  <div className="text-sm text-blue-700">Homeless Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{impactStats.communitySupport.prisonPrograms}</div>
                  <div className="text-sm text-blue-700">Prison Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{impactStats.communitySupport.elderlySupport}</div>
                  <div className="text-sm text-blue-700">Elderly Supported</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Key Achievements</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Partnership with Preston City Council</li>
                  <li>• Hindley Prison Eid celebration programs</li>
                  <li>• Winter care packages for isolated elderly</li>
                  <li>• Homeless outreach with meals and supplies</li>
                </ul>
              </div>
            </div>

            {/* Emergency Relief */}
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-orange-800">Emergency Relief</h3>
                  <p className="text-orange-600">Rapid response to humanitarian crises</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{impactStats.financialImpact.recentGazaAppeal}</div>
                  <div className="text-sm text-orange-700">Gaza Appeal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">4</div>
                  <div className="text-sm text-orange-700">Major Operations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{impactStats.emergencyRelief.covidPackages}</div>
                  <div className="text-sm text-orange-700">COVID Packages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">48hr</div>
                  <div className="text-sm text-orange-700">Response Time</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Recent Operations</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Gaza Emergency Appeal (2024)</li>
                  <li>• Pakistan Floods Relief (2022)</li>
                  <li>• Bangladesh Floods Response (2022)</li>
                  <li>• Earthquake Relief Operations (2022)</li>
                </ul>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-green-800">Infrastructure Development</h3>
                  <p className="text-green-600">Building lasting change</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{impactStats.infrastructure.familiesServed}</div>
                  <div className="text-sm text-green-700">Families w/ Water</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{impactStats.infrastructure.funeralHall}</div>
                  <div className="text-sm text-green-700">Funeral Hall</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{impactStats.infrastructure.mosqueSupport}</div>
                  <div className="text-sm text-green-700">Mosque Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5km</div>
                  <div className="text-sm text-green-700">Daily Walk Eliminated</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Key Projects</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Solar-powered water pump systems</li>
                  <li>• Community funeral hall construction</li>
                  <li>• Educational facility improvements</li>
                  <li>• Mosque support and enhancement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Major Project Highlights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectHighlights.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'Healthcare' ? 'bg-red-100 text-red-800' :
                    project.category === 'Community' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'Emergency' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {project.category}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Ongoing' ? 'bg-gofundme-green/10 text-gofundme-green' :
                    project.status === 'Completed' ? 'bg-gray-100 text-gray-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9a2 2 0 100-4 2 2 0 000 4zm0 0c1.274 0 2.447.232 3.5.654l3.5 1.346a2 2 0 101.5-3.698L16 11.346a2 2 0 00-1.5-.654H9.5a2 2 0 00-1.5.654L4.5 12.652A2 2 0 106 16.348l3.5-1.346A7.982 7.982 0 0112 15.5c1.274 0 2.447-.232 3.5-.654z" />
                    </svg>
                    Started: {project.startDate}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gofundme-green">
                    {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Impact Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Annual Impact Timeline</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {annualImpact.map((year, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="bg-gofundme-green text-white p-6 rounded-lg text-center">
                      <h3 className="text-2xl font-bold mb-2">{year.year}</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <div className="font-semibold">{year.stats.totalRaised}</div>
                          <div className="opacity-90">Raised</div>
                        </div>
                        <div>
                          <div className="font-semibold">{year.stats.beneficiaries}</div>
                          <div className="opacity-90">Beneficiaries</div>
                        </div>
                        <div>
                          <div className="font-semibold">{year.stats.newPrograms}</div>
                          <div className="opacity-90">New Programs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4">Key Highlights</h4>
                      <ul className="space-y-2">
                        {year.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-gofundme-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Financial Transparency</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Where Your Money Goes</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Direct to Beneficiaries</span>
                        <span className="font-semibold text-gofundme-green">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gofundme-green h-3 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Administrative Costs</span>
                        <span className="font-semibold text-gray-600">5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gray-400 h-3 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gofundme-green/10 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Our commitment:</strong> We maintain one of the lowest administrative cost ratios in the charity sector, ensuring maximum impact from every donation.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6">Financial Milestones</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <div className="font-semibold">Total Raised Since 2016</div>
                        <div className="text-sm text-gray-600">Across all programs</div>
                      </div>
                      <div className="text-xl font-bold text-gofundme-green">
                        {impactStats.financialImpact.totalRaised}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <div className="font-semibold">Recent Gaza Appeal</div>
                        <div className="text-sm text-gray-600">2024 Emergency Response</div>
                      </div>
                      <div className="text-xl font-bold text-gofundme-green">
                        {impactStats.financialImpact.recentGazaAppeal}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <div className="font-semibold">Al-Khair Partnership</div>
                        <div className="text-sm text-gray-600">Orphan & hospital support</div>
                      </div>
                      <div className="text-xl font-bold text-gofundme-green">
                        {impactStats.financialImpact.alKhairPartnership}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Be Part of Our Impact Story</h2>
          <p className="text-xl mb-8 mx-auto">
            Join thousands of supporters who have helped us transform lives over the past 8 years
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary bg-white text-gofundme-green hover:bg-gray-100">
              Donate Now
            </Link>
            <Link href="/volunteer" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors">
              Volunteer With Us
            </Link>
            <Link href="/news" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors">
              Read Our Stories
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 