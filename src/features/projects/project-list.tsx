import type {ProjectCardProps, ProjectCategory} from './project-card'



import {projects} from '@/data/projects'



import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'



import {ProjectCard} from './project-card'





export function ProjectList() {
  const categories: ProjectCategory[] = ['Dashboard', 'Technology', 'Wallet']

  return (
    <Tabs className="mb-8" defaultValue="All">
      <TabsList className="flex h-auto flex-wrap justify-start gap-2 p-0">
        <TabTriggerButton id="All" label="All Projects" />
        {categories.map((category, i) => (
          <TabTriggerButton
            key={`${i}-${category}-tab`}
            id={category}
            label={category}
          />
        ))}
      </TabsList>
      <ProjectListContent id="All" projects={projects} />
      {categories.map((category, i) => (
        <ProjectListContent
          key={`${i}-${category}-tab-content`}
          id={category}
          projects={projects.filter((project) => project.category === category)}
        />
      ))}
    </Tabs>
  )
}

const TabTriggerButton = ({id, label}: {id: string; label: string}) => {
  return (
    <TabsTrigger
      value={id}
      className="rounded-md bg-gray-100 px-4 py-2 text-[14px] font-medium text-gray-700 transition-colors hover:bg-gray-200 data-[state=active]:bg-verus-blue data-[state=active]:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 data-[state=active]:dark:bg-blue-700 data-[state=active]:dark:text-white"
    >
      {label}
    </TabsTrigger>
  )
}

const ProjectListContent = ({
  id,
  projects,
}: {
  id: string
  projects: ProjectCardProps[]
}) => {
  return (
    <TabsContent
      value={id}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          url={project.url}
          category={project.category}
        />
      ))}
    </TabsContent>
  )
}