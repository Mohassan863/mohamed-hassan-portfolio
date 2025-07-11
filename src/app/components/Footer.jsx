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
          {/* ضع رابط ملفك على لينكدإن هنا */}
          <a
            href="https://www.linkedin.com/in/mohamed-hassan-22b15a1a6/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
             // **تأكد من استبدال هذا الرابط برابط حسابك على LinkedIn**
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
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