// app/page.js (Example structure)
import Head from 'next/head';
// import Education from './components/Education'; // You can remove this line
import EducationDegrees from './components/EducationDegrees'; // <--- Import the new component
import ProfessionalCertifications from './components/ProfessionalCertifications'; // <--- Import the new component
import Experience from './components/Experience'; // Assuming you have this or will add it from my previous response
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
// ... import other components (Hero, About, etc.)

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohamed Hassan - Chemist Portfolio</title>
        <meta name="description" content="Mohamed Hassan's professional portfolio showcasing chemistry and quality control skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Render your other sections here */}
         <Hero />
         <About />

        {/* Render the new Education sections */}
        <EducationDegrees />
        <ProfessionalCertifications />

        {/* Render your Experience section (from previous step) */}
        <Experience />

        {/* Render other sections like Skills, Contact etc. */}
         <Skills />
         <Footer />
     
      </main>
    </>
  );
}