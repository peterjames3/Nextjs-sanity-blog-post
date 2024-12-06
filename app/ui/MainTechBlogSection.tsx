
import Link from 'next/link';
import Image from 'next/image';
import type { SanityDocument } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);

import  { format } from 'date-fns'
export default function MainTechBlogSection({techPosts =[]} :{techPosts : SanityDocument[]}){
    return(
        <figure>
            {
                techPosts.slice(1,2).map((techPost)=>(
                    <section key={techPost._id}>
                          <Image
                src={builder
                  .image(techPost.mainImage)
                  .width(1200)
                  .height(550)
                  .url() ||"/3d-view-personal-computer-with-vegetation.jpg"}
                alt={techPost.title}
                style={{ objectFit: "fill" }}
                fill={true}
                className='mix-blend-overlay'
              />
                    </section>
                ))
            }
              <figcaption className="absolute bottom-0 w-full h-[5.4rem] grass-background py-2 px-2 grass-background">
            {techPosts.slice(1, 2).map((techPost) => (
              <div key={techPost._id}>
                <Link
                  href={techPost.slug.current ||"#"}
                  className="text-sm sm:text-xl font-semibold tracking-normal text-white"
                >
                  {techPost.title || "Untitled"}
                </Link>
                <nav className="flex justify-between items-center pr-2 font-semibold text-[0.75rem] sm:text-sm text-white">
                  <span className=" ">{techPost.authorName ||"Unknown Author"}</span>
                  <span className=" ">
                    {format(new Date(techPost._createdAt), "MM/dd/yyyy")|| "Unknown Date"}{" "}
                  </span>
                </nav>
              </div>
            ))}
          </figcaption>

        </figure>
    )
}