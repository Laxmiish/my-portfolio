import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 md:px-8 max-w-6xl mx-auto">
          <div className="font-bold text-lg mr-4">Laxmiish Shukla</div>
          <nav className="flex items-center space-x-6 text-sm font-medium ml-auto">
            <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            <a href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">Skills</a>
            <a href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60">Experience</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</a>
          </nav>
        </div>
      </header>

      <main className="container px-4 md:px-8 max-w-6xl mx-auto flex-1 py-12 md:py-24 lg:py-32 flex flex-col gap-24">
        
        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-start gap-4 pt-12 md:pt-24 pb-8">
          <Badge variant="secondary" className="mb-2">Software Engineer & Data Scientist</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
            Architecting Scalable Software & Intelligent Systems.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground mt-4">
            Results-driven student with a strong foundation in full-stack development, backend architecture, and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Work</a>
            </Button>
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section id="about" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Babu Banarsi Das University</CardTitle>
                <CardDescription>Aug 2024 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">B.Tech in Computer Science (Artificial Intelligence)</p>
                <p className="text-sm text-muted-foreground">Focus on AI technologies and software engineering methodologies.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>IIT Mandi</CardTitle>
                <CardDescription>Aug 2025 - Jan 2027 (Expected)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">Minor Degree in Data Science</p>
                <p className="text-sm text-muted-foreground">Predictive analytics, statistical modeling, and ML algorithms.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Skills Section */}
        <section id="skills" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold tracking-tight">Technical Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Languages</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Go</Badge>
                <Badge variant="secondary">SQL</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Backend</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="secondary">FastAPI</Badge>
                <Badge variant="secondary">Gin</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Microservices</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Data Science & ML</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="secondary">Pandas</Badge>
                <Badge variant="secondary">NumPy</Badge>
                <Badge variant="secondary">Scikit-Learn</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Databases</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </CardContent>
            </Card>

          </div>
        </section>

        <Separator />

        {/* Experience Section */}
        <section id="experience" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
          <div className="flex flex-col gap-8">
            
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Backend & Systems Engineer</h3>
              <p className="text-sm font-medium text-muted-foreground">Suraksha Grid | Gov-tech Platform</p>
              <p className="text-sm text-foreground/80 mt-2 leading-relaxed max-w-3xl">
                Developed a highly scalable Gov-tech platform for BOCW benefits distribution serving over 60 million workers. Engineered Go and Gin microservices, integrated background CRON jobs, and built secure E-KYC verification protocols.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Data Science Researcher</h3>
              <p className="text-sm font-medium text-muted-foreground">Data Analytics & Model Evaluation (IIT Mandi Lab)</p>
              <p className="text-sm text-foreground/80 mt-2 leading-relaxed max-w-3xl">
                Implemented end-to-end ML workflows, optimized training/testing splits, and executed advanced statistical analysis and feature engineering on complex structured datasets.
              </p>
            </div>

          </div>
        </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle>TransitOps</CardTitle>
                  <Badge>Hackathon Finalist</Badge>
                </div>
                <CardDescription>Smart Transport Operations Platform</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc pl-4 text-sm text-muted-foreground flex flex-col gap-2">
                  <li>Architected a comprehensive platform managing fleets, drivers, and trips using React.js, FastAPI, and PostgreSQL.</li>
                  <li>Engineered resilient frontend with offline mock data fallback.</li>
                  <li>Designed scalable RESTful APIs with RBAC and interactive KPI dashboards.</li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2 flex-wrap pt-4">
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">FastAPI</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle>HabitOS</CardTitle>
                  <Badge variant="secondary">Full-Stack</Badge>
                </div>
                <CardDescription>Minimalist Habit Tracker Application</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc pl-4 text-sm text-muted-foreground flex flex-col gap-2">
                  <li>Created responsive Next.js web application for efficiently logging and visualizing daily routines.</li>
                  <li>Designed backend REST APIs with FastAPI and MySQL to ensure secure data management.</li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2 flex-wrap pt-4">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">FastAPI</Badge>
                <Badge variant="outline">MySQL</Badge>
              </CardFooter>
            </Card>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="border-t bg-muted/20">
        <div className="container px-4 md:px-8 max-w-6xl mx-auto py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-xl font-bold">Let's Connect</h2>
            <p className="text-sm text-muted-foreground">Always open to discussing software engineering and data science roles.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <a href="mailto:laxmiishshukla@gmail.com" aria-label="Send email to Laxmiish" title="Email Laxmiish">Email</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/laxmiish-shukla" target="_blank" rel="noreferrer" aria-label="Visit Laxmiish's LinkedIn profile" title="LinkedIn Profile">LinkedIn</a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
