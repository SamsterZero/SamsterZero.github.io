// components/Contact.js
export default function Contact() {
  const contactLinks = [
    {
      label: "Email Me",
      href: "mailto:vinaymhatre@gmail.com",
      className: "bg-red-500 hover:bg-red-600"
    },
    {
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/vinay-mhatre-401595206",
      className: "bg-blue-600 hover:bg-blue-700",
      target: "_blank"
    },
    {
        label:"Github",
        href: "https://github.com/SamsterZero",
        className: "bg-black hover:bg-neutral-600",
        target: "_blank"
    },
    {
      label: "X",
      href: "https://x.com/Samster_Zero", 
      className: "bg-black hover:bg-neutral-600",
      target: "_blank"
    },
  ];

  return (
    <section id="contact" className="container mx-auto rounded-xl p-8 text-center bg-neutral-800">
      <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
        📫 Contact Me
      </h2>
      
      <div className="flex justify-center gap-4 flex-wrap">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.target}
            className={`${link.className} text-white px-5 py-2 rounded-lg font-semibold transition`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}