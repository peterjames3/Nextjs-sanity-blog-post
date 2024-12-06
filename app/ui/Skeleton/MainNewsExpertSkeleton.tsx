'use client';
export default function MainNewsExpertSkeleton(){
    return(
        <figure className="animate-pulse relative rounded-md">
  <section className='h-[20rem]  md:h-[36rem] '>
    <div className="w-full h-full bg-gray-200"></div>
  </section>
  <figcaption className="absolute bottom-0 w-full h-[5.4rem] py-2 px-2">
    <div className="h-8 bg-gray-400 rounded w-3/4 mb-1"></div>
    <div className="flex gap-4 items-center pr-2">
      <div className="h-4 bg-gray-400 rounded w-1/4"></div>
      <div className="h-4 bg-gray-400 rounded w-1/4"></div>
    </div>
  </figcaption>
</figure>
    )
}