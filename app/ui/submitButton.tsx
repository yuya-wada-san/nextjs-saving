import { useFormStatus } from "react-dom";  // useFormStatusをimport
import { PacmanLoader } from "react-spinners";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (    
    <div className="my-4 flex items-center justify-center">
      {pending ? (
        <PacmanLoader color="#0EA5E9" />
      ) : (
        <button 
          type="submit"          
          className="w-full flex items-center justify-center gap-5 rounded-lg bg-sky-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-400 md:text-base"
          >
          Submit
        </button>
      )}
    </div>
)}