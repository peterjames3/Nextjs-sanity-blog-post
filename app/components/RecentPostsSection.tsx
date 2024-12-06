import { sanityFetch } from "@/sanity/lib/fetch";
import { latestPostsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { format } from "date-fns";
import { notFound } from 'next/navigation';
const builder = imageUrlBuilder(client);
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
const urlFor = (source: any) => {
  return builder.image(source).width(309).height(300).fit("crop").url();
};
export default async function RecentPostsSection() {
  const latestPosts = await sanityFetch<SanityDocument[]>({
    query: latestPostsQuery,
  });

  if(!latestPosts){
    notFound()
  }
  return (
    <section className=" max-w-[1440px] mx-auto mt-2 grid pt-10 sm:grid-cols-2 md:grid-cols-4 gap-10 overflow-x-clip ">
      {latestPosts.map((latestPost) => (
        <div key={latestPost._id} className=" flex ">
          <figure className=" w-1/2 group rounded-md overflow-hidden  hover:-translate-y-3 transition-all ease-in-out duration-700   ">
            {/* Mobile Image */}
            <Image
              src={builder
                .image(latestPost.mainImage)
                .width(800)
                .height(400)
                .url()}
              alt={latestPost.title}
              width={800}
              height={380}
              className="hover:cursor-pointer hover:scale-90 transition-transform ease-in-out duration-700 flex sm:hidden"
            />
            {/* Desktop Image */}
            <Image
              src={urlFor(latestPost.mainImage)}
              alt={latestPost.title || "News Expert Image"}
              width={309}
              height={300}
              className=" hidden sm:flex hover:cursor-pointer transition-transform ease-in-out duration-700   "
            />
          </figure>
          <article className=" w-1/2 py-2 px-2  flex flex-col space-y-1 items-start justify-center">
            <nav className="bg-softRed px-2 rounded-sm text-sm  line-clamp-1">
              {latestPost.categories}
            </nav>
            <header>
              <Link
                href={latestPost.slug.current || "/"}
                className=" line-clamp-3 text-sm sm:text-[1.10rem] font-semibold tracking-normal transition-all ease-in-out duration-700"
              >
                {latestPost.title || "Untitle post"}
              </Link>
            </header>
            <div></div>
            <div className=" pr-2 font-semibold text-[0.75rem] sm:text-sm transition-all ease-in-out duration-700">
              <div className=" ">
                <span>
                  {" "}
                  {format(new Date(latestPost._createdAt), "MM/dd/yyyy")}{" "}
                </span>
              </div>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
}
