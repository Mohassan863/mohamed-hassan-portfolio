'use client';

export default function Contact() {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
