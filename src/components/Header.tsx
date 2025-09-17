// components/Header.js
export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center text-center px-6 py-24 text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        👋 Hi, I'm <span className="text-red-500">Vinay Mhatre</span>
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl text-gray-300">
        ⚡ Backend Expert in Spring Boot, FastAPI, Kafka, Microservices | 🎨 Frontend: React & Next.js | ☁️ Cloud &
        API Security Enthusiast
      </p>
      <a 
        href="#contact"
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition"
      >
        Contact Me
      </a>
    </header>
  );
}