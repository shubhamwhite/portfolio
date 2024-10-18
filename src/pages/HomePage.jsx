import NavBarComponent from "../components/NavBarComponent"
import HeroComponent from "../components/HeroComponent"
import DownloadComponent from "../components/DownlodComponent"
import ProjectComponent from "../components/ProjectComponent"
import MercuryComponent from "../components/MercuryComponent"
import SkillComponent from "../components/SkillComponent"
import ContectComponent from "../components/ContectComponent"
import AboutComponent from "../components/AboutComponent"

const HomePage = () => {
  return (
    <div>
        <NavBarComponent/>
        <HeroComponent/>
        <DownloadComponent/>
        <SkillComponent/>
        <MercuryComponent/>
        <ProjectComponent/>
        <ContectComponent/>
        <AboutComponent/>
    </div>
  )
}

export default HomePage