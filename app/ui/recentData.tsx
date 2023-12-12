'use server';

import { getGoogleSheetsData } from "@/app/lib/gsheets";

export default async function RecentData({
  sheet
}: {
  sheet: string,
}) {
  const recentData = await getGoogleSheetsData(`Summary_${sheet}!A12:B12`);
  return (
    <div>
      <h3 className="mt-4 mb-2">
        Latest
      </h3>
      <div className="grid grid-cols-1 gap-2 md:px-4">
        {recentData?.map((value, index) => {
          return (
            <div 
              className="grid grid-cols-2 max-w-xs border-b border-slate-500"
              key={index}
              >
              <p>{value[0]}</p>
              <p className="text-right">{value[1]} AUD</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}