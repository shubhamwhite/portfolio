import NavBarComponent from "../components/NavBarComponent"
import HeroComponent from "../components/AboutComponent"
import AboutComponent from "../components/HeroComponent"
import ProjectComponent from "../components/ProjectComponent"
import MercuryComponent from "../components/MercuryComponent"
import SkillComponent from "../components/SkillComponent"

const HomePage = () => {
  return (
    <div>
        <NavBarComponent/>
        <AboutComponent/>
        <HeroComponent/>
        <MercuryComponent/>
        <SkillComponent/>
        <ProjectComponent/>
    </div>
  )
}

export default HomePage