import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
  title: "Shop Sphere – E-Commerce Web Application",
  desc: "A modern, responsive e-commerce application enabling users to browse products, view details, manage a shopping cart, and experience a smooth online shopping workflow.",
  tech: [
    "React 18",
    "JavaScript (ES6+)",
    "Context API",
    "HTML5",
    "CSS3",
    "Framer Motion"
  ],
  images: [
    "/images/shop-sphere-home.png",
    "/images/shop-sphere-product.png",
    "/images/shop-sphere-cart.png"
  ],
  link: "#"
},

  {
    title: "Financial Trade Reporting & Compliance Platform",
    desc: "Next-gen trade reporting and compliance platform for JP Morgan Chase with real-time analytics, trade monitoring, and regulatory reporting.",
    tech: ["React 18", "Next.js 14", "TypeScript", "Redux Toolkit", "AWS"],
    images: [
      "https://cdn.dribbble.com/userupload/16559494/file/original-893a1b421cf58f20cef3ecbc58a28165.jpg",
      "https://cdn.dribbble.com/userupload/35927874/file/still-88efd69e32a78c8b064723e39cbc2cbc.png",
      "https://www.uidux.com/uploads/components/finance-dashboard-ui-concept-1673298249.png"
    ],
    link: "#"
  },
  {
    title: "Digital Banking & Customer Insights Platform",
    desc: "Secure, scalable platform for customer onboarding, transaction monitoring, and account management at Barclays Corporation.",
    tech: ["React 18", "Next.js 13", "TypeScript", "GraphQL", "Tailwind CSS"],
    images: [
      "https://uidoor.com/wp-content/uploads/edd/2023/08/Cover-Page-5.jpg",
      "https://webix.com/assets/templates/finance_dashboard/finance-dashboard.png",
      "https://www.creativefabrica.com/wp-content/uploads/2021/03/03/Finance-Admin-Dashboard-UI-Kit-Graphics-9163867-1.jpg"
    ],
    link: "#"
  },
  {
    title: "Training & Knowledge Management Platform",
    desc: "Web-based SPA enabling learners to access interactive courses, track progress, and collaborate across teams for Cognizant.",
    tech: ["React 17+", "Redux", "Material UI", "Bootstrap", "Node.js"],
    images: [
      "https://cdn.dribbble.com/userupload/17387862/file/original-5b338ec21c49fb569aa861bb1b53e4e8.png?resize=752x&vertical=center",
      // "https://cdn.freebiesupply.com/images/large/1x/elearn-dashboard-s39.jpg",
      "https://cdn.dribbble.com/userupload/11118945/file/original-6fa56eb64559bbc690d390e7722a2242.png?resize=752x&vertical=center"
    ],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.02, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
          >
            {/* Project Header */}
            <div className="p-5">
              <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">{tech}</span>
                ))}
              </div>
            </div>

            {/* Project Images */}
            <div className="grid md:grid-cols-3 gap-2">
              {proj.images.map((img, idx) => (
                <img key={idx} src={img} alt={`${proj.title} screenshot ${idx + 1}`} className="w-full h-48 object-cover"/>
              ))}
            </div>

            {/* Project Link */}
            <div className="p-5 text-right">
              <a
                href={proj.link}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
