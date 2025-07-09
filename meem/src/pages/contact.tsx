import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would normally send to backend)
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - Meem Madaat | Get in Touch</title>
        <meta
          name="description"
          content="Contact Meem Madaat for inquiries about our charitable work, donations, volunteering, or general questions."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal/90 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have questions about our work, want to get
            involved, or need assistance, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-h2 font-semibold mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gofundme-green focus:border-gofundme-green"
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
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gofundme-green focus:border-gofundme-green"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gofundme-green focus:border-gofundme-green"
                  >
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media">Press & Media</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gofundme-green focus:border-gofundme-green"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-h2 font-semibold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                {/* Office Address */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <svg className="w-6 h-6 text-gofundme-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Office Address
                  </h3>
                  <p className="text-gray-700">
                    Meem Madaat<br />
                    123 Charity Street<br />
                    London, E1 2AB<br />
                    United Kingdom
                  </p>
                </div>

                {/* General Enquiries */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <svg className="w-6 h-6 text-gofundme-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    General Enquiries
                  </h3>
                  <p className="text-gray-700">
                    Email: <a href="mailto:info@meemmadaat.org" className="text-gofundme-green hover:underline">info@meemmadaat.org</a><br />
                    Phone: <a href="tel:+441234567890" className="text-gofundme-green hover:underline">+44 (0) 123 456 7890</a>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Office hours: Monday - Friday, 9:00 AM - 5:00 PM GMT
                  </p>
                </div>

                {/* Press & Media */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <svg className="w-6 h-6 text-gofundme-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Press & Media
                  </h3>
                  <p className="text-gray-700">
                    For media inquiries, interviews, or press releases:<br />
                    Email: <a href="mailto:press@meemmadaat.org" className="text-gofundme-green hover:underline">press@meemmadaat.org</a>
                  </p>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-600">Google Maps would be embedded here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-center mb-12">Other Ways to Connect</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Support</h3>
              <p className="text-gray-600">
                If you need urgent assistance, please call our helpline during office hours.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-gray-600">
                Follow us on social media for updates and stories from our work.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gofundme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gofundme-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
              <p className="text-gray-600">
                Subscribe to our newsletter for monthly updates on our work and impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 