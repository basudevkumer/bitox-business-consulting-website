import InnerPageHero from "@/components/ui/InnerPageHero";
import ProjectsPortfolioSection from '@/components/projectsmain/ProjectsPortfolioSection'

const Projects = () => {
  return (
    <>
      <InnerPageHero
        title="What We've Achieved Together"
        subtitle="A reputed consultant agency we've spent 13+ year's"
        hasOffset={true}
      />
      <ProjectsPortfolioSection/>
    </>
  )
}

export default Projects