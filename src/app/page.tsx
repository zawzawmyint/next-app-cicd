import Workflows from "@/components/mdxs/cicd-workflows.mdx";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Nextjs CICD</h1>
      <p className="text-lg italic border-l-8 border-l-primary pl-4 bg-primary/5 p-2 rounded">
        Check out my Next CI/CD setup with GitHub Actions and Vercel deployment.
      </p>

      <div className=" p-4 rounded-2xl shadow hover:shadow-lg shadow-primary/20 transition-all duration-500 bg-gray-100">
        <ScrollArea className="h-[400px] max-w-4xl w-full">
          <Workflows />
        </ScrollArea>
      </div>
      <Button variant={"link"} asChild>
        <Link
          href={
            "https://github.com/zawzawmyint/next-app-cicd/blob/master/.github/workflows/deploy.yml"
          }
          target="_blank"
        >
          <Github />
          View CI/CD workflow configuration on GitHub
        </Link>
      </Button>
    </div>
  );
}
