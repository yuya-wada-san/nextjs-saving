import AppendForm from "@/app/ui/appendForm";
import Navbar from "@/app/ui/navbar";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Create',
};

export default async function Page() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen p-8 md:px-24 max-w-5xl w-full mx-auto">
        <h1 className="text-white w-full border-b border-slate-500 pb-6 lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Create Expense
        </h1>
        <AppendForm />
        <div className="mt-8">
          <Link 
            href="/pages/summary"
            className="text-center flex items-center justify-center gap-2 rounded-lg bg-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-600 md:text-base"
            >
            <ArrowLeftIcon className="w-4" />
            Back to Summary
          </Link>
        </div>
      </div>
    </main>
  );
}