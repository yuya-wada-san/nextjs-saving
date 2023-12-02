'use server';

import { getGoogleSheetsData } from "@/app/lib/gsheets";

export default async function SummaryData({
  sheet
}: {
  sheet: string,
}) {
  const titles: string[] = ['Yuya','Haruna','Total Share','onlyY','onlyH'];
  const googleSheetData = await getGoogleSheetsData(`Summary_${sheet}!B2:B6`);
  const summaryData = googleSheetData?.length 
          ? googleSheetData 
          : ['unkown','unkown','unkown','unkown','unkown'];
  return (
    <div className="my-8">
      <h2 className="text-xl md:text-2xl">
        Sheet: {sheet}
      </h2>
      <div className="grid grid-cols-1 gap-2 py-4 md:p-4">
        {summaryData?.map((data, index) => {
          return (
            <div className="grid grid-cols-2 max-w-xs border-b border-slate-500" key={index}>
              <p>{titles[index]}</p>
              <p className="text-right">{data}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}