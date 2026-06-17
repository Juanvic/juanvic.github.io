import type { JSX } from "react/jsx-runtime";
import { Card } from "../components/ui/Card";

type Project = {
  title: string;
  imageSrc?: string;
  caption?: string;
  repoUrl?: string;
  projectUrl?: string;
};

export default function Skill(): JSX.Element {
  const projects: Project[] = [
    {
      title: "Portifólio",
      imageSrc:
        "https://socialify.git.ci/juanvic/juanvic.github.io/image?font=Raleway&language=1&name=1&owner=1&pattern=Transparent&theme=Auto",
      caption: "Prévia Portifólio",
      repoUrl: "https://github.com/juanvic/juanvic.github.io",
      projectUrl: "https://juanvic.github.io/",
    },
    {
      title: "Temcard",
      imageSrc:
        "https://socialify.git.ci/juanvic/temcard/image?description=1&font=Jost&language=1&logo=https%3A%2F%2Fstyles.redditmedia.com%2Ft5_g8mrl%2Fstyles%2FcommunityIcon_ztfjk0dqw9mc1.png&name=1&owner=1&pattern=Transparent&theme=Auto",
      caption: "Prévia Temcard",
      repoUrl: "https://github.com/juanvic/temcard",
      projectUrl: "https://juanvic.github.io/temcard",
    },
    {
      title: "Hall of fame",
      imageSrc: "https://socialify.git.ci/juanvic/halloffame/image?custom_language=React&description=1&font=Inter&language=1&logo=https%3A%2F%2Fgithub.com%2FJuanvic%2Fhalloffame%2Fblob%2Fmain%2Fsrc%2Fassets%2Ficons%2Fandroid-chrome-512x512.png%3Fraw%3Dtrue&name=1&owner=1&pattern=Formal+Invitation&theme=Auto",
      caption: "Prévia do Projeto",
      repoUrl: "https://github.com/juanvic/halloffame",
      projectUrl: "https://juanvic.github.io/halloffame",
    },
    {
      title: "Cover-card",
      imageSrc: "https://socialify.git.ci/juanvic/cover-card/image?language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F15617091%3Fv%3D4&name=1&owner=1&pattern=Transparent&theme=Light",
      caption: "Prévia do Projeto",
      repoUrl: "https://github.com/juanvic/cover-card",
      projectUrl: "https://juanvic.github.io/cover-card",
    },
    {
      title: "TemRecompensa",
      imageSrc: "https://socialify.git.ci/juanvic/temrecompensa/image?description=1&language=1&logo=https%3A%2F%2Fgithub.com%2FJuanvic%2FTemRecompensa%2Fraw%2Fmaster%2Fassets%2Ficonr.png&name=1&owner=1&pattern=Transparent&theme=Auto",
      caption: "Prévia do Projeto",
      repoUrl: "https://github.com/juanvic/temrecompensa",
      projectUrl: "",
    },
    {
      title: "Palpad",
      imageSrc: "https://socialify.git.ci/Juanvic/PalPad/image?custom_language=React&description=1&font=Raleway&issues=1&language=1&logo=https%3A%2F%2Fgithub.com%2FJuanvic%2FPalPad%2Fraw%2Fmain%2Fassets%2Ficon.png&name=1&owner=1&pattern=Transparent&stargazers=1&theme=Auto",
      caption: "Prévia do Projeto",
      repoUrl: "https://github.com/juanvic/palpad",
      projectUrl: "",
    },
    {
      title: "SaveFriend-Spring",
      imageSrc: "https://socialify.git.ci/Juanvic/SaveFriend-Spring/image?custom_language=Spring+Boot&font=JetBrains+Mono&language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F15617091%3Fv%3D4&name=1&owner=1&pattern=Transparent&theme=Auto",
      caption: "Prévia do Projeto",
      repoUrl: "https://github.com/juanvic/SaveFriend-Spring",
      projectUrl: "",
    },
    {
      title: "SaveFriend - Angular",
      imageSrc: "https://socialify.git.ci/Juanvic/SaveFriend-Frontend/image?custom_language=Angular&description=1&language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F15617091%3Fv%3D4&name=1&owner=1&pattern=Transparent&theme=Auto",
      caption: "Prévia do Projeto",
      repoUrl: "https://github.com/juanvic/SaveFriend-Frontend",
      projectUrl: "",
    },
    // {
    //   title: "Projeto Exemplo",
    //   imageSrc: "https://via.placeholder.com/640x360.png?text=Projeto+Exemplo",
    //   caption: "Prévia do Projeto",
    //   repoUrl: "https://github.com/juanvic/projeto-exemplo",
    //   projectUrl: "https://juanvic.github.io/projeto-exemplo",
    // },
  ];

  return (
    <>
      <section id="skills">
        <div className="flex flex-col justify-center items-center pt-30">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Habilidades &amp; Projetos
          </h1>
          <div className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
            <ul className="flex gap-6 ">
              <li>Javascript</li>
              <li>Java</li>
              <li>SQL</li>
              <li>Shell Script</li>
              <li>React</li>
              <li>React Native</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Selenium</li>
              <li>JUnit</li>
            </ul>
          </div>
          <p>Confira os projetos atuais!</p>
        </div>
      </section>
      <section id="projetos" className="px-4 py-8 sm:px-6 lg:px-8 pt-30">
        <div className="mx-auto grid max-w-290 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card
              key={i}
              title={p.title}
              imageSrc={p.imageSrc}
              repoUrl={p.repoUrl}
              projectUrl={p.projectUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}
