"use client";

import MyCarousel from "./MyCarousel";
import RecentPostDetails from "@/app/ui/RecentPostDetails";
import type { SanityDocument } from "@sanity/client";
import { Suspense } from "react";
import RecentSkeleton from "@/app/ui/Skeleton/RecentSkeleton";
import FeaturedSkeleton from "@/app/ui/Skeleton/FeaturedSkeleton";
export default function Home({
  latestPosts = [],
}: {
  latestPosts: SanityDocument[];
}) {
  return (
    <main className="max-w-[1440px] py-3  mx-auto mt-2 px-2 ss:px-3 md:px-4 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
      {/* Featured Section */}
      <section className="col-span-2 px-10">
        <header className="border-l-4 rounded-sm border-[#211F21] px-6  text-2xl md:text-3xl font-semibold">
          Featured this month
        </header>
        <div className="pt-16">
          <Suspense fallback={<FeaturedSkeleton />}>
            {latestPosts.length > 0 ? (
              <MyCarousel latestPosts={latestPosts} />
            ) : (
              <p className="text-center text-gray-600 py-10">
                No articles available at the moment. Please check back later.
              </p>
            )}
          </Suspense>
        </div>
      </section>

      {/* Recently Published Section */}
      <section className="col-span-1 px-2 sm:px-10">
        <header className="border-l-4 rounded-sm border-[#211F21] px-6 text-2xl md:text-3xl font-semibold ml-10">
          Recently Published
        </header>
        <div className="pt-16">
          <Suspense fallback={<RecentSkeleton />}></Suspense>
          {latestPosts.length > 0 ? (
            <RecentPostDetails latestPosts={latestPosts} />
          ) : (
            <p className="text-center text-gray-600 py-5">
              No related stories found.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
