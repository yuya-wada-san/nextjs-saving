import { getGoogleSheetsData } from "@/app/lib/gsheets"
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default async function Page() {

  const selectedSheet = 'Test';
  const titles: string[] = ['Yuya','Haruna','Total Share','onlyY','onlyH'];
  const googleSheetData = await getGoogleSheetsData(`Summary_${selectedSheet}!B2:B6`);
  const summaryData = googleSheetData?.length 
          ? googleSheetData 
          : ['unkown','unkown','unkown','unkown','unkown'];

  return (
    <main className="bg-slate-950 font-mono text-slate-400 min-h-screen p-8 md:p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-white text-2xl md:text-4xl w-full border-b border-slate-500 pb-6 pt-8 lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Saving Summary
        </h1>
        <h2 className="text-xl md:text-2xl py-4 md:p-4 mt-4">
          Sheet: {selectedSheet}
        </h2>
        <div className="grid grid-cols-1 gap-2 py-4 md:p-4">
          {summaryData?.map((data, index) =>
            <div className="grid grid-cols-2 max-w-xs border-b border-slate-500" key={index}>
              <p>{titles[index]}</p>
              <p className="text-right">{data}</p>
            </div>
          )}          
        </div>

        <div className="md:flex md:items-between md:gap-4">
          <div className="hidden md:block mt-4 text-center">
            <a 
              href="https://docs.google.com/spreadsheets/d/1EXP7L9ZZJ5pDEAlYTrkDTgfcnVqdJieqPxCFKpWrJkY/edit#gid=0"
              className="text-center flex items-center justify-center gap-5 rounded-lg bg-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-600 md:text-base"
              target="_blank"
              rel="noopener noreferrer"
              >
              Open the Sheet
            </a>
          </div>
          <div className="mt-4 text-center">
            <Link 
              href="/pages/form"
              className="flex items-center justify-between md:justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
              Create Expense
              <ArrowRightIcon className="w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}