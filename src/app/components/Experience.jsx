"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ExperienceCard = ({ role, company, duration, details, certificateImage, onClick, companyLink }) => {
  const isCertificate = certificateImage && onClick;
  const cardClasses = `bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 ${
    isCertificate ? 'border-green-500 cursor-pointer hover:shadow-xl transition-shadow duration-300' : 'border-blue-300'
  } animate-fade-in-up`;

  return (
    <div className={cardClasses} onClick={isCertificate ? onClick : undefined}>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{role}</h3>
      {companyLink ? (
        <a
          href={companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-700 hover:underline" // <--- إضافة رابط الشركة هنا
          onClick={(e) => e.stopPropagation()} // منع فتح الشهادة عند النقر على الرابط
        >
          {company}
        </a>
      ) : (
        <p className="text-lg text-gray-700">{company}</p>
      )}
      <p className="text-md text-gray-500 mb-3">{duration}</p>
      {details && <p className="text-gray-600">{details}</p>}
      {isCertificate && (
        <p className="mt-2 text-sm text-blue-600">
          <svg className="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          Click to view certificate
        </p>
      )}
    </div>
  );
};

const Experience = () => {
  const [selectedExperienceCertificate, setSelectedExperienceCertificate] = useState(null);

  const experienceItems = [
    {
      role: "Chemist",
      company: "Fatma El-Zahraa Hospital",
      companyLink: "http://fatmaelzahraahospital.com/", // <--- أضف رابط الشركة هنا
      duration: "2024 - 2025",
      details: "Utilized advanced laboratory skills to analyze, measure, and record data. Experienced in preparing buffers and reagents to exact specifications and standards. Gained extensive experience in laboratory techniques, including titrations, distillations, and chromatography.",
      certificateImage: "/certificates/Experience_Fatma_ElZahraa.jpg", // <--- أضف مسار شهادة الخبرة هنا
    },
    {
      role: "Trainee",
      company: "National Research Center",
      companyLink: "https://www.nrc.sci.eg", // <--- أضف رابط المركز هنا
      duration: "2022",
      details: "Carried out detailed investigations into the molecular biology of various enzymes. Experienced in using chromatography, spectrophotometry, and titration for qualitative and quantitative analysis.",
      certificateImage: "/certificates/Experience_NRC.jpg", // <--- أضف مسار شهادة الخبرة هنا
    },
    {
      role: "Trainee",
      company: "The Nile for Pharmaceuticals & Chemical Industries",
      companyLink: "https://nilepharma.com.eg/en/12home-ar/", // <--- أضف رابط الشركة هنا
      duration: "2021",
      details: "Experienced in using chromatography, spectrophotometry, and titration for qualitative and quantitative analysis. Conducted research to identify and develop new materials to meet customer requirements.",
      certificateImage: "/certificates/Experience_Nile_Pharm.jpg", // <--- أضف مسار شهادة الخبرة هنا
    },
    // يمكنك إضافة المزيد من عناصر الخبرة هنا
  ];

  return (
    <section id="experience" className="py-20 bg-white animate-fade-in-up delay-2400">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8"> {/* يمكنك تعديل grid-cols إذا أردت تصميم مختلف */}
          {experienceItems.map((item, index) => (
            <ExperienceCard
              key={index}
              role={item.role}
              company={item.company}
              companyLink={item.companyLink} // <--- تمرير الرابط
              duration={item.duration}
              details={item.details}
              certificateImage={item.certificateImage}
              onClick={() => setSelectedExperienceCertificate(item.certificateImage)}
            />
          ))}
        </div>
      </div>

      {/* مودال عرض شهادة الخبرة - تم تكراره من Education.js مع تغيير اسم المتغير */}
      {selectedExperienceCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedExperienceCertificate(null)}
        >
          <div
            className="relative bg-white p-2 rounded-lg max-w-3xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-gray-700 transition-colors z-10"
              onClick={() => setSelectedExperienceCertificate(null)}
            >
              &times;
            </button>
            <div
              className="relative flex-grow overflow-y-auto flex items-center justify-center"
              style={{
                marginTop: '32px',
                minHeight: '0',
              }}
            >
              <Image
                src={selectedExperienceCertificate}
                alt="Experience Certificate"
                layout="responsive"
                width={500} // استخدم القيم التي تظهِر الصورة كاملة
                height={707} // تأكد من أن هذه القيم تحافظ على نسبة الصورة الحقيقية
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;