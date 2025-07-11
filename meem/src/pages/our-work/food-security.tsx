import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";

const foodPrograms = [
  { type: "Emergency Food Distribution", distributed: "250,000+", beneficiaries: "45,000+" },
  { type: "School Feeding Program", distributed: "180,000+", beneficiaries: "12,000+" },
  { type: "Ramadan Food Packages", distributed: "35,000+", beneficiaries: "28,000+" },
  { type: "Sustainable Agriculture", distributed: "8,500+", beneficiaries: "4,200+" },
  { type: "Nutrition Education", distributed: "15,000+", beneficiaries: "15,000+" },
];

const services = [
  "Emergency food distribution",
  "School meal programs",
  "Ramadan food packages",
  "Agricultural training",
  "Nutrition education",
  "Community gardens",
];

const covidFoodPackagesPhotos = [
  // Covid 19 packages photos
  "/photos/Covid 19 packages/imgi_39_2e6e70_0dee80a305c3428389e2877e047f4f8d~mv2.jpg",
  "/photos/Covid 19 packages/imgi_40_2e6e70_7acc070c06e242dfb0116c2c4e3ef268~mv2.jpg",
  "/photos/Covid 19 packages/imgi_41_2e6e70_b4a7b6739d74428ca42f4766787425e4~mv2.jpg",
  "/photos/Covid 19 packages/imgi_42_2e6e70_ef0f324e2b77484cb812b2025971fa34~mv2.jpg",
  "/photos/Covid 19 packages/imgi_43_2e6e70_dc50260ef4e543e3aac1723c7501512f~mv2.jpg",
  "/photos/Covid 19 packages/imgi_44_2e6e70_1ad382b3169f4f699ab53f2341c4ae91~mv2.jpg",
  "/photos/Covid 19 packages/imgi_45_2e6e70_447bb7eb26e6489ebd0f2ba6c8543ed8~mv2.jpg",
  "/photos/Covid 19 packages/imgi_46_2e6e70_8d0522a1f9574ad69b4c47979294ab92~mv2.jpg",
  "/photos/Covid 19 packages/imgi_47_2e6e70_b6718ce165384e3a94c3942c51cb4084~mv2.jpg",
  "/photos/Covid 19 packages/imgi_48_2e6e70_cf26fd6c2076437e9c06bf1319771799~mv2.jpg",
  "/photos/Covid 19 packages/imgi_49_2e6e70_2a0f4d573d964999a992e74508e7aa94~mv2.jpg",
  "/photos/Covid 19 packages/imgi_50_2e6e70_74fc8c0280ba4cd895517cd0badd0ab8~mv2.jpg",
  "/photos/Covid 19 packages/imgi_51_2e6e70_9893bb3c3f0942bd99b198b681761457~mv2.jpg",
  "/photos/Covid 19 packages/imgi_52_2e6e70_e9c77e50d57341198465e7820612dce7~mv2.jpg",
  "/photos/Covid 19 packages/imgi_53_2e6e70_0c28fdd9d4eb42ae9e1fb1f08dd9b6de~mv2.jpg",
  "/photos/Covid 19 packages/imgi_54_2e6e70_5bb8f9f5f98046ed978f04b12edd24db~mv2.jpg",
  "/photos/Covid 19 packages/imgi_55_2e6e70_6b12a86f56cf49a3b2cadbd0574f52c3~mv2.jpg",
  "/photos/Covid 19 packages/imgi_56_2e6e70_374e3f579c584727a17414dfcac342f8~mv2.jpg",
  "/photos/Covid 19 packages/imgi_57_2e6e70_140387cb92ed4292ba47c51367053c35~mv2.jpg",
  "/photos/Covid 19 packages/imgi_58_2e6e70_a2244d9054204fe990d00c3a669d01c8~mv2.jpg",
  "/photos/Covid 19 packages/imgi_59_2e6e70_dcc305ec1ec2480fb0c809bd1b525b3f~mv2.jpg",
  "/photos/Covid 19 packages/imgi_60_2e6e70_9e4ea478aff045cbb7da2aacf73ba036~mv2.jpg",
  "/photos/Covid 19 packages/imgi_61_2e6e70_252ccfd79d4743ad9a6ed0149d1c30c4~mv2.jpg",
  "/photos/Covid 19 packages/imgi_62_2e6e70_c155b24d595b4e78aedd063a6674deed~mv2.jpg",
  "/photos/Covid 19 packages/imgi_63_2e6e70_b2906113c81a44e09e17af3f97cd83e3~mv2.jpg",
];

