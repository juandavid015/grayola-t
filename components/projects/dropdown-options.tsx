import {
  // Mail,
  // MessageSquare,
  // PlusCircle,
  // UserPlus,
  Ellipsis,
  Delete,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteProject } from "@/app/projects/actions";
import { toast } from "sonner";

interface DropdownProjectOptionsProps {
  projectID: string;
}

const DropdownProjectOptions = ({ projectID }: DropdownProjectOptionsProps) => {
  const handleProjectDelete = async () => {
    // toast("Event has been created", {
    //   description: "Sunday, December 03, 2023 at 9:00 AM",
    // })
    // await deleteProject(projectID);
    try {
      await deleteProject(projectID);
      toast.success("Success", {
        description: "The project has been deleted successfully!",
      });
    } catch (error) {
      toast.error("Error", {
        description: "The project could not be deleted.",
      });
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="w-fit h-fit absolute right-2 top-2"
      >
        <Button variant="outline" className="p-1">
          <Ellipsis className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="cursor-pointer">
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="cursor-pointer">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup> */}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-[#ff2427] cursor-pointer"
          onClick={handleProjectDelete}
        >
          <Delete className="mr-2 h-4 w-4 " />
          <span>Delete</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownProjectOptions;
