import InnerPageHero from "@/components/ui/InnerPageHero";
import ProjectsPortfolioSection from '@/components/projectsmain/ProjectsPortfolioSection'

const ProjectsDetails = ({ params }) => {
  const { slug } = params;

  return (
    <>
      <InnerPageHero
        title="Smart Digital Business Solutionsr"
        subtitle="A reputed consultant agency we've spent 13+ year's"
        hasOffset={true}
      />
      <ProjectsPortfolioSection slug={slug} />
    </>
  )
}

export default ProjectsDetails