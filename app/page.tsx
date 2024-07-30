import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Index() {
  return (
    <section className=" w-full h-full flex flex-col gap-20 items-center max-w-7xl px-8">
      <div className="max-w-4xl flex md:flex-row flex-col gap-2 items-center">
        <h1 className="font-bold md:text-5xl text-2xl text-black text-center">
          A <span className="bg-green-bright">creative</span>{" "}
          <span className="bg-green-bright">team</span> ready to
          <span className="bg-green-bright"> work</span> on any scale
        </h1>
        <img src="/Group.svg" className="w-64 h-64" />
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        <Card
          className="bg-green-bright hover:bg-green-bright/70
    "
        >
          <Link href={"/projects/create"}>
            <CardHeader>
              <CardTitle className="md:text-2xl text-xl underline">
                Start creating now
              </CardTitle>
              <CardContent className="flex items-center gap-4 p-0">
                <CardDescription className="text-base text-black">
                  we’ll help you put your best ideas into action
                </CardDescription>
                <ArrowRight className="w-12 h-12" />
              </CardContent>
            </CardHeader>
          </Link>
        </Card>

        <Card className="hover:bg-black/10">
          <Link href={"/projects"}>
            <CardHeader>
              <CardTitle className="text-black md:text-2xl text-xl underline">
                View my projects
              </CardTitle>
              <CardContent className="flex items-center gap-4 p-0">
                <CardDescription className="text-base text-black">
                  See all the projects we have worked on
                </CardDescription>
                <ArrowRight className="w-12 h-12 text-black" />
              </CardContent>
            </CardHeader>
          </Link>
        </Card>
      </div>
    </section>
  );
}
