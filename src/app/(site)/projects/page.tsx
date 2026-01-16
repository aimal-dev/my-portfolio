import { getProjects } from "@/lib/actions";
import ProjectsList from "@/components/sections/ProjectsList";


export default async function Page() {
  const projects = await getProjects();
  return <ProjectsList projects={projects} />;
}
