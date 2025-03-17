import Image from "next/image"
import Link from "next/link"

import RecruitmentCard from "@/components/recruitment-card"

import AboutSection from "@/components/about-us"

import {TeamMarquee} from "@/components/team-glimpse"

import { cn } from "@/lib/utils"

import { LuArrowUpRight } from "react-icons/lu";

import { GridPattern } from "@/components/grid-pattern";


export default function Home() {
  return (
    <main className="min-h-screen">
      

      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-b from-yellow-500/10 via-transparent to-indigo-500/10 md:from-transparent">
        <div className="absolute z-0 w-full">
          <Image
            src="/team/hero.jpg"
            alt="E-Cell Background"
            // fill
            width={1920}
            height={1080}
            className={cn("[mask-image:linear-gradient(270deg,transparent_0%,white_10%,white_90%,transparent_100%),linear-gradient(0deg,transparent_0%,rgb(220,220,220)_30%,rgb(220,220,220)_35%,rgba(10,10,10,0.2)_60%,transparent_100%),radial-gradient(circle,white_75%,transparent_90%)]","[mask-composite:intersect]","object-cover brightness-50")}
            priority
          />
        </div>
        <div className={"container mx-auto px-6 md:px-16 relative z-10 -translate-y-1/2"}>
          <div className="max-w-2xl space-y-6">
            <h1 className="font-montserrat+ text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Join the<br/> 
              <span className="text-transparent font-extrabold  bg-clip-text bg-gradient-to-b from-[#dfa542] via-[#a37333] to-[#574b31]">Entrepreneurship Cell</span>
            </h1>
              <p className="font-inter text-sm sm:text-base text-white font-light max-w-xl">
              Be a part of the most vibrant community at NIT Bhopal. We nurture innovation, entrepreneurship, and
              leadership skills.
            </p>
            <div className="flex gap-4">
              <Link
                href="/apply"
                className="rounded-full text-sm md:text-lg h-min py-2 md:py-3 px-4 sm:px-6 md:px-8 bg-[#956013] border-3 border-[#956013] text-white  font-bold flex justify-center items-center gap-2 hover:opacity-90"
              >
                Apply now <LuArrowUpRight/>
              </Link>
              <Link
                href="#recruitment"
                className="rounded-full text-sm md:text-lg h-min py-2 md:py-3 px-4 sm:px-6 md:px-8 bg-transparent text-white border-3 border-white font-bold flex justify-center items-center hover:bg-white hover:text-black transition-colors"
              >
                Explore Roles
              </Link>
              {/* <Link
                href="#apply"
                className="font-inter border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Register Now
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-black">
        <AboutSection />
      </section>

      {/* Recruitment Cards Section */}
      <section id="recruitment" className="py-16 md:py-24  bg-[url('/verticals/bt.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">Join Our <span className="text-transparent font-extrabold  bg-clip-text bg-gradient-to-b from-[#e09a4f] to-[#615844]">Team</span></h2>
            <p className="text-sm md:text-base text-white max-w-2xl mx-auto backdrop-blur-sm">
              {`We're looking for passionate individuals to join various teams at E-Cell NIT Bhopal. Hover over the cards
              to learn more about each role.`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <RecruitmentCard
              title="Event Managers"
              logo="/verticals/em.png"
              description="Event Managers at E-Cell oversee event planning, promotion, and execution. They develop PR strategies, manage social media, handle press releases, coordinate promotions, and build stakeholder relationships. Their goal is to ensure events are well-organized, widely publicized, and effectively engage the target audience. 
"
              applyLink="/apply"
            />
            <RecruitmentCard
              title="Sponsorship Executives"
              logo="/verticals/spons.png"
              description="Sponsorship Executives secure funding and partnerships for E-Cell events. They identify potential sponsors, craft tailored proposals, and negotiate agreements. Working closely with the team, they ensure partnerships align with both parties’ goals, supporting E-Cell’s initiatives through strategic collaborations."
              applyLink="/apply"
            />
            <RecruitmentCard
              title="Content Writers"
              logo="/verticals/cw_1.png"
              description="Content Writers at E-Cell create engaging content for the website, social media, emails, brochures, and press releases. They align messaging with communication goals and collaborate with teams to ensure content is tailored, impactful, and effectively reaches the target audience."
              applyLink="/apply"
            />
            <RecruitmentCard
              title="Designers"
              logo="/verticals/des.png"
              description="Designers at E-Cell create posters, brochures, event booths, and websites, ensuring a visually appealing and cohesive brand identity. They align all visual elements with E-Cell’s branding and communication goals, maintaining consistency across digital and print materials."
              applyLink="/apply"
            />
            <RecruitmentCard
              title="Video Editors"
              logo="/verticals/ve.png"
              description="Video Editors at E-Cell create and edit videos for the website and social media, including the E-Summit aftermovie. They ensure high-quality, engaging content that aligns with E-Cell’s branding, capturing key moments and showcasing the essence of its events."
              applyLink="/apply"
            />
            <RecruitmentCard
              title="Web Developers"
              logo="/verticals/webd.png"
              description="Web Developers at E-Cell are responsible for creating and maintaining the websites for various events and the official E-Cell website. Web Developers work closely with other team members, including content writers and designers, to ensure the website aligns with the team's goals and objectives.
"
              applyLink="/apply"
            />
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="relative py-16 z-0 md:py-24 bg-black">
                
        <div className="absolute top-0 bottom-0 left-0 right-0  z-0 w-full h-full">
          <GridPattern 
                  width={30} height={30} 
                  x={700} 
                  y={100} 
                  // strokeDasharray="4 1"
                  className={cn("[mask-image:linear-gradient(90deg,transparent_0%,white_20%,white_80%,transparent_100%),linear-gradient(0deg,transparent_0%,white_5%,white_95%,transparent_100%)]","[mask-composite:intersect]", "fill-red-600 stroke-yellow-300/20")}          
          />
        </div>

        <div className="relative container mx-auto px-4">
          
          <div className="text-center mb-16">
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-transparent font-extrabold  bg-clip-text bg-gradient-to-b from-[#e09a4f] to-[#362e1a]">Recruitment Rules</h2>
            
            <p className="mt-3 text-sm md:text-base textlg:text-lg text-white/90 max-w-2xl mx-auto">
              {`Please review the following rules and guidelines for our recruitment process.`}
            </p>
          </div>

          <div className="max-w-3xl mx-auto  bg-black shadow-lg shadow-[#956013]/20 z-20 p-8 rounded-xl border border-white/10">
            <ul className="space-y-6">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#956013] flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  
                  <p className="font-roboto text-white/80">
                  {`Only First year B.Tech/B.Arch/B.plan from MANIT can apply for the recruitment process`}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#956013] flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  
                  <p className="font-roboto text-white/80">
                  Interested students can apply in a maximum of two verticals

                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#956013] flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  
                  <p className="font-roboto text-white/80">
                  Interested students can apply for the recruitment through the official website of Entrepreneurship Cell MANIT Bhopal
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#956013] flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  
                  <p className="font-roboto text-white/80">
                  The recruitment shall be done in three rounds and in a hybrid manner
                  </p>
                </div>
                </li>
                <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#956013] flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  
                  <p className="font-roboto text-white/80">
                  {`The first round shall be online where all participants will be given a task according to their verticals. Participants who clear this round shall advance to the offline interview round
`}

                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#956013] flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  
                  <p className="font-roboto text-white/80">
                  The participants who advance the offline interview round shall face an HR interview round

                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#956013] flex items-center justify-center font-bold">
                  7
                </div>
                <div>
                  
                  <p className="font-roboto text-white/80">
                 {` Any form of plagiarism or use of unfair means in any stage of the recruitment shall lead to immediate disqualification of a candidate
                  `}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#956013] flex items-center justify-center font-bold">
                  8
                </div>
                <div>
                  
                  <p className="font-roboto text-white/80">
                  {`Any participant who fails to abide by the deadline set for task submission shall not be considered. Thus, participants must strictly adhere to the timings
`}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      

      {/* Team Glimpse Section */}
      <section id="team" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-3 text-4xl sm:text-5xl md:text-6xl text-transparent font-extrabold  bg-clip-text bg-gradient-to-b from-[#e09a4f] to-[#362e1a]">Team Glimpse</h2>
            <p className=" text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto">
              {`Meet the passionate individuals who make E-Cell NIT Bhopal a thriving community.`}
            </p>
          </div>

          <TeamMarquee />
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="relative py-16 md:py-24 bg-black">
        
        <GridPattern 
                width={30} height={30} 
                x={700} 
                y={100} 
                // strokeDasharray="4 1"
                className={cn("[mask-image:linear-gradient(90deg,transparent_0%,white_20%,white_80%,transparent_100%),linear-gradient(0deg,transparent_0%,white_5%,white_95%,transparent_100%)]","[mask-composite:intersect]", "fill-red-600 stroke-yellow-300/20")}          
        />

        <div className="container mx-auto px-4 text-center flex items-center flex-col">
          
          <h2 className="text-4xl sm:text-6xl font-extrabold  text-center mb-6 overflow-visible text-transparent bg-clip-text bg-gradient-to-b from-[#e09a4f] to-[#362e1a] z-10 h-[80px]">{`Ready to Apply?`}</h2>
          
          <p className="font-roboto text-base text-neutral-400 max-w-xl mx-auto mb-8">
            {`Fill out our application form to start your journey with E-Cell NIT Bhopal. We can't wait to meet you!`}
          </p>

          <Link
            href="/apply"
            className="rounded-full text-base md:text-lg z-10 min-w-min w-fit py-3 px-8 bg-[#956013] border-3 border-[#956013] text-white font-bold opacity-100 hover:opacity-90  shadow-2xl shadow-[#956013]/50"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  )
}