export default function FoodSecurity() {
  return (
    <Layout>
      <Head>
        <title>Food Security - Meem Madaat | Fighting Hunger & Malnutrition</title>
        <meta
          name="description"
          content="Learn about Meem Madaat's food security programs fighting hunger and malnutrition in Pakistan through emergency aid and sustainable agriculture."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Food Security Program</h1>
          <p className="text-xl mx-auto">
            Fighting hunger and malnutrition through emergency aid and sustainable solutions
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Food security is fundamental to human dignity and development. Our comprehensive
              food security programs address both immediate hunger and long-term nutritional
              needs through emergency food distribution, school feeding programs, and sustainable
              agriculture initiatives.
            </p>
            <p className="text-lg text-gray-700">
              We work to ensure that vulnerable families have access to nutritious food while
              building local capacity for sustainable food production and distribution systems
              that can support communities for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Our Impact</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">488,500+</p>
              <p className="text-lg font-semibold">Meals Distributed</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">104,200+</p>
              <p className="text-lg font-semibold">People Fed</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">150</p>
              <p className="text-lg font-semibold">Communities Served</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-gofundme-green mb-2">85%</p>
              <p className="text-lg font-semibold">Malnutrition Reduction</p>
            </div>
          </div>

          {/* Food Programs */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold text-center mb-8">Our Food Programs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodPrograms.map((program, index) => (
                <div key={index} className="card text-center">
                  <h4 className="text-xl font-semibold mb-2">{program.type}</h4>
                  <p className="text-gray-600">
                    <span className="block text-2xl font-bold text-gofundme-green mb-1">
                      {program.distributed}
                    </span>
                    items distributed
                  </p>
                  <p className="text-sm text-gray-500 mt-2">{program.beneficiaries} beneficiaries</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Food Security Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gofundme-green mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Food Security Approach */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Our Approach to Food Security</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gofundme-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
                <p className="text-gray-600">
                  Immediate food distribution to families facing acute hunger and malnutrition,
                  ensuring no one goes without basic nutrition.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gofundme-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Agriculture</h3>
                <p className="text-gray-600">
                  Training farmers in sustainable practices and providing resources to increase
                  local food production and long-term food security.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gofundme-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Nutrition Education</h3>
                <p className="text-gray-600">
                  Teaching communities about proper nutrition, food preparation, and dietary
                  practices to maximize health outcomes with available resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Covid-19 Food Package Distribution</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              During the pandemic, we distributed thousands of food packages to families in need
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {covidFoodPackagesPhotos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={photo}
                    alt={`Covid-19 food package distribution ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">Stories of Impact</h2>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto"></div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-lg italic mb-4">
                    &quot;My children were going to school hungry because we couldn't afford proper meals.
                    The school feeding program changed everything - now they can concentrate on their
                    studies, and their grades have improved dramatically. As a mother, seeing my
                    children healthy and thriving is the greatest gift.&quot;
                  </blockquote>
                  <p className="font-semibold">Khadija Begum</p>
                  <p className="text-gray-600">Mother of four, Faisalabad</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Stories like Khadija's show how access to nutritious food can transform not just
                physical health but educational outcomes and family well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gofundme-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Help Us Fight Hunger</h2>
          <p className="text-xl mb-8 mx-auto">
            Your support can provide nutritious meals to families and help build sustainable
            food systems that benefit entire communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="btn-primary bg-white text-gofundme-green hover:bg-gray-100"
            >
              Feed a Family
            </Link>
            <Link
              href="/get-involved"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gofundme-green transition-colors"
            >
              Volunteer with Food Programs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 