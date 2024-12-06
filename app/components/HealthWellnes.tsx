import { Suspense } from 'react'
import type { SanityDocument } from "@sanity/client";
import { healthWellnessPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import AllPostsSkeleton from "@/app/ui/Skeleton/AllPostsSkeleton";

import HealthWellnesMain from "@/app/ui/HealthWellnesMain";
export default async function HealthWellness(){
 
 let healthWellnessPosts : SanityDocument[] = [];
    try {
        healthWellnessPosts = await sanityFetch<SanityDocument[]>({
          query: healthWellnessPostsQuery,
           
        });
      } catch (error) {
        console.log(`Error Fetching healthWellnessPosts: ${error}`);
      }
    
      
    
  
    return(
        <section className='pt-2 '>
            <header className="max-w-[1440px] mx-auto mt-[10rem] flex items-baseline gap-10">
        <h2 className="text-2xl ss:text-3xl sm:text-4xl font-bold leading-tight">
          Health & Wellness| 
        </h2>
        <span className="text-xl text-gray-600 font-light">Thoughts and Trends in Focus.</span>
      </header>
      <div className="">
        <Suspense fallback={<AllPostsSkeleton />}>{
          // to handle situation when the fetch request is null/ undefined
          healthWellnessPosts && healthWellnessPosts.length > 0 ? (
            <HealthWellnesMain  healthWellnessPosts={healthWellnessPosts} />
          ):(
            <p className="text-center text-gray-400 py-10">
                No articles available at the moment. Please check back later.
              </p>
          )        }
        
       
        </Suspense>
        </div>
    
      
        </section>

    )
}