import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";

const donationAmounts = [10, 25, 50, 100, 250, 500];

const donationOptions = [
  {
    title: "Where Most Needed",
    description: "Allow us to allocate your donation to the areas of greatest need",
    icon: "🎯",
  },
  {
    title: "Medical Aid",
    description: "Support our medical clinics and healthcare programs in Pakistan",
    icon: "🏥",
  },
  {
    title: "Homeless Support",
    description: "Provide meals, shelter, and support services in the UK",
    icon: "🏠",
  },
  {
    title: "Education",
    description: "Fund schools, teachers, and educational resources",
    icon: "📚",
  },
];

export default function Donate() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCause, setSelectedCause] = useState("Where Most Needed");
  const [giftAid, setGiftAid] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  return (
    <Layout>
      <Head>
        <title>Donate - Meem Madaat | Support Our Charitable Work</title>
        <meta
          name="description"
          content="Make a secure donation to Meem Madaat and help us continue our vital work in healthcare, education, and poverty relief."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Make a Donation</h1>
          <p className="text-xl mx-auto">
            Your generosity enables us to continue our vital work. Every donation, no matter the
            size, makes a real difference in people&apos;s lives.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Donation Type */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Choose Your Donation Type</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setDonationType("one-time")}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                    donationType === "one-time"
                      ? "bg-gofundme-green text-white"
                      : "bg-light-gray text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  One-time Donation
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                    donationType === "monthly"
                      ? "bg-gofundme-green text-white"
                      : "bg-light-gray text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Monthly Donation
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Select Amount</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-colors ${
                      selectedAmount === amount && !customAmount
                        ? "bg-gofundme-green text-white"
                        : "bg-light-gray text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    £{amount}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Other amount:</span>
                <div className="relative flex-1 max-w-xs">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-gofundme-green focus:border-gofundme-green"
                  />
                </div>
              </div>
            </div>

            {/* Cause Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Choose a Cause</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {donationOptions.map((option) => (
                  <button
                    key={option.title}
                    onClick={() => setSelectedCause(option.title)}
                    className={`p-4 rounded-lg border-2 text-left transition-colors ${
                      selectedCause === option.title
                        ? "border-gofundme-green bg-gofundme-green/5"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{option.icon}</span>
                      <div>
                        <h3 className="font-semibold mb-1">{option.title}</h3>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Gift Aid */}
            <div className="mb-8 bg-light-gray p-6 rounded-lg">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftAid}
                  onChange={(e) => setGiftAid(e.target.checked)}
                  className="mt-1 mr-3 w-5 h-5 text-gofundme-green focus:ring-gofundme-green"
                />
                <div>
                  <h3 className="font-semibold mb-2">Boost your donation with Gift Aid</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    If you&apos;re a UK taxpayer, Gift Aid increases the value of your donation by 25%
                    at no extra cost to you.
                  </p>
                  <p className="text-xs text-gray-600">
                    I confirm I am a UK taxpayer and understand that if I pay less Income Tax
                    and/or Capital Gains Tax than the amount of Gift Aid claimed on all my
                    donations in that tax year, it is my responsibility to pay any difference.
                  </p>
                </div>
              </label>
            </div>

            {/* Payment Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
              <div className="bg-light-gray p-8 rounded-lg text-center">
                <p className="text-gray-600 mb-4">
                  Secure payment processing would be integrated here with Stripe or similar service.
                </p>
                <p className="text-sm text-gray-500">
                  This is a demonstration. In a live site, this would connect to a secure payment processor.
                </p>
              </div>
            </div>

            {/* Donation Summary */}
            <div className="bg-gofundme-green/10 p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-4">Donation Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Donation Type:</span>
                  <span className="font-medium capitalize">{donationType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-medium">
                    £{customAmount || selectedAmount}
                    {donationType === "monthly" && "/month"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Cause:</span>
                  <span className="font-medium">{selectedCause}</span>
                </div>
                {giftAid && (
                  <div className="flex justify-between text-gofundme-green">
                    <span>Gift Aid:</span>
                    <span className="font-medium">
                      +£{((parseFloat(customAmount) || selectedAmount) * 0.25).toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="pt-2 mt-2 border-t border-gray-300">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total to Charity:</span>
                    <span>
                      £
                      {(
                        (parseFloat(customAmount) || selectedAmount) *
                        (giftAid ? 1.25 : 1)
                      ).toFixed(2)}
                      {donationType === "monthly" && "/month"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button className="btn-primary w-full text-lg py-4">
              Complete Donation
            </button>
          </div>
        </div>
      </section>

      {/* Alternative Payment Methods */}
      <section className="pt-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">
              Alternative Payment Methods
            </h2>

            {/* Bank Transfer */}
            <div className="bg-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🏦</span>
                Bank Transfer & Standing Orders
              </h3>
              <p className="text-gray-700 mb-6">
                You can set up a one-off payment or a regular standing order directly into our account:
              </p>
              
              <div className="bg-light-gray p-6 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Bank name:</p>
                    <p className="text-gray-700">Lloyds Bank</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Branch:</p>
                    <p className="text-gray-700">Fishergate, Preston, Lancashire, UK</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Account name:</p>
                    <p className="text-gray-700">Meem Madaat Welfare Group</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Account number:</p>
                    <p className="text-gray-700 font-mono">4955 5260</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Sort code:</p>
                    <p className="text-gray-700 font-mono">30-96-85</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">To set up a standing order:</h4>
                <p className="text-gray-700 mb-3">
                  Ask your bank to debit from your account at your chosen frequency:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="font-semibold w-32">Minimum amount:</span>
                    <span>£3</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold w-32">Frequency:</span>
                    <span>Weekly / Monthly (tick one)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold w-32">Reference:</span>
                    <span className="font-mono">"MMW – [Your Name]"</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  <strong>Tip:</strong> Many banks let you upload a PDF of our sample form. If you need a paper copy, 
                  our volunteers can drop one off or mail it to you—just contact us at the number below.
                </p>
              </div>
            </div>

            {/* Gift Aid */}
            <div className="bg-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🎁</span>
                Gift Aid
              </h3>
              <p className="text-gray-700">
                If you're a UK taxpayer, you can add 25% more to your gift at no extra cost—just tick the Gift Aid box 
                in your donation form or let us know after you give.
              </p>
            </div>

            {/* Contact for Donations */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">📞</span>
                Donate via Contact
              </h3>
              <p className="text-gray-700 mb-6">
                If you'd prefer to arrange cash or cheque donations, please call or WhatsApp:
              </p>
              
              <div className="bg-gofundme-green/10 p-6 rounded-lg">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gofundme-green/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Brother Kamran Ahmed</p>
                    <p className="text-gofundme-green font-semibold text-xl">☎️ 07855 828060</p>
                    <p className="text-gray-600 text-sm mt-2">
                      He'll be happy to help you set up a standing order form, collect donations, or answer any questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-semibold text-center mb-12">
              Your Donation Makes a Difference
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
                <p className="text-gray-600">
                  Your donation is processed through secure, encrypted channels
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tax Deductible</h3>
                <p className="text-gray-600">
                  Your donations support our charitable activities
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Options</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, debit cards, and bank transfers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 