import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education"; // استيراد مكون التعليم الجديد
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education /> {/* إضافة قسم التعليم هنا */}
      <Footer />
    </main>
  );
}