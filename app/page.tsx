import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="flex flex-col gap-4 max-w-5xl w-full font-mono text-sm">
        <h1 className="text-4xl w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Saving Top
        </h1>
        <p>Owner: Yuya Wada</p>
        <p>Content: updating now by Next.js and using GoogleSpreadsheet as DB</p>
        <Link
          href="/pages/saving"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Summary Page</span>
        </Link>
      </div>
    </main>
  )
}
