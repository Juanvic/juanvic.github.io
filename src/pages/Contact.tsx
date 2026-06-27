import { CONTACT_LINKS } from "../constants/contactsData.ts";

export default function Contact(): React.JSX.Element {
  return (
    <>
      <section id="contato">
        <div className="flex justify-center items-center pt-30">
          <h1 className="text-3xl font-bold text-amber-50 dark:text-white mb-3">
            Contato
          </h1>
        </div>
        
        <div className="flex justify-center items-center pb-30">
          <ul className="flex gap-6">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox={link.svgViewBox}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={link.svgPath} />
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}