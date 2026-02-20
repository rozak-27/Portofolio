"use client";
import { Github, Linkedin, Mail, Instagram} from "lucide-react";
import Link from "next/link";
import { DM_Sans, Geist, Geist_Mono,Inter, Nunito, Press_Start_2P} from "next/font/google";
import PageWrapper from "./components/PageWrapper"
import { FlipWords } from "./components/ui/flip-words";
import Lottie from "lottie-react";
import animationData from "@/public/animation.json";

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
    <div className="min-h-screen w-full bg-linear-to-br from-slate-900 from-slate-950 to-slate-950 relative ">
      
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
  <div className="flex flex-row items-center justify-between max-w-7xl w-full px-10 gap-20 mt-5">
    
    {/* Teks kiri */}
    <div className="max-w-2xl">
      
      {/* Sosmed - gap dikurangi */}
      <div className="flex gap-4 mb-6">
        <a href="https://github.com/rozak-27" target="_blank"
          className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200">
          <Github className="w-6 h-6 text-gray-300" />
        </a>
        <a href="https://www.linkedin.com/in/rozak-limbong-181a35317/" target="_blank"
          className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200">
          <Linkedin className="w-6 h-6 text-gray-300" />
        </a>
        <a href="https://www.instagram.com/jakkbng/" target="_blank"
          className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200">
          <Instagram className="w-6 h-6 text-gray-300" />
        </a>
        <a href="mailto:jakskuy6@gmail.com"
          className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200">
          <Mail className="w-6 h-6 text-gray-300" />
        </a>
      </div>

      {/* Text Content - gap diperkecil */}
      <h1 className="text-5xl md:text-6xl lg:text-[66px] font-bold text-white leading-tight mb-2 whitespace-nowrap">
        Hi, I'm Rozak Limbong.
      </h1>

      <p className={`${geistSans.className} text-[22px] text-[#0f81de] font-bold opacity-95 mb-2`}>
        Information System Undergraduate
      </p>

      <div className={`${nunito.className} text-[27px] text-[#DBDBDB] opacity-100 right-5`}>
        <div className="flex flex-col right-2">
          <FlipWords
            words={[
              "Exploring data,",
              "Building pipelines,",
              "Crafting dashboards,",
              "Engineering solutions,",
            ]}
            duration={2000}
            className={`${nunito.className} text-[27px] text-[#DBDBDB]`}
          />
          <span>and turning it into something that actually matters.</span>
        </div>
      </div>
    </div>

    {/* Animasi kanan */}
    <div className="flex-shrink-0 mr-[-60px]">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-[480px]"
      />
    </div>

  </div>
</PageWrapper>
   </div>
  );
}
