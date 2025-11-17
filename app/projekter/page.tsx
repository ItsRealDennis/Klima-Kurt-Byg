import ProjectSlider from "@/components/projects/ProjectSlider";

const projects = [
  {
    title: "Energivenlig renovering",
    description:
      "Udskiftning af gamle materialer med moderne, isolerede og energivenlige løsninger der reducerede husets energiforbrug betydeligt",
    details:
      "Dette projekt omfattede en total renovering af et ældre enfamiliehus fra 1960'erne. Vi udskiftede alle vinduer til energivenlige 3-lags ruder, installerede ny isolering i både vægge og loft, og opgraderede varmeanlægget til en moderne varmepumpe. Resultatet var en reduktion i energiforbruget på 45% og en betydelig forbedring af indeklimaet.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    tags: ["Renovering", "Energioptimering", "Privat"],
  },
  {
    title: "Nybyg med naturvenlige materialer",
    description:
      "Byggeri hvor hovedfokus var på lav CO2 påvirkning, træelementer og holdbare materialer",
    details:
      "Et moderne enfamiliehus bygget med bæredygtighed som kernepunkt. Vi anvendte FSC-certificeret træ til al konstruktion, isolering af genbrugsmaterialer, og en grøn tagkonstruktion der håndterer regnvand. Huset er designet til næsten nul energiforbrug med solceller og optimal udnyttelse af naturligt lys.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop",
    tags: ["Nybyggeri", "Bæredygtigt", "Privat"],
  },
  {
    title: "Modernisering af ældre bygning",
    description:
      "Komplet opdatering af en bygning hvor bæredygtighed og moderne funktionalitet blev kombineret",
    details:
      "En gammel erhvervsbygning fra 1950'erne blev transformeret til moderne kontorfællesskab. Vi bevarede bygningens karakteristiske træk mens vi opgraderede til moderne standarder. Ny ventilation med varmegenvinding, LED-belysning overalt, og genanvendte materialer til indretning. Projektet vandt pris for bedste renovering i kategorien bæredygtige erhvervsbygninger.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2940&auto=format&fit=crop",
    tags: ["Modernisering", "Erhverv", "Vinderprojekt"],
  },
];

export default function ProjectsPage() {
  return <ProjectSlider projects={projects} />;
}
