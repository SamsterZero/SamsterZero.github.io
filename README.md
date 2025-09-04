<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinay Mhatre | Fullstack Developer</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    /* ===== Global ===== */
    * { margin:0; padding:0; box-sizing:border-box; font-family:'Inter',sans-serif;}
    body {background:#f5f5f5; color:#1f2937; line-height:1.6;}
    a {color:#3b82f6; text-decoration:none;}
    a:hover{text-decoration:underline;}
    .container {max-width:1200px; margin:0 auto; padding:2rem;}

    /* ===== Hero ===== */
    header.hero {display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:6rem 2rem; background:#3b82f6; color:white;}
    header.hero h1 {font-size:3rem; margin-bottom:1rem;}
    header.hero p {font-size:1.2rem; margin-bottom:2rem;}
    .cta-btn {background:white; color:#3b82f6; padding:0.8rem 1.6rem; font-weight:600; border-radius:8px; transition:all 0.3s;}
    .cta-btn:hover {background:#e0f2fe; transform:translateY(-2px);}

    /* ===== Section Titles ===== */
    section {padding:4rem 2rem;}
    section h2 {font-size:2rem; color:#111827; margin-bottom:2rem; border-bottom:3px solid #3b82f6; display:inline-block; padding-bottom:0.2rem;}

    /* ===== Skills ===== */
    .skills {display:flex; flex-wrap:wrap; gap:1rem;}
    .skill {background:#e0f2fe; color:#0369a1; padding:0.5rem 1rem; border-radius:8px; font-weight:600; transition:all 0.2s;}
    .skill:hover {transform:translateY(-3px);}

    /* ===== Services ===== */
    .services {display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:2rem;}
    .service-card {background:white; padding:2rem; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1); transition:all 0.3s;}
    .service-card:hover {transform:translateY(-5px); box-shadow:0 8px 20px rgba(0,0,0,0.15);}
    .service-card h3 {margin-bottom:1rem; color:#3b82f6;}
    .service-card p {color:#4b5563;}

    /* ===== Projects ===== */
    .projects {display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:2rem;}
    .project-card {background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1); transition:all 0.3s;}
    .project-card img {width:100%; height:200px; object-fit:cover;}
    .project-card .project-info {padding:1rem;}
    .project-card .project-info h4 {margin-bottom:0.5rem; color:#3b82f6;}
    .project-card .project-info p {color:#4b5563;}

    /* ===== Contact ===== */
    .contact {display:flex; flex-direction:column; gap:1rem; max-width:400px; margin:0 auto;}
    .contact input, .contact textarea {padding:0.8rem; border-radius:8px; border:1px solid #d1d5db; width:100%; font-size:1rem;}
    .contact button {padding:0.8rem 1.6rem; border:none; border-radius:8px; background:#3b82f6; color:white; font-weight:600; cursor:pointer; transition:all 0.3s;}
    .contact button:hover {background:#2563eb;}

    /* ===== Footer ===== */
    footer {text-align:center; padding:2rem; color:#6b7280; font-size:0.9rem; background:#f3f4f6;}

    /* ===== Responsive ===== */
    @media(max-width:768px){
      header.hero h1 {font-size:2.2rem;}
      section h2 {font-size:1.7rem;}
    }
  </style>
</head>
<body>

  <!-- Hero Section -->
  <header class="hero">
    <h1>Hi 👋, I'm <span style="color:#ffeb3b;">Vinay Mhatre</span></h1>
    <p>⚡ Backend Expert in Spring Boot, FastAPI, Kafka, Microservices | 🎨 Frontend: React & Next.js | ☁️ Cloud & API Security Enthusiast</p>
    <a href="#contact" class="cta-btn">Hire Me / Contact</a>
  </header>

  <div class="container">
    <!-- Skills Section -->
    <section id="skills">
      <h2>🔧 Skills & Tech Stack</h2>
      <div class="skills">
        <div class="skill">Java</div>
        <div class="skill">Python</div>
        <div class="skill">TypeScript</div>
        <div class="skill">Kotlin</div>
        <div class="skill">JavaScript</div>
        <div class="skill">Spring Boot</div>
        <div class="skill">FastAPI</div>
        <div class="skill">React</div>
        <div class="skill">Next.js</div>
        <div class="skill">gRPC</div>
        <div class="skill">PostgreSQL</div>
        <div class="skill">MySQL</div>
        <div class="skill">Kafka</div>
        <div class="skill">Docker</div>
        <div class="skill">GitHub Actions</div>
        <div class="skill">Prometheus</div>
        <div class="skill">Grafana</div>
        <div class="skill">Envoy</div>
        <div class="skill">Loki + Alloy</div>
        <div class="skill">JWT/OAuth2</div>
        <div class="skill">API Gateway Patterns</div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services">
      <h2>💼 Services I Offer</h2>
      <div class="services">
        <div class="service-card">
          <h3>Backend Development</h3>
          <p>Building scalable, secure backend systems using Spring Boot, FastAPI, Kafka, and microservices architecture.</p>
        </div>
        <div class="service-card">
          <h3>Frontend Development</h3>
          <p>Creating responsive, modern web apps using React and Next.js with clean UI/UX principles.</p>
        </div>
        <div class="service-card">
          <h3>Cloud & DevOps</h3>
          <p>Deploying cloud-native applications with Docker, CI/CD pipelines, and observability using Prometheus & Grafana.</p>
        </div>
        <div class="service-card">
          <h3>API Security & Architecture</h3>
          <p>Designing secure APIs with JWT/OAuth2, API Gateway patterns, and distributed system best practices.</p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
      <h2>🚀 Projects</h2>
      <div class="projects">
        <div class="project-card">
          <img src="https://via.placeholder.com/400x200.png?text=Project+1" alt="Project 1">
          <div class="project-info">
            <h4>Enterprise Microservices App</h4>
            <p>Spring Boot microservices with Kafka integration for high-throughput enterprise systems.</p>
          </div>
        </div>
        <div class="project-card">
          <img src="https://via.placeholder.com/400x200.png?text=Project+2" alt="Project 2">
          <div class="project-info">
            <h4>Fullstack Web Platform</h4>
            <p>React + Next.js frontend connected to secure Spring Boot backend APIs, deployed on cloud.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <h2>📫 Contact Me</h2>
    
      <!-- Social Links -->
      <div style="display:flex; gap:1rem; justify-content:center; margin-bottom:2rem;">
        <a href="https://www.linkedin.com/in/vinaymhatre/" target="_blank" 
           style="background:#0A66C2; color:white; padding:0.6rem 1.2rem; border-radius:8px; font-weight:600; text-decoration:none; transition:all 0.3s;">
           LinkedIn
        </a>
        <a href="https://x.com/your_x_username" target="_blank"
           style="background:#1DA1F2; color:white; padding:0.6rem 1.2rem; border-radius:8px; font-weight:600; text-decoration:none; transition:all 0.3s;">
           X
        </a>
      </div>
    
      <!-- Contact Form -->
      <form class="contact" action="https://formspree.io/f/your-form-id" method="POST">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </div>

  <footer>
    &copy; 2025 Vinay Mhatre | Fullstack Developer | Made with ❤️
  </footer>

  <script>
    // Smooth scroll to contact form
    document.querySelector('.cta-btn').addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
    });
  </script>

</body>
</html>
