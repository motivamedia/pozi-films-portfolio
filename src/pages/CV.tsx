import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <Header />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-1">
            Pozi Poyraz Saroglu
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light mb-2">
            Director
          </p>
          <a
            href="/pozi-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-light text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-widest mb-12"
          >
            Download PDF
            <span>↓</span>
          </a>

          <div className="space-y-14">

            {/* About Me */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                About Me
              </h2>
              <p className="text-sm md:text-base font-light leading-relaxed text-foreground max-w-3xl">
                As a seasoned videographer, photographer, and producer based in London, I specialize in creating bespoke content for companies. With a unique vision and unwavering dedication, I bring creativity and professionalism to every project, crafting captivating visuals that elevate brands and narratives to new heights.
              </p>
            </div>

            {/* Director Producer Career */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Director & Producer Career
              </h2>
              <div className="space-y-4 text-sm md:text-base font-light leading-relaxed text-foreground max-w-3xl">
                <p>
                  I have directed music videos and commercial shoots for leading Turkish enterprises such as Turkcell, while also forging collaborations with mainstream media channels. Renowned musicians have entrusted their projects to me, with a substantial number of my video clips showcased on "netd muzik," Turkey's preeminent YouTube channel boasting over 24 million subscribers. I have experience beyond music and commercials, having directed television programs and multicamera events successfully. My skills and creativity consistently deliver outstanding outcomes across various areas of the entertainment industry.
                </p>
                <p>
                  My portfolio spans gourmet food programs shot in London, extensive travel for a CNN-aired TV show, and successful multicamera projects, including one at the esteemed Natural History Museum. Specializing in visually captivating gastronomic storytelling, I excel in capturing diverse cuisines and locales, engaging global audiences with compelling narratives.
                </p>
              </div>
            </div>

            {/* Self Shooter Filmmaker Career */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Self Shooter & Filmmaker Career
              </h2>
              <div className="space-y-4 text-sm md:text-base font-light leading-relaxed text-foreground max-w-3xl">
                <p>
                  As a self-shooter, I captured vibrant moments in music videos, stylish gatherings at fashion events, and celebrations of weddings. Additionally, I've directed documentary projects, skillfully navigating diverse conditions with ease and expertise. With each project, I aim to encapsulate the beauty and essence of every occasion, creating captivating visuals that resonate deeply with audiences.
                </p>
                <p>
                  I have also contributed to impactful documentary projects, including serving as the cinematographer for TRT's 'Healer,' a compelling exploration of Ayahuasca culture set in Brazil's Amazon region. In this visually captivating journey, I captured the essence of the Amazonian landscape and the profound healing traditions of the indigenous communities.
                </p>
                <p>
                  I also filmed a documentary about sustainable living, following a journey from Amsterdam to different parts of Europe. Through evocative imagery and storytelling, I portrayed the ethos of sustainable living and its significance in contemporary society.
                </p>
                <p>
                  These projects underscore my versatility and proficiency in visually narrating diverse themes and locales, showcasing my ability to capture the essence of cultural experiences and societal movements.
                </p>
              </div>
            </div>

            {/* Musician & Producer Career */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Musician & Producer Career
              </h2>
              <p className="text-sm md:text-base font-light leading-relaxed text-foreground max-w-3xl">
                I helm a music company where I've produced over 100 songs, each a testament to my passion for musical innovation. My foundation in jazz drumming, honed through university studies, has allowed me to collaborate with esteemed artists like Genco Ari, Elvan Kizilay, and Burcu Ari, among others. Additionally, I've graced the stage with renowned musicians such as Ayse Sicimoglu, Haluk Levent, and Selcuk Balci. Spending summers in Bodrum, I've had the privilege of playing alongside some of Turkey's finest musicians, contributing to the vibrant music scene of the region.
              </p>
            </div>

            {/* Career Summary & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Career Summary */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                  Career Summary
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-light text-muted-foreground">2016 — Present</p>
                    <p className="text-sm md:text-base font-light text-foreground">Motiva Media Art</p>
                  </div>
                  <div>
                    <p className="text-sm font-light text-muted-foreground">2016 — Present</p>
                    <p className="text-sm md:text-base font-light text-foreground">Motiva Music</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                  Skills
                </h2>
                <div className="space-y-2">
                  {["Videography", "Photography", "Graphic Design", "Drone Pilot", "Music Production"].map((skill) => (
                    <p key={skill} className="text-sm md:text-base font-light text-foreground">{skill}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm md:text-base font-light text-foreground">Jazz Performance & Drum</p>
                  <p className="text-sm font-light text-muted-foreground">Yasar University, 2012 — 2015</p>
                </div>
                <div>
                  <p className="text-sm md:text-base font-light text-foreground">Radio & Television Production</p>
                  <p className="text-sm font-light text-muted-foreground">Anadolu University, 2010 — 2014</p>
                </div>
              </div>
            </div>

            {/* Useful Info */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Useful Info
              </h2>
              <ul className="space-y-2 text-sm md:text-base font-light text-foreground max-w-3xl">
                <li>Born 1989</li>
                <li>United Kingdom Work & Life Visa — London Based (4+ Years)</li>
                <li>UK Full Driving Licence — Car & Motorcycle (Own Vehicles)</li>
                <li>Advanced Level Motorcycle Rider</li>
                <li>Turkish Citizen</li>
                <li>Turkish Driving Licence — Car & Motorcycle</li>
                <li>Captain — Boat Driving Licence (Lived in a Narrowboat for 3 Years)</li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Links
              </h2>
              <div className="space-y-2">
                <a href="https://pozi.media" target="_blank" rel="noopener noreferrer" className="block text-sm md:text-base font-light text-foreground hover:text-muted-foreground transition-colors">
                  pozi.media
                </a>
                <a href="https://vimeo.com/pozivisualart" target="_blank" rel="noopener noreferrer" className="block text-sm md:text-base font-light text-foreground hover:text-muted-foreground transition-colors">
                  vimeo.com/pozivisualart
                </a>
                <a href="https://youtu.be/IMg8yDnJgBs" target="_blank" rel="noopener noreferrer" className="block text-sm md:text-base font-light text-foreground hover:text-muted-foreground transition-colors">
                  Video Showreel
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Contact
              </h2>
              <div className="space-y-2">
                <a href="mailto:info@pozi.media" className="block text-sm md:text-base font-light text-foreground hover:text-muted-foreground transition-colors">
                  info@pozi.media
                </a>
                <a href="tel:+4407810020163" className="block text-sm md:text-base font-light text-foreground hover:text-muted-foreground transition-colors">
                  +44 078 100 201 63
                </a>
                <p className="text-sm md:text-base font-light text-foreground">London, United Kingdom</p>
              </div>
            </div>

            {/* Showreel */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Showreel
              </h2>
              <div className="aspect-video rounded-sm overflow-hidden bg-secondary max-w-2xl">
                <iframe
                  src="https://www.youtube.com/embed/IMg8yDnJgBs?rel=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                  title="Pozi Showreel"
                />
              </div>
            </div>

          </div>
        </motion.section>

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CV;
