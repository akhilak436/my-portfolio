import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaJenkins,
  FaGitAlt,
  FaFigma,
  FaMobileAlt,
  FaGlobe,
  FaTachometerAlt,
  FaUniversalAccess ,
  FaLayerGroup,
  FaBezierCurve
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiGraphql,
  SiTailwindcss,
  SiMui,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiKubernetes,
  SiGithubactions,
  SiGitlab,
  SiAngular,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiFramer
} from "react-icons/si";

const skills = [
  /* ---------- Frontend Core ---------- */
  { name: "React 18+", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-400" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },

  /* ---------- UI / Styling ---------- */
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Material UI", icon: SiMui, color: "text-blue-300" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
  { name: "Figma", icon: FaFigma, color: "text-pink-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-rose-400" },

  /* ---------- State & Data ---------- */
  { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-400" },
  { name: "React Query", icon: FaReact, color: "text-pink-400" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
  { name: "REST APIs", icon: FaGlobe, color: "text-green-400" },

  /* ---------- Backend ---------- */
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },

  /* ---------- Testing ---------- */
  { name: "Jest", icon: SiJest, color: "text-red-400" },
  { name: "React Testing Library", icon: SiTestinglibrary, color: "text-red-500" },
  { name: "Cypress", icon: SiCypress, color: "text-green-500" },

  /* ---------- Performance & Quality ---------- */
{ name: "Accessibility (a11y)", icon: FaUniversalAccess, color: "text-indigo-400" },
  { name: "Responsive Design", icon: FaMobileAlt, color: "text-teal-400" },
  { name: "Performance Optimization", icon: FaTachometerAlt, color: "text-yellow-300" },
  { name: "Design Systems", icon: FaLayerGroup, color: "text-indigo-300" },
  { name: "UX Principles", icon: FaBezierCurve, color: "text-pink-300" },

  /* ---------- Tooling ---------- */
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
  { name: "Webpack", icon: SiWebpack, color: "text-blue-400" },
  { name: "ESLint", icon: SiEslint, color: "text-purple-300" },
  { name: "Prettier", icon: SiPrettier, color: "text-pink-300" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },

  /* ---------- DevOps ---------- */
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
  { name: "Jenkins", icon: FaJenkins, color: "text-red-400" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-indigo-400" },
  { name: "GitLab CI/CD", icon: SiGitlab, color: "text-orange-500" },

  /* ---------- Framework Bonus ---------- */
  { name: "Angular", icon: SiAngular, color: "text-red-500" }
];

export default skills;
