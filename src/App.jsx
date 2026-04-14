import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaPython,
  FaHtml5,
  FaJava,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

function App() {
  const linkedinUrl = "https://www.linkedin.com/in/chandana-bhat994";
  const githubUrl = "https://github.com/chandanabhat994-tech";
  const resumeUrl = "/Chandana_Bhat_Resume.pdf";

  const interests = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "I enjoy building responsive and visually appealing websites with clean layouts and smooth interaction.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Artificial Intelligence / Machine Learning",
      desc: "I am interested in creating practical AI and ML projects that solve real-world problems using data.",
    },
    {
      icon: <FaPalette />,
      title: "UI / UX Design",
      desc: "I like exploring elegant interfaces, soft visual themes, and user-friendly digital experiences.",
    },
  ];

  const projects = [
    {
      title: "Food Security Pattern Analyzer",
      desc: "A machine learning project focused on analyzing agricultural data and predicting food security patterns.",
      link: "#",
      tag: "Machine Learning",
    },
    {
      title: "Enhancing Network Security",
      desc: "A project centered on strengthening network protection, monitoring suspicious activity, and improving security.",
      link: "#",
      tag: "Cyber Security",
    },
    {
      title: "Portfolio Website",
      desc: "A modern portfolio website built with React to showcase projects, skills, and professional identity.",
      link: "https://github.com/chandanabhat994-tech/chandana-bhat-portfolio",
      tag: "Frontend",
    },
  ];

  const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiMysql />, name: "MySQL" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9fc] via-[#fdf5ff] to-[#fff2f8] text-[#4b2e46]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 border-b border-[#f0d6e7]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-[#c36aa3]">
            Chandana
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6f5468]">
            <a href="#home" className="hover:text-[#c36aa3] transition">Home</a>
            <a href="#about" className="hover:text-[#c36aa3] transition">About</a>
            <a href="#interests" className="hover:text-[#c36aa3] transition">Interests</a>
            <a href="#skills" className="hover:text-[#c36aa3] transition">Skills</a>
            <a href="#projects" className="hover:text-[#c36aa3] transition">Projects</a>
            <a href="#contact" className="hover:text-[#c36aa3] transition">Contact</a>
          </nav>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e7a9c8] to-[#ccb0ff] text-white font-medium shadow-md hover:scale-105 transition"
          >
            <FaFileAlt />
            Resume
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-[#f8bfd8]/40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d9c5ff]/45 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#c36aa3] font-semibold mb-3 text-lg">
              Hello there 👋
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#472c43] mb-5">
              I'm <span className="text-[#ae67d8]">Chandana Bhat</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#7c5f75] mb-6">
              Aspiring Developer & AI/ML Enthusiast
            </p>

            <p className="text-[#6f5468] leading-8 max-w-2xl mb-8">
              I create elegant digital experiences with a strong focus on clean
              design, thoughtful interaction, and meaningful technical work. I
              enjoy combining web development with AI/ML to build projects that
              are visually appealing and practically useful.
            </p>

            <div className="flex flex-wrap gap-4 mb-7">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#e7a9c8] to-[#ccb0ff] text-white font-semibold shadow-md hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-[#dfb7cf] bg-white/80 text-[#b05a92] font-semibold shadow-sm hover:bg-[#fff0f8] transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-[#efd6e6] flex items-center justify-center text-[#b05a92] shadow-sm hover:text-[#9f4edf] hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-[#efd6e6] flex items-center justify-center text-[#b05a92] shadow-sm hover:text-[#9f4edf] hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-[#efd6e6] flex items-center justify-center text-[#b05a92] shadow-sm hover:text-[#9f4edf] hover:scale-110 transition"
              >
                <FaFileAlt />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f5bfd7] to-[#d7c4ff] blur-3xl opacity-60 rounded-[40px]"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/70 rounded-[38px] p-4 shadow-[0_24px_60px_rgba(210,165,197,0.35)]">
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="w-full h-[400px] object-cover rounded-[28px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c36aa3] font-semibold mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#472c43] mb-6">
              A creative and curious builder with a strong interest in technology
            </h2>

            <p className="text-[#6f5468] leading-8 mb-5">
              I am Chandana Bhat, a fresher passionate about web development,
              machine learning, and creating projects that are both visually
              appealing and technically meaningful.
            </p>

            <p className="text-[#6f5468] leading-8 mb-8">
              I enjoy transforming ideas into clean and interactive digital
              experiences. My focus is on building a portfolio that reflects not
              only my technical skills but also my sense of design and
              presentation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/85 border border-[#efd8ea] p-5 shadow-sm">
                <h3 className="text-[#c36aa3] font-semibold mb-2">Frontend</h3>
                <p className="text-[#6f5468] text-sm">
                  HTML, CSS, JavaScript, React
                </p>
              </div>

              <div className="rounded-3xl bg-white/85 border border-[#efd8ea] p-5 shadow-sm">
                <h3 className="text-[#c36aa3] font-semibold mb-2">Backend / Logic</h3>
                <p className="text-[#6f5468] text-sm">
                  Python, Java, Machine Learning
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[30px] overflow-hidden border border-[#efd8ea] bg-white shadow-md h-48 md:h-56">
              <img src="/about1.jpg" alt="About 1" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="rounded-[30px] overflow-hidden border border-[#efd8ea] bg-white shadow-md h-60 md:h-72 mt-6">
              <img src="/about2.jpg" alt="About 2" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="rounded-[30px] overflow-hidden border border-[#efd8ea] bg-white shadow-md h-60 md:h-72 -mt-6">
              <img src="/about3.jpg" alt="About 3" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="rounded-[30px] overflow-hidden border border-[#efd8ea] bg-white shadow-md h-48 md:h-56">
              <img src="/about4.jpg" alt="About 4" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section id="interests" className="py-20 px-6 md:px-10 bg-white/45">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c36aa3] font-semibold mb-2">Interests</p>
            <h2 className="text-4xl font-bold text-[#472c43]">
              What I Love Exploring
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl bg-white/90 border border-[#efd8ea] p-6 text-center shadow-[0_15px_35px_rgba(231,191,214,0.2)] hover:shadow-[0_20px_45px_rgba(203,163,255,0.25)] transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-[#e7a9c8] to-[#ccb0ff] text-white flex items-center justify-center text-2xl shadow-sm">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#472c43] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#6f5468] text-sm leading-6">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#c36aa3] font-semibold mb-2">Skills</p>
          <h2 className="text-4xl font-bold text-[#472c43] mb-10">
            Tools I Work With
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-4 rounded-full bg-white/85 border border-[#efd8ea] shadow-sm flex items-center gap-3 text-[#5d3d59]"
              >
                <span className="text-[#c36aa3] text-xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 md:px-10 bg-white/45">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c36aa3] font-semibold mb-2">Projects</p>
            <h2 className="text-4xl font-bold text-[#472c43]">
              Featured Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl bg-white/90 border border-[#efd8ea] p-6 shadow-[0_15px_35px_rgba(231,191,214,0.2)] hover:shadow-[0_20px_45px_rgba(203,163,255,0.25)] transition"
              >
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-[#fff0f8] text-[#b05a92] text-xs font-medium border border-[#f2d9e8]">
                  {project.tag}
                </span>

                <h3 className="text-xl font-semibold text-[#472c43] mb-3">
                  {project.title}
                </h3>

                <p className="text-[#6f5468] text-sm leading-6 mb-5">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#b05a92] font-medium hover:text-[#9f4edf] transition"
                >
                  View Project <FaExternalLinkAlt size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[36px] bg-white/85 border border-[#efd8ea] shadow-[0_24px_60px_rgba(231,191,214,0.24)] p-10 md:p-14 text-center">
            <p className="text-[#c36aa3] font-semibold mb-2">Contact</p>
            <h2 className="text-4xl font-bold text-[#472c43] mb-4">
              Let&apos;s build something beautiful
            </h2>
            <p className="text-[#6f5468] leading-8 mb-8">
              I&apos;m open to internships, entry-level roles, collaborations,
              and exciting opportunities where I can learn, contribute, and grow.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#fff6fb] border border-[#efd8ea] text-[#b05a92] font-medium shadow-sm hover:bg-[#fdebf6] transition"
              >
                LinkedIn
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#fff6fb] border border-[#efd8ea] text-[#b05a92] font-medium shadow-sm hover:bg-[#fdebf6] transition"
              >
                GitHub
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#e7a9c8] to-[#ccb0ff] text-white font-semibold shadow-md hover:scale-105 transition"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;