import EditProjectForm from "@/components/projects/project/form";
import { getProject } from "../actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Info } from "lucide-react";

const ProjectDetailsPage = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);
  // console.log(project);
  return (
    <div
      className="border rounded-md 
    p-8 w-full h-full max-w-7xl flex flex-col gap-8 flex-grow w-full"
    >
      <EditProjectForm project={project} />
      <Card className="flex gap-3 items-center justify-center p-2 bg-neutral-200">
        <CardHeader className="p-0">
          <CardTitle className="text-sm font-bold items-center flex gap-2">
            <Info className="w-5" />
            <span>Note</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <CardDescription className="p-0 text-black">
            Currently the <strong>update permissions</strong> are only available
            to the <strong>project manager.</strong> This means if you are a designer or client
            an <strong>error</strong> will be thrown when you try to update the
            project.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetailsPage;
