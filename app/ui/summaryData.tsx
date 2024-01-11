'use server';

import { getGoogleSheetsData } from "@/app/lib/gsheets";

export default async function SummaryData({
  sheet
}: {
  sheet: string,
}) {
  const summaryData = await getGoogleSheetsData(`Summary_${sheet}!A2:B9`);
  return (
    <div className="mt-10">
      <h2>
        <small>Sheet: </small>
        {sheet}
      </h2>
      <h3 className="mt-4 mb-2">
        Summary
      </h3>
      <div className="grid grid-cols-1 gap-2 md:px-4">
        {summaryData?.map((value, index) => {
          return (
            <div className="w-full grid grid-cols-2 max-w-md border-b border-slate-500" key={index}>
              <p>{value[0]}</p>
              <p className="text-right">{value[1]} AUD</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}