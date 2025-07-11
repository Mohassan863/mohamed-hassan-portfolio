
'use client';

const certificates = [
  "certificate1.jpg",
  "certificate2.jpg",
  "certificate3.jpg"
];

export default function Certificates() {
  return (
    <section className="p-10 bg-white">
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certificates.map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt={`Certificate ${index + 1}`}
            className="w-full h-60 object-cover rounded shadow hover:scale-105 transition cursor-pointer"
            onClick={() => window.open(`/images/${img}`, '_blank')}
          />
        ))}
      </div>
    </section>
  );
}