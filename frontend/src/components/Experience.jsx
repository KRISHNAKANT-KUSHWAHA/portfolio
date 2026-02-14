import React from 'react';
import { Trophy, Users, Target, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
  const experiences = [
    {
      role: 'Hackathon Participant',
      company: 'HackRx 6.0 – Bajaj Finserv',
      duration: 'Jul 2025 – Aug 2025',
      type: 'Hackathon',
      achievements: [
        'Designed and developed an LLM-powered intelligent query–retrieval system',
        'Focused on domain-specific question answering from large documents',
        'Achieved high contextual accuracy in document retrieval',
        'Team Rank: 157 out of 1000+ teams'
      ],
      technologies: ['LLMs', 'Pinecone', 'Node.js', 'LangChain', 'Gemini API'],
      highlights: [
        { icon: Trophy, text: 'Top 157/1000+ teams' },
        { icon: Target, text: '35% accuracy improvement' },
        { icon: Users, text: 'Team collaboration' }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Practical experience gained through competitive hackathons and challenging projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-600"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.role}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Highlights */}
                <div className="flex flex-wrap gap-4">
                  {exp.highlights.map((highlight, hIndex) => {
                    const Icon = highlight.icon;
                    return (
                      <div
                        key={hIndex}
                        className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg"
                      >
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {highlight.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements & Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, aIndex) => (
                      <li
                        key={aIndex}
                        className="text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-blue-600 mr-3 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIndex) => (
                      <Badge
                        key={tIndex}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;