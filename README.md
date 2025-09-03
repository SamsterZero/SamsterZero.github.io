<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinay Mhatre | Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    /* ===== Global Styles ===== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    body {
      background-color: #f8f9fa;
      color: #1f2937;
      line-height: 1.6;
    }

    a {
      color: #3b82f6;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    /* ===== Container ===== */
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
    }

    /* ===== Header ===== */
    header {
      text-align: center;
      margin-bottom: 3rem;
    }

    header h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    header p {
      font-size: 1.2rem;
      color: #4b5563;
    }

    /* ===== Section Titles ===== */
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: #111827;
      border-bottom: 2px solid #3b82f6;
      display: inline-block;
      padding-bottom: 0.2rem;
    }

    /* ===== Tech Stack ===== */
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;
    }

    .tech-item {
      background-color: #e0f2fe;
      color: #0369a1;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s ease;
    }

    .tech-item:hover {
      transform: translateY(-3px);
    }

    /* ===== Cards ===== */
    .card {
      background-color: #ffffff;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    }

    /* ===== Footer ===== */
    footer {
      text-align: center;
      margin-top: 4rem;
      padding: 2rem 0;
      color: #6b7280;
      font-size: 0.9rem;
    }

    /* ===== Highlights ===== */
    .highlight {
      color: #3b82f6;
      font-weight: 700;
    }

    /* ===== Responsive ===== */
    @media (max-width: 600px) {
      header h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- ===== Header ===== -->
    <header>
      <h1>Hi there 👋, I'm <span class="highlight">Vinay Mhatre</span></h1>
      <p>⚡ Backend expertise in <strong>Spring Boot, FastAPI, Kafka, Microservices</strong></p>
      <p>🎨 Frontend experience with <strong>React, Next.js</strong></p>
      <p>☁️ Interested in <strong>cloud-native systems, distributed architectures, and API security</strong></p>
    </header>

    <!-- ===== Tech Stack ===== -->
    <section>
      <h2>🔧 Tech Stack</h2>

      <div class="card">
        <h3>Languages</h3>
        <div class="tech-stack">
          <div class="tech-item">Java</div>
          <div class="tech-item">Python</div>
          <div class="tech-item">TypeScript</div>
          <div class="tech-item">Kotlin</div>
          <div class="tech-item">JavaScript</div>
        </div>
      </div>

      <div class="card">
        <h3>Frameworks</h3>
        <div class="tech-stack">
          <div class="tech-item">Spring Boot</div>
          <div class="tech-item">FastAPI</div>
          <div class="tech-item">React</div>
          <div class="tech-item">Next.js</div>
          <div class="tech-item">gRPC</div>
        </div>
      </div>

      <div class="card">
        <h3>Databases & Messaging</h3>
        <div class="tech-stack">
          <div class="tech-item">PostgreSQL</div>
          <div class="tech-item">MySQL</div>
          <div class="tech-item">Kafka</div>
        </div>
      </div>

      <div class="card">
        <h3>DevOps & Observability</h3>
        <div class="tech-stack">
          <div class="tech-item">Docker</div>
          <div class="tech-item">GitHub Actions</div>
          <div class="tech-item">Envoy</div>
          <div class="tech-item">Prometheus</div>
          <div class="tech-item">Grafana</div>
          <div class="tech-item">Loki + Alloy</div>
        </div>
      </div>

      <div class="card">
        <h3>Security</h3>
        <div class="tech-stack">
          <div class="tech-item">JWT/OAuth2</div>
          <div class="tech-item">API Gateway patterns</div>
        </div>
      </div>
    </section>
  </div>

  <!-- ===== Footer ===== -->
  <footer>
    &copy; 2025 Vinay Mhatre. All rights reserved.
  </footer>

  <script>
    // Optional JS: Smooth scroll or interactive animations can go here
    console.log("Portfolio loaded successfully!");
  </script>
</body>
</html>
