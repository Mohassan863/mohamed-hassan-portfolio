import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* خلفية متقدمة مع أنيميشن */}
      <div className="absolute inset-0 bg-animated-gradient z-0"></div>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/path/to/subtle-pattern.png')" /* يمكنك إضافة نمط خفيف هنا */ }}></div>

      {/* المحتوى الرئيسي فوق الخلفية */}
      <div className="relative z-10 flex flex-col items-center p-8 max-w-5xl mx-auto backdrop-blur-sm bg-black bg-opacity-20 rounded-xl shadow-2xl border border-gray-700 animate-fade-in-up">
        {/* الصورة الشخصية بتأثير ثلاثي الأبعاد خفيف */}
        <div className="w-56 h-56 relative mb-8 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out animate-fade-in delay-200">
          <Image
            src="/profile.jpg" // تأكد أن اسم الصورة في مجلد public هو profile.jpg
            alt="Mohamed Hassan"
            layout="fill"
            objectFit="cover"
            className="filter grayscale hover:grayscale-0 transition-all duration-700" // تأثير أبيض وأسود عند التحويم
          />
        </div>

        {/* الاسم والعنوان الرئيسي بتأثير نصي مميز */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 animate-pulse-light animate-fade-in-left delay-400">
          Mohamed Hassan
        </h1>
        <p className="text-3xl md:text-4xl font-light text-blue-300 mb-10 tracking-wide animate-fade-in-right delay-600">
          Quality Control Chemist
        </p>

        {/* الوصف المختصر بتصميم أنيق */}
        <p className="max-w-4xl text-xl md:text-2xl text-gray-200 leading-relaxed font-light italic animate-fade-in-up delay-800">
          "Analytical expertise in laboratory testing, analysis, and interpretation to ensure uncompromising quality standards."
        </p>

        {/* زر أو عنصر تفاعلي (مثال) */}
        <div className="mt-12 animate-fade-in-up delay-1000">
          <a
            href="#contact" // يمكن تغيير هذا الرابط ليتناسب مع قسم التواصل
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore My Profile
            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;