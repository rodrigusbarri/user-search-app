import SearchIcon from "./components/icons/SearchIcon";

export default function Home () {
  return (
    <>
   <form className='flex flex-wrap items-center gap-2 rounded-xl bg-blue-900 p-2'>
    <span className='min-w-[20px]'>
      <SearchIcon
      className='fill-blue-500'
      />
    </span>
    <input
    type="text"
    placeholder="Buscar usuario Github"
    className='flex-1 h-14 p-2 rounded-lg bg-transparent text-white outline-none'
    />
    <button className='bg-blue-500 rounded-lg py-4 px-4 text-white font-bold'>Buscar</button>
   </form>
   <article>
      Todo el contenido de la página
   </article>
    </>
);  
}