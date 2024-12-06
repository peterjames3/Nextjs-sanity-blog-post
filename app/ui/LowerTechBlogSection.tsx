
import Link from 'next/link';
import Image from 'next/image';
import type { SanityDocument } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);

import  { format } from 'date-fns'
export default function LowerTechBlogSection({techPosts =[]} :{techPosts : SanityDocument[]}){
    return(
        <figure>
            {techPosts.slice(2, 3).map((techPost) => (
            <div key={techPost._id}>
                {/* Mobile Image */}
              <Image
                src={builder
                  .image(techPost.mainImage)
                  .width(800)
                  .height(400)
                  .url() ||"/3d-view-personal-computer-with-vegetation.jpg"}
                alt={techPost.title ||"Untitled Image"}
                width={800}
                height={380}
                className="mix-blend-overlay flex md:hidden"
              />

              {/* Desktop Image */}
              <Image
                src={builder
                  .image(techPost.mainImage)
                  .width(400)
                  .height(380)
                  .url() || "/3d-view-personal-computer-with-vegetation.jpg"}
                alt={techPost.title ||"Untitled Image"}
                width={450}
                height={380}
                className="mix-blend-overlay hidden md:flex"
              />
            </div>
          ))}
              <figcaption className="absolute bottom-0 w-full h-[5.4rem] grass-background py-2 px-2 grass-background">
            {techPosts.slice(2, 3).map((techPost) => (
              <div key={techPost._id}>
                <Link
                  href={techPost.slug.current || "#"}
                  className="text-sm sm:text-xl font-semibold tracking-normal text-white"
                >
                  {techPost.title ||"Untitled Post"}
                </Link>
                <nav className="flex justify-between items-center pr-2 font-semibold text-[0.75rem] sm:text-sm text-white">
                  <span className=" ">{techPost.authorName ||"Unknown Author"}</span>
                  <span className=" ">
                    {format(new Date(techPost._createdAt), "MM/dd/yyyy")||"Unknown Date"}{" "}
                  </span>
                </nav>
              </div>
            ))}
          </figcaption>

        </figure>
    )
}