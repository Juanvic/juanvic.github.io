// Atributos de um Projeto
export type Project = {
  title: string;
  imageSrc?: string;
  caption?: string;
  repoUrl?: string;
  projectUrl?: string;
};

// Array de dados dos projetos
export const projects: Project[] = [
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
];

// Array de habilidades = linguagens + frameworks
export const technologies: string[] = [
  "Javascript",
  "Java",
  "SQL",
  "Shell Script",
  "React",
  "React Native",
  "Bootstrap",
  "Tailwind CSS",
  "Selenium",
  "JUnit",
];