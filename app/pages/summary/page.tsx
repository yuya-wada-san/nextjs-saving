import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";
import Loading from "./Loading";
import SummaryData from "@/app/ui/summaryData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Summary',
};

export default async function Page() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-white w-full border-b border-slate-500 pb-6 pt-8 lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Expense Summary
        </h1>
        <div className="flex flex-col justify-center">
          <Suspense fallback={<Loading />}>
            <SummaryData sheet="Test" />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <SummaryData sheet="Dec23" />
          </Suspense>
          <div className=" md:flex md:items-between md:gap-4">
            <div className="hidden md:block mt-4 text-center">
              <a 
                href="https://docs.google.com/spreadsheets/d/1EXP7L9ZZJ5pDEAlYTrkDTgfcnVqdJieqPxCFKpWrJkY/edit#gid=0"
                className="text-center flex items-center justify-center gap-5 rounded-lg bg-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-600 md:text-base"
                target="_blank"
                rel="noopener noreferrer"
                >
                Open Database
              </a>
            </div>
            <div className="mt-4 text-center">
              <Link 
                href="/pages/create"
                className="flex items-center justify-between md:justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                >
                Create Expense
                <ArrowRightIcon className="w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="flex items-center justify-center md:justify-center gap-2 rounded-lg bg-slate-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-600 md:text-base"
            >
            <ArrowLeftIcon className="w-4 hidden md:block" />
            TOP
          </Link>
        </div>
      </div>
    </main>
  )
}