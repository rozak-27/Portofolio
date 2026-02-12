"use client";
import { Github, Linkedin, Mail, Instagram} from "lucide-react";
import Link from "next/link";
import { DM_Sans, Geist, Geist_Mono,Inter, Nunito, Press_Start_2P} from "next/font/google";
import PageWrapper from "./components/PageWrapper"

console.log(typeof PageWrapper)


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 relative ">
      
       {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pt-10" >
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

    <PageWrapper>
      {/*gif*/}
         <img
         src="/lero.gif"
         alt="Lero Lero Cat"
         className="w-143  relative left-140 relative top-38"
          />

      {/*Componen*/}
    
      <div className="max-w-5xl md:px-20  relative bottom-20 relative right-60">
        <div className="flex gap-4 mb-12  ">
          <a 
            href="https://github.com/rozak-27" 
            target="_blank"
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/rozak-limbong-181a35317/" 
            target="_blank"
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200"
          >
            <Linkedin className="w-6 h-6 text-gray-300" />
          </a>
          
          <a 
            href="https://www.instagram.com/jakkbng/" 
            target="_blank"
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200"
          >
            <Instagram className="w-6 h-6 text-gray-300" />
          </a>
          <a 
            href="mailto:jakskuy6@gmail.com"
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200"
          >
            <Mail className="w-6 h-6 text-gray-300" />
          </a>
        </div>

        {/* Text Content */}
        <div className="relative bottom-10"> 
            <h1 className="text-5xl md:text-6xl lg:text-[66px] font-bold text-white leading-tight mb-2">
              Hi, I'm Rozak Limbong.
            </h1>

             <p className={`${geistSans.className} text-[22px] text-[#0f81de]  font-bold opacity-95 relative bottom-3` } >
              Information System Undergraduate
            </p>
            <p className={`${nunito.className} text-[27px] text-[#DBDBDB]  font- opacity-100 pt-5 relative bottom-6` }>
              Enjoys exploring data  <br/>
              and learning how insights are built from raw information.
            </p>
          </div>
    </div>
   </PageWrapper>
   </div>
  );
}
