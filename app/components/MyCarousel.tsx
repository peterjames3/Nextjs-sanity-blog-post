
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import type { SanityDocument } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { format } from 'date-fns';
import MainNewsExpertSkeleton from "@/app/ui/Skeleton/MainNewsExpertSkeleton";
const builder = imageUrlBuilder(client);

//To handle hydration error that is caused by date formatting  ensure to Pre-format the Posts
export default function MyCarousel({ latestPosts = [] }: { latestPosts: SanityDocument[] }) {
  
if(latestPosts.length === 0){
  return <MainNewsExpertSkeleton />
}

  // Pre-format the posts
  const formattedPosts = latestPosts.map((post) => ({
    ...post,
    formattedDate: format(new Date(post._createdAt), "MM/dd/yyyy"),
  }));
console.log(formattedPosts)

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[1000px] h-auto"
    >
      <CarouselContent className="h-full rounded-3xl">
        {latestPosts.map((post) => (
          <CarouselItem key={post._id} className="md:basis-1/2">
            <div className="">
              <Card className="min-h-[445px] relative">
                {/* Image component */}
                <div className="relative w-full h-full">
                  <Image
                    src={builder.image(post.mainImage?.asset?._ref || "").width(1200).height(1500).url() || '/3d-view-personal-computer-with-vegetation.jpg'}
                    alt={post.title|| 'Untitled'}
                    width={1200}
                    height={1500}
                    className="rounded-md"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-md"></div>
                </div>

                {/* Overlay text */}
             
                <footer className=" absolute bottom-5 left-3 flex flex-col space-y-2 text-white z-10 px-5">
                  <Link href={post.slug.current || "#"} className="text-xl sm:text-2xl font-semibold tracking-normal text-white">
                  {post.title || "Untitled Post"}</Link>
                  <nav className='flex justify-between items-center pr-2'>
                  <span className="text-sm ">{post.authorName || "Unknown Author"} </span> 
                   <span className="text-[0.75rem] ">{format(new Date(post._createdAt), "MM/dd/yyyy")} </span>

                  </nav>
                  
                </footer>
               
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
