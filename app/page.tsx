import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Border from "@/app/ui/border"
import Navbar from "./ui/navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto min-h-screen p-8 md:px-24 flex flex-col gap-4 max-w-5xl w-full">
        <h1 className="text-white w-full border-b border-slate-700 pb-6 md:pt-8 lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Expense Management Tool
        </h1>
        <Link
          href="/pages/summary"
          className="w-full md:w-auto my-4 flex items-center gap-2 justify-between md:self-start rounded-lg bg-sky-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-400 md:text-base"
          >
          Summary Page
          <ArrowRightIcon className="w-4" />
        </Link>
        <h2>Abstract</h2>
        <p>
          自分用の支出管理ツール<br />
          データベースは無料のスプレッドシートを使用しました<br />
          ログインすると支出入力時に名前が自動的に入ります<br />
          支出入力は "Test" シートで動作確認できます
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
          <span className="p-2" />- Versel<br />
          <br />
          - Code<br />
          <a href="https://github.com/yuya-wada-san/nextjs-saving" className="p-2">- <span className="underline">GitHub</span></a>
        </p>
        <Border />
        <h2>Contact</h2>
        <div className="max-w-[200px] grid gap-1">
          <p className="grid grid-cols-2">
            <span>Name:</span>
            <span>Yuya Wada</span>
          </p>
          <p className="grid grid-cols-2">
            <span>Email:</span>
            <span>yuya.wada.san@gmail.com</span>
          </p>
        </div>
      </div>
    </main>
  )
}
