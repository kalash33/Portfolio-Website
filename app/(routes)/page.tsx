// pages/index.jsx
import Hero from "../_components/hero";
import Projects from "../_components/projectsList";
import SkillsSection from "../_components/skills";
import ExperienceSection from "../_components/experience";
import Footer from "../_components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="contact"><Footer /></section>
    </div>
  );
}
