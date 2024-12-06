
import Link from "next/link";
import Image from "next/image";
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from '@portabletext/react';
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);
import { format } from 'date-fns'

const urlFor = (source: string) => {
  return builder.image(source).width(309).height(500).fit("crop").url();
};
export default function HealthWellnesMain({
    healthWellnessPosts = [],
}: {
    healthWellnessPosts: SanityDocument[];
}) {

  if (healthWellnessPosts.length === 0) return null;
  return (
    <section className=" mt-2 grid pt-10 sm:grid-cols-2 md:grid-cols-3 gap-10 overflow-x-clip ">
      {healthWellnessPosts.slice(0, 3).map((healthWellnessPost) => (
        <div key={healthWellnessPost._id} className=" flex " >
          <figure className=" w-[40%] group   hover:-translate-y-3 transition-all ease-in-out duration-700   ">
                  {/* Mobile Image */}
                  <Image
                src={builder
                  .image(healthWellnessPost.mainImage)
                  .width(800)
                  .height(400)
                  .url()}
                alt={healthWellnessPost.title}
                width={800}
                height={380}
                className="hover:cursor-pointer hover:scale-90 transition-transform ease-in-out duration-700 flex sm:hidden"
              />
              {/* Desktop Image */}
            <Image
                   src={urlFor(healthWellnessPost.mainImage)}
                   alt={healthWellnessPost.title || 'News Expert Image'}
                   width={309}
                   height={500}
                   className=" hidden sm:flex hover:scale-95 hover:cursor-pointer  hover:mix-blend-darken transition-transform ease-in-out duration-700   "
            />
            
          </figure>
          <article className=" w-[60%] py-2 pl-10  flex flex-col space-y-3 items-start justify-center">
            <nav>
            <Link
                href={healthWellnessPost.slug.current || '/'}
                className="text-sm sm:text-3xl font-semibold tracking-normal transition-all ease-in-out duration-700"
              >
                {healthWellnessPost.title || 'Untitle post'}
              </Link>
            </nav>
            <div>
                
            </div>
            <p className='line-clamp-3 text-sm'>
                {healthWellnessPost?.body?<PortableText value={healthWellnessPost.body} /> : null}
            </p>
        

            
              <div className=" flex gap-2 pr-2 font-semibold text-[0.75rem] sm:text-sm transition-all ease-in-out duration-700">
              <div className=" ">
              <Image
                src={builder
                  .image(healthWellnessPost.authorImage)
                  .width(50)
                  .height(50)
                  .url() ||"/3d-view-personal-computer-with-vegetation.jpg"}
                alt={healthWellnessPost.title ||'Untitled Image'}
                width={50}
                height={50}
                className="rounded-full"
              />
                   </div>
                <div className=" ">
                    <p>
                    {healthWellnessPost.authorName || 'Unknown author'}</p>
                    <span> {format(new Date(healthWellnessPost._createdAt), "MM/dd/yyyy")}{" "}</span></div>
                

               
              </div>
            
      
        </article>
        </div>
      ))}
    </section>
  );
}
