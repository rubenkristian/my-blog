import { Meta, Title } from "@solidjs/meta";
import { For } from "solid-js";
import Container from "../profile/Container";
import Card from "../profile/Card";
import Chip from "../profile/Chip";

export default function ProfilePage() {
  const skills: Array<{ text: string; color: string; icon: string }> = [
    {
      text: "PHP",
      color: "hover:bg-indigo-500",
      icon: "fa-brands fa-php",
    },
    {
      text: "Laravel",
      color: "hover:bg-red-600",
      icon: "fa-brands fa-laravel",
    },
    {
      text: "Node.js",
      color: "hover:bg-green-500",
      icon: "fa-brands fa-node-js",
    },
    {
      text: "Go",
      color: "hover:bg-blue-500",
      icon: "fa-brands fa-golang",
    },
    {
      text: "React",
      color: "hover:bg-sky-500",
      icon: "fa-brands fa-react",
    },
    {
      text: "Vue",
      color: "hover:bg-green-600",
      icon: "fa-brands fa-vuejs",
    },
    {
      text: "Docker",
      color: "hover:bg-blue-400",
      icon: "fa-brands fa-docker",
    },
    {
      text: "PostgreSQL",
      color: "hover:bg-indigo-500",
      icon: "fa-solid fa-database",
    },
    {
      text: "NextJS",
      color: "hover:bg-white hover:text-black",
      icon: "fa-solid fa-next-js",
    },
    {
      text: "NestJS",
      color: "hover:bg-rose-600",
      icon: "fa-brands fa-nest-js",
    },
    {
      text: "MongoDB",
      color: "hover:bg-green-600",
      icon: "fa-brands fa-mongodb",
    },
    {
      text: "ElasticSearch",
      color: "hover:bg-yellow-500",
      icon: "fa-brands fa-elasticsearch",
    },
    {
      text: "Meilisearch",
      color: "hover:bg-pink-500",
      icon: "fa-brands fa-meilisearch",
    },
    {
      text: "Java",
      color: "hover:bg-sky-700",
      icon: "fa-brands fa-java",
    },
    {
      text: "Kotlin",
      color: "hover:bg-violet-600",
      icon: "fa-brands fa-kotlin",
    },
    {
      text: "REST API",
      color: "hover:bg-yellow-500",
      icon: "fa-solid fa-plug",
    },
  ];

  const repos: Array<{
    repo: string;
    detail: string;
    language: string;
    color: string;
    link: string;
  }> = [
    {
      repo: "Debio Indexer",
      detail: "Full-stack app with NestJS, ElasticSearch, PostgreSQL.",
      language: "TypeScript",
      color: "text-blue-500",
      link: "https://github.com/rubenkristian/debio-indexer",
    },
    {
      repo: "Debio Frontend",
      detail: "Frontend with Vue, Materialize CSS.",
      language: "TypeScript",
      color: "text-blue-500",
      link: "https://github.com/rubenkristian/debio-frontend",
    },
    {
      repo: "Myriad",
      detail: "API app with NodeJS, MongoDB, NextJS.",
      language: "TypeScript",
      color: "text-blue-500",
      link: "https://github.com/rubenkristian/myriad-api",
    },
    {
      repo: "Riichi Indonesia",
      detail: "Fullstack app with Go, SolidStart, TypeScript, MySQL, Fiber.",
      language: "Go",
      color: "text-blue-500",
      link: "https://github.com/riichi-mahjong-dev",
    },
  ];

  return (
    <Container>
      <Meta name="description" content="Kristian Ruben's personal website and portfolio. Software developer sharing projects, development notes, and technical insights."/>
      <Meta name="keywords" content="Kristian Ruben, software developer, programming, web development, portfolio, backend developer, Laravel, Linux"/>
      <Meta name="author" content="Kristian Ruben"/>
      <Meta name="canonical" content="https://kristian-ruben.my.id/"/>
      <Meta property="og:type" content="website"/>
      <Meta property="og:title" content="Kristian Ruben — Software Developer"/>
      <Meta property="og:description" content="Personal website and portfolio of Kristian Ruben. Projects, technical notes, and development work."/>
      <Meta property="og:url" content="https://kristian-ruben.my.id/"/>
      <Meta property="og:site_name" content="Kristian Ruben"/>
      <Meta name="twitter:card" content="summary_large_image"/>
      <Meta name="twitter:title" content="Kristian Ruben — Software Developer"/>
      <Meta name="twitter:description" content="Personal website and portfolio of Kristian Ruben. Projects and development work."/>
      <Meta name="twitter:description" content="Personal website and portfolio of Kristian Ruben. Projects and development work."/>
      <Meta name="theme-color" content="#0f172a"/>
      <Title>Kristian Ruben — Senior Software Developer</Title>
      <main class="text-center mx-auto">
        <div class="min-h-screen md:mx-0 mx-10 flex flex-col gap-4 text-left items-center justify-center">
          <div class="flex flex-col w-full gap-2">
            <h1 class="w-full font-bold text-4xl text-white">
              Hello, I'm Kristian Ruben
            </h1>
            <h2 class="w-full text-2xl text-white">Full-stack Developer</h2>
            <p class="text-gray-200">
              Delivering powerful backend architectures and seamless frontend
              experiences.
            </p>
          </div>
          <div class="flex w-full gap-4 items-start">
            <a
              href="https://github.com/rubenkristian/"
              target="_blank"
              aria-label="GitHub"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-white hover:text-white transition"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 1C6.48 1 2 5.48 2 11c0 4.42 2.87 8.17 6.84 9.5.5.1.66-.22.66-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.64.07-.63.07-.63 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.13-4.56-5 0-1.1.39-1.99 1.03-2.69-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.3c.85 0 1.71.11 2.51.32 1.9-1.3 2.74-1.03 2.74-1.03.56 1.4.21 2.44.1 2.7.64.7 1.03 1.59 1.03 2.69 0 3.88-2.34 4.75-4.58 5 .36.31.7.92.7 1.86v2.76c0 .27.16.59.67.48A10 10 0 0 0 22 11c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>

            <a
              href="https://x.com/rhyubenkristian"
              target="_blank"
              aria-label="X"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-white hover:text-white transition"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4l16 16M20 4L4 20" />
              </svg>
            </a>

            <a
              href="https://huggingface.co/ruben09"
              target="_blank"
              aria-label="Hugging Face"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-yellow-500 hover:text-yellow-500 transition"
            >
              <svg
                class="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="9" cy="10" r="1" />
                <circle cx="15" cy="10" r="1" />
                <path d="M8 15s2 2 4 2 4-2 4-2" />
              </svg>
            </a>

            <a
              href="mailto:rubenkristian96@gmail.com"
              aria-label="Email"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
        <div class="min-h-screen md:mx-0 mx-10 flex flex-col gap-12 text-left py-10">
          <div class="flex flex-col gap-2">
            <div class="w-full font-bold text-xl text-white">About Me</div>
            <p class="text-gray-200 leading-relaxed">
              I'm a full-stack developer with over nine years of experiences,
              having contributed to a wide range of companies—from{" "}
              <b>marketplaces</b> to <b>blockchain</b> platforms—building robust
              backend systems and&nbsp
              <b>RESTful APIs</b>, while also developing modern frontend
              applications using frameworks like <b>Vue</b> and <b>React</b>.
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <div class="w-full font-bold text-xl text-white">Projects</div>
            <div class="flex flex-wrap gap-6">
              <For each={repos}>
                {(repo, _) => (
                  <Card
                    repo={repo.repo}
                    detail={repo.detail}
                    language={repo.language}
                    color={repo.color}
                    link={repo.link}
                  />
                )}
              </For>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="w-full font-bold text-xl text-white">
              Skills & Technologies
            </div>
            <div class="flex flex-wrap gap-3 text-white">
              <For each={skills}>
                {(skill, _) => (
                  <Chip
                    text={skill.text}
                    hoverColor={skill.color}
                    icon={skill.icon}
                  />
                )}
              </For>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}