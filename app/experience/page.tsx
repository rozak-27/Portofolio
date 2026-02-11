'use client';

import Link from 'next/link';

export default function ExperiencePage() {
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

      {/* Halaman kosong - nanti diisi */}
      <p> 
        COMING SOON
      </p>
    </div>
  );
}