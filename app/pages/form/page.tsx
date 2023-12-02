import AppendForm from "@/app/ui/appendForm";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Form',
};

export default async function Page() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-white text-2xl md:text-4xl w-full border-b border-slate-500 pb-6 pt-8 lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Create Expense
        </h1>
        <AppendForm />
        <div className="mt-8">
          <Link 
            href="/pages/saving"
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