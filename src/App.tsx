import { useState } from "react";
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

          <p>☎ +(40) 748 184 888</p>
          <p>✉ adrianioanseres@gmail.com</p>
          <p>📍 Timisoara, Romania</p>
        </div>
      </main>
    </>
  );
}