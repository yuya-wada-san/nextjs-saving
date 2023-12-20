import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Loading from "./Loading";
import SummaryData from "@/app/ui/summaryData";
import RecentData from "@/app/ui/recentData";
import Navbar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: 'Summary',
};

export default async function Page() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen p-8 md:px-24 max-w-5xl w-full mx-auto">
        <h1 className="text-white w-full border-b border-slate-500 pb-6 lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Expense Summary
        </h1>
        <div className="flex flex-col justify-center">
          <div className="md:flex md:justify-center md:gap-4">
            <div className="md:min-w-[360px]">
              <Suspense fallback={<Loading />}>
                <SummaryData sheet="Test" />
                <RecentData sheet="Test" />
              </Suspense>
            </div>
            <div className="md:min-w-[360px]">
              <Suspense fallback={<Loading />}>
                <SummaryData sheet="Dec23" />
                <RecentData sheet="Dec23" />
              </Suspense>
            </div>
          </div>
          <div className="mt-8 md:flex md:justify-center md:gap-8">
            <div className="hidden md:block mt-4 text-center">
              <a 
                href="https://docs.google.com/spreadsheets/d/1EXP7L9ZZJ5pDEAlYTrkDTgfcnVqdJieqPxCFKpWrJkY/edit#gid=0"
                className="min-w-[220px] text-center flex items-center justify-center gap-5 rounded-lg bg-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-600 md:text-base"
                target="_blank"
                rel="noopener noreferrer"
                >
                Open Database
              </a>
            </div>
            <div className="mt-4 text-center">
              <Link 
                href="/pages/create"
                className="min-w-[220px] flex items-center justify-between md:justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-400 md:text-base"
                >
                Create Expense
                <ArrowRightIcon className="w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:flex md:justify-center">
          <Link 
            href="/"
            className="min-w-[220px] flex items-center justify-center gap-2 rounded-lg bg-slate-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-600 md:text-base"
            >
            <ArrowLeftIcon className="w-4 hidden md:block" />
            TOP
          </Link>
        </div>
      </div>
    </main>
  )
}