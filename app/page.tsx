import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Border from "@/app/ui/border"
import Navbar from "./ui/navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen p-8 md:px-24 flex flex-col gap-4 max-w-5xl w-full">
        <h1 className="text-white w-full border-b border-slate-700 pb-6 md:pt-8 lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Expense Management Tool
        </h1>
        <Link
          href="/pages/summary"
          className="w-full md:w-auto my-4 flex items-center gap-2 justify-between md:self-start rounded-lg bg-sky-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-400 md:text-base"
          >
          Expense Summary
          <ArrowRightIcon className="w-4" />
        </Link>
        <h2>Motivation</h2>
        <p>
          I want to share the expenses with my partner.<br />
          At the end of the month, we can check the summary page to see who paid the most and how much.
        </p>
        <Border />
        <h2>Assets</h2>
        <p>
          - Front<br />
          <span className="p-2" />- Next.js (React.js)<br />
          <span className="p-4" />- App Router (ver.14)<br />
          <span className="p-2" />- Tailwind CSS<br />
          <br />
          - Back<br />
          <span className="p-2" />- Database: Google Spreadsheet<br />
          <span className="p-2" />- Google Sheets API<br />
          <span className="p-2" />- Versel<br />
          <br />
          - Code<br />
          <a href="https://github.com/yuya-wada-san/nextjs-saving" className="p-2">- <span className="underline">GitHub</span></a>
        </p>
        <Border />
        <h2>How to test</h2>
        <p>
          You can use Test sheet.<br />
          Please select &quot;Test&quot; sheet on &quot;Creating expense&quot; page.<br />
          it will react summary in &quot;Sheet: Test&quot;.
        </p>
        <Border />
        <h2>Contact</h2>
        <div className="max-w-[200px] grid gap-1">
          <p className="grid grid-cols-2">
            <span>Name:</span>
            <span>Yuya Wada</span>
          </p>
          <p className="grid grid-cols-2">
            <span>Tel:</span>
            <span>0434997115</span>
          </p>
          <p className="grid grid-cols-2">
            <span>Mail:</span>
            <span>yuya.wada.san@gmail.com</span>
          </p>
          <p className="grid grid-cols-2">
            <span>Address:</span>
            <span>Melbourne</span>
          </p>
        </div>
      </div>
    </main>
  )
}
