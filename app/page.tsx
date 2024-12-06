
import  { sanityFetch } from '@/sanity/lib/fetch';
import { latestPostsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Hero from "@/app/components/Hero";
import TechBlog from "@/app/components/TechBlog";
import NewsExpert from "@/app/components/NewsExpert";
import AllPosts from "@/app/components/AllPosts";
import HealthWellness from './components/HealthWellnes';
export default async function Home() {

 
  let latestPosts : SanityDocument[] =[];
  try {
    latestPosts = await sanityFetch<SanityDocument[]>({
      query: latestPostsQuery,
      
    });
  } catch (error) {
    console.log(`Error Fetching healthWellnessPosts: ${error}`);
  }



  

  // const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  
  return (
    <section className="w-full mt-[12rem] h-auto  ">
      
     <Hero  latestPosts={latestPosts}/> 
     <TechBlog />
     <NewsExpert />
     <AllPosts />
     <HealthWellness />
   
      
    </section>
  );
}
