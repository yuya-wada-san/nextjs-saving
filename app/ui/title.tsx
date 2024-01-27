export default function Title({
  title
}: {
  title: string,
})  {
  return (    
    <h1 className="text-white w-full border-b border-slate-500 pb-6 lg:w-auto lg:rounded-xl lg:border lg:p-4">
      {title}
    </h1>
  )
}