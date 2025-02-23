import { Suspense } from "react";
import type { SanityDocument } from "@sanity/client";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import AllPostsSkeleton from "@/app/ui/Skeleton/AllPostsSkeleton";

import AllPostsSection from "@/app/ui/AllPostsSection";
export default async function AllPosts() {
  const allPosts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });

  return (
    <section className="max-w-[1440px] mx-auto mt-[10rem] pt-2 px-2  md:px-10">
      <header className="flex items-baseline gap-10">
        <h2 className="text-2xl ss:text-3xl sm:text-4xl font-bold leading-tight">
          Buzz Chronics|
        </h2>
        <span className="text-xl text-gray-600 font-light">
          Exploring Stories That Resonate.
        </span>
      </header>
      <div className="">
        <Suspense fallback={<AllPostsSkeleton />}>
          <AllPostsSection allPosts={allPosts} />
        </Suspense>
      </div>
    </section>
  );
}
