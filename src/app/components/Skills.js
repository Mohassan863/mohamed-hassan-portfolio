const SkillCard = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
    <h3 className="text-2xl font-semibold text-gray-800 mb-5 border-b pb-3 border-blue-200">{title}</h3>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-700 flex items-center">
          <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const labSkills = [
    "Chromatography (Qualitative & Quantitative)",
    "Spectrophotometry",
    "Titration",
    "Distillation",
    "Molecular Biology Techniques",
    "Reagent & Buffer Preparation"
  ];
  const instruments = [
    "High-Performance Liquid Chromatography (HPLC)",
    "Gas Chromatography (GC)",
    "UV-Vis Spectrophotometers"
  ];
  const professionalSkills = [
    "Negotiation",
    "Critical Thinking",
    "Creativity",
    "Management Skills",
    "Leadership",
    "Digital Marketing",
  ];
  const frontEndSkills = [
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "React.js",
    "Next.js (Basic)",
    "Tailwind CSS",
    "Git & GitHub"
  ];
  const languages = [
    "Arabic: Native",
    "English: Good (Professional Working Proficiency - EF SET B2 Certified)" // تأكيد شهادة EF SET
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 animate-fade-in-up delay-1400">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Skills & Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <SkillCard title="Analytical & Laboratory Techniques" skills={labSkills} />
          <SkillCard title="Instrumentation" skills={instruments} />
          <SkillCard title="Professional Skills" skills={professionalSkills} />
          <SkillCard title="Front-end Development" skills={frontEndSkills} />
          <SkillCard title="Languages" skills={languages} />
        </div>
      </div>
    </section>
  );
};

export default Skills;