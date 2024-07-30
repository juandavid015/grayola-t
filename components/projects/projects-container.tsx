"use client";
import { Project } from "@/app/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Combobox } from "../ui/combobox";
import DropdownOptions from "./dropdown-options";
import Link from "next/link";
// import { ArrowRight } from "lucide-react";

interface ProjectsContainerProps {
  projects: Project[] | null;
}
const ProjectsContainer = ({ projects }: ProjectsContainerProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {projects?.map((project) => (
        <Card key={project.id} className="w-64 relative">
          <CardHeader>
            <Link
              href={`/projects/${project.id}`}
              className="flex flex-wrap underline"
            >
              <CardTitle className="text-xl">{project.title}</CardTitle>
              {/* <ArrowRight className="w-8 -rotate-45"/> */}
            </Link>
            <DropdownOptions projectID={project.id} />
          </CardHeader>
          <CardContent>
            <CardDescription className="line-clamp-5">
              {project.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 items-start">
            <h4 className="text-sm text-gray-500">Owner:</h4>
            <p className="truncate text-sm">{project.user.email}</p>
            {/* <div className="flex items-center space-x-4">
              <p className="text-sm ">Designers</p>
              <Combobox />
            </div>  */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsContainer;
