import { Suspense } from "react";
import type { SanityDocument } from "@sanity/client";
import { newsExpertPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import MainNewsExpert from "@/app/ui/MainNewsExpert";
import SubNewsExpert from "@/app/ui/SubNewsExpert";
import SubNewsExpertSkeleton from "@/app/ui/Skeleton/SubNewsExpertSkeleton";
import MainNewsExpertSkeleton from "@/app/ui/Skeleton/MainNewsExpertSkeleton";

export default async function NewsExpert() {
  let newsExpertPosts: SanityDocument[] = [];

  try {
    newsExpertPosts = await sanityFetch<SanityDocument[]>({
      query: newsExpertPostsQuery,
      
    });
  } catch (error) {
    console.log(`Error Fetching newsExpertPosts: ${error}`);
    return 
  }

  

  return (
    <section className="max-w-[1440px] mx-auto mt-[10rem] pt-2 px-2 md:px-10">
      <header className="flex items-baseline gap-10">
        <h2 className="text-2xl ss:text-3xl sm:text-4xl font-bold leading-tight">
          News & Experts | Daily Discoveries
        </h2>
        <span className="text-xl text-gray-600 font-light">Our Best Stories.</span>
      </header>

      <div className="grid pt-10 md:grid-cols-3 gap-10 *:rounded-lg">
        {/* Main Article */}
        <article className="md:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-b from-gray-500 to-gray-800">
          <Suspense fallback={<MainNewsExpertSkeleton />}>
            {newsExpertPosts.length > 0 ? (
              <MainNewsExpert newsExpertPosts={newsExpertPosts} />
            ) : (
              <p className="text-center text-white py-10">
                No articles available at the moment. Please check back later.
              </p>
            )}
          </Suspense>
        </article>

        {/* Sub Articles */}
        <article className="md:col-span-1 flex flex-col space-y-3 gap-10">
          <Suspense fallback={<SubNewsExpertSkeleton />}>
            {newsExpertPosts.length > 0 ? (
              <SubNewsExpert newsExpertPosts={newsExpertPosts} />
            ) : (
              <p className="text-center text-gray-600 py-5">
                No related stories found.
              </p>
            )}
          </Suspense>
        </article>
      </div>
    </section>
  );
}
