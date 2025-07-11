import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";

// Real Meem Madaat news articles - complete with all 19 articles
const newsArticles = [
  {
    id: 1,
    title: "Gaza Emergency Appeal Raises £5,000 for Heal Humanity",
    date: "April 20, 2024",
    author: "Meem Madaat Team",
    category: "Emergency Relief",
    excerpt: "Responding to urgent humanitarian needs in Gaza, Meem Madaat launched a special £5,000 Ramadan appeal to support the Heal Humanity campaign. The appeal called on donors to contribute Zakat, Fitrah, Fidyah, and Lillah—with a commitment that 100% of donations reach affected families.",
    image: "/photos/Covid 19 packages/imgi_39_2e6e70_0dee80a305c3428389e2877e047f4f8d~mv2.jpg",
    content: `
      <p>In response to the urgent humanitarian crisis in Gaza, Meem Madaat has launched a special £5,000 Ramadan appeal to support the Heal Humanity campaign. This initiative represents our commitment to helping those in desperate need during these challenging times.</p>
      
      <p>The appeal, launched during the holy month of Ramadan, specifically calls on our community to contribute through various Islamic charitable giving methods including Zakat, Fitrah, Fidyah, and Lillah donations.</p>
      
      <h3>100% Donation Policy</h3>
      <p>We're proud to maintain our 100% donation policy for this emergency appeal, meaning every penny donated goes directly to helping affected families, with no administrative costs deducted from donations.</p>
      
      <h3>Community Response</h3>
      <p>The response from our community has been overwhelming. Your continued support for emergency appeals like this enables us to respond quickly to humanitarian crises around the world.</p>
    `,
  },
  {
    id: 2,
    title: "Medical Clinics Now Serving 80+ Patients Daily",
    date: "April 12, 2024",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "Our medical clinics now rotate between Gharmallah and Shakreela Shareef, with our second permanent outpost officially opened. The expanded network now treats over 80 patients daily, providing free healthcare to rural communities across the Jhelum district.",
    image: "/photos/Clinic 1/imgi_15_2e6e70_447bb7eb26e6489ebd0f2ba6c8543ed8~mv2.jpg",
    content: `
      <p>We're proud to share that our expanded medical clinic network has reached a significant milestone - treating over 80 patients daily across our facilities in Gharmallah and Shakreela Shareef.</p>
      
      <p>Our medical program now operates through a strategic rotation system between our two permanent clinics, ensuring that rural communities across the Jhelum district have consistent access to quality healthcare services.</p>
      
      <h3>Expanded Network Operations</h3>
      <p>Our medical network now includes primary clinic in Gharmallah, secondary clinic in Shakreela Shareef, mobile medical camps serving remote villages, and emergency response services for urgent cases.</p>
      
      <h3>Community Impact</h3>
      <p>The expansion of our medical services has created a profound impact on the communities we serve. The rotation system ensures that even the most remote villages have access to regular medical care.</p>
    `,
  },
  {
    id: 3,
    title: "Partnership with Preston City Council Delivers 200+ Care Packages",
    date: "November 15, 2023",
    author: "Meem Madaat Team",
    category: "Community Support",
    excerpt: "Through our 'Rebuild With Hope' partnership with DCA and Preston City Council, we delivered over 200 care packages to isolated elderly residents during the winter months. This collaborative initiative demonstrates the power of community partnership in supporting vulnerable populations.",
    image: "/photos/UK Projects/imgi_64_2e6e70_7432f652280c4f40a98855518414e4f2~mv2.jpg",
    content: `
      <p>We're proud to share the success of our collaboration with the DCA "Rebuild With Hope" initiative, led by Catherine Becket at Preston City Council. This partnership exemplifies how community organizations can work together to address local challenges and support vulnerable residents.</p>
      
      <p>The collaboration focused on providing essential support to isolated elderly residents in Preston during the harsh winter months of 2023-2024.</p>
      
      <h3>Winter-Warmth Drive</h3>
      <p>Our winter-warmth drive included thermal blankets, emergency heating vouchers, nutritious food packages, and social contact and welfare checks.</p>
      
      <h3>Impact and Outcomes</h3>
      <p>Between December 2023 and February 2024, we successfully delivered over 200 care packages to elderly residents across Preston, reducing social isolation and improving physical health among recipients.</p>
    `,
  },
  {
    id: 4,
    title: "Al-Khair Partnership Sponsors 15 Orphans and Supports Hospital Fund",
    date: "August 8, 2023",
    author: "Meem Madaat Team",
    category: "Partnerships",
    excerpt: "In collaboration with Al-Khair UK, our Preston team successfully raised £1,500 for a local hospital fund and £9,000 to sponsor 15 orphaned children in Pakistan. Funds were collected through joint community events, appeals, and innovative workplace giving schemes.",
    image: "/photos/Elderly & Orphans /imgi_9_2e6e70_bafbbdae55274d0abe7ca1787862fe61~mv2.jpg",
    content: `
      <p>We're delighted to share the success of our partnership with Al-Khair UK, which has resulted in significant funding for both local healthcare and international orphan support.</p>
      
      <p>Through our joint efforts based in Preston, we successfully raised £10,500 in total - £1,500 for a local hospital fund and £9,000 to sponsor 15 orphaned children in Pakistan.</p>
      
      <h3>Orphan Sponsorship Program</h3>
      <p>The £9,000 raised will sponsor 15 orphaned children in Pakistan, providing them with educational fees, healthcare services, nutritious meals, safe accommodation, and emotional support.</p>
      
      <h3>Community Impact</h3>
      <p>The partnership has strengthened ties within our Preston community while extending our reach to vulnerable children in Pakistan.</p>
    `,
  },
  {
    id: 5,
    title: "Constitution Strengthened with Enhanced Governance Framework",
    date: "March 20, 2023",
    author: "Meem Madaat Team",
    category: "Governance",
    excerpt: "At our Extraordinary General Meeting, we formally amended our constitution to strengthen governance structures. Key changes include extended trustee terms, formalized Safeguarding Team protocols, and updated meeting quorum requirements to ensure robust organizational oversight.",
    image: "/photos/Launch/imgi_6_2e6e70_fb0b504540164cd1878064b6686508d3~mv2.jpg",
    content: `
      <p>At our Extraordinary General Meeting held on March 20, 2023, Meem Madaat formally amended our constitution to strengthen our governance framework.</p>
      
      <h3>Key Constitutional Changes</h3>
      <p>The major amendments include extended trustee terms from 2 to 3 years, formalized Safeguarding Team protocols, updated meeting quorum requirements, and enhanced financial oversight mechanisms.</p>
      
      <h3>Community Response</h3>
      <p>The amendments were unanimously approved by attending members, reflecting broad support for these governance improvements.</p>
    `,
  },
  {
    id: 6,
    title: "15,000-Patient Milestone Reached Across All Medical Clinics",
    date: "July 2022",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "A historic milestone: across all our medical clinics in Pakistan, Meem Madaat has now treated over 15,000 people since our healthcare program began in 2019. This achievement represents thousands of lives improved through free medical care, antenatal services, and essential medicines.",
    image: "/photos/Clinic 2/imgi_21_2e6e70_53b12026c46f4e95b734f4e55e69b22a~mv2.jpg",
    content: `
      <p>We're proud to announce that our medical clinics in Pakistan have reached a historic milestone - treating over 15,000 people since our healthcare program began in 2019.</p>
      
      <p>This achievement represents thousands of lives improved through free medical care, antenatal services, and essential medicines provided to rural communities who previously had limited access to healthcare.</p>
      
      <h3>Healthcare Impact</h3>
      <p>Our comprehensive healthcare services have included general consultations, maternal health support, chronic disease management, and emergency medical assistance - all provided free of charge to ensure no one is denied care due to financial constraints.</p>
      
      <h3>Looking Forward</h3>
      <p>This milestone motivates us to continue expanding our healthcare services, with plans for additional satellite clinics and specialized medical camps to reach even more communities in need.</p>
    `,
  },
  {
    id: 7,
    title: "Comprehensive Emergency Relief Response to Pakistan Floods",
    date: "August 2022",
    author: "Meem Madaat Team",
    category: "Emergency Relief",
    excerpt: "In response to devastating floods across Pakistan, Meem Madaat launched an emergency relief operation providing food, clean water, temporary shelter, and medical aid to affected communities. Our rapid response capabilities enabled us to reach remote areas within 48 hours of the disaster.",
    image: "/photos/Covid 19 packages/imgi_40_2e6e70_7acc070c06e242dfb0116c2c4e3ef268~mv2.jpg",
    content: `
      <p>When devastating floods struck Pakistan in August 2022, Meem Madaat immediately mobilized our emergency response capabilities to provide critical aid to affected communities.</p>
      
      <p>The floods affected over 33 million people across Pakistan, with entire villages submerged and families displaced from their homes. Our team responded within 48 hours, coordinating with local partners to deliver essential supplies.</p>
      
      <h3>Emergency Response Services</h3>
      <p>Our flood relief operation provided emergency food packages, clean water and purification supplies, temporary shelter materials, medical aid, and hygiene kits to thousands of affected families.</p>
      
      <h3>Community Coordination</h3>
      <p>Working closely with local authorities and community leaders, we ensured that aid reached the most vulnerable populations, including elderly residents, pregnant women, and children.</p>
    `,
  },
  {
    id: 8,
    title: "Ramadan 2022: Record-Breaking Community Support Programs",
    date: "April 2022",
    author: "Meem Madaat Team",
    category: "Community Support",
    excerpt: "Our most comprehensive Ramadan program to date included clinic expansions, community iftar programs, food parcel distribution, and support for vulnerable families. The initiative reached over 5,000 beneficiaries across both UK and Pakistan operations.",
    image: "/photos/Covid 19 packages/imgi_41_2e6e70_b4a7b6739d74428ca42f4766787425e4~mv2.jpg",
    content: `
      <p>Ramadan 2022 marked our most comprehensive community support program to date, reaching over 5,000 beneficiaries across both our UK and Pakistan operations.</p>
      
      <p>The holy month provided an opportunity to expand our services significantly, with increased funding from the generous Muslim community enabling us to scale our impact across multiple program areas.</p>
      
      <h3>Program Highlights</h3>
      <p>Our Ramadan 2022 initiatives included expanded medical clinic services, community iftar programs serving hundreds of families, food parcel distribution to vulnerable households, and enhanced support for orphaned children and elderly residents.</p>
      
      <h3>Community Impact</h3>
      <p>The program demonstrated the power of collective action during the holy month, with volunteers from across our community contributing time, skills, and resources to support those in need.</p>
      
      <h3>Sustainable Development</h3>
      <p>Beyond immediate relief, the Ramadan program funded several infrastructure improvements, including clinic equipment upgrades and water system maintenance, creating lasting benefits for the communities we serve.</p>
    `,
  },
  {
    id: 9,
    title: "Eid Celebration Programs Bring Communities Together",
    date: "May 2022",
    author: "Meem Madaat Team",
    category: "Community Support",
    excerpt: "Our Eid 2022 programs demonstrated that 'Eid is a celebration for all.' Highlights included prison support at Hindley Prison, orphan sponsorship programs, and community celebration events that brought together people from all backgrounds in the spirit of unity and joy.",
    image: "/photos/UK Projects/imgi_65_2e6e70_c1f1ee9784ce435abd4f6f9bba47c52e~mv2.jpg",
    content: `
      <p>Our Eid 2022 programs truly embodied the spirit that 'Eid is a celebration for all,' bringing together communities across different backgrounds and circumstances to share in the joy of the festival.</p>
      
      <p>The program's reach extended from traditional community celebrations to innovative initiatives that brought Eid joy to often-forgotten populations, including prisoners and isolated elderly residents.</p>
      
      <h3>Prison Support Initiative</h3>
      <p>One of our most impactful programs was the Eid celebration at Hindley Prison, where both prisoners and guards participated in communal festivities, breaking down barriers and fostering understanding across different communities.</p>
      
      <h3>Community Celebrations</h3>
      <p>Our main community events brought together families from diverse backgrounds, featuring traditional foods, cultural performances, and activities for children, creating lasting bonds within our Preston community.</p>
      
      <h3>Orphan Sponsorship</h3>
      <p>Special Eid gift programs ensured that orphaned children in Pakistan experienced the same joy as their peers, receiving new clothes, toys, and festive meals that made their Eid celebration memorable.</p>
    `,
  },
  {
    id: 10,
    title: "Shakreela Shareef Medical Project Launches",
    date: "April 2021",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "The Shakreela Shareef Project represents our third permanent medical clinic in rural Pakistan, operating under local management with expanded eye-care camps. This strategic expansion allows us to serve additional remote communities previously without access to healthcare services.",
    image: "/photos/Clinic 2/imgi_22_2e6e70_3e265a81305f4122982084425226feeb~mv2.jpg",
    content: `
      <p>The launch of our Shakreela Shareef Medical Project marks a significant milestone in our healthcare expansion, establishing our third permanent clinic in rural Pakistan and demonstrating our commitment to reaching underserved communities.</p>
      
      <p>This project represents a strategic shift towards locally-managed healthcare services, with trained community health workers providing sustainable, culturally-appropriate care to remote villages.</p>
      
      <h3>Local Management Model</h3>
      <p>Unlike our previous clinics, Shakreela Shareef operates under a local management structure, with trained community members taking leadership roles in healthcare delivery, ensuring cultural sensitivity and long-term sustainability.</p>
      
      <h3>Specialized Eye-Care Services</h3>
      <p>The clinic features expanded eye-care services, including regular vision screening camps, cataract surgery referrals, and treatment for common eye conditions that disproportionately affect rural populations.</p>
      
      <h3>Community Response</h3>
      <p>The overwhelming positive response from local communities has validated our approach, with the clinic treating over 200 patients in its first month of operation.</p>
    `,
  },
  {
    id: 11,
    title: "Infrastructure Development Year: Water, Education, and Environmental Projects",
    date: "2021",
    author: "Meem Madaat Team",
    category: "Infrastructure",
    excerpt: "2021 marked a significant year for infrastructure development. Key projects included multiple water pump installations, educational facility improvements, Pakistan Day commemorative projects, and environmental conservation initiatives. These projects created lasting impact beyond immediate relief.",
    image: "/photos/Water Projects/imgi_10_2e6e70_180f575ab8fc41999539114d0cb568c2~mv2.jpg",
    content: `
      <p>2021 was a landmark year for Meem Madaat's infrastructure development program, with multiple large-scale projects creating lasting positive change in the communities we serve.</p>
      
      <p>Our focus shifted from emergency relief to sustainable development, investing in projects that would provide long-term benefits and create foundations for community growth and prosperity.</p>
      
      <h3>Water Infrastructure Projects</h3>
      <p>Multiple water pump installations brought clean, accessible water to over 500 families across three villages, dramatically reducing water-borne diseases and eliminating the daily burden of long-distance water collection.</p>
      
      <h3>Educational Facility Improvements</h3>
      <p>School infrastructure upgrades included new classrooms, sanitation facilities, and learning materials, creating better educational environments for over 300 children in rural areas.</p>
      
      <h3>Environmental Conservation</h3>
      <p>Our environmental initiatives included tree planting programs, waste management systems, and sustainable agriculture training, addressing long-term environmental challenges in partnership with local communities.</p>
      
      <h3>Pakistan Day Commemorative Projects</h3>
      <p>Special projects celebrating Pakistan's independence included community hall improvements and cultural preservation initiatives that strengthened local identity and pride.</p>
    `,
  },
  {
    id: 12,
    title: "Medical Programme Expansion: Two New Satellite Clinics",
    date: "September 2020",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "Despite pandemic challenges, we successfully expanded our medical aid program with two additional satellite clinics in villages neighboring our Gharmallah base. This expansion allows us to reach previously underserved communities while maintaining our quality standards of care.",
    image: "/photos/Clinic 1/imgi_16_2e6e70_7e2799e2456c44d691f07b430d1f22d0~mv2.jpg",
    content: `
      <p>Despite the global challenges posed by the COVID-19 pandemic, 2020 became a year of significant expansion for our medical aid program, with the successful launch of two additional satellite clinics.</p>
      
      <p>These clinics, located in villages neighboring our established Gharmallah base, represent our commitment to reaching previously underserved communities while maintaining the high standards of care our patients have come to expect.</p>
      
      <h3>Pandemic Response Adaptations</h3>
      <p>The expansion required innovative approaches to healthcare delivery, including enhanced infection control measures, telemedicine consultations, and modified patient flow systems to ensure safe care during the pandemic.</p>
      
      <h3>Extended Reach</h3>
      <p>The two new satellite clinics now serve five additional villages, bringing our total patient base to over 1,500 regular patients receiving ongoing care for chronic conditions and preventive health services.</p>
      
      <h3>Quality Assurance</h3>
      <p>All satellite clinics maintain the same quality standards as our main facility, with regular supervision visits, standardized protocols, and continuous training for local healthcare workers.</p>
    `,
  },
  {
    id: 13,
    title: "Quranic Education Programs Launch During Pandemic",
    date: "March 2020",
    author: "Meem Madaat Team",
    category: "Education",
    excerpt: "Adapting to pandemic challenges, we launched innovative Quranic education programs and strengthened our UK-Pakistan operational bridge. These programs maintained community connections during lockdowns while providing spiritual and educational support to families.",
    image: "/photos/Launch/imgi_7_2e6e70_b27b0f56d98042929a95976e15b8d41a~mv2.jpg",
    content: `
      <p>The onset of the COVID-19 pandemic in March 2020 presented unprecedented challenges, but also opportunities for innovation in our educational programs and community outreach efforts.</p>
      
      <p>Our Quranic education programs emerged as a vital lifeline for families during lockdowns, providing spiritual comfort and educational continuity when traditional systems were disrupted.</p>
      
      <h3>Innovative Educational Delivery</h3>
      <p>We developed hybrid learning models combining in-person small group sessions with remote learning resources, ensuring that religious education continued safely throughout the pandemic period.</p>
      
      <h3>Strengthened UK-Pakistan Bridge</h3>
      <p>The pandemic accelerated our development of digital communications systems, allowing for real-time coordination between our UK and Pakistan operations and enhanced program monitoring.</p>
      
      <h3>Community Connection</h3>
      <p>Regular virtual community gatherings, online religious classes, and digital storytelling sessions helped maintain social connections and provide emotional support during challenging times.</p>
      
      <h3>Adaptive Learning</h3>
      <p>The programs served over 150 children and adults, with flexible scheduling that accommodated work-from-home arrangements and family responsibilities during lockdowns.</p>
    `,
  },
  {
    id: 14,
    title: "Historic Community Event at Masjid E Raza Community Hall",
    date: "November 29, 2019",
    author: "Meem Madaat Team",
    category: "Milestones",
    excerpt: "Our largest community event to date brought together over 300 people at Masjid E Raza Community Hall in Preston. This milestone event strengthened community partnerships, raised significant funds, and demonstrated the power of collective action in supporting charitable causes.",
    image: "/photos/Launch/imgi_8_2e6e70_7fca97aaadf841fb9f6373a9591c95e4~mv2.jpg",
    content: `
      <p>November 29, 2019, marked a historic milestone for Meem Madaat as we hosted our largest community event to date at the Masjid E Raza Community Hall in Preston, bringing together over 300 people in support of our charitable mission.</p>
      
      <p>This event represented the culmination of years of community building and demonstrated the incredible power of collective action in supporting charitable causes both locally and internationally.</p>
      
      <h3>Community Unity</h3>
      <p>The event brought together people from diverse backgrounds, ages, and communities, all united in their commitment to helping those in need. The overwhelming attendance exceeded our expectations and validated our approach to inclusive community engagement.</p>
      
      <h3>Fundraising Success</h3>
      <p>The event raised over £12,000 for our ongoing projects, including medical clinic operations, water infrastructure, and emergency relief programs. This significant sum represented one of our largest single fundraising achievements.</p>
      
      <h3>Program Showcase</h3>
      <p>Attendees had the opportunity to learn about our various programs through interactive displays, video presentations, and direct testimonials from beneficiaries who had traveled from Pakistan to share their experiences.</p>
      
      <h3>Partnership Strengthening</h3>
      <p>The event strengthened our partnerships with local organizations, religious institutions, and community leaders, creating a network of support that continues to benefit our work today.</p>
    `,
  },
  {
    id: 15,
    title: "First Medical Clinic Opens in Gharmallah",
    date: "March 2019",
    author: "Meem Madaat Team",
    category: "Medical Aid",
    excerpt: "Our flagship medical clinic in Gharmallah officially opened, offering weekly medical camps with volunteer doctors providing general check-ups, antenatal care, and essential medicine distribution. This clinic would become the foundation of our healthcare program serving thousands.",
    image: "/photos/Clinic 1/imgi_17_2e6e70_384bdf4667e74950bf3aff572096b093~mv2.jpg",
    content: `
      <p>March 2019 marked a transformative moment in Meem Madaat's history with the official opening of our first medical clinic in Gharmallah, Pakistan. This clinic would become the foundation of our healthcare program, eventually serving thousands of patients.</p>
      
      <p>The clinic opening represented the fulfillment of our founders' vision to provide accessible, quality healthcare to rural communities that had previously been underserved by Pakistan's healthcare system.</p>
      
      <h3>Weekly Medical Camps</h3>
      <p>The clinic operates weekly medical camps with volunteer doctors providing comprehensive healthcare services, including general consultations, antenatal care, child health monitoring, and chronic disease management.</p>
      
      <h3>Essential Medicine Distribution</h3>
      <p>Our partnership with local pharmacies ensures that patients receive essential medications at no cost, removing financial barriers to treatment that had previously prevented many from accessing care.</p>
      
      <h3>Community Health Education</h3>
      <p>Beyond treatment, the clinic serves as a hub for health education, with regular sessions on preventive care, nutrition, maternal health, and hygiene practices that have improved community health outcomes.</p>
      
      <h3>Foundation for Growth</h3>
      <p>This first clinic became the model for our expanded healthcare network, with protocols and systems developed in Gharmallah later replicated in our other medical facilities.</p>
    `,
  },
  {
    id: 16,
    title: "First UK Homeless Outreach Program Launches",
    date: "December 2018",
    author: "Meem Madaat Team",
    category: "Community Support",
    excerpt: "Our inaugural UK homeless outreach program delivered 150 hot-meal packs, blankets, and hygiene kits to local shelters in Preston. This program established our commitment to serving vulnerable populations both locally and internationally.",
    image: "/photos/UK Projects/imgi_66_2e6e70_38dd833f4fb54299919958b6fa31b196~mv2.jpg",
    content: `
      <p>December 2018 marked the launch of our first UK homeless outreach program, establishing Meem Madaat's commitment to serving vulnerable populations both locally and internationally.</p>
      
      <p>The program emerged from our recognition that charity begins at home, and that we had a responsibility to address urgent needs within our own community while maintaining our international development work.</p>
      
      <h3>Immediate Response Initiative</h3>
      <p>Working during the harsh winter months, our volunteers distributed 150 hot-meal packs, thermal blankets, and hygiene kits to homeless individuals at local shelters and on the streets of Preston.</p>
      
      <h3>Community Partnership</h3>
      <p>The program was developed in partnership with local homeless shelters, social services, and community organizations, ensuring our efforts complemented rather than duplicated existing services.</p>
      
      <h3>Volunteer Engagement</h3>
      <p>Over 25 volunteers participated in the program, with many experiencing direct service to vulnerable populations for the first time, creating a deeper understanding of local social challenges.</p>
      
      <h3>Sustainable Model</h3>
      <p>The success of this initial program established a sustainable model for ongoing UK community support, with regular winter outreach programs continuing to serve vulnerable populations in Preston.</p>
    `,
  },
  {
    id: 17,
    title: "First Clean Water Pump Installed in Gharmallah",
    date: "June 2018",
    author: "Meem Madaat Team",
    category: "Infrastructure",
    excerpt: "Our first major infrastructure project brought clean water to over 200 families in Gharmallah, Pakistan. This solar-powered water pump significantly reduced waterborne diseases and eliminated the daily 5-kilometer walk that women and children previously made to fetch water.",
    image: "/photos/Water Projects/imgi_11_2e6e70_dcc9e11754ad4195bfc6f0ce94752df5~mv2.jpg",
    content: `
      <p>June 2018 marked a historic milestone with the installation of our first clean water pump in Gharmallah, Pakistan - a project that would transform the daily lives of over 200 families and serve as a model for our future infrastructure development.</p>
      
      <p>Before this project, families in Gharmallah faced a daily 5-kilometer walk to fetch water from the nearest clean source, a burden that fell disproportionately on women and children, limiting their opportunities for education and economic participation.</p>
      
      <h3>Solar-Powered Innovation</h3>
      <p>The water pump system utilizes solar power technology, ensuring sustainable operation without ongoing fuel costs or environmental impact. This innovative approach has provided reliable access to clean water even during power outages.</p>
      
      <h3>Health Impact</h3>
      <p>The project has dramatically reduced waterborne diseases in the community, with local health records showing a 60% decrease in diarrheal illnesses and other water-related health problems among children and adults.</p>
      
      <h3>Women's Empowerment</h3>
      <p>By eliminating the daily water collection burden, women and girls have gained time for education, income-generating activities, and family care, contributing to improved economic outcomes for entire families.</p>
      
      <h3>Community Ownership</h3>
      <p>The project includes training for local technicians in maintenance and repair, ensuring the long-term sustainability of the water system and creating local employment opportunities.</p>
    `,
  },
  {
    id: 18,
    title: "Meem Madaat Officially Registered as UK Charity",
    date: "January 15, 2018",
    author: "Meem Madaat Founders",
    category: "Milestones",
    excerpt: "Meem Madaat was formally registered as a Charitable Incorporated Organisation (CIO) in England & Wales. Our constitution was adopted, detailing our charitable objects: poverty relief, health advancement, education, and community cohesion. This registration marked our transition from community group to formal charity.",
    image: "/photos/Launch/imgi_6_2e6e70_fb0b504540164cd1878064b6686508d3~mv2.jpg",
    content: `
      <p>January 15, 2018, represents a pivotal moment in Meem Madaat's history - the day we were formally registered as a Charitable Incorporated Organisation (CIO) in England & Wales, marking our transition from a community group to a legally recognized charity.</p>
      
      <p>This registration represented the culmination of two years of careful planning, legal consultation, and community engagement to ensure that our charitable structure would effectively serve our mission for years to come.</p>
      
      <h3>Constitutional Framework</h3>
      <p>Our adopted constitution details four core charitable objects: poverty relief through direct aid and development programs, health advancement through medical services and health education, education through formal and informal learning opportunities, and community cohesion through programs that bring people together across cultural and social divides.</p>
      
      <h3>Governance Structure</h3>
      <p>The registration established our governance structure with a Board of Trustees, clear accountability mechanisms, and transparent financial management systems that ensure donor funds are used effectively and ethically.</p>
      
      <h3>Legal Compliance</h3>
      <p>Formal charity status brought us under the regulation of the Charity Commission for England and Wales, ensuring we meet the highest standards of charity governance and public accountability.</p>
      
      <h3>Enhanced Credibility</h3>
      <p>Registration significantly enhanced our credibility with donors, partner organizations, and beneficiaries, enabling us to secure larger grants and develop more substantial partnerships.</p>
    `,
  },
  {
    id: 19,
    title: "The Vision Begins: Meem Madaat Conceived",
    date: "January 1, 2016",
    author: "Meem Madaat Founders",
    category: "Milestones",
    excerpt: "On the first day of 2016, a small group of UK volunteers with family ties to rural Punjab, Pakistan, came together with a shared vision. Inspired by Islamic principles of service and inclusivity, they committed to helping poverty-stricken villages in the Jhelum district while supporting vulnerable people in Preston. This was the beginning of our journey.",
    image: "/photos/Family Support/imgi_13_2e6e70_ffb273c72313415687b5c62abc93b472~mv2.jpg",
    content: `
      <p>January 1, 2016, marked the beginning of Meem Madaat's journey when a small group of UK volunteers with family ties to rural Punjab, Pakistan, came together with a shared vision that would eventually transform thousands of lives.</p>
      
      <p>The founding moment was inspired by Islamic principles of service and inclusivity, with the founders committed to creating an organization that would serve all people regardless of background, faith, or circumstances.</p>
      
      <h3>The Founding Vision</h3>
      <p>Our founders recognized the urgent need to support poverty-stricken villages in the Jhelum district of Pakistan while simultaneously addressing vulnerable populations in Preston, UK. This dual focus would become a defining characteristic of our organization.</p>
      
      <h3>Islamic Principles of Service</h3>
      <p>The organization was founded on Islamic principles of service (Khidmat), charity (Zakat), and community responsibility (Ummah), while maintaining an inclusive approach that welcomes support from and service to people of all faiths and backgrounds.</p>
      
      <h3>Community Connection</h3>
      <p>The founders' personal connections to rural Punjab provided invaluable insights into community needs and cultural sensitivity, ensuring that our programs would be developed with deep understanding of local contexts and priorities.</p>
      
      <h3>Growth From Humble Beginnings</h3>
      <p>What began as informal conversations among friends has grown into a registered charity serving thousands of beneficiaries across two countries, demonstrating the power of collective action and sustained commitment to positive change.</p>
    `,
  },
];

