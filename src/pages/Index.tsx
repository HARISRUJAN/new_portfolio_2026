import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Brain,
  BriefcaseBusiness,
  CalendarDays,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Moon,
  Newspaper,
  Sparkles,
  Terminal,
  Twitter,
} from "lucide-react";
import profileImage from "../assets/harisrujan-profile_2.jpg";

const navItems = ["Work", "Stack", "Writing", "Experience", "Contact"];

const projects = [
  {
    title: "Multi-Agent SRS Validation",
    meta: "GPT-Lab, Tampere University",
    description:
      "LLM agents simulate developer, scrum master, and PM perspectives to catch ambiguity in software requirements.",
    metric: "85% validation accuracy",
    tags: ["LangGraph", "RAG", "Azure OpenAI"],
  },
  {
    title: "Profile-Job Matching Engine",
    meta: "Ignitz Solutions",
    description:
      "NLP matching pipeline that improved candidate shortlisting quality and reduced manual review time.",
    metric: "40% faster shortlisting",
    tags: ["SpaCy", "NLP", "Semantic Search"],
  },
  {
    title: "GenAI Product Consulting",
    meta: "Independent",
    description:
      "Product architecture, chatbot workflows, analytics systems, and practical GenAI training for teams.",
    metric: "5+ companies advised",
    tags: ["AI Strategy", "Automation", "Training"],
  },
];

const stack = [
  "Python",
  "LangChain",
  "LangGraph",
  "Azure OpenAI",
  "Qdrant",
  "Streamlit",
  "Power BI",
  "React",
  "SpaCy",
  "HuggingFace",
  "SQL",
  "Prompt Design",
];

const writing = [
  {
    title: "I use AI as a copilot, not autopilot",
    type: "Principle",
  },
  {
    title: "Building agents that review requirements like stakeholders",
    type: "Research",
  },
  {
    title: "How professionals can move from AI demos to real product work",
    type: "Mentorship",
  },
];

