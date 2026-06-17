export default function Contact() {
  return (
    <>
      <section id="contato">
        <div className="flex justify-center items-center pt-30">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Contato
          </h1>
        </div>
        <div className="flex justify-center items-center pb-30 ">
          <ul className="flex gap-6 ">
            <li>
              <a
                href="https://github.com/Juanvic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-600"
              >
                <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 018 4.58c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Github
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/juanvic-almeida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-600"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM0 24V7.5h4.98V24H0zm7.5-16.5H12V8.92h.07c.57-1.08 1.97-2.22 4.06-2.22 4.34 0 5.14 2.85 5.14 6.56V24h-4.98v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24H7.5V7.5z" />
                </svg>
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://mastodon.social/@juanvic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-600"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 4.925 0 11c0 3.676 1.922 6.944 4.937 8.918-.02.873-.192 1.58-.587 2.118-.334.465-.406.65-.44.806-.034.154-.15.514-.01.714.13.18.39.36.832.26.437-.1 1.196-.36 1.866-.9 1.14.22 2.346.34 3.606.34 6.627 0 12-4.925 12-11S18.627 0 12 0zm4.75 13.54c-.056.12-.17.256-.372.256-.18 0-.31-.11-.516-.2-.276-.12-.518-.29-.82-.27-.404.03-.64.32-1.188.32-.528 0-.81-.3-.81-.88V10.5h1.55v1.3c.09-.14.2-.3.33-.43.41-.39 1.02-.52 1.56-.52 1.056 0 1.984.64 2.212 1.84.16.86-.05 1.9-.67 2.26z" />
                </svg>
                Mastodon
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
