'use client';

import { useEffect, useState } from 'react';
import { Bot, Shield, Clock, Gift, Plus, MessageSquare, Settings, CheckCircle } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
      
      {/* Floating orbs for ambient effect */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-xl animate-float"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute top-40 right-20 w-24 h-24 bg-purple-500/15 rounded-full blur-lg animate-float" 
        style={{animationDelay: '1s', transform: `translateY(${scrollY * 0.15}px)`}}
      ></div>
      <div 
        className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-700/10 rounded-full blur-2xl animate-float" 
        style={{animationDelay: '2s', transform: `translateY(${scrollY * 0.05}px)`}}
      ></div>

      <main className="relative z-10 w-full">
        {/* Header */}
        <header className="px-6 py-8 w-full relative z-20">
          <nav className="max-w-7xl mx-auto flex justify-between items-center w-full">
            <div className={`text-2xl font-bold text-white transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-purple-400">Opal</span>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-300 text-sm font-medium border border-purple-500/30">
                In Development
              </span>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20 relative">
          <div className="max-w-4xl mx-auto text-center w-full">
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Opal</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
                The next-generation AI Discord bot that's going to change{' '}
                                  <span className="relative inline-block">
                    <span className="relative z-10">everything</span>
                    <span
                      className={`absolute left-1 bottom-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000 delay-1000 ${isVisible ? 'w-[90%] opacity-100' : 'w-0 opacity-0'}`}
                      style={{
                        zIndex: 0,
                        pointerEvents: 'none',
                      }}
                    ></span>
                  </span>
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                We're building something extraordinary. Opal will revolutionize how you interact with your Discord community through intelligent automation and seamless integration.
              </p>
            </div>

            {/* Down Arrow Button */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <button 
                onClick={scrollToFeatures}
                className="group relative inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
              >
                <span className="relative z-10 mr-2">Read All About It</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Top Wave Separator */}
        <div className="relative">
          <svg className="w-full h-32 md:h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="topWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
                <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
                <stop offset="100%" stopColor="rgba(196, 181, 253, 0.4)" />
              </linearGradient>
            </defs>
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#topWave)" />
          </svg>
        </div>

        {/* Main Content Area with Elevated Background */}
        <div className="bg-gradient-to-b from-purple-900/15 via-purple-800/10 to-purple-900/15 relative">
          {/* Features Section */}
          <section id="features" className="px-6 py-32">
            <div className="max-w-6xl mx-auto">
              <div className={`text-center mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
                <p className="text-gray-400 text-lg">Everything you need to manage your Discord server</p>
              </div>

              {/* Staggered Feature Cards */}
              <div className="space-y-16">
                {[
                  {
                    title: "AI-Powered Setup",
                    description: "Tell Opal what you want in plain English. No complex configuration needed.",
                    delay: "delay-1000",
                    position: "left",
                    icon: Bot
                  },
                  {
                    title: "Smart Moderation",
                    description: "Advanced AI that understands context, not just keywords.",
                    delay: "delay-1200",
                    position: "right",
                    icon: Shield
                  },
                  {
                    title: "Always Reliable",
                    description: "99.9% uptime guarantee. Your server stays protected 24/7.",
                    delay: "delay-1400",
                    position: "left",
                    icon: Clock
                  },
                  {
                    title: "Free Core Features",
                    description: "Essential moderation and management tools at no cost.",
                    delay: "delay-1600",
                    position: "right",
                    icon: Gift
                  }
                ].map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex ${feature.position === 'right' ? 'justify-end' : 'justify-start'} transition-all duration-1000 ${feature.delay} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    >
                      <div className={`w-full max-w-md ${feature.position === 'right' ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'} ${index > 0 ? '-mt-8' : ''}`}>
                        <div className="bg-gray-900/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40">
                          <div className="flex items-center mb-6">
                            <div className="p-3 bg-purple-600/20 rounded-xl mr-4">
                              <feature.icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">How It Works</h2>
              <p className="text-gray-300 text-lg mb-12">
                Get started in minutes with our simple setup process
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Add Opal to your server", icon: Plus },
                  { step: "2", title: "Describe what you want in natural language", icon: MessageSquare },
                  { step: "3", title: "Opal configures everything automatically", icon: Settings },
                  { step: "4", title: "Your server runs exactly how you envisioned", icon: CheckCircle }
                ].map((item, index) => {
                  return (
                    <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
                      <div className="flex justify-center mb-3">
                        <div className="p-2 bg-purple-600/20 rounded-lg">
                          <item.icon className="w-6 h-6 text-purple-400" />
                        </div>
                      </div>
                      <div className="text-purple-400 font-bold text-sm mb-2">STEP {item.step}</div>
                      <h3 className="text-white font-semibold text-sm leading-tight">{item.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`transition-all duration-1000 delay-1300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
                  <h2 className="text-3xl font-bold text-white mb-6">Want to Stay in the Loop?</h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Opal is currently in development. Join our Discord community to follow our progress, provide feedback, and be among the first to know when we launch.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href="https://discord.gg/aZQrmtRvaT" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Join Development Discord
                    </a>
                    <button className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold rounded-xl transition-all duration-300 cursor-not-allowed opacity-60">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Bottom Wave Separator */}
          <div className="relative -mb-1">
            <svg className="w-full h-32 md:h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="bottomWave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(91, 33, 182, 0.4)" />
                  <stop offset="50%" stopColor="rgba(109, 40, 217, 0.5)" />
                  <stop offset="100%" stopColor="rgba(124, 58, 237, 0.4)" />
                </linearGradient>
              </defs>
              <path d="M0,0 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#bottomWave)" />
            </svg>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-6 py-12 bg-gradient-to-b from-purple-900/10 to-black">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 delay-1500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                {/* Brand Section */}
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-white mb-4">
                    <span className="text-purple-400">Opal</span>
                  </div>
                  
                  {/* Clean Slogan */}
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      Your server, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Your way</span>
                    </h3>
                  </div>
                  
                  <p className="text-gray-400">The future of Discord automation</p>
                </div>

                {/* Navigation Section */}
                <div className="text-center md:text-right">
                  <h4 className="text-white font-semibold mb-4">Navigation</h4>
                  <div className="flex flex-col space-y-2">
                    {[
                      { name: 'Home', href: '/' },
                      { name: 'Features', href: '#features' },
                      { name: 'Terms of Service', href: '/terms' },
                      { name: 'Privacy Policy', href: '/privacy' }
                    ].map((item, index) => (
                      <a key={index} href={item.href} className="text-gray-500 hover:text-purple-400 transition-colors">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-500 mb-4">© {new Date().getFullYear()} Opal Discord Bot. Currently in development.</p>
                <p className="text-gray-600 text-sm">Stay tuned for updates on our progress.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
