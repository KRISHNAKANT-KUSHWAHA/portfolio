import React from 'react';
import { Code2, Briefcase, Award, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Proficient in building end-to-end web applications using modern technologies'
    },
    {
      icon: Briefcase,
      title: 'Problem Solver',
      description: '250+ problems solved on LeetCode with strong DSA fundamentals'
    },
    {
      icon: Award,
      title: 'Hackathon Experience',
      description: 'Ranked Top 157 in HackRx 6.0 out of 1000+ teams'
    },
    {
      icon: Heart,
      title: 'Passionate Learner',
      description: 'Continuously learning and building real-world scalable applications'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Turning Ideas Into Reality
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a B.Tech Computer Science student at JSS Academy of Technical Education, Noida, graduating in 2026. With a strong foundation in Java, Data Structures & Algorithms, and full-stack web development, I'm passionate about creating impactful software solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey includes building full-stack applications like WanderStay, developing AI-powered chatbots, and competing in hackathons where I ranked among the top performers. I thrive on challenges and love solving complex problems with clean, efficient code.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently, I'm focused on expanding my knowledge in AI/ML integration, cloud technologies, and building production-ready applications. I'm actively seeking opportunities to contribute to innovative projects and grow as a software engineer.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">250+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">LeetCode Problems</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Major Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">7.81</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">CGPA</p>
              </div>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 dark:border-gray-700"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
