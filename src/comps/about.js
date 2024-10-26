import React from "react";
import "./../styles/about.css";

const About = () => {
  const skills = [
    "AWS Cloud",
    "GitHub Actions",
    "GitLab CI/CD",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Helm",
    "Terraform",
    "Ansible",
    "Nginx",
    "SonarQube",
    "Trivy",
    "Zabbix",
    "Python",
    "Bash",
    "Ubuntu Linux"
  ];
  const basics = [
    "Azure",
    "HTML",
    "CSS",
    "AI/ML",
    "MySQL",
    "MongoDB",
    "Cloudflare",
    "ArgoCD",
    "Prometheus & Grafana"
  ];
  return (
    <section id="about" className="aboutSection sectionHead">
      <div className="aboutContainer">
        <h1>About Me</h1>
        <div className="aboutContent">
          <div className="aboutMe">
            <p>
              I'm a Associate DevOps Engineer who loves to automate things. During my early days, I struggled with choosing a domain to specialize in. It was then that a friend suggested DevOps to me. Intrigued by the idea and concept, I decided to explore and dive deeper into the world of DevOps. When I witnessed automating things, I felt exited, which fueled my motivation to learn more.
              <br />
              <br />
              At first, I learned fundamentals of DevOps and deployed simple web application by following DevOps best practices. However, fast forward to today, I have significantly improved my skills to the point where I am capable of working on complex projects. I'm currently researching various release and deployment processes as well as effective monitoring techniques to reduce application downtime.
            </p>
          </div>

          <div className="skillsContent">
            <div>
              <h2>My Skills</h2>
              <div className="allSkill">
                {skills.map((skill, index) => {
                  return (
                    <li key={index} className="skill">
                      {skill}
                    </li>
                  );
                })}
              </div>
            </div>
            <div>
              <h2>Fundamentals in,</h2>
              <div className="allSkill">
                {basics.map((basic, index) => {
                  return (
                    <li key={index} className="skill">
                      {basic}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
