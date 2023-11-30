import postGsheets from "@/app/lib/postGsheets";
import Link from "next/link";

export default async function Page() {
  // const res = await postGsheets("Test!A:F");
  return (
    <main className="flex min-h-screen p-8 md:p-24">
      <div className="max-w-5xl w-full font-mono">
        <h1 className="text-4xl w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">Form Page</h1>
        <p className="p-4">
          submit status: 
          {/* {res} */}
        </p>
        <div className="p-4 mt-4 text-center">
          <a 
            href="https://docs.google.com/spreadsheets/d/1EXP7L9ZZJ5pDEAlYTrkDTgfcnVqdJieqPxCFKpWrJkY/edit#gid=0"
            className="group rounded-lg border hover:border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Sheet
          </a>
        </div>
        <div className="p-4 mt-4 text-center">
          <Link 
            href="/pages/saving"
            className="group rounded-lg border hover:border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            Go to Summary
          </Link>
        </div>
      </div>
    </main>
  );
}