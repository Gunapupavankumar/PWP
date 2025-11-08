import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const HealthInfo = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`hover:text-blue-200 transition-colors ${
                  activeSection === 'home' ? 'border-b-2 border-white' : ''
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('topics')}
                className={`hover:text-blue-200 transition-colors ${
                  activeSection === 'topics' ? 'border-b-2 border-white' : ''
                }`}
              >
                Health Topics
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`hover:text-blue-200 transition-colors ${
                  activeSection === 'services' ? 'border-b-2 border-white' : ''
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`hover:text-blue-200 transition-colors ${
                  activeSection === 'contact' ? 'border-b-2 border-white' : ''
                }`}
              >
                Contact
              </button>
            </div>
            <Link to="/login" className="hover:text-blue-200 transition-colors">
              ← Back to Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Home Section */}
        <section id="home" className="mb-12">
          <Card>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              🏥 Healthcare Wellness Portal
            </h1>
            <p className="text-lg text-gray-700 text-center mb-8">
              Your trusted partner in preventive care and wellness management
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-3">👨‍⚕️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Care</h3>
                <p className="text-sm text-gray-600">
                  Board-certified healthcare providers dedicated to your wellness
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
                <p className="text-sm text-gray-600">
                  Monitor your health goals and preventive care milestones
                </p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure & Private</h3>
                <p className="text-sm text-gray-600">
                  HIPAA-compliant platform protecting your health information
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-3">Latest Health Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🦠 COVID-19 Updates</h3>
                  <p className="text-sm text-white/90">
                    Stay informed about the latest COVID-19 guidelines, vaccination schedules, and safety protocols.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">💪 Wellness Programs</h3>
                  <p className="text-sm text-white/90">
                    Join our new wellness initiatives focusing on nutrition, exercise, and mental health.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Health Topics Section */}
        <section id="topics" className="mb-12">
          <Card>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📚 Health Topics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preventive Care */}
              <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  🩺 Preventive Care
                </h3>
                <p className="text-gray-700 mb-3">
                  Regular preventive care is essential for maintaining good health and catching potential issues early. Our comprehensive preventive care services include:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Annual Physical Exams:</strong> Comprehensive health assessments to monitor your overall well-being</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Screenings:</strong> Cancer screenings, blood pressure checks, cholesterol tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Vaccinations:</strong> Stay up-to-date with recommended immunizations</span>
                  </li>
                </ul>
              </div>

              {/* Chronic Disease Management */}
              <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  ❤️ Chronic Disease Management
                </h3>
                <p className="text-gray-700 mb-3">
                  Managing chronic conditions requires ongoing care and support. We help you manage:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Diabetes:</strong> Blood sugar monitoring, medication management, lifestyle counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Hypertension:</strong> Blood pressure control and cardiovascular health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Asthma/COPD:</strong> Respiratory care and symptom management</span>
                  </li>
                </ul>
              </div>

              {/* Mental Health */}
              <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  🧠 Mental Health & Wellness
                </h3>
                <p className="text-gray-700 mb-3">
                  Mental health is just as important as physical health. Our services include:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Stress Management:</strong> Techniques for coping with daily stressors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Depression & Anxiety:</strong> Screening, counseling, and treatment options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Sleep Disorders:</strong> Assessment and management of sleep issues</span>
                  </li>
                </ul>
              </div>

              {/* Nutrition & Fitness */}
              <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  🥗 Nutrition & Fitness
                </h3>
                <p className="text-gray-700 mb-3">
                  Proper nutrition and regular exercise are cornerstones of good health:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Dietary Counseling:</strong> Personalized nutrition plans for your health goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Weight Management:</strong> Healthy weight loss and maintenance strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Exercise Programs:</strong> Customized fitness plans for all levels</span>
                  </li>
                </ul>
              </div>

              {/* Women's Health */}
              <div className="p-5 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  👩‍⚕️ Women's Health
                </h3>
                <p className="text-gray-700 mb-3">
                  Comprehensive healthcare services for women at every life stage:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Annual Exams:</strong> Pap smears, breast exams, and preventive screenings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Prenatal Care:</strong> Comprehensive care throughout pregnancy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Menopause Management:</strong> Support during life transitions</span>
                  </li>
                </ul>
              </div>

              {/* Senior Care */}
              <div className="p-5 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  👴 Senior Care
                </h3>
                <p className="text-gray-700 mb-3">
                  Specialized care for older adults focusing on healthy aging:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Geriatric Assessments:</strong> Comprehensive health evaluations for seniors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Fall Prevention:</strong> Balance and mobility assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Memory Care:</strong> Cognitive health monitoring and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12">
          <Card>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🏥 Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="text-4xl mb-3">🩺</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Care</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive primary care services for patients of all ages, including routine checkups, sick visits, and chronic disease management.
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Annual physical exams</li>
                  <li>• Acute illness treatment</li>
                  <li>• Medication management</li>
                  <li>• Health screenings</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <div className="text-4xl mb-3">💉</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Services</h3>
                <p className="text-gray-700 mb-4">
                  Proactive healthcare to prevent illness and maintain optimal health through regular screenings and vaccinations.
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Immunizations & vaccines</li>
                  <li>• Cancer screenings</li>
                  <li>• Blood pressure monitoring</li>
                  <li>• Cholesterol testing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <div className="text-4xl mb-3">🧪</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Laboratory Services</h3>
                <p className="text-gray-700 mb-4">
                  On-site laboratory testing for quick and accurate diagnostic results to guide your treatment plan.
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Blood tests</li>
                  <li>• Urinalysis</li>
                  <li>• Diabetes screening</li>
                  <li>• Thyroid function tests</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cardiology</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive cardiovascular care including diagnosis, treatment, and prevention of heart conditions.
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• EKG testing</li>
                  <li>• Blood pressure management</li>
                  <li>• Heart disease prevention</li>
                  <li>• Cardiac risk assessment</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200">
                <div className="text-4xl mb-3">🦷</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dental Care</h3>
                <p className="text-gray-700 mb-4">
                  Complete dental services to maintain oral health and prevent dental diseases.
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Routine cleanings</li>
                  <li>• Dental exams</li>
                  <li>• Cavity treatment</li>
                  <li>• Oral health education</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border border-indigo-200">
                <div className="text-4xl mb-3">👁️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision Care</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive eye care services to protect and maintain your vision health.
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Eye examinations</li>
                  <li>• Vision screening</li>
                  <li>• Glaucoma testing</li>
                  <li>• Prescription updates</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                📱 Telehealth Services
              </h3>
              <p className="text-gray-700 mb-3">
                Access quality healthcare from the comfort of your home with our secure telehealth platform:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Virtual Consultations</h4>
                    <p className="text-sm text-gray-600">Connect with your provider via video call</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Messaging</h4>
                    <p className="text-sm text-gray-600">Communicate securely with your care team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Remote Monitoring</h4>
                    <p className="text-sm text-gray-600">Track your health metrics digitally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💊</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-Prescriptions</h4>
                    <p className="text-sm text-gray-600">Get prescriptions sent directly to your pharmacy</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <Card>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📞 Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <span className="text-3xl">📍</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-700">
                        123 Healthcare Avenue<br />
                        Medical District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                    <span className="text-3xl">📞</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-700">
                        Main: (555) 123-4567<br />
                        Emergency: (555) 911-0000<br />
                        Fax: (555) 123-4568
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                    <span className="text-3xl">📧</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-700">
                        General: info@healthcareportal.com<br />
                        Appointments: appointments@healthcareportal.com<br />
                        Support: support@healthcareportal.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                    <span className="text-3xl">🕐</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Hours of Operation</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed<br />
                        <span className="text-red-600 font-semibold">Emergency: 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>General Inquiry</option>
                      <option>Appointment Request</option>
                      <option>Medical Records</option>
                      <option>Billing Question</option>
                      <option>Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-sm text-gray-600 mt-4">
                  * Required fields. We'll respond within 24-48 hours.
                </p>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="mt-8 bg-red-50 border-2 border-red-300 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-3 flex items-center gap-2">
                <span>🚨</span> Emergency Notice
              </h3>
              <p className="text-red-800 font-medium">
                If you are experiencing a medical emergency, please call 911 or go to the nearest emergency room immediately. 
                Do not use this form for urgent medical matters.
              </p>
            </div>
          </Card>
        </section>

        {/* Privacy Policy Section */}
        <section className="mb-12">
          <Card className="bg-blue-50 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🔒 Privacy & Security
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>HIPAA Compliance:</strong> Our Healthcare Wellness Portal is committed to protecting your health 
                information in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
                  <ul className="space-y-1 text-sm">
                    <li>✓ End-to-end encryption</li>
                    <li>✓ Secure data storage</li>
                    <li>✓ Regular security audits</li>
                    <li>✓ Access logging and monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Access your health records</li>
                    <li>✓ Request corrections</li>
                    <li>✓ Know who accessed your data</li>
                    <li>✓ Request data deletion</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HealthInfo;
