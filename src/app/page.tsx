import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-4">
      <h1 className="text-2xl font-bold">Welcome to Nextjs CICD</h1>
      <p className="text-lg italic border-l-8 border-l-primary pl-4 bg-gray-100 p-2 rounded">
        Check out my Next CI/CD setup with GitHub Actions and Vercel deployment.
      </p>
      <Button variant={"link"} asChild>
        <Link
          href={
            "https://github.com/zawzawmyint/next-app-cicd/blob/master/.github/workflows/deploy.yml"
          }
          target="_blank"
        >
          <Github />
          View CI/CD workflow configuration
        </Link>
      </Button>
    </div>
  );
}
