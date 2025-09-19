"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Backend",
      description:
        "Scalable, secure backend systems using Spring Boot, FastAPI, Kafka, and microservices.",
      color: "text-red-400",
      hoverBorder: "hover:border-red-500",
      icon: "dns",
    },
    {
      title: "UI/UX",
      description:
        "Responsive, modern web apps with React & Next.js built for performance and UX.",
      color: "text-blue-400",
      hoverBorder: "hover:border-blue-500",
      icon: "laptop_mac",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Cloud-native apps with Docker, CI/CD pipelines, and observability with Prometheus & Grafana.",
      color: "text-red-400",
      hoverBorder: "hover:border-red-500",
      icon: "cloud",
    },
    {
      title: "API Security",
      description:
        "Secure APIs with JWT/OAuth2, API Gateway patterns, and distributed architecture.",
      color: "text-blue-400",
      hoverBorder: "hover:border-blue-500",
      icon: "security",
    },
  ];

  // Motion variants for staggered entrance
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
  };

  return (
    <section id="services" className="mb-20">
      <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
        💼 Services
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full"></span>
      </h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`bg-neutral-800 p-6 rounded-xl shadow hover:shadow-xl border border-neutral-700 ${service.hoverBorder} cursor-pointer`}
            variants={card}
            whileHover="hover"
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.span
                className={`material-icons ${service.color} text-2xl`}
              >
                {service.icon}
              </motion.span>
              <h3 className={`text-xl font-semibold ${service.color}`}>
                {service.title}
              </h3>
            </div>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
