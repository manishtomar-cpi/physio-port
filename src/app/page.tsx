"use client";
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import SkillsHighlight from '../components/SkillsHighlight';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Availability from '../components/Availability';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow p-8 sm:p-20 ml-0 sm:ml-64 pt-16 sm:pt-0">
        <main className="flex flex-col gap-16">
          {/* Introduction Section */}
          <section id="introduction">
            <Introduction />
          </section>

          {/* Skills Highlight Section */}
          <section id="skills-highlight">
            <SkillsHighlight />
          </section>

          {/* Work Experience Section */}
          <section id="work-experience">
            <WorkExperience />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <Skills />
          </section>

          {/* Education Section */}
          <section id="education">
            <Education />
          </section>

          {/* Availability Section */}
          <section id="availability">
            <Availability />
          </section>

          {/* Contact Form Section */}
          <section id="contact">
            <ContactForm />
          </section>
        </main>
      </div>
    </div>
  );
}
