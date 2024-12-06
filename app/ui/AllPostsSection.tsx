
import Link from "next/link";
import Image from "next/image";
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);
import AllPostsSkeleton from "@/app/ui/Skeleton/AllPostsSkeleton";

const urlFor = (source: string) => {
  return builder.image(source).width(309).height(370).fit("crop").url();
};
export default function AllPostsSection({
  allPosts = [],
}: {
  allPosts: SanityDocument[];
}) {
  if (allPosts.length === 0) return <AllPostsSkeleton />;
  return (
    <section className="max-w-[1440px] mx-auto mt-2 grid pt-10 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
      {allPosts.slice(0, 8).map((allPost) => (
        <div key={allPost._id} className="" >
          <figure className="group relative rounded-md overflow-hidden hover:-translate-y-3 transition-all ease-in-out duration-700   ">
                  {/* Mobile Image */}
                  <Image
                src={builder
                  .image(allPost.mainImage)
                  .width(800)
                  .height(400)
                  .url() ||"/3d-view-personal-computer-with-vegetation.jpg"}
                alt={allPost.title}
                width={800}
                height={380}
                className="hover:cursor-pointer  transition-transform ease-in-out duration-700 flex sm:hidden"
              />
              {/* Desktop Image */}
            <Image
                   src={urlFor(allPost.mainImage)}
                   alt={allPost.title || 'News Expert Image'}
                   width={309}
                   height={370}
                   className=" hidden sm:flex hover:cursor-pointer  transition-transform ease-in-out duration-700 rounded-md   "
            />
             <figcaption className=" group-hover:bg-gray-300 transition-all ease-in-out duration-700 absolute bottom-0 w-full h-[5.4rem]  py-2 px-2 ">
            
              <div>
                <Link
                  href={allPost.slug.current || '/'}
                  className="text-sm sm:text-xl font-semibold tracking-normal text-white group-hover:text-black transition-all ease-in-out duration-700"
                >
                  {allPost.title || 'Untitle post'}
                </Link>
                <div className=" pr-2 font-semibold text-[0.75rem] sm:text-sm text-white group-hover:text-black transition-all ease-in-out duration-700">
                  <span className=" ">{allPost.authorName || 'Unknown author'}</span>
                 
                </div>
              </div>
        
          </figcaption>
          </figure>
        </div>
      ))}
    </section>
  );
}
