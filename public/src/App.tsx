import { FaArrowRight, FaCheckCircle, FaClock, FaFileAlt, FaGlobe, FaLanguage, FaAlignLeft, FaFileUpload } from "react-icons/fa";

import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { translations } from './translations';

type Language = 'en' | 'fr' | 'pl';
type Service = 'standard' | 'certified' | 'technical' | 'urgent';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: 'standard' as Service,
    file: null as File | null,
  });

  const t = translations[language];

  const languageNames = {
    en: 'English',
    fr: 'Français',
    pl: 'Polski'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const services = [
    'contracts', 'procurations', 'certificates', 'jugements', 'bilans',
    'technical', 'work', 'education', 'civil', 'notarial', 'official',
    'cars', 'fiscal', 'genealogic', 'expertise', 'penal', 'judiciary',
    'commercial', 'invoice'
  ] as Array<keyof typeof translations['en']['services']>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <FaLanguage className="w-5 h-5 text-blue-600" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(languageNames).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=1920"
            alt="Translation workspace with laptop and documents"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <FaGlobe className="w-16 h-16 mb-8 text-blue-600 mx-auto md:mx-0" />
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  {t.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t.subtitle}
                </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto md:mx-0 gap-2">
                  {t.getStarted} <FaArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1">
                <img
                  src="https://images.unsplash.com/photo-1585432959315-d9342fd58eb6?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional translation process"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.whyChooseUs}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <FaCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t.accuracy.title}</h3>
              <p className="text-gray-600">{t.accuracy.description}</p>
            </div>
            <div className="text-center p-6">
              <FaClock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t.delivery.title}</h3>
              <p className="text-gray-600">{t.delivery.description}</p>
            </div>
            <div className="text-center p-6">
              <FaAlignLeft className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t.support.title}</h3>
              <p className="text-gray-600">{t.support.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600">{t.services.description}</p>
            <p className="text-lg text-gray-600 mt-2">{t.services.example_text}</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 }
              }}
              className="pb-12"
            >
              {services.map((service) => (
                <SwiperSlide key={service}>
                  <div className="bg-white rounded-lg p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                    {/* <FaFileAlt className="w-12 h-12 text-blue-600 mb-4 mx-auto" /> */}
                    <p className="text-gray-800 font-medium">
                      {t.services[service]}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.contact.title}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                {t.contact.services}
              </label>
              <select
                id="service"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value as Service })}
              >
                {Object.entries(t.contact.serviceOptions).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
                {t.contact.file}
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors">
                <div className="space-y-1 text-center">
                  <FaFileUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file"
                      className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                    >
                      <input
                        id="file"
                        name="file"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <span>{formData.file ? formData.file.name : t.contact.fileHelp}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t.contact.submit}
              </button>
            </div>
          </form>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;