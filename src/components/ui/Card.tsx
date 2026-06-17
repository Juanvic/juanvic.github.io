import Button from "../ui/Button";

interface CardProps {
  imageSrc?: string;
  title: string;
  className?: string;
  repoUrl?: string;
  projectUrl?: string;
}

export const Card = ({
  imageSrc = "",
  title,
  className = "",
  repoUrl,
  projectUrl,
}: CardProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex w-full max-w-85 flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
            <div className="aspect-4/3 w-full">
              <img
                className="h-full w-full object-cover"
                src={imageSrc}
                alt={title}
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-4 px-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-3 text-center dark:border-gray-700">
          <div className="flex items-center justify-center gap-3">
            {repoUrl && (
              <Button
                href={repoUrl}
                target="_blank"
                variant="dark"
                startIcon={
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 018 4.58c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                }
              >
                Repositório
              </Button>
            )}

            {projectUrl && (
              <Button href={projectUrl} target="_blank" variant="primary">
                Ver Projeto
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
