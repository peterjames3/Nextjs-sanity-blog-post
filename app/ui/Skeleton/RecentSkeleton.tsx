'use client';
export default function RecentSkeleton(){
    return(
        <section className="flex flex-col space-y-5 p-2 pt-2 animate-pulse">
    <article  className="border-l-4 border-gray-400 px-3 py-5 rounded-md flex flex-col gap-2">
        <header className="h-5 bg-gray-200 rounded w-3/4"></header>
        <footer className="flex justify-between items-center mt-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </footer>
    </article>
    <article  className="border-l-4 border-gray-400 px-3 py-5 rounded-md flex flex-col gap-2">
        <header className="h-5 bg-gray-200 rounded w-3/4"></header>
        <footer className="flex justify-between items-center mt-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </footer>
    </article>
    <article className="border-l-4 border-gray-400 px-3 py-5 rounded-md flex flex-col gap-2">
        <header className="h-5 bg-gray-200 rounded w-3/4"></header>
        <footer className="flex justify-between items-center mt-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </footer>
    </article>
    <article className="border-l-4 border-gray-400 px-3 py-5 rounded-md flex flex-col gap-2">
        <header className="h-5 bg-gray-200 rounded w-3/4"></header>
        <footer className="flex justify-between items-center mt-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </footer>
    </article>
</section>
    )
}