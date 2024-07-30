"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { createProject } from "@/app/projects/actions";
import { ProjectForm } from "@/app/types";
import { projectSchema } from "@/app/schemas";
import { toast } from "sonner";

const CreateProjectForm = () => {
  const form = useForm<ProjectForm>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values: ProjectForm) => {
    // ✅ This will be type-safe and validated.
    console.log("values", values);
    try {
      await createProject(values);
      toast.success("Project created", {
        description: "Your project has been created successfully.",
      });
    } catch (error) {
      toast.error("Error", {
        description: "Error creating the project.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="your project title" {...field} />
              </FormControl>
              <FormDescription>
                Choose a title between 1 and 100 characters long.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project"
                  className="resize-none"
                  {...field}
                  rows={10}
                />
              </FormControl>
              <FormDescription>
                You can <span>referenciate</span> other users and organizations,
                resources, links or whataever you need to mention so we can
                build a great project together.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <Button type="submit">
          Create
          <ArrowRight className="w-5" />
        </Button>
      </form>
    </Form>
  );
};

export default CreateProjectForm;
