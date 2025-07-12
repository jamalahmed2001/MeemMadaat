import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Video {
  title: string;
  filename: string;
  category: string;
  year?: string;
  description?: string;
}

const videos: Video[] = [
  // Medical/Clinic Videos
  {
    title: "Meem Madaat Welfare Clinic Number 1 - Ramadan Update",
    filename: "32 - MEEM MADAAT WELFARE CLINIC NUMBER 1 (RAMADAN KAREEM update promo 2022).mp4",
    category: "Medical Aid",
    year: "2022",
    description: "Update on our first welfare clinic during Ramadan 2022"
  },
  {
    title: "Meem Madaat Clinic Update - Ramadan 2022",
    filename: "35 - Meem Madaat clinic update Ramadan 2022.mp4",
    category: "Medical Aid",
    year: "2022"
  },
  {
    title: "Clinic 1 Overview",
    filename: "55 - clinic 1.mp4",
    category: "Medical Aid"
  },
  {
    title: "Clinic 2 Overview",
    filename: "54 - clinic 2.mp4",
    category: "Medical Aid"
  },
  {
    title: "Doctor Update - Clinic 1",
    filename: "61 - doctor update clinic 1.mp4",
    category: "Medical Aid"
  },
  {
    title: "Doctor Update - Clinic 2",
    filename: "60 - doctor update clinic 2.mp4",
    category: "Medical Aid"
  },
  {
    title: "Pharmacy & Manager Update",
    filename: "62 - pharmacy & manager update.mp4",
    category: "Medical Aid"
  },
  {
    title: "Clinic 1 New Video",
    filename: "67 - clinic 1 new video.mp4",
    category: "Medical Aid"
  },
  {
    title: "Eye Vision Camp for the Poor & Local Community",
    filename: "08 - [YT2mp3.info] - Meem madaat welfare Eye vision  Camp for the poor & local community.mp4",
    category: "Medical Aid",
    description: "Free eye care camp providing vision tests and glasses"
  },

  // Water & Infrastructure Projects
  {
    title: "Water Pump Projects Update",
    filename: "07 - [YT2mp3.info] - Update of Ramadan 2022 - jannazah gah_ community hall project & water pumps projecj.mp4",
    category: "Water Projects",
    year: "2022"
  },
  {
    title: "Before & After Water Pumps 2021",
    filename: "46 - before n after water pumps 2021 mm.mp4",
    category: "Water Projects",
    year: "2021"
  },
  {
    title: "Water Pump Installation",
    filename: "65 - water pump gah.mp4",
    category: "Water Projects"
  },
  {
    title: "Support to Build Funeral Hall & Water Pump Projects",
    filename: "31 - MEEM MADAAT SUPPORT TO BUILD A FUNERAL HALL (Janzah gah) & WATER PUMP PROJECTS 2022 UPDATE.mp4",
    category: "Water Projects",
    year: "2022"
  },
  {
    title: "The Funeral Hall Pakistan",
    filename: "66 - the funeral hall pakistan.mp4",
    category: "Infrastructure"
  },

  // UK Community Projects
  {
    title: "UK Community Projects - Eid Gifts & Food Packs",
    filename: "21 - Meem madaat U.K community projects; Eid gift_ Food packs & Food for Eid party at Hindley Prison.mp4",
    category: "UK Projects",
    description: "Eid celebrations at Hindley Prison with food packs and gifts"
  },
  {
    title: "Eid Celebration for All - Prison Project",
    filename: "22 - Eid is a celebration for all, Prisoners & Guards took part in a Eid party.mp4",
    category: "UK Projects"
  },
  {
    title: "UK Local Community Eid 2022 Projects",
    filename: "26 - Meem Madaat U.K (local community) Eid 2022 projects.mp4",
    category: "UK Projects",
    year: "2022"
  },
  {
    title: "Charity Event - Masjid E Raza Community Hall Preston",
    filename: "70 - CHARITY EVENT - MEEM MADAAT WALFARE GROUP MASJID E RAZA COMMUNITY HALL PRESTON 29-11-2019[Mpgun.com].mp4",
    category: "UK Projects",
    year: "2019"
  },
  {
    title: "Homeless Support",
    filename: "59 - homeless.mp4",
    category: "UK Projects"
  },

  // Emergency Relief & Appeals
  {
    title: "Pakistan Flood Victims Appeal 2022",
    filename: "27 - Meem madaat urgent Appeal - Raising funds for Pakistan flood victims 2022.mp4",
    category: "Emergency Relief",
    year: "2022"
  },
  {
    title: "Helping Bangladesh Flood Victims",
    filename: "29 - Helping the flood victims of Bangladesh.mp4",
    category: "Emergency Relief"
  },
  {
    title: "Earthquake Victims Appeal",
    filename: "30 - Raising funds to Help the victims of The Earthquake victims.mp4",
    category: "Emergency Relief"
  },
  {
    title: "Appeal Pakistan",
    filename: "77 - appeal pakistan.mp4",
    category: "Emergency Relief"
  },
  {
    title: "General Appeal",
    filename: "05 - appeal.mp4",
    category: "Emergency Relief"
  },
  {
    title: "Appeal Video",
    filename: "18 - appeal.mp4",
    category: "Emergency Relief"
  },

  // Ramadan & Religious Projects
  {
    title: "Ramadan 2022 Projects - Part 1",
    filename: "24 - Part 1_ Meem madaat completed projects in Ramadan 2022.mp4",
    category: "Ramadan Projects",
    year: "2022"
  },
  {
    title: "Ramadan 2022 Projects - Part 2",
    filename: "23 - Part 2_ Meem madaat projects completed in Ramadan 2022.mp4",
    category: "Ramadan Projects",
    year: "2022"
  },
  {
    title: "Iftari for the Poor & Food Distribution",
    filename: "33 - Meem madaat team arranged Iftari for the poor, distributed food parcels & gave cash gifts (1).mp4",
    category: "Ramadan Projects"
  },
  {
    title: "Eid ul Fitr 2022 Gift Packs for Orphans",
    filename: "34 - Meem madaat welfare Eid ul Fitr 2022 gift packs for the orphan or needy child project.mp4",
    category: "Ramadan Projects",
    year: "2022"
  },
  {
    title: "Feeding the Masses - Dhul Hijjah",
    filename: "28 - Feeding the masses during the first 9 days of dhul Hijjah.mp4",
    category: "Ramadan Projects"
  },
  {
    title: "Ramadan Kareem",
    filename: "58 - ramadan kareem.mp4",
    category: "Ramadan Projects"
  },
  {
    title: "Muharram Project",
    filename: "19 - muharram1.mp4",
    category: "Religious Projects"
  },
  {
    title: "Rabi ul Awal 2021",
    filename: "43 - 2021 rabi ul awal.mp4",
    category: "Religious Projects",
    year: "2021"
  },

  // Educational & Religious Content
  {
    title: "Imam Adil English Bayan",
    filename: "56 - IMAM ADIL ENGLISH BAYAN 28.3.2021.mp4",
    category: "Educational",
    year: "2021"
  },
  {
    title: "Kamran Ahmed English Talk",
    filename: "41 - kamran ahmed english 23.5.21.mp4",
    category: "Educational",
    year: "2021"
  },
  {
    title: "Kamran Ahmed Quran Recitation",
    filename: "42 - kamran ahmed quran 23.5.21.mp4",
    category: "Educational",
    year: "2021"
  },
  {
    title: "Kamran Quran Live",
    filename: "49 - KAMRAN QURAN LIVE MMA 6.5.21.mp4",
    category: "Educational",
    year: "2021"
  },
  {
    title: "Kamran Quran",
    filename: "57 - KAMRAN QURAN 28.3.20.mp4",
    category: "Educational"
  },
  {
    title: "Dua Meem",
    filename: "78 - dua meem.mp4",
    category: "Educational"
  },
  {
    title: "Barwe Ka Chand Aya",
    filename: "69 - barwe ka chand aya.mp4",
    category: "Religious Projects"
  },
  {
    title: "Ab To Bas",
    filename: "73 - ab to bas.mp4",
    category: "Religious Projects"
  },

  // General Project Updates
  {
    title: "Meem Madaat Welfare Projects 2022 Update",
    filename: "20 - MEEM MADAAT WELFARE PROJECTS 2022 UPDATE.mp4",
    category: "Project Updates",
    year: "2022"
  },
  {
    title: "Meem Madaat Project 1 - 2022",
    filename: "17 - meemmadaat project 1 2022.mp4",
    category: "Project Updates",
    year: "2022"
  },
  {
    title: "MM Project 2 - 2022",
    filename: "16 - mm project 2 2022.mp4",
    category: "Project Updates",
    year: "2022"
  },
  {
    title: "MM Project 3",
    filename: "14 - MM PROJECT 3.mp4",
    category: "Project Updates"
  },
  {
    title: "Meem Madaat Project 4 - 2022",
    filename: "15 - meem madaat projet 4 2022.mp4",
    category: "Project Updates",
    year: "2022"
  },
  {
    title: "Project Update Part 1",
    filename: "10 - p1 mm22.mp4",
    category: "Project Updates",
    year: "2022"
  },
  {
    title: "Project Update Part 2",
    filename: "11 - p2 mm 22.mp4",
    category: "Project Updates",
    year: "2022"
  },
  {
    title: "Project Update Part 3",
    filename: "13 - p3 mm 22.mp4",
    category: "Project Updates",
    year: "2022"
  },
  {
    title: "Project Update Part 4",
    filename: "09 - p4 new mm 22.mp4",
    category: "Project Updates",
    year: "2022"
  },
  {
    title: "Project Update Part 5",
    filename: "12 - p5 mm 22.mp4",
    category: "Project Updates",
    year: "2022"
  },

  // Special Projects
  {
    title: "Windows & Doors Installation for Needy Family",
    filename: "39 - Meem Madaat Supported Qari Naseer Chishti Sahib Appeal To Install Windows & Doors For A Needy Family.mp4",
    category: "Family Support"
  },
  {
    title: "Children's Project",
    filename: "47 - chilrdren.mp4",
    category: "Family Support"
  },
  {
    title: "Meem Madaat Plant 2021",
    filename: "45 - meemmadaat plant 2021.mp4",
    category: "Environmental",
    year: "2021"
  },
  {
    title: "Pakistan Day 2021",
    filename: "44 - 14.8.21 pakistan day mm.mp4",
    category: "Special Events",
    year: "2021"
  },

  // General/Promotional Videos
  {
    title: "Meem Madaat Promo",
    filename: "38 - memadmadaat promo.mp4",
    category: "Promotional"
  },
  {
    title: "Meem Madaat Promo 2",
    filename: "64 - memadmadaat promo.mp4",
    category: "Promotional"
  },
  {
    title: "Meem Madaat Update Video",
    filename: "36 - meem madaat update video[Mpgun.com] copy.mp4",
    category: "General Updates"
  },
  {
    title: "Meem Madaat Update",
    filename: "37 - meem madaat update video[Mpgun.com].mp4",
    category: "General Updates"
  },
  {
    title: "Meem Madaat",
    filename: "40 - meem madaat.mp4",
    category: "General Updates"
  },
  {
    title: "MM",
    filename: "51 - mm.mp4",
    category: "General Updates"
  },
  {
    title: "Meem Madat",
    filename: "76 - meem madat.mp4",
    category: "General Updates"
  },
  {
    title: "Final",
    filename: "63 - final.mp4",
    category: "General Updates"
  },
  {
    title: "VE",
    filename: "50 - ve.mp4",
    category: "General Updates"
  },
  {
    title: "DCA",
    filename: "52 - dca.mp4",
    category: "General Updates"
  },
  {
    title: "My Video",
    filename: "02 - My Video.mp4",
    category: "General Updates"
  },
  {
    title: "My Video 2",
    filename: "06 - My Video.mp4",
    category: "General Updates"
  },
  {
    title: "VID-20230227",
    filename: "03 - VID-20230227-WA0015.mp4",
    category: "General Updates",
    year: "2023"
  },
  {
    title: "6 February 2023",
    filename: "04 - 6 February 2023.mp4",
    category: "General Updates",
    year: "2023"
  },
  {
    title: "Sequence 05",
    filename: "53 - Sequence 05_2.mp4",
    category: "General Updates"
  },
  {
    title: "Facebook Video",
    filename: "72 - Facebook video 10156375492845356.mp4",
    category: "General Updates"
  }
];

