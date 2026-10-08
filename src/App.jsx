import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    revealElements.forEach(el => {
      revealOnScroll.observe(el);
    });

    // Dynamic Blob Follower
    const blob = document.getElementById("blob");
    const handlePointerMove = (event) => { 
      if (blob) {
        const { clientX, clientY } = event;
        blob.animate({
          left: `${clientX}px`,
          top: `${clientY + window.scrollY}px`
        }, { duration: 3000, fill: "forwards" });
      }
    };
    
    document.body.addEventListener("pointermove", handlePointerMove);

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      revealElements.forEach(el => revealOnScroll.unobserve(el));
      document.body.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="blob"></div>

      <nav>
          <div className="logo">Laxmiish<span className="gradient-text">.</span></div>
          <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
          <div className="container reveal">
              <div className="hero-content">
                  <span className="hero-greeting">Hello, I'm Laxmiish Shukla</span>
                  <h1 className="hero-title">Architecting <span className="gradient-text">Scalable</span> Software & Intelligent Systems.</h1>
                  <p className="hero-subtitle">Results-driven Software Engineering and Data Science student with a strong foundation in full-stack development, backend architecture, and machine learning.</p>
                  <div className="cta-buttons">
                      <a href="#contact" className="btn btn-primary">Get In Touch</a>
                      <a href="#projects" className="btn btn-outline">View Work</a>
                  </div>
              </div>
          </div>
      </section>

      {/* About Section */}
      <section id="about">
          <div className="container reveal">
              <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
              <div className="timeline">
                  <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                          <span className="timeline-date">Aug 2024 - Present</span>
                          <h3 className="timeline-title">Babu Banarsi Das University</h3>
                          <p className="timeline-subtitle">B.Tech in Computer Science (Artificial Intelligence)</p>
                          <p>Currently pursuing my B.Tech degree with a focus on cutting-edge AI technologies and software engineering methodologies.</p>
                      </div>
                  </div>
                  
                  <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                          <span className="timeline-date">Aug 2025 - Jan 2027 (Expected)</span>
                          <h3 className="timeline-title">IIT Mandi</h3>
                          <p className="timeline-subtitle">Minor Degree in Data Science</p>
                          <p>Deepening expertise in data science, predictive analytics, and machine learning algorithms at a premier institute.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
          <div className="container reveal">
              <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
              
              <div className="skills-container">
                  <div className="skill-category">
                      <h3><i className="fas fa-code"></i> Languages</h3>
                      <div className="skill-tags">
                          <span className="skill-tag">JavaScript</span>
                          <span className="skill-tag">Python</span>
                          <span className="skill-tag">Go</span>
                          <span className="skill-tag">SQL</span>
                          <span className="skill-tag">HTML5</span>
                          <span className="skill-tag">CSS3</span>
                      </div>
                  </div>
                  
                  <div className="skill-category">
                      <h3><i className="fas fa-layer-group"></i> Frontend</h3>
                      <div className="skill-tags">
                          <span className="skill-tag">React.js</span>
                          <span className="skill-tag">Next.js</span>
                          <span className="skill-tag">Tailwind CSS</span>
                          <span className="skill-tag">Axios</span>
                          <span className="skill-tag">Responsive Design</span>
                      </div>
                  </div>
                  
                  <div className="skill-category">
                      <h3><i className="fas fa-server"></i> Backend & API</h3>
                      <div className="skill-tags">
                          <span className="skill-tag">FastAPI</span>
                          <span className="skill-tag">Gin</span>
                          <span className="skill-tag">Node.js</span>
                          <span className="skill-tag">Express</span>
                          <span className="skill-tag">RESTful APIs</span>
                          <span className="skill-tag">Microservices</span>
                      </div>
                  </div>
                  
                  <div className="skill-category">
                      <h3><i className="fas fa-database"></i> Databases</h3>
                      <div className="skill-tags">
                          <span className="skill-tag">PostgreSQL</span>
                          <span className="skill-tag">MySQL</span>
                          <span className="skill-tag">MongoDB</span>
                          <span className="skill-tag">SQLAlchemy</span>
                      </div>
                  </div>

                  <div className="skill-category">
                      <h3><i className="fas fa-brain"></i> Data Science & ML</h3>
                      <div className="skill-tags">
                          <span className="skill-tag">Pandas</span>
                          <span className="skill-tag">NumPy</span>
                          <span className="skill-tag">Scikit-Learn</span>
                          <span className="skill-tag">Feature Engineering</span>
                          <span className="skill-tag">Predictive Modeling</span>
                      </div>
                  </div>

                  <div className="skill-category">
                      <h3><i className="fas fa-shield-alt"></i> Tools & Security</h3>
                      <div className="skill-tags">
                          <span className="skill-tag">Git</span>
                          <span className="skill-tag">JWT</span>
                          <span className="skill-tag">RBAC</span>
                          <span className="skill-tag">bcrypt</span>
                          <span className="skill-tag">Postman</span>
                          <span className="skill-tag">Jupyter Notebook</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
          <div className="container reveal">
              <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
              <div className="timeline">
                  
                  <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                          <h3 className="timeline-title">Backend & Systems Engineer</h3>
                          <p className="timeline-subtitle">Suraksha Grid | Gov-tech Platform</p>
                          <p style={{color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem'}}>
                              Developed a highly scalable Gov-tech platform designed to facilitate BOCW benefits distribution for over 60 million unorganized workers. Engineered robust backend microservices utilizing Go and Gin, integrating background CRON jobs and secure E-KYC verification protocols. Built a responsive and secure frontend leveraging React.js and Tailwind CSS.
                          </p>
                      </div>
                  </div>

                  <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                          <h3 className="timeline-title">Data Science Researcher</h3>
                          <p className="timeline-subtitle">Data Analytics & Model Evaluation (IIT Mandi Lab)</p>
                          <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                              Implemented end-to-end machine learning workflows, optimizing data preparation and training/testing splits to ensure precise model evaluation. Executed advanced statistical analysis and feature engineering on complex structured datasets utilizing Python, Pandas, and Scikit-Learn.
                          </p>
                      </div>
                  </div>

                  <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                          <h3 className="timeline-title">Finance Volunteer</h3>
                          <p className="timeline-subtitle">National Service Scheme (NSS), BBDU | May 2025 - Present</p>
                          <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                              Streamlined operational workflows and financial planning for university-wide community service initiatives.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
          <div className="container reveal">
              <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
              
              <div className="projects-grid">
                  
                  <div className="project-card">
                      <div className="project-header">
                          <h3 className="project-title">TransitOps</h3>
                          <span className="project-role">Hackathon Finalist</span>
                      </div>
                      <p className="timeline-subtitle" style={{marginBottom: '1rem'}}>Smart Transport Operations Platform</p>
                      <div className="project-desc">
                          <ul>
                              <li>Architected a comprehensive platform managing fleets, drivers, and trips using React.js, FastAPI, and PostgreSQL.</li>
                              <li>Engineered resilient frontend with offline mock data fallback for zero-downtime workflows.</li>
                              <li>Designed scalable RESTful APIs with RBAC and interactive Recharts KPI dashboards.</li>
                          </ul>
                      </div>
                      <div style={{display: 'flex', gap: '1rem'}}>
                          <span className="skill-tag">React.js</span>
                          <span className="skill-tag">FastAPI</span>
                          <span className="skill-tag">PostgreSQL</span>
                      </div>
                  </div>

                  <div className="project-card">
                      <div className="project-header">
                          <h3 className="project-title">HabitOS</h3>
                          <span className="project-role">Full-Stack Dev</span>
                      </div>
                      <p className="timeline-subtitle" style={{marginBottom: '1rem'}}>Minimalist Habit Tracker Application</p>
                      <div className="project-desc">
                          <ul>
                              <li>Created responsive Next.js and React web application for efficiently logging and visualizing daily routines.</li>
                              <li>Designed backend REST APIs with FastAPI and MySQL to ensure secure data management and real-time analytics.</li>
                          </ul>
                      </div>
                      <br/><br/>
                      <div style={{display: 'flex', gap: '1rem'}}>
                          <span className="skill-tag">Next.js</span>
                          <span className="skill-tag">FastAPI</span>
                          <span className="skill-tag">MySQL</span>
                      </div>
                  </div>

                  <div className="project-card">
                      <div className="project-header">
                          <h3 className="project-title">Attendance System</h3>
                          <span className="project-role">Software Developer</span>
                      </div>
                      <p className="timeline-subtitle" style={{marginBottom: '1rem'}}>MERN-Stack Tracking System</p>
                      <div className="project-desc">
                          <ul>
                              <li>Built comprehensive attendance tracking system enabling real-time database updates and reporting.</li>
                              <li>Implemented secure user authentication and role-based access controls for dedicated student and faculty portals.</li>
                          </ul>
                      </div>
                      <br/><br/>
                      <div style={{display: 'flex', gap: '1rem'}}>
                          <span className="skill-tag">MongoDB</span>
                          <span className="skill-tag">Express</span>
                          <span className="skill-tag">React.js</span>
                          <span className="skill-tag">Node.js</span>
                      </div>
                  </div>
                  
              </div>
              
              <div style={{marginTop: '4rem', textAlign: 'center'}}>
                  <h3 className="timeline-title">Algorithms & Problem Solving</h3>
                  <p style={{color: 'var(--text-secondary)', maxWidth: '800px', margin: '1rem auto', lineHeight: '1.6'}}>
                      <strong>LeetCode Achievements:</strong> Solved 140+ algorithmic challenges, demonstrating advanced proficiency in Dynamic Programming, Graph Theory (DFS/BFS), and Complex Data Structures (Segment Trees, Tries, Union-Find).
                  </p>
              </div>
          </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact">
          <div className="container reveal">
              <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
              <div className="contact-content">
                  <p>I'm always open to discussing software engineering roles, data science opportunities, and innovative projects. Feel free to reach out!</p>
                  
                  <div className="social-links">
                      <a href="mailto:laxmiishshukla@gmail.com" className="social-icon" title="Email"><i className="fas fa-envelope"></i></a>
                      <a href="https://linkedin.com/in/laxmiish-shukla" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                      <a href="tel:+918081117512" className="social-icon" title="Phone"><i className="fas fa-phone"></i></a>
                  </div>
                  
                  <p className="copyright">&copy; 2026 Laxmiish Shukla. All rights reserved.</p>
              </div>
          </div>
      </footer>
    </>
  )
}

export default App
