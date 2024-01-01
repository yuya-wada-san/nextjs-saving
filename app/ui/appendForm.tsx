'use client';

import { State, postForm } from '@/app/lib/postForm';
import { useFormState } from 'react-dom';
import SubmitButton from '@/app/ui/submitButton';

export default function AppendForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(postForm, initialState);

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
                Select a sheet
              </option>
              <option key="RawData_Test" value="Test">
                Test
              </option>
              <option key="RawData_Jan24" value="Jan24">
                Jan24
              </option>
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
                placeholder="Enter store name"
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
                placeholder="Enter description"
                className="peer block w-full bg-slate-950 rounded-md border border-slate-400 py-2 pl-5 text-sm outline-2"                
              />
            </div>
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
                step="0.01"
                placeholder="Enter AUD amount"
                className="peer block w-full bg-slate-950 rounded-md border border-slate-400 py-2 pl-5 text-sm outline-2"
                required
              />              
            </div>
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
                Select a category
              </option>
              <option key="Grocery" value="Grocery">
                Grocery
              </option>
              <option key="Entertainment" value="Entertainment">
                Entertainment
              </option>
              <option key="Cafe/Restraunt" value="Cafe/Restraunt">
                Cafe/Restraunt
              </option>
              <option key="Rent" value="Rent">
                Rent
              </option>
              <option key="Other" value="Other">
                Other
              </option>
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

        {/* Person Name */}
        <div className="mb-4">
          <label htmlFor="person" className="mb-2 block text-sm font-medium">
            Choose person
          </label>
          <div className="relative">
            <select
              id="person"
              name="person"
              className="peer block w-full cursor-pointer bg-slate-700 rounded-md border border-slate-400 py-2 pl-5 text-sm outline-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a person
              </option>
              <option key="shareY" value="shareY">
                shareY
              </option>
              <option key="shareH" value="shareH">
                shareH
              </option>
              <option key="onlyY" value="onlyY">
                onlyY
              </option>
              <option key="onlyH" value="onlyH">
                onlyH
              </option>
            </select>
          </div>
          <div id="person-error" aria-live="polite" aria-atomic="true">
            {state.errors?.person &&
              state.errors.person.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

      </div>
      <SubmitButton />
    </form>
  )
}