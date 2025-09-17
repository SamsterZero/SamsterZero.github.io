// components/Services.js
export default function Services() {
  const services = [
    {
      title: "Backend Development",
      description: "Scalable, secure backend systems using Spring Boot, FastAPI, Kafka, and microservices.",
      color: "text-red-400",
      hoverBorder: "hover:border-red-500"
    },
    {
      title: "Frontend Development", 
      description: "Responsive, modern web apps with React & Next.js built for performance and UX.",
      color: "text-blue-400",
      hoverBorder: "hover:border-blue-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud-native apps with Docker, CI/CD pipelines, and observability with Prometheus & Grafana.",
      color: "text-red-400",
      hoverBorder: "hover:border-red-500"
    },
    {
      title: "API Security",
      description: "Secure APIs with JWT/OAuth2, API Gateway patterns, and distributed architecture.",
      color: "text-blue-400", 
      hoverBorder: "hover:border-blue-500"
    }
  ];

  return (
    <section id="services" className="mb-20">
      <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
        💼 Services
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full"></span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-neutral-800 p-6 rounded-xl shadow hover:shadow-xl border border-neutral-700 ${service.hoverBorder} transition`}
          >
            <h3 className={`text-xl font-semibold ${service.color} mb-3`}>
              {service.title}
            </h3>
            <p className="text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}