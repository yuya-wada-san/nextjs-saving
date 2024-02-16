'use server';

import { getGoogleSheetsData } from "@/app/lib/gsheets";

export default async function RecentData({
  sheet
}: {
  sheet: string,
}) {
  const sheetName = `Summary_${sheet}!A10:C10`;
  const recentData = await getGoogleSheetsData(sheetName);
  return (
    <div>
      <h3 className="mt-4 mb-2">
        Latest
      </h3>
      <div className="grid grid-cols-1 gap-2 md:px-4">
        {recentData?.map((value, index) => {
          return (
            <div 
              className="grid grid-cols-3 border-b border-slate-500"
              key={index}
              >
              <p>{value[0]}</p>
              <p className="text-center">{value[1]} </p>
              <p className="text-right">{value[2]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}