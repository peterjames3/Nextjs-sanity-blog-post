"use client";
export default function TechBlogSkeleton() {
  return (
    <figure>
      <div className="animate-pulse">
        <div className="h-96 bg-gray-200 rounded"></div>
      </div>
      <figcaption className="absolute bottom-0 w-full h-[5.4rem] py-2 px-2">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <nav className="flex justify-between items-center pr-2">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </nav>
        </div>
      </figcaption>
    </figure>
  );
}
