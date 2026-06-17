export default function Contact() {
  return (
    <>
      <section id="contato">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Contato
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
            <li>Bluesky</li>
            <li>Mastodon</li>
          </ul>
        </div>
      </section>
    </>
  );
}