const experience = [
  {
    role: "Thesis Worker",
    company: "GPT-Lab, Tampere University",
    period: "Nov 2024 - Present",
    note: "Multi-agent requirement validation with LLMs, RAG, and digital twins.",
  },
  {
    role: "Data Science Engineer",
    company: "Ignitz Solutions",
    period: "Jan 2022 - Aug 2023",
    note: "HR tech, NLP pipelines, dashboards, and applied automation.",
  },
  {
    role: "Mentor & Consultant",
    company: "GenAI Practice",
    period: "2024 - Present",
    note: "Training professionals and helping companies adopt practical AI workflows.",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/HARISRUJAN",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harisrujan2605/",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/bannu2605",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "mailto:harisrujan2605@gmail.com",
    icon: Mail,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const contributionCells = useMemo(
    () =>
      Array.from({ length: 168 }, (_, index) => {
        const wave = Math.sin(index * 0.58) + Math.cos(index * 0.19);
        const active = (index * 7) % 11 < 6;
        return {
          id: index,
          level: active ? Math.max(1, Math.min(4, Math.ceil((wave + 2) * 1.2))) : 0,
        };
      }),
    [],
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      return;
    }

    if (!savedTheme) {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#171717] selection:bg-[#171717] selection:text-white dark:bg-[#0d0d0d] dark:text-[#f5f1e8]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(23,23,23,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,23,0.055)_1px,transparent_1px)] bg-[size:36px_36px] dark:bg-[linear-gradient(rgba(245,241,232,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(245,241,232,0.045)_1px,transparent_1px)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <header className="sticky top-0 z-40 -mx-5 border-b border-black/10 bg-white/85 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d0d0d]/82 sm:-mx-8 sm:px-8">
          <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <a href="#top" className="font-mono text-sm font-semibold tracking-[0.18em]">
              HARISRUJAN.C
            </a>
            <div className="hidden items-center gap-6 text-sm text-black/60 dark:text-white/60 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="mailto:harisrujan2605@gmail.com"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-black/15 px-4 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white dark:border-white/15 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              <Moon className="h-4 w-4" />
              Available
            </a>
          </nav>
        </header>

        <main id="top">
          <section className="grid min-h-[calc(100svh-73px)] items-center gap-10 py-12 md:grid-cols-[1.12fr_0.88fr] md:py-16">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08 }}
              className="space-y-8"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-3 py-2 text-sm text-black/65 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65"
              >
                <span className="h-2 w-2 rounded-full bg-[#40b27c]" />
                AI product architect based in Tampere, Finland
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-5">
                <h1 className="max-w-4xl text-6xl font-semibold leading-[0.94] tracking-normal text-black dark:text-white sm:text-7xl lg:text-7xl xl:text-8xl">
                  Harisrujan builds practical AI systems.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-black/64 dark:text-white/64">
                  I help teams turn GenAI from impressive demos into useful products, with a focus on
                  agents, RAG, NLP workflows, and AI training that makes people more capable.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#293f39] dark:bg-white dark:text-black dark:hover:bg-[#dfeadf]"
                >
                  View selected work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:harisrujan2605@gmail.com"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-black/15 px-5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-black dark:border-white/15 dark:hover:border-white"
                >
                  Start a conversation
                </a>
              </motion.div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-[#151515] dark:shadow-black/30">
                <img
                  src={profileImage}
                  alt="Harisrujan C"
                  className="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-top grayscale"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/25 bg-black/72 p-5 text-white backdrop-blur-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/50">
                        Now
                      </p>
                      <p className="mt-2 text-lg font-semibold">Researching multi-agent validation</p>
                    </div>
                    <Bot className="h-6 w-6 text-[#a7e3c7]" />
                  </div>
                </div>
              </div>
            </motion.aside>
          </section>

          <section className="grid gap-4 border-y border-black/10 py-5 dark:border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["50+", "professionals trained"],
              ["5+", "AI products delivered"],
              ["85%", "validation accuracy"],
              ["2+", "years applied AI"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-baseline gap-3">
                <span className="font-mono text-3xl font-semibold">{value}</span>
                <span className="text-sm text-black/55 dark:text-white/55">{label}</span>
              </div>
            ))}
          </section>

          <section id="work" className="py-24">
            <SectionIntro
              eyebrow="Selected Work"
              title="Systems that move AI into the workflow."
              copy="Research systems, recruiting workflows, and consulting work shaped around measurable AI outcomes."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group rounded-[1.5rem] border border-black/10 bg-white/52 p-6 transition hover:-translate-y-1 hover:border-black/25 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/25"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="rounded-full bg-[#dcebdc] px-3 py-1 text-xs font-semibold text-[#234f3e] dark:bg-[#1e352b] dark:text-[#a7e3c7]">
                      {project.metric}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-black/35 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black dark:text-white/35 dark:group-hover:text-white" />
                  </div>
                  <p className="text-sm text-black/50 dark:text-white/50">{project.meta}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-normal">
                    {project.title}
                  </h3>
                  <p className="mt-4 min-h-24 leading-7 text-black/60 dark:text-white/60">
                    {project.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/55 dark:border-white/10 dark:text-white/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-y border-black/10 py-20 dark:border-white/10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
                Contribution Map
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal">
                Consistent experiments, not occasional sparks.
              </h2>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/45 p-5 dark:border-white/10 dark:bg-white/[0.035]">
              <div className="grid grid-flow-col grid-rows-7 gap-1">
                {contributionCells.map((cell) => (
                  <span
                    key={cell.id}
                    className="h-3 rounded-sm"
                    style={{
                      background:
                        cell.level === 0
                          ? "rgba(23,23,23,.08)"
                          : `rgba(64, 178, 124, ${0.18 + cell.level * 0.16})`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-black/50 dark:text-white/50">
                <span>agent research</span>
                <span>mentorship</span>
                <span>product systems</span>
              </div>
            </div>
          </section>

          <section id="stack" className="py-24">
            <SectionIntro
              eyebrow="Stack"
              title="Tools I reach for when prototypes need to become products."
              copy="A practical mix of AI orchestration, product engineering, analytics, and data workflows."
            />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {stack.map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center justify-between rounded-2xl border border-black/10 bg-white/45 px-4 text-sm font-semibold transition hover:border-[#40b27c] hover:bg-[#e2f0e4] dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-[#142319]"
                >
                  {item}
                  <Terminal className="h-4 w-4 text-black/35 dark:text-white/35" />
                </div>
              ))}
            </div>
          </section>

          <section id="writing" className="grid gap-8 py-20 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionIntro
              eyebrow="Writing & Speaking"
              title="Short, practical thinking for people building with AI."
              copy="Topics I write, teach, and speak about across product teams, students, and AI communities."
            />
            <div className="space-y-3">
              {writing.map((item) => (
                <a
                  key={item.title}
                  href="#contact"
                  className="group flex items-center justify-between gap-5 rounded-2xl border border-black/10 bg-white/45 p-5 transition hover:border-black/25 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
                >
                  <span>
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#47775f] dark:text-[#a7e3c7]">
                      <Newspaper className="h-4 w-4" />
                      {item.type}
                    </span>
                    <span className="mt-2 block text-xl font-semibold tracking-normal">
                      {item.title}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-black/35 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black dark:text-white/35 dark:group-hover:text-white" />
                </a>
              ))}
            </div>
          </section>

          <section id="experience" className="border-y border-black/10 py-24 dark:border-white/10">
            <SectionIntro
              eyebrow="Experience"
              title="A timeline of applied AI, product ownership, and mentorship."
              copy="The common thread is simple: understand the workflow, build the system, teach the team."
            />
            <div className="mt-12 space-y-6">
              {experience.map((item) => (
                <div
                  key={`${item.company}-${item.role}`}
                  className="grid gap-4 border-t border-black/10 pt-6 dark:border-white/10 md:grid-cols-[0.35fr_0.65fr]"
                >
                  <div className="flex items-center gap-3 text-sm text-black/50 dark:text-white/50">
                    <CalendarDays className="h-4 w-4" />
                    {item.period}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-normal">{item.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-[#47775f] dark:text-[#a7e3c7]">
                      <BriefcaseBusiness className="h-4 w-4" />
                      {item.company}
                    </p>
                    <p className="mt-4 max-w-2xl leading-7 text-black/60 dark:text-white/60">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="py-24">
            <div className="overflow-hidden rounded-[2rem] bg-black p-8 text-white dark:bg-white dark:text-black sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-white/45 dark:text-black/45">
                    <MapPin className="h-4 w-4" />
                    Tampere / Remote
                  </p>
                  <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl">
                    Let's build something useful with AI.
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-white/62 dark:text-black/62">
                    Open to AI product roles, consulting engagements, university sessions, and
                    research collaborations around practical GenAI systems.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href="mailto:harisrujan2605@gmail.com"
                    className="flex min-h-16 items-center justify-between rounded-2xl bg-white px-5 font-semibold text-black transition hover:-translate-y-0.5 dark:bg-black dark:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <MessageSquareText className="h-5 w-5" />
                      harisrujan2605@gmail.com
                    </span>
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <div className="grid grid-cols-2 gap-3">
                    {socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target={social.href.startsWith("mailto") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 text-sm font-semibold transition hover:bg-white/10 dark:border-black/15 dark:hover:bg-black/10"
                        >
                          <Icon className="h-4 w-4" />
                          {social.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="flex flex-col gap-3 border-t border-black/10 py-8 text-sm text-black/50 dark:border-white/10 dark:text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>(c) 2026 Harisrujan C.</span>
          <span className="flex items-center gap-2">
            Built with React and Tailwind.
            <Sparkles className="h-4 w-4" />
          </span>
        </footer>
      </div>
    </div>
  );
};

const SectionIntro = ({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) => (
  <div className="max-w-3xl">
    <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
      {eyebrow}
    </p>
    <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
      {title}
    </h2>
    <p className="mt-5 max-w-2xl text-lg leading-8 text-black/58 dark:text-white/58">{copy}</p>
  </div>
);

export default Index;
