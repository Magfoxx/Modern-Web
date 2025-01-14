import SectionWelcome from "../Home/SectionWelcome";
import SectionServices from "../Home/SectionServices";
import SectionProjects from "../Home/SectionsProjects";
import SectionAvis from "../Home/SectionAvis";
import SectionTarifs from "../Home/SectionTarifs";

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
