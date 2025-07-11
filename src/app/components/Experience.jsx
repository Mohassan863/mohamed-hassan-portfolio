const ExperienceCard = ({ title, company, duration, description, skills }) => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8 border-l-4 border-blue-500 animate-fade-in-up">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-lg text-blue-700">{company}</p>
      </div>
      <span className="text-md text-gray-500 bg-blue-100 px-3 py-1 rounded-full">{duration}</span>
    </div>
    <p className="text-gray-700 leading-relaxed mb-5">{description}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {skills.map((skill, index) => (
        <span key={index} className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white animate-fade-in-up delay-1600">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Key Experience & Projects
        </h2>
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 border-b pb-4 border-gray-200">Professional Experience</h3>
          <ExperienceCard
            title="Chemist"
            company="Fatma El-Zahraa Hospital"
            duration="2024 - 2025"
            description="Utilized advanced laboratory skills to analyze, measure, and record data. Experienced in preparing buffers and reagents to exact specifications and standards. Gained extensive experience in laboratory techniques, including titrations, distillations, and chromatography."
            skills={["Titrations", "Distillations", "Chromatography", "Quality Assurance", "Data Recording", "Reagent Preparation"]}
          />
          <h3 className="text-3xl font-semibold text-gray-800 mt-16 mb-8 border-b pb-4 border-gray-200">Practical Training & Research Projects</h3>
          <ExperienceCard
            title="Trainee"
            company="National Research Center"
            duration="2023"
            description="Carried out detailed investigations into the molecular biology of various enzymes. Experienced in using chromatography, spectrophotometry, and titration for qualitative and quantitative analysis. A variety of advanced genetic techniques including DNA activation and DNA replication have been used."
            skills={["Molecular Biology", "Spectrophotometry", "DNA Activation", "DNA Replication", "Research & Analysis", "Qualitative Analysis", "Quantitative Analysis"]}
          />
          <ExperienceCard
            title="Trainee"
            company="The Nile for Pharmaceuticals & Chemical Industries"
            duration="2021"
            description="Experienced in using chromatography, spectrophotometry, and titration for qualitative and quantitative analysis. Conducted research to identify and develop new materials to meet customer requirements. Utilized laboratory instrumentation such as HPLC, GC, and UV-Vis spectrophotometers for chemical analysis."
            skills={["HPLC", "GC", "UV-Vis Spectrophotometers", "Pharmaceutical Analysis", "Material Identification", "Research", "Customer Requirements"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;