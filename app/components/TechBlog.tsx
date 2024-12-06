import type { SanityDocument } from "@sanity/client";
import { techPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import MainTechBlogSection from "@/app/ui/MainTechBlogSection";
import MainLeftTechBlogSection from "@/app/ui/MainLeftTechBlogSection";
import LowerTechBlogSection from "@/app/ui/LowerTechBlogSection";
import Lower2TechBlogSection from "@/app/ui/Lower2TechBlogSection";
import Lower3TechBlogSection from "@/app/ui/Lower3TechBlogSection";
import TechBlogSkeleton from "@/app/ui/TechBlogSkeleton";
import { Suspense } from 'react'
export default async function TechBlog() {

let techPosts : SanityDocument[] =[];
  try {
    techPosts = await sanityFetch<SanityDocument[]>({
      query: techPostsQuery,
      
    });
  } catch (error) {
    console.log(`Error Fetching healthWellnessPosts: ${error}`);
  }


  return (
    <section className="max-w-[1440px] mx-auto mt-[2rem] pt-2 px-2  md:px-10  ">
      <header className="flex items-baseline gap-10">
        <h2 className="text-2xl ss:text-3xl sm:text-4xl font-bold leading-tight">
          Tech Blog | Daily Discoveries
        </h2>
        <span className="text-xl text-gray-600 font-light">New Things We Learn.</span>
      </header>
      <div className=" max-w-[1440px] mx-auto  pt-10   grid md:grid-cols-3 gap-10 *:rounded-lg">
        <article className="md:col-span-2 relative h-[25rem] rounded-3xl overflow-hidden bg-gradient-to-b from-gray-500 to-gray-800">
          <Suspense fallback={<TechBlogSkeleton />}>
          {
            techPosts && techPosts.length > 0 ? (
              <MainTechBlogSection techPosts={techPosts} />
            ):(
              <p className="text-center text-gray-600 py-10">No Main tech blog posts found. Please check back later</p>
            )
          }
          
          </Suspense>
          </article>

        {/* Section Two */}
        <article className="md:col-span-1  rounded-2xl relative overflow-hidden bg-gradient-to-b from-gray-500 to-gray-800 ">
          <Suspense fallback={<TechBlogSkeleton />}>
          {
            techPosts && techPosts.length > 0 ? (
              <MainLeftTechBlogSection techPosts={techPosts} />
            ):(
              <p className="text-center text-gray-600 py-10">No Additional tech blog posts found. Please check back later</p>
            )
          }
         
          </Suspense>
          
        </article>
        {/* Section Three */}
        <div className="  rounded-2xl relative overflow-hidden bg-gradient-to-b from-gray-500 to-gray-800 ">
          <Suspense fallback={<TechBlogSkeleton />}>
          {
            techPosts && techPosts.length > 0 ? (
              <LowerTechBlogSection techPosts={techPosts} />
            ):(
              <p className="text-center text-gray-600 py-10">No related tech blog posts found. Please check back later</p>
            )
          }
         
          </Suspense>
         
        </div>

        {/* Section Four */}
        <article className="  rounded-2xl relative overflow-hidden bg-gradient-to-b from-gray-500 to-gray-800 ">
          <Suspense fallback={<TechBlogSkeleton />}>
          {
            techPosts && techPosts.length > 0 ? (
              <Lower2TechBlogSection techPosts={techPosts} />
            ):(
              <p className="text-center text-gray-600 py-10">No  tech blog posts found. Please check back later</p>
            )
          }
          
          </Suspense>
          
        </article>
        {/* Section Five */}
        <article className="  rounded-2xl  relative overflow-hidden bg-gradient-to-b from-gray-500 to-gray-800 ">
          <Suspense fallback={<TechBlogSkeleton />}>
          {
            techPosts && techPosts.length > 0 ? (
              <Lower3TechBlogSection techPosts={techPosts} />
            ):(
              <p className="text-center text-gray-600 py-10">No related tech blog posts found. Please check back later</p>
            )
          }
       
          </Suspense>
          
        </article>
      </div>
    </section>
  );
}
