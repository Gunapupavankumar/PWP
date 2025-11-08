import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const HealthInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/login" className="hover:text-blue-200 transition-colors">
              ← Back to Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            🏥 Public Health Information
          </h1>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">
              Preventive Care Guidelines
            </h2>
            <p className="text-gray-700 mb-6">
              Regular preventive care is essential for maintaining good health and catching potential issues early.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🩺 Annual Physical Exam</h3>
                <p className="text-sm text-gray-700">Schedule a comprehensive physical examination once a year to monitor your overall health.</p>
              </div>

              <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🧪 Blood Tests</h3>
                <p className="text-sm text-gray-700">Regular blood work helps detect conditions like diabetes, high cholesterol, and thyroid issues.</p>
              </div>

              <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🦷 Dental Checkups</h3>
                <p className="text-sm text-gray-700">Visit your dentist every 6 months for cleanings and oral health assessments.</p>
              </div>

              <div className="p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">👁️ Eye Exams</h3>
                <p className="text-sm text-gray-700">Get your eyes checked annually to monitor vision and detect eye diseases early.</p>
              </div>

              <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">💉 Vaccinations</h3>
                <p className="text-sm text-gray-700">Stay up to date with recommended vaccines including flu shots and boosters.</p>
              </div>

              <div className="p-5 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🏃 Physical Activity</h3>
                <p className="text-sm text-gray-700">Aim for at least 150 minutes of moderate exercise per week.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">
              Wellness Tips
            </h2>
            <ul className="space-y-2">
              {[
                'Drink 8 glasses of water daily',
                'Get 7-9 hours of quality sleep each night',
                'Eat a balanced diet rich in fruits and vegetables',
                'Manage stress through meditation or relaxation techniques',
                'Avoid smoking and limit alcohol consumption',
                'Maintain a healthy weight through diet and exercise'
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 py-2 border-b border-gray-100">
                  <span className="text-green-500 font-bold text-lg">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>🔒</span> Privacy Policy
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliance</h3>
                <p className="text-gray-700">
                  Our Healthcare Wellness Portal is committed to protecting your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Protection</h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-700">
                    <strong className="text-gray-900">Encryption:</strong> All data is encrypted both in transit and at rest using industry-standard protocols.
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900">Access Control:</strong> Only authorized healthcare providers can access your medical information.
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900">Audit Logs:</strong> All access to your data is logged and monitored for security purposes.
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900">Data Minimization:</strong> We only collect information necessary for your care.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Rights</h3>
                <ul className="space-y-1 ml-4 list-disc text-gray-700">
                  <li>Right to access your health information</li>
                  <li>Right to request corrections to your records</li>
                  <li>Right to know who has accessed your information</li>
                  <li>Right to request restrictions on data sharing</li>
                  <li>Right to receive a copy of your data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Usage</h3>
                <p className="text-gray-700 mb-2">Your health information is used solely for:</p>
                <ul className="space-y-1 ml-4 list-disc text-gray-700">
                  <li>Providing and coordinating your healthcare</li>
                  <li>Tracking your wellness goals and preventive care</li>
                  <li>Communicating with your healthcare providers</li>
                  <li>Improving our services (with anonymized data)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-700">
                  If you have questions about our privacy practices or wish to exercise your rights, please contact our Privacy Officer at{' '}
                  <a href="mailto:privacy@healthcareportal.com" className="text-primary font-semibold hover:underline">
                    privacy@healthcareportal.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
};

export default HealthInfo;