const categories = [
  "All",
  "Medical Aid",
  "Water Projects",
  "UK Projects",
  "Emergency Relief",
  "Ramadan Projects",
  "Religious Projects",
  "Educational",
  "Project Updates",
  "Family Support",
  "Infrastructure",
  "Environmental",
  "Special Events",
  "Promotional",
  "General Updates"
];

export default function Videos() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Handle category from URL query parameter
    if (router.query.category && typeof router.query.category === 'string') {
      const decodedCategory = decodeURIComponent(router.query.category);
      if (categories.includes(decodedCategory)) {
        setSelectedCategory(decodedCategory);
      }
    }
  }, [router.query.category]);

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (video.description && video.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const videoCounts = categories.reduce((acc, category) => {
    if (category === "All") {
      acc[category] = videos.length;
    } else {
      acc[category] = videos.filter(v => v.category === category).length;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <Layout>
      <Head>
        <title>Videos - Meem Madaat | Watch Our Impact in Action</title>
        <meta
          name="description"
          content="Watch videos showcasing Meem Madaat's charitable work including medical clinics, water projects, emergency relief, and community support programs."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Our Work in Action</h1>
          <p className="text-xl mx-auto">
            Watch how your donations transform lives through our various programs
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-light-gray sticky top-0 z-10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gofundme-green"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-gofundme-green text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category} ({videoCounts[category]})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Showing {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {filteredVideos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No videos found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 relative">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      <source src={`/videos/${video.filename}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold line-clamp-2 flex-1">{video.title}</h3>
                      {video.year && (
                        <span className="text-sm text-gray-500 ml-2">{video.year}</span>
                      )}
                    </div>
                    <p className="text-sm text-gofundme-green mb-2">{video.category}</p>
                    {video.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Be Part of Our Story</h2>
          <p className="text-xl mb-8 mx-auto">
            Your support helps us create more success stories and change more lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 