export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="text-2xl font-bold text-white mb-8">
            <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors">Opal</a>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy describes how Opal Discord Bot ("we," "our," or "us") collects, uses, and protects your information 
                when you use our service. We are committed to protecting your privacy and ensuring transparency about our data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Discord Data</h3>
              <p className="text-gray-300 leading-relaxed mb-4">When you use Opal, we may collect:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Server information (server ID, name, member count)</li>
                <li>• User information (user ID, username, roles)</li>
                <li>• Message content (only when necessary for moderation features)</li>
                <li>• Channel information (channel IDs, names, permissions)</li>
                <li>• Command usage and interaction data</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Usage Data</h3>
              <p className="text-gray-300 leading-relaxed mb-4">We automatically collect certain information, including:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Bot usage statistics and analytics</li>
                <li>• Error logs and performance data</li>
                <li>• Feature usage patterns</li>
                <li>• Configuration settings and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We use the collected information to:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Provide and maintain our Discord bot services</li>
                <li>• Enable AI-powered moderation and automation features</li>
                <li>• Improve and optimize bot performance</li>
                <li>• Provide customer support and respond to inquiries</li>
                <li>• Detect and prevent abuse or violations of our Terms of Service</li>
                <li>• Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Storage and Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Data encryption in transit and at rest</li>
                <li>• Regular security audits and updates</li>
                <li>• Limited access to personal data on a need-to-know basis</li>
                <li>• Secure cloud infrastructure with industry-standard protections</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• With your explicit consent</li>
                <li>• To comply with legal obligations or court orders</li>
                <li>• To protect our rights, property, or safety, or that of others</li>
                <li>• In connection with a business transfer or acquisition</li>
                <li>• With trusted service providers who assist in operating our service (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your information only as long as necessary to provide our services and fulfill the purposes outlined in this policy. 
                When data is no longer needed, we securely delete or anonymize it. Specific retention periods may vary based on the type of data 
                and applicable legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Access the personal information we hold about you</li>
                <li>• Request correction of inaccurate or incomplete data</li>
                <li>• Request deletion of your personal information</li>
                <li>• Object to or restrict certain processing of your data</li>
                <li>• Remove the bot from your server at any time</li>
                <li>• Request data portability where applicable</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise these rights, please contact us through our Discord server.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with 
                applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us through our{' '}
                <a href="https://discord.gg/aZQrmtRvaT" className="text-purple-400 hover:text-purple-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  Discord server
                </a>.
              </p>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </main>
    </div>
  );
} 