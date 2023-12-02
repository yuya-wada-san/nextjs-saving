import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-slate-950 font-mono text-slate-400 min-h-screen p-8 md:p-24">
      <div className="flex flex-col gap-4 max-w-5xl w-full">
        <h1 className="text-2xl md:text-4xl text-white w-full border-b border-slate-700 pb-6 pt-8 lg:w-auto  lg:rounded-xl lg:border lg:p-4">
          Saving Top
        </h1>
        <p>Owner: Yuya Wada</p>
        <p>Content: updating now by Next.js and using GoogleSpreadsheet as DB</p>
        <Link
          href="/pages/saving"
          className="flex items-center gap-2 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          Summary Page
          <ArrowRightIcon className="w-4" />
        </Link>
      </div>
    </main>
  )
}
