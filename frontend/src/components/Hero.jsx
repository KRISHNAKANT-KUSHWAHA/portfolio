import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/KRISHNAKANT-KUSHWAHA',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/krishnakant-kushwaha/',
      label: 'LinkedIn'
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/u/nfiODiuY72/',
      label: 'LeetCode'
    },
    {
      icon: Mail,
      href: 'mailto:kushwahakrishnakant979@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-4">
              Hi, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Krishnakant Kushwaha
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Aspiring Software Developer | Full Stack Developer
            </h2>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Aspiring Software Developer with hands-on experience in full-stack web development and AI-powered systems, strong fundamentals in Java, DSA, and a passion for building scalable, real-world applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group"
              onClick={() => scrollToSection('#projects')}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800"
              onClick={() => scrollToSection('#contact')}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-12">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;