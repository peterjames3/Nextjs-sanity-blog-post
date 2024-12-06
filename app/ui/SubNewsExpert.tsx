
import Link from 'next/link';
import Image from 'next/image';
import type { SanityDocument } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import SubNewsExpertSkeleton from '@/app/ui/Skeleton/SubNewsExpertSkeleton';
import { format } from 'date-fns';

const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
const urlFor = (source: string) => {
  return builder.image(source).width(300).height(235).fit('crop').url();
};

export default function SubNewsExpert({
  newsExpertPosts = [],
}: {
  newsExpertPosts: SanityDocument[];
}) {

    if(newsExpertPosts.length == 0){
        return<SubNewsExpertSkeleton />
    }

  return (
    <article className="flex flex-col space-y-6">
      {newsExpertPosts.slice(2).map((newsExpertPost) => (
        <article key={newsExpertPost._id} className="flex gap-5 items-center">
          <figure className="rounded-xl overflow-hidden w-[40%]">
            <Image
              src={urlFor(newsExpertPost.mainImage) || "/3d-view-personal-computer-with-vegetation.jpg"}
              alt={newsExpertPost.title || 'News Expert Image'}
              width={300}
              height={235}
              className="hover:cursor-pointer transition-transform hover:rounded-xl ease-in-out duration-700 hover:scale-105 hover:mix-blend-exclusion "
            />
          </figure>
          <section className="gap-2 w-[60%]">
            <Link
              href={newsExpertPost.slug.current || '/'}
              className="font-semibold text-[1.15rem] lg:text-xl"
            >
              {newsExpertPost.title || 'Untitled Post'}
            </Link>
            <p className="text-sm sm:text-[0.95rem] font-light text-gray-500">
              {newsExpertPost._createdAt
                ? format(new Date(newsExpertPost._createdAt), 'MM/dd/yyyy')
                : 'Unknown Date'}
            </p>
          </section>
        </article>
      ))}
    </article>
  );
}
