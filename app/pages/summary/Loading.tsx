import { PuffLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full max-w-xs h-60 flex items-center justify-center">
      <PuffLoader color="#0EA5E9" />
    </div>
  );
}