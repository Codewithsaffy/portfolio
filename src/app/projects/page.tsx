import Filter from '@/components/smallComp/Filter';
import ProjectCard from '@/components/smallComp/ProjectCard';
import projects from '@/data/projects';
import { ProjectType } from '../../../types';

// Metadata for SEO and social sharing
export const metadata = {
  title: 'Projects | My Portfolio',
  description: 'Explore all my projects',
  openGraph: {
    title: 'Projects | My Portfolio',
    description: 'Explore all my projects',
    url: 'https://myportfolio.com/projects', // Replace with your actual URL
    image: '/og-image.jpg', // Replace with your image path
  },
};

const ProjectPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter: string }>;
}) => {
  const { filter } = await searchParams;
  const projectsFilterData: ProjectType[] = filter
    ? projects.filter((pro) => pro.tags.includes(filter))
    : projects;

  return (
    <main className="dark:bg-dark-Background w-full min-h-screen overflow-hidden dark:text-dark-Text text-light-Text bg-white dark:bg-grid-white/[0.05] bg-grid-dark-Background/[0.2] relative">
      {/* Main container with centered content and responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36">
        {/* Title and Filter container */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-0">
            All my projects
          </h1>
          <Filter />
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsFilterData.length > 0 ? (
            projectsFilterData.map((p) => (
              <ProjectCard data={p} key={p.name.trim()} />
            ))
          ) : (
            <p className="text-center col-span-full text-lg">
              No projects found with the selected tag.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;