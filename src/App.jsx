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

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Building responsive and modern websites with clean design and smooth user experience.",
    },
    {
      icon: <FaLaptopCode />,
      title: "AI / ML Projects",
      desc: "Creating practical machine learning and data-driven projects with real-world use cases.",
    },
    {
      icon: <FaPalette />,
      title: "UI / UX Design",
      desc: "Designing attractive interfaces that are simple to use and visually impressive.",
    },
  ];

  const projects = [
    {
      title: "Food Security Pattern Analyzer",
      desc: "A machine learning based project for analyzing agricultural and food security patterns.",
      link: "#",
    },
    {
      title: "Enhancing Network Security",
      desc: "A project focused on improving network protection, monitoring, and security mechanisms.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "A personal interactive portfolio website with modern UI, animations, and responsive layout.",
      link: "#",
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
    <div className="min-h-screen bg-[#0b0b16] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0b16]/80 border-b border-orange-500/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-400">Chandana.</h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#home" className="hover:text-orange-400 transition">
              Home
            </a>
            <a href="#services" className="hover:text-orange-400 transition">
              Services
            </a>
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-orange-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-orange-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition px-5 py-2 rounded-full font-medium"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#0e1020] via-[#1a1020] to-[#4a1808]"
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-600/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-400 font-semibold mb-3">Hello There 👋</p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Hi, I&apos;m <span className="text-orange-400">Chandana Bhat</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-5">
              Aspiring Developer & AI/ML Enthusiast
            </p>

            <p className="text-gray-400 leading-7 max-w-xl mb-8">
              I build attractive, interactive, and recruiter-friendly digital
              experiences. I enjoy creating web projects, AI-based solutions,
              and portfolios that are both modern and practical.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition px-6 py-3 rounded-full font-semibold"
              >
                Contact Me
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition px-6 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <FaFileAlt />
                Resume
              </a>
            </div>

            <div className="flex gap-5 text-2xl">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-orange-500/20 flex items-center justify-center hover:text-orange-400 hover:border-orange-400 hover:shadow-[0_0_18px_rgba(249,115,22,0.35)] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-orange-500/20 flex items-center justify-center hover:text-orange-400 hover:border-orange-400 hover:shadow-[0_0_18px_rgba(249,115,22,0.35)] transition"
              >
                <FaGithub />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-orange-500/20 flex items-center justify-center hover:text-orange-400 hover:border-orange-400 hover:shadow-[0_0_18px_rgba(249,115,22,0.35)] transition"
              >
                <FaFileAlt />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-orange-500/30 rounded-full scale-110"></div>

              <div className="relative bg-orange-500 rounded-[40px] p-4 shadow-[0_0_80px_rgba(249,115,22,0.45)] hover:shadow-[0_0_120px_rgba(249,115,22,0.6)] transition">
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="w-[280px] md:w-[320px] h-[360px] md:h-[400px] object-cover rounded-[30px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 md:px-10 bg-[#0e0f1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3">
            My <span className="text-orange-400">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Areas where I can build, design, and contribute effectively.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 border border-orange-500/10 hover:border-orange-400/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] transition rounded-3xl p-7 shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500/15 text-orange-400 flex items-center justify-center text-2xl mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-7">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 md:px-10 bg-gradient-to-br from-[#121426] to-[#26130c]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 w-full overflow-hidden rounded-3xl border border-orange-500/10">
              <img
                src="/about1.jpg"
                alt="About 1"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="h-40 w-full overflow-hidden rounded-3xl border border-orange-500/10">
              <img
                src="/about2.jpg"
                alt="About 2"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="h-40 w-full overflow-hidden rounded-3xl border border-orange-500/10">
              <img
                src="/about3.jpg"
                alt="About 3"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="h-40 w-full overflow-hidden rounded-3xl border border-orange-500/10">
              <img
                src="/about4.jpg"
                alt="About 4"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-5">
              About <span className="text-orange-400">Me</span>
            </h2>

            <p className="text-gray-400 leading-8 mb-5">
              I am Chandana Bhat, a passionate fresher interested in web
              development, machine learning, and building projects that are both
              visually strong and technically meaningful.
            </p>

            <p className="text-gray-400 leading-8 mb-8">
              I enjoy turning ideas into interactive digital products. My focus
              is on clean design, good user experience, and projects that help
              me stand out professionally.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl bg-white/5 border border-orange-500/10 p-4">
                <h3 className="text-orange-400 font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400 text-sm">
                  HTML, CSS, JavaScript, React
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-orange-500/10 p-4">
                <h3 className="text-orange-400 font-semibold mb-2">
                  Backend / Logic
                </h3>
                <p className="text-gray-400 text-sm">
                  Python, Java, Machine Learning
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="inline-block bg-orange-500 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition px-6 py-3 rounded-full font-semibold"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 md:px-10 bg-[#0e0f1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3">
            My <span className="text-orange-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Technologies and tools I use to build projects and solve problems.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white/5 border border-orange-500/10 hover:border-orange-400/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] rounded-3xl p-6 flex flex-col items-center justify-center text-center transition"
              >
                <div className="text-4xl text-orange-400 mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 md:px-10 bg-[#0d0e18]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3">
            My <span className="text-orange-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            A few projects that reflect my skills and interests.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="rounded-3xl p-7 bg-white/5 border border-orange-500/10 hover:border-orange-400/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] transition shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-7 mb-5">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-400 inline-flex items-center gap-2 hover:text-orange-300"
                >
                  View Project <FaExternalLinkAlt size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 md:px-10 bg-gradient-to-br from-[#1a1020] to-[#4a1808]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-orange-400">Touch</span>
          </h2>

          <p className="text-gray-300 leading-8 mb-8">
            I&apos;m open to internships, entry-level opportunities, and exciting
            collaborative projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-orange-500/20 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] px-6 py-3 rounded-full transition"
            >
              LinkedIn
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-orange-500/20 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] px-6 py-3 rounded-full transition"
            >
              GitHub
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-orange-500 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] px-6 py-3 rounded-full transition font-semibold"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;