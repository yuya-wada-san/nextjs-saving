import postGsheets from "@/app/lib/postGsheets";

export default async function Page() {
  // const res = await postGsheets("Test!A:F");
  return (
    <main className="flex min-h-screen p-8 md:p-24">
      <div className="max-w-5xl w-full font-mono">
        <h1 className="text-4xl">Form Page</h1>
        <p>
          submit status: 
          {/* {res} */}
        </p>
      </div>
    </main>
  );
}