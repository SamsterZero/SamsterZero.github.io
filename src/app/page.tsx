'use client'

export default function Home() {
  return (
    <>
       <header
        className="flex flex-col items-center justify-center text-center px-6 py-24 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            👋 Hi, I'm <span className="text-red-500">Vinay Mhatre</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl text-gray-300">
            ⚡ Backend Expert in Spring Boot, FastAPI, Kafka, Microservices | 🎨 Frontend: React & Next.js | ☁️ Cloud &
            API Security Enthusiast
        </p>
        <a href="#contact"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition">
            Hire Me / Contact
        </a>
    </header>

    <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Skills Section */}
        <section id="skills" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
                🔧 Skills & Tech Stack
                <span
                    className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full"></span>
            </h2>
            <div className="flex flex-wrap gap-3">
                <span
                    className="px-3 py-1 bg-neutral-800 text-blue-400 rounded-lg font-medium hover:bg-neutral-700 transition">Java</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-red-400 rounded-lg font-medium hover:bg-neutral-700 transition">Python</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-blue-400 rounded-lg font-medium hover:bg-neutral-700 transition">TypeScript</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-red-400 rounded-lg font-medium hover:bg-neutral-700 transition">Kotlin</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-blue-400 rounded-lg font-medium hover:bg-neutral-700 transition">JavaScript</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-red-400 rounded-lg font-medium hover:bg-neutral-700 transition">Spring
                    Boot</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-blue-400 rounded-lg font-medium hover:bg-neutral-700 transition">FastAPI</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-red-400 rounded-lg font-medium hover:bg-neutral-700 transition">React</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-blue-400 rounded-lg font-medium hover:bg-neutral-700 transition">Next.js</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-red-400 rounded-lg font-medium hover:bg-neutral-700 transition">Kafka</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-blue-400 rounded-lg font-medium hover:bg-neutral-700 transition">Docker</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-red-400 rounded-lg font-medium hover:bg-neutral-700 transition">Prometheus</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-blue-400 rounded-lg font-medium hover:bg-neutral-700 transition">Grafana</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-red-400 rounded-lg font-medium hover:bg-neutral-700 transition">OAuth2
                    / JWT</span>
                <span
                    className="px-3 py-1 bg-neutral-800 text-blue-400 rounded-lg font-medium hover:bg-neutral-700 transition">API
                    Gateway</span>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
                💼 Services
                <span
                    className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full"></span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div
                    className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-xl border border-neutral-700 hover:border-red-500 transition">
                    <h3 className="text-xl font-semibold text-red-400 mb-3">Backend Development</h3>
                    <p className="text-gray-400">Scalable, secure backend systems using Spring Boot, FastAPI, Kafka, and
                        microservices.
                    </p>
                </div>
                <div
                    className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-xl border border-neutral-700 hover:border-blue-500 transition">
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">Frontend Development</h3>
                    <p className="text-gray-400">Responsive, modern web apps with React & Next.js built for performance and
                        UX.</p>
                </div>
                <div
                    className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-xl border border-neutral-700 hover:border-red-500 transition">
                    <h3 className="text-xl font-semibold text-red-400 mb-3">Cloud & DevOps</h3>
                    <p className="text-gray-400">Cloud-native apps with Docker, CI/CD pipelines, and observability with
                        Prometheus &
                        Grafana.</p>
                </div>
                <div
                    className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-xl border border-neutral-700 hover:border-blue-500 transition">
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">API Security</h3>
                    <p className="text-gray-400">Secure APIs with JWT/OAuth2, API Gateway patterns, and distributed
                        architecture.</p>
                </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
                🚀 Projects
                <span
                    className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div
                    className="bg-neutral-800 rounded-xl overflow-hidden shadow border border-neutral-700 hover:border-red-500 hover:shadow-xl transition">
                    <img src="https://via.placeholder.com/400x200.png?text=Project+1"
                        className="w-full h-52 object-cover border-b border-neutral-700" alt="Project 1" />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-red-400 mb-2">Enterprise Microservices App</h4>
                        <p className="text-gray-400">Spring Boot microservices with Kafka for high-throughput enterprise
                            systems.</p>
                    </div>
                </div>
                <div
                    className="bg-neutral-800 rounded-xl overflow-hidden shadow border border-neutral-700 hover:border-blue-500 hover:shadow-xl transition">
                    <img src="https://via.placeholder.com/400x200.png?text=Project+2"
                        className="w-full h-52 object-cover border-b border-neutral-700" alt="Project 2" />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">Fullstack Web Platform</h4>
                        <p className="text-gray-400">Next.js frontend with secure Spring Boot backend APIs, deployed on
                            cloud.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
            <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
                📫 Contact Me
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
                <a href="mailto:vinaymhatre@gmail.com"
                    className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/vinay-mhatre-401595206" target="_blank"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    LinkedIn
                </a>
                <a href="https://x.com/Samster_Zero" target="_blank"
                    className="bg-neutral-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-neutral-600 transition">
                    X
                </a>
            </div>
        </section>
    </div>

    {/* Footer */}
    <footer className="text-center py-6 bg-neutral-950 text-gray-500 text-sm border-t border-neutral-800">
        &copy; 2025 Vinay Mhatre | Fullstack Developer | Made with ❤️
    </footer>
    </>
  );
}
