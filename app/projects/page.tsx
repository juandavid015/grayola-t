import CardCreation from "@/components/projects/card-creation";
import ProjectsContainer from "@/components/projects/projects-container";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*, user:users(email)");
  // console.log(projects)
  return (
    <div
      className="w-full flex md:flex-row flex-col md:items-start items-center gap-8 max-w-7xl h-full
    px-8"
    >
      <CardCreation />
      <ProjectsContainer projects={projects} />
    </div>
  );
}
