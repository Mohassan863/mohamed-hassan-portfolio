const EducationCard = ({ degree, institution, duration, details }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-green-500 animate-fade-in-up">
    <h3 className="text-xl font-bold text-gray-900 mb-1">{degree}</h3>
    <p className="text-lg text-gray-700">{institution}</p>
    <p className="text-md text-gray-500 mb-3">{duration}</p>
    {details && <p className="text-gray-600">{details}</p>}
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100 animate-fade-in-up delay-1800">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Education & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3 border-gray-300">Education</h3>
            <EducationCard
              degree="Diploma in Biochemistry"
              institution="Beni Suef University"
              duration="2022"
            />
            <EducationCard
              degree="BSc in Chemistry & Zoology"
              institution="Aswan University, Faculty of Science"
              duration="2016 - 2020"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3 border-gray-300">Professional Certifications</h3>
            <EducationCard
              degree="QCTR-100: Fundamentals of Quality Control course"
              institution="The American University in Cairo"
              duration="2024"
            />
            <EducationCard
              degree="OSHA General Industry course"
              institution="Egyptian Syndicate of Scientific Professions"
              duration="2024"
            />
            <EducationCard
              degree="OSHA Construction course"
              institution="Egyptian Syndicate of Scientific Professions"
              duration="2024"
            />
            <EducationCard
              degree="Marketing Professional Course"
              institution="American Chamber of Commerce in Egypt"
              duration="2022"
            />
            <EducationCard
              degree="EF SET English Certificate B2 (Upper-Intermediate)"
              institution="EF Standard English Test"
              duration="2024"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;