'use client';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Mini SQL Analysis Project #2",
      description: "Conducted a global COVID-19 data analysis in MySQL to calculate infection, death, and vaccination rates by country and continent. Combined death and vaccination datasets using JOIN and applied CTEs, Temporary Tables, and Views to compute rolling and cumulative vaccination percentages.",
      tags: ["My SQL", "MS Excel"],
      github: "https://github.com/rozak-27/Mini-SQL-Analysis-Project",
      image:"Covid.png"
      
    },
    {
      title: "Mini SQL Analysis Project #1",
      description: "Analyzed 100,000+ Brazilian e-commerce orders using SQL to uncover customer and operational insights. Explored order trends, seasonality, payments, freight, and delivery performance across states to support data-driven decisions.",
      tags: ["MY SQL", "GBQ"],
      github: "https://github.com/rozak-27/Brazilian-E-commerce-Data-Exploration-Insights-with-SQL",
      demo: null,
      image:"Analysis1.jpg"
    },
    {
      title: "Nesa News",
      description: "A campus news web application that allows users to read and publish articles related to university activities and events. The platform includes user authentication and an admin dashboard for managing content efficiently.",
      tags: ["HTML", "CSS", "Java Script", "PHP"],
      github: "https://github.com/rozak-27/Project-pemweb",
      demo: "https://demo-link.com",
      image:"Nesanews.png"
    },

     {
      title: "Advanced Excel Data Analysis & Dashboard Project",
      description: "Completed an intensive Excel data analytics program @ MY SKILL that covering advanced formulas, data cleaning, pivot tables, Power Pivot modeling, and VBA automation. Developed interactive dashboards and automated reporting workflows using real-world datasets..",
      tags: ["MS Excel"],
      demo: "https://drive.google.com/file/d/1lDvSRjSuvWZmtDsUZTzPpvM73SoZTygU/view?usp=sharing",
      image: "/Excel.png"
      
     
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Navbar */}
          <nav className="fixed top-6 left-[50%] -translate-x-1/2 z-50 pt-10" >
        <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-full px-8 py-4 shadow-xl">
          <ul className="flex items-center gap-15">
            <li>
              <Link href="/"
 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/experience" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <a
                href="/resume.pdf" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="px-6 md:px-16 py-20 pt-45">
        <div className="max-w-7xl mx-auto">

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                {/* Project Image Placeholder */}
             {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
               {project.image ? (
              <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
               />
               ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
              <span className="text-gray-600 text-sm">Project Image</span>
              </div>
               )}
              </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title & Links */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                  <div className="flex gap-2">
                 {project.demo && (
                 <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                 >
               <ExternalLink className="w-5 h-5" />
                  </a>
                 )}

                   {project.github && (
                  <a 
                  href={project.github}
                   target="_blank"
                  rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors"
                     >
                      <Github className="w-5 h-5" />
                    </a>
                     )}
                        </div>
                           
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-slate-800/50 text-gray-300 rounded-full border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}