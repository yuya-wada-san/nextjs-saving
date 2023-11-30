'use client';

import { State, postForm } from '@/app/lib/postForm';
import { useFormState } from 'react-dom';

export default function AppendForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(postForm, initialState);

  return (    
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose person
          </label>
          <div className="relative">
            <select
              id="person"
              name="person"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a person
              </option>
              <option key="Yuya" value="Yuya">
                Yuya
              </option>
            </select>
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter AUD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-4 text-center">
        <button 
          type="submit"          
          className="group rounded-lg border hover:border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          Submit
        </button>
      </div>
    </form>
  )
}