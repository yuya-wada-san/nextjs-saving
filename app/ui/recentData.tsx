'use server';

import { getGoogleSheetsData } from "@/app/lib/gsheets";

export default async function RecentData({
  sheet
}: {
  sheet: string,
}) {
  const recentData = await getGoogleSheetsData(`Summary_${sheet}!A10:C10`);
  return (
    <div>
      <h3 className="mt-4 mb-2">
        Latest
      </h3>
      <div className="grid grid-cols-1 gap-2 md:px-4">
        {recentData?.map((value, index) => {
          return (
            <div 
              className="grid grid-cols-3 max-w-md border-b border-slate-500"
              key={index}
              >
              <p>{value[0]}</p>
              <p>{value[1]} </p>
              <p className="text-right">{value[2]} AUD</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}