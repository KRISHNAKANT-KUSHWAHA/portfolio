import React from "react";
import { Code, Layout, Server, Database, Wrench, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "blue",
      skills: ["Java", "C", "JavaScript", "HTML", "CSS"],
    },
    {
      icon: Layout,
      title: "Frontend Technologies",
      color: "purple",
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    },
    {
      icon: Server,
      title: "Backend Technologies",
      color: "green",
      skills: ["Node.js", "Express.js", "REST APIs", "API Design"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "orange",
      skills: ["MongoDB", "MySQL", "Database Design", "Query Optimization"],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "red",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "IntelliJ IDEA",
        "Postman",
        "Docker",
      ],
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      color: "yellow",
      skills: [
        "Data Structures",
        "Algorithms",
        "LeetCode (200+ problems)",
        "Problem Solving",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      purple:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      orange:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
      red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
      yellow:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills acquired through academic
            learning, personal projects, and competitive programming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-gray-200 dark:border-gray-700"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getColorClasses(category.color).split(" ")[0]}`}
                    >
                      <Icon
                        className={`h-6 w-6 ${getColorClasses(category.color)
                          .split(" ")
                          .find((c) => c.includes("text-"))}`}
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`${getColorClasses(category.color)} hover:scale-105 transition-transform duration-200 cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
