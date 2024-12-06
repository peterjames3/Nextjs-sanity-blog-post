
import Link from 'next/link';
import Image from 'next/image';
import type { SanityDocument } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);
import MainNewsExpertSkeleton from "@/app/ui/Skeleton/MainNewsExpertSkeleton";

import  { format } from 'date-fns'
export default function MainNewsExpert({newsExpertPosts =[]} :{newsExpertPosts : SanityDocument[]}){

  if(newsExpertPosts.length < 1){
    return <MainNewsExpertSkeleton />
  }
    return(
        <figure>
          {
            newsExpertPosts.slice(0, 1).map((newsExpertPost)=>(
                    <section key={newsExpertPost._id} className=' min-h-[20rem] '>
      
                      {/* Desktop image */}
                          <Image
                src={builder
                  .image(newsExpertPost.mainImage)
                  .width(1200)
                  .height(800)
                  .url() ||"/3d-view-personal-computer-with-vegetation.jpg"}
                alt={newsExpertPost.title || "Main News Image"}
                style={{objectFit:'cover' }}
                fill={true}
                className=' mix-blend-overlay'
              />
                    </section>
                ))
              }
          
          <figcaption className="absolute bottom-0 w-full h-[5.4rem]  py-2 px-2 ">
            {newsExpertPosts.slice(0, 1).map((newsExpertPost) => (
              <div key={newsExpertPost._id}>
                <Link
                  href={newsExpertPost.slug.current || '/'}
                  className="text-sm sm:text-xl font-semibold tracking-normal text-white"
                >
                  {newsExpertPost.title || 'Untitle post'}
                </Link>
                <div className="flex gap-4  items-center pr-2 font-semibold text-[0.75rem] sm:text-sm text-white">
                  <span className=" ">{newsExpertPost.authorName || 'Unknown author'}</span>
                  <span className=" ">
                    {newsExpertPost._createdAt ?
                    format(new Date(newsExpertPost._createdAt), "MM/dd/yyyy"): "unknown Date"}{" "}
                  </span>
                </div>
              </div>
            ))}
          </figcaption>
            
               
            
            

        </figure>
    )
}