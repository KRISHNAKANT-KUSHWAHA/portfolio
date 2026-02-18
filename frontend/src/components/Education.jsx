import React from 'react';
import { GraduationCap, School, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'JSS Academy of Technical Education, Noida',
      duration: '2022 – 2026',
      score: '7.81 CGPA',
      icon: GraduationCap,
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Object-Oriented Programming (OOPS)',
        'Web Development',
        'Software Engineering'
      ],
      additional: 'Pursuing Honours in Cybersecurity (2023 – 2026)'
    },
    {
      degree: 'Senior Secondary (12th – Science)',
      field: 'Physics, Chemistry, Mathematics',
      institution: "St. Mary's School, Madha Mauranipur",
      duration: '2020 – 2021',
      score: '89.6%',
      icon: School,
      coursework: [],
      additional: null
    }
  ];

  const certifications = [
    {
      title: 'Decode Java with DSA',
      provider: 'PW Skills',
      description: 'Comprehensive course covering Java fundamentals and Data Structures & Algorithms'
    },
    {
      title: 'Full Stack Web Development',
      provider: 'Apna College',
      description: 'End-to-end web development training covering frontend and backend technologies'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic background and continuous learning through certified programs.
          </p>
        </div>

        {/* Education */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-600"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                          {edu.field}
                        </CardDescription>
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-3">
                          <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                            {edu.duration}
                          </Badge>
                          <Badge className="bg-blue-600 text-white">
                            {edu.score}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  {(edu.coursework.length > 0 || edu.additional) && (
                    <CardContent className="space-y-4">
                      {edu.coursework.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Relevant Coursework:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, cIndex) => (
                              <Badge
                                key={cIndex}
                                variant="outline"
                                className="text-gray-700 dark:text-gray-300"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {edu.additional && (
                        <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-lg">
                          <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {edu.additional}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-blue-600 dark:text-blue-400 font-semibold">
                    {cert.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
