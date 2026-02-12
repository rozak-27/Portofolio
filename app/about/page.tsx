'use client';

import Link from 'next/link';
import PageWrapper from "../components/PageWrapper"



export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Navbar */}
       <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pt-10" >
        <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-full px-8 py-4 shadow-xl">
          <ul className="flex items-center gap-15">
            <li>
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-white transition-colors duration-200 text-sm font-medium"
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

      {/* about */}
      {/* About Section */}

<section className="pt-48 px-10 relative bottom-40">
<PageWrapper>
  <div className="flex flex-col md:flex-row items-start justify-between gap-16">
    <div className="md:w-1/2 text-slate-300 leading-relaxed text-base md:text-lg space-y-6 ml-18 ">
      <p>
        I’m <span className="text-blue-400 font-semibold">Rozak Mulya Limbong</span> , an Information Systems student at State University of Surabaya,
        with a growing passion for<span className="text-green-400 font-semibold"> data and analytical</span> problem-solving.
        I’m particularly interested in how data can reveal patterns, drive strategy,
        and create measurable impact through well-designed systems and analysis.
      </p>
    

      <p>
        Throughout my academic journey, I’ve worked on various technical projects that
        strengthened my understanding of how systems and data interact. While I’ve had exposure
        to frontend development and system implementation, <span className=" text-white text-bold  font-semibold">my main focus has gradually
        shifted toward data analysis, data modeling, and designing structured data workflows.</span>
        I’m particularly interested in building solutions where data is not only collected,
        but meaningfully processed and transformed into insight.
      </p>

      <p>
        Outside of tech, I enjoy hiking and watching movies.
        Hiking lets me clear my mind and enjoy nature,
        while movies are simply my way to relax and unwind.
      </p>
    </div>
 
    {/* IMAGE */}
    <div className="md:w-1/2 flex justify-end pr-30">
      <img
        src="/Profil.jpg"
        alt="Profil"
        className="w-60 md:w-88 rounded-2xl object-cover shadow-lg "
      />
    </div>

  </div>
 </PageWrapper>

</section>
</div>
);
}
