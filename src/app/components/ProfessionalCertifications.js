"use client";
// app/components/ProfessionalCertifications.js
import React, { useState } from 'react';
import Image from 'next/image';

// Reusing the same EducationCard component structure for certifications
const CertificateCard = ({ degree, institution, duration, details, certificateImage, onClick, institutionLink }) => {
  const isCertificate = certificateImage && onClick;
  const cardClasses = `bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 ${
    isCertificate ? 'border-green-500 cursor-pointer hover:shadow-xl transition-shadow duration-300' : 'border-blue-300'
  } animate-fade-in-up`;

  return (
    <div className={cardClasses} onClick={isCertificate ? onClick : undefined}>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{degree}</h3>
      {institutionLink ? (
        <a
          href={institutionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-700 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {institution}
        </a>
      ) : (
        <p className="text-lg text-gray-700">{institution}</p>
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


const ProfessionalCertifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificationItems = [
    {
      degree: "EF SET English Certificate B2 (Upper-Intermediate)",
      institution: "EF Standard English Test",
      institutionLink: "https://www.efset.org/",
      duration: "2025",
      certificateImage: "/certificates/EF_SET.jpg",
    },
    {
      degree: "OSHA General Industry course",
      institution: "Egyptian Syndicate of Scientific Professions",
      institutionLink: "https://www.facebook.com/EsspEgypt/",
      duration: "2024",
      certificateImage: "/certificates/OSHA_General_Industry.jpg",
    },
    {
      degree: "OSHA Construction course",
      institution: "Egyptian Syndicate of Scientific Professions",
      institutionLink: "https://www.facebook.com/EsspEgypt/",
      duration: "2024",
      certificateImage: "/certificates/OSHA_Construction.jpg",
    },
    {
      degree: "QCTR-100: Fundamentals of Quality Control course",
      institution: "The American University in Cairo",
      institutionLink: "https://www.aucegypt.edu/",
      duration: "2022",
      certificateImage: "/certificates/QCTR-100.jpg",
    },
    
    {
      degree: "Marketing Professional Course",
      institution: "American Chamber of Commerce in Egypt",
      institutionLink: "https://www.amcham.org.eg/",
      duration: "2022",
      certificateImage: "/certificates/Marketing_Professional.jpg",
    },
    
  ];

  return (
    <section id="professional-certifications" className="py-20 bg-gray-100 animate-fade-in-up delay-1800">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Professional Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Can be 1 or 2 columns based on preference */}
          {certificationItems.map((cert, index) => (
            <CertificateCard
              key={index}
              degree={cert.degree}
              institution={cert.institution}
              institutionLink={cert.institutionLink}
              duration={cert.duration}
              certificateImage={cert.certificateImage}
              onClick={() => setSelectedCertificate(cert.certificateImage)}
            />
          ))}
        </div>
      </div>

      {/* Modal for displaying professional certificates */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative bg-white p-2 rounded-lg max-w-3xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-gray-700 transition-colors z-10"
              onClick={() => setSelectedCertificate(null)}
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
                src={selectedCertificate}
                alt="Professional Certificate"
                layout="responsive"
                width={500}
                height={707}
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

export default ProfessionalCertifications;