import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'WanderStay – Travel Listing Platform',
      description: 'A full-stack web application that allows users to add, edit, and browse travel listings with robust validation and error handling.',
      features: [
        'RESTful APIs for listings and reviews',
        'MongoDB schema design and optimized queries',
        'JOI validation and custom Express middleware',
        'User authentication and authorization'
      ],
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap'],
      github: 'https://github.com/KRISHNAKANT-KUSHWAHA/wanderstay-app',
      live: 'https://wanderstay-app1.onrender.com/listings',
      color: 'blue'
    },
    {
      title: 'GemBot – AI Powered Chatbot',
      description: 'An AI-powered chatbot using React.js and Google Gemini API for intelligent, contextual responses with real-time user interaction.',
      features: [
        'Structured prompt handling',
        'Real-time user interaction',
        'Export-to-PDF functionality for chat summaries',
        'Clean and intuitive UI'
      ],
      techStack: ['React.js', 'CSS', 'Gemini API', 'PDF Generation'],
      github: 'https://github.com/KRISHNAKANT-KUSHWAHA/gembot',
      live: 'https://gembot-phi.vercel.app/',
      color: 'purple'
    },
    {
      title: 'LLM-Powered Intelligent Query–Retrieval System',
      description: 'Built an intelligent document query system capable of answering questions from large PDFs with clause-level evidence. Ranked Top 157 in HackRx 6.0.',
      features: [
        'Document query system for large PDFs',
        '35% improved retrieval accuracy',
        'Optimized chunking strategies and embeddings',
        'Clause-level evidence extraction'
      ],
      techStack: ['LLMs', 'Pinecone', 'Node.js', 'LangChain', 'Gemini API'],
      github: '#',
      live: '#',
      color: 'green'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600',
      purple: 'border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600',
      green: 'border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work in full-stack development, AI integration, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${getColorClasses(project.color)}`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                {project.github !== '#' && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    Code
                  </Button>
                )}
                {project.live !== '#' && (
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group/btn"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;