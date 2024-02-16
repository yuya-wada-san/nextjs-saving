import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Border from "@/app/ui/border"
import Navbar from "./ui/navbar"
import Title from "@/app/ui/title"

export default function Home() {
  const githubUrl = "https://github.com/yuya-wada-san/nextjs-saving";
  return (
    <main>
      <Navbar />
      <div className="mx-auto min-h-screen p-8 md:px-24 flex flex-col gap-4 max-w-5xl w-full">
        <Title title="Expense Management Tool" />
        <Link
          href="/pages/summary"
          className="w-full md:w-auto my-4 flex items-center gap-2 justify-between md:self-start rounded-lg bg-sky-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-400 md:text-base"
          >
          Summary Page
          <ArrowRightIcon className="w-4" />
        </Link>
        <h2>Abstract</h2>
        <p className="md:pl-4">
          支出管理ツール<br />
          データベースは無料のスプレッドシート<br />
          ログインすると支出入力時に入力者の名前が自動的に入る<br />
          支出入力は &quot;Test&quot; シートで動作確認できる
        </p>
        <Border />
        <h2>Assets</h2>
        <p className="md:pl-4">
          - Front<br />
          <span className="p-2" />- Next.js (React.js)<br />
          <span className="p-4" />- App Router (ver.14)<br />
          <span className="p-2" />- Tailwind CSS<br />
          <br />
          - Back<br />
          <span className="p-2" />- Google Spreadsheet<br />
          <span className="p-2" />- Versel<br />
          <br />
          - Code<br />
          <a 
            href={githubUrl}
            className="p-2"
          >
            - <span className="underline">GitHub</span>
          </a>
        </p>
        <Border />
        <h2>Contact</h2>
        <div className="max-w-[200px] grid gap-1 md:pl-4">
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
