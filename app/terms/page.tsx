export default function TermsOfService() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="text-2xl font-bold text-white mb-8">
            <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors">Opal</a>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using Opal Discord Bot ("the Service"), you agree to be bound by these Terms of Service ("Terms"). 
                If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Opal is an AI-powered Discord bot currently in development that provides:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• AI-powered server setup and configuration</li>
                <li>• Smart moderation capabilities</li>
                <li>• Automated server management tools</li>
                <li>• Community engagement features</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>Please note:</strong> Opal is currently in development and not yet available for public use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You agree to:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Use the Service in accordance with Discord's Terms of Service</li>
                <li>• Not use the Service for illegal or unauthorized purposes</li>
                <li>• Not attempt to interfere with or disrupt the Service</li>
                <li>• Respect other users and maintain appropriate conduct</li>
                <li>• Not attempt to reverse engineer or exploit the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Privacy and Data</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service and its original content, features, and functionality are and will remain the exclusive property of 
                Opal and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibent text-white mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, 
                and hereby disclaim all other warranties including implied warranties of merchantability, fitness for a particular purpose, 
                or non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Opal, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, 
                use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, 
                including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our{' '}
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