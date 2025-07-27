// app/components/Footer.js
import React from 'react';
// لا نحتاج لـ 'next/link' هنا لأن الروابط خارجية

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 animate-fade-in-up delay-2000">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-10 leading-relaxed">
          I am currently seeking new opportunities in quality control and chemistry, as well as entry-level Front-end Developer roles. If my skills and experience align with your team's needs, I would be delighted to hear from you.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-10">
          <a
            href="mailto:mohassan863@outlook.com"
            className="text-lg text-blue-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V5"></path></svg>
            mohassan863@outlook.com
          </a>
          <span className="hidden md:block text-gray-500">|</span>
          <p className="text-lg text-blue-300 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
            +966 59 328 8276
          </p>
          <span className="hidden md:block text-gray-500">|</span>
          <p className="text-lg text-blue-300 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
            +201032932198
          </p>
          <span className="hidden md:block text-gray-500">|</span>
          {/* رابط لينكدإن الحالي */}
          <a
            href="https://www.linkedin.com/in/mohamed-hassan-22b15a1a6/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          <span className="hidden md:block text-gray-500">|</span> {/* فاصل للترتيب */}

          {/* رابط فيس بوك جديد */}
          <a
            href="https://www.facebook.com/profile.php?id=100007124113209&mibextid=ZbWKwL" // <--- غيّر هذا الرابط إلى رابط ملفك الشخصي على فيس بوك
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
            aria-label="Facebook Profile"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22c4.781-.75 8.438-4.887 8.438-9.878Z" clipRule="evenodd" />
            </svg>
            Facebook
          </a>
          <span className="hidden md:block text-gray-500">|</span> {/* فاصل للترتيب */}

          {/* رابط إنستغرام جديد */}
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Famrhassan863%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExUnJnYlVYZmk5cEoza0tJcQEeaXU2xnB3DEyL99K8MVtqR8PXNacoAqB92YwBPm9snU1dhdX8-G5oHUgA0wo_aem_jD-zpyuKYYddUmHER9EZig&h=AT1h2ICfMXA4XoaLxEVtkgGCiST-UV68DiRID2fXknxMrn-9f15eaFc8SVAXoqhtOB5vX4JDyKgX8O_ImexhMeEhjnRji8aOO5oDw4zwI9GLzTiEgBW83qVYx4qr_NS3nJR6JOCSbchJA5MAUS7E" // <--- غيّر هذا الرابط إلى رابط ملفك الشخصي على إنستغرام
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
            aria-label="Instagram Profile"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.714.01 3.657.049.92.04 1.75.178 2.443.461.666.28 1.21.604 1.702 1.096.5.492.823 1.035 1.103 1.7.281.693.42 1.523.46 2.444.04 1.0.05 1.273.05 3.243s-.01 2.245-.05 3.243c-.04.92-.18 1.75-.46 2.444-.28.666-.604 1.21-1.096 1.7-.492.5-1.035.823-1.7.46-.693.28-1.523.42-2.444.46-1.0.04-1.273.05-3.243.05s-2.245-.01-3.243-.05c-.92-.04-1.75-.18-2.444-.46-.666-.28-1.21-.604-1.7-.46-.5-.492-.823-1.035-1.103-1.7-.28-.693-.42-1.523-.46-2.444-.04-1.0-.05-1.273-.05-3.243s.01-2.245.05-3.243c.04-.92.18-1.75.46-2.444.28-.666.604-1.21 1.096-1.7.492-.5 1.035-.823 1.702-1.103.693-.281 1.523-.42 2.444-.46 1.0-.04 1.273-.05 3.243-.05Zm-1.05 6.945a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 8.295c-1.925 0-3.49 1.564-3.49 3.49s1.564 3.49 3.49 3.49 3.49-1.564 3.49-3.49-1.564-3.49-3.49-3.49ZM12 14.154c-1.18 0-2.138-.958-2.138-2.138S10.82 9.878 12 9.878s2.138.958 2.138 2.138-1.079 2.138-2.138 2.138Z" clipRule="evenodd" />
            </svg>
            Instagram
          </a>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Mohamed Hassan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;