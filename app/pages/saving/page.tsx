import { getGoogleSheetsData } from "@/app/lib/gsheets"
import Link from "next/link";

export default async function Page() {

  const titles: string[] = ['Yuya','Haruna','Total Share','Only Y','Only H'];
  const googleSheetData = await getGoogleSheetsData('Summary_Nov23!B2:B6');

  return (
    <main className="flex min-h-screen p-8 md:p-24">
      <div className="max-w-5xl w-full font-mono">
        <h1 className="text-4xl w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Saving Summary Data
        </h1>
        <h2 className="text-2xl bg-gradient-to-b from-zinc-200 py-4 md:p-4 mt-4 backdrop-blur-2xl">November 2023</h2>
        <div className="grid grid-cols-1 gap-2 py-4 md:p-4">
          {googleSheetData?.map((data, index) =>
            <div className="grid grid-cols-2 max-w-xs border-b" key={index}>
              <p>{titles[index]}</p>
              <p className="text-right">{data}</p>
            </div>
          )}          
        </div>
        <div className="p-4 mt-4 text-center">
          <a 
            href="https://docs.google.com/spreadsheets/d/1EXP7L9ZZJ5pDEAlYTrkDTgfcnVqdJieqPxCFKpWrJkY/edit#gid=0"
            className="group rounded-lg border hover:border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the Sheet
          </a>
        </div>
        <div className="p-4 mt-4 text-center">
          <Link 
            href="/pages/form"
            className="group rounded-lg border hover:border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            Create expense
          </Link>
        </div>
      </div>
    </main>
  )
}