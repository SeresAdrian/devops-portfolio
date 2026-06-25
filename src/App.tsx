import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import MatrixBackground from "./MatrixBackground";
import "./App.css";

const skills = [
  "Azure", "GCP", "Terraform", "Networking", "Security", "Linux", "Bash",
  "Docker", "Kubernetes", "PowerShell", "CI/CD", "Git", "GitHub", "Windows",
  "Active Directory","KQL", "Observability (LGTM)", "Platform & Infrastructure",
  "Trivy", "SonarQube", "Python","AzCLI", "AzCopy", "Software"
];

export default function App() {
  const [flipped, setFlipped] = useState(false);
  return (
    <>
      <MatrixBackground />

      <main className="page">
          <div className="layout">
            <div
              className={`flip-card ${flipped ? "is-flipped" : ""}`}
              onClick={() => setFlipped(!flipped)}
            >
            <div className="flip-inner">
              <section className="terminal-card front">
                <button className="flip-icon" type="button">
                  ↻
                </button>
                <p className="command"><span>$</span> whoami</p>

                <h1>DevOps / Platform Engineer / SRE</h1>

                <h2>Cloud Infrastructure • Kubernetes • Automation</h2>

                <p className="description">
                  Experienced Cloud & Platform Engineer helping organizations scale
                  secure and reliable microservice platforms.
                </p>

                <p className="description">
                  Passionate about Linux, networking, Kubernetes, and infrastructure automation.
                </p>

                <p className="description">
                  Building cloud-native platforms from the ground up, with a focus on
                  reliability, security, observability, and cost optimization.
                </p>

                <p className="hint">Click to run skills --list</p>
              </section>

              <section className="terminal-card back">
                <button className="flip-icon" type="button">
                  ↻
                </button>
                <p className="command"><span>$</span> skills --list</p>

                <h1>Technical Skills</h1>

                <div className="skills-grid">
                  {skills.map((skill) => (
                    <span className="skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="hint">Click to return to whoami</p>
              </section>
            </div>
          </div>
            <div className="contact-card">
              <h3>CONTACT</h3>

              <div className="contact-item">
                <Phone className="contact-icon" size={18} />
                <a href="tel:+40748184888">
                  +(40) 748 184 888
                </a>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" size={18} />
                <a href="adrianioanseres@gmail.com">
                  adrianioanseres@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span>Timisoara, Romania</span>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}