export default function NewsArticle() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<typeof newsArticles[0] | null>(null);

  useEffect(() => {
    if (id) {
      const foundArticle = newsArticles.find(article => article.id === parseInt(id as string));
      setArticle(foundArticle ?? null);
    }
  }, [id]);

  if (!article) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/news" className="text-gofundme-green hover:underline">
            ← Back to News
          </Link>
        </div>
      </Layout>
    );
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = newsArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <Layout>
      <Head>
        <title>{article.title} - Meem Madaat News</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />
      </Head>

      {/* Breadcrumb */}
      <nav className="bg-light-gray py-4">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gofundme-green">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/news" className="text-gray-600 hover:text-gofundme-green">
              News
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{article.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm px-3 py-1 bg-gofundme-green/10 text-gofundme-green rounded-full">
                {article.category}
              </span>
              <span className="text-gray-500 text-sm">{article.date}</span>
            </div>
            
            <h1 className="text-h1 font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>By {article.author}</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-700 mb-6 font-medium">
              {article.excerpt}
            </div>
            
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Social Share */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-light-gray">
          <div className="container-custom">
            <h2 className="text-h2 font-semibold mb-8 text-center">Related Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedArticles.map((relatedArticle) => (
                <article key={relatedArticle.id} className="card hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{relatedArticle.date}</span>
                    <span className="text-sm px-3 py-1 bg-gofundme-green/10 text-gofundme-green rounded-full">
                      {relatedArticle.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href={`/news/${relatedArticle.id}`} className="hover:text-gofundme-green transition-colors">
                      {relatedArticle.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{relatedArticle.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">By {relatedArticle.author}</p>
                    <Link 
                      href={`/news/${relatedArticle.id}`}
                      className="text-gofundme-green font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to News */}
      <section className="py-8 bg-white">
        <div className="container-custom text-center">
          <Link 
            href="/news"
            className="inline-flex items-center space-x-2 text-gofundme-green hover:underline"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to All News</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
} 