import SectionWelcome from "../Home/Welcome";
import SectionServices from "../Home/Services";
import SectionProjects from "../Home/Projects";
import SectionAvis from "../Home/Avis";
import SectionTarifs from "../Home/Tarifs";

function HomeContent() {
  return (
    <>
      <SectionWelcome />
      <SectionServices />
      <SectionProjects />
      <SectionAvis />
      <SectionTarifs />
    </>
  );
}

export default HomeContent;
