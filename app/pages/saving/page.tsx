import { getGoogleSheetsData } from "@/app/lib/gsheets"

export default async function Page() {

  const titles: string[] = ['Yuya','Haruna','Total Share','Only Y','Only H'];
  const googleSheetData = await getGoogleSheetsData('Nov23!B3:B7');

  return (
    <main className="flex min-h-screen p-8 md:p-24">
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        <h1 className="text-4xl w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Saving Data
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
      </div>
    </main>
  )
}