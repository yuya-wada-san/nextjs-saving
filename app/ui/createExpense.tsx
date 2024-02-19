'use client';

import { State, postForm } from '@/app/lib/postForm';
import { useFormState } from 'react-dom';
import SubmitButton from '@/app/ui/submitButton';
import { useSession } from 'next-auth/react';

export default function CreateExpense() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(postForm, initialState);

	const { data: session, status } = useSession();
  const person = session?.user?.name
              ? session?.user?.name 
              : 'guest';

  const sheetList: string[] = ['Test','Feb24'];  
  const categoryList: string[] = [
          '食費&日用品',
          '外食費',
          '趣味',
          'ホーム用品',
          '書籍代',
          'プレゼント代',
          '家賃&水道光熱費',
          'その他'
        ];

  return (    
    <form action={dispatch}>
      <div className="rounded-md my-8">

        {/* Sheet Name */}
        <div className="mb-4">
          <label htmlFor="sheet" className="mb-2 block text-sm font-medium">
            Choose sheet
          </label>
          <div className="relative">
            <select
              id="sheet"
              name="sheet"
              className="peer block w-full bg-slate-700 cursor-pointer rounded-md border border-slate-400 py-2 pl-5 text-sm outline-2"
              defaultValue=""
            >
              <option value="" disabled>
                シートを選択
              </option>
              {sheetList.map((value) => {
                const sheetName = `RawData_${value}`;
                return(
                  <option key={sheetName} value={value}>
                    {value}
                  </option>
                )
              })}
            </select>
          </div>
          <div id="sheet-error" aria-live="polite" aria-atomic="true">
            {state.errors?.sheet &&
              state.errors.sheet.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Category Name */}
        <div className="mb-4">
          <label htmlFor="person" className="mb-2 block text-sm font-medium">
            Choose Category
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              className="peer block w-full bg-slate-700 cursor-pointer rounded-md border border-slate-400 py-2 pl-5 text-sm outline-2"
              defaultValue=""
            >
              <option value="" disabled>
                支出カテゴリ
              </option>
              {categoryList.map((value, index) => {
                return(
                  <option key={index} value={value}>
                    {value}
                  </option>
                  )
              })}
            </select>
          </div>
          <div id="category-error" aria-live="polite" aria-atomic="true">
            {state.errors?.category &&
              state.errors.category.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        
        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Input amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="1"
                placeholder="金額を入力 Ex) ¥1,000"
                className="peer block w-full bg-slate-950 rounded-md border border-slate-400 py-2 pl-5 text-sm outline-2"
                required
              />              
            </div>
          </div>
        </div>

        {/* Store Name */}
        <div className="mb-4">
          <label htmlFor="store" className="mb-2 block text-sm font-medium">
            Input store name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="store"
                name="store"
                type="text"
                placeholder="ストア名を入力"
                className="peer block w-full bg-slate-950 rounded-md border border-slate-400 py-2 pl-5 text-sm outline-2"
                required
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Input description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="description"
                name="description"
                type="text"
                placeholder="メモを入力"
                className="peer block w-full bg-slate-950 rounded-md border border-slate-400 py-2 pl-5 text-sm outline-2"                
              />
            </div>
          </div>
        </div>

        {/* person */}
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Author: {person}
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="person"
                name="person"
                type="hidden"
                defaultValue={person}
                className="peer block w-full bg-slate-950 rounded-md border border-slate-400 py-2 pl-5 text-sm outline-2"                
              />
            </div>
          </div>
        </div>
      </div>
      <SubmitButton />
    </form>
  )
